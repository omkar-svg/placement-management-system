// Student Controller - To be implemented
const prisma = require("../prismaClient");
const fs = require("fs");
const path = require("path");

/**
 * Fetches students with optional search, filters, and pagination.
 *
 * Search can be performed using the student's name or PRN.
 * Students can also be filtered by branch, minimum CGPA, and skill.
 */
const getStudents = async (req, res) => {
    try {
        const {
            search,
            branch,
            minCgpa,
            skill,
            page = 1,
            limit = 20
        } = req.query;

        const pageNumber = Number(page);
        const limitNumber = Number(limit);

        // Validate pagination parameters.
        if (
            !Number.isInteger(pageNumber) ||
            pageNumber < 1 ||
            !Number.isInteger(limitNumber) ||
            limitNumber < 1
        ) {
            return res.status(400).json({
                success: false,
                message: "Page and limit must be positive integers"
            });
        }

        // Enforce maximum pagination limit
        if (limitNumber > 100) {
            return res.status(400).json({
                success: false,
                message: "Limit cannot exceed 100"
            });
        }

        // Validate minimum CGPA (0–10 scale).
        if (minCgpa !== undefined) {
            const minCgpaNumber = Number(minCgpa);

            if (
                typeof minCgpa !== "string" ||
                minCgpa.trim() === "" ||
                !Number.isFinite(minCgpaNumber) ||
                minCgpaNumber < 0 ||
                minCgpaNumber > 10
            ) {
                return res.status(400).json({
                    success: false,
                    message: "minCgpa must be a number between 0 and 10"
                });
            }
        }

        const where = {};

        // Search by student's name or PRN.
        if (search) {
            where.OR = [
                {
                    user: {
                        name: {
                            contains: search
                        }
                    }
                },
                {
                    prn: {
                        contains: search
                    }
                }
            ];
        }

        // Filter by branch.
        if (branch) {
            where.branch = branch;
        }

        // Filter by minimum CGPA.
        if (minCgpa !== undefined) {
            where.cgpa = {
                gte: Number(minCgpa)
            };
        }

        // Filter students by skill.
        if (skill) {
            where.skills = {
                some: {
                    skillName: {
                        contains: skill
                    }
                }
            };
        }

        // Calculate how many records to skip.
        const skip = (pageNumber - 1) * limitNumber;

        // Fetch students and total count together.
        const [students, totalStudents] = await Promise.all([
            prisma.student.findMany({
                where,
                skip,
                take: limitNumber,

                orderBy: {
                    id: "desc"
                },

                select: {
                    id: true,
                    userId: true,
                    prn: true,
                    branch: true,
                    year: true,
                    graduationYear: true,
                    tenthPercentage: true,
                    twelfthPercentage: true,
                    cgpa: true,
                    activeBacklogs: true,
                    phone: true,
                    linkedin: true,
                    github: true,
                    portfolio: true,
                    profileCompleted: true,
                    createdAt: true,
                    updatedAt: true,

                    // Student name and email are stored in User.
                    user: {
                        select: {
                            name: true,
                            email: true
                        }
                    },

                    // Include student's skills.
                    skills: {
                        select: {
                            id: true,
                            skillName: true
                        }
                    }
                }
            }),

            prisma.student.count({
                where
            })
        ]);

        const totalPages = Math.ceil(
            totalStudents / limitNumber
        );

        return res.status(200).json({
            success: true,
            message: "Students fetched successfully",
            data: {
                students,
                pagination: {
                    currentPage: pageNumber,
                    limit: limitNumber,
                    totalStudents,
                    totalPages
                }
            }
        });
    } catch (error) {
        console.error("Error fetching students:", error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};


// Creates a new student profile for an existing user.
const createStudent = async (req, res) => {
    try {
        const {
            userId,
            prn,
            branch,
            year,
            graduationYear,
            tenthPercentage,
            twelfthPercentage,
            cgpa,
            activeBacklogs,
            phone,
            linkedin,
            github,
            portfolio
        } = req.body;

        if (
            userId === undefined ||
            typeof prn !== "string" ||
            !prn.trim() ||
            typeof branch !== "string" ||
            !branch.trim() ||
            year === undefined ||
            cgpa === undefined ||
            typeof phone !== "string" ||
            !phone.trim()
        ) {
            return res.status(400).json({
                success: false,
                message: "userId, prn, branch, year, cgpa and phone are required"
            });
        }

        const parsedUserId = Number(userId);
        const parsedYear = Number(year);
        const parsedCgpa = Number(cgpa);
        const parsedBacklogs =
            activeBacklogs === undefined || activeBacklogs === ""
                ? 0
                : Number(activeBacklogs);

        if (!Number.isInteger(parsedUserId) || parsedUserId <= 0) {
            return res.status(400).json({
                success: false,
                message: "userId must be a positive integer"
            });
        }

        if (!Number.isInteger(parsedYear) || parsedYear <= 0) {
            return res.status(400).json({
                success: false,
                message: "Year must be a positive integer"
            });
        }

        if (!Number.isFinite(parsedCgpa) || parsedCgpa < 0 || parsedCgpa > 10) {
            return res.status(400).json({
                success: false,
                message: "CGPA must be between 0 and 10"
            });
        }

        if (!Number.isInteger(parsedBacklogs) || parsedBacklogs < 0) {
            return res.status(400).json({
                success: false,
                message: "Active backlogs must be a non-negative integer"
            });
        }

        for (const [field, value] of [
            ["graduationYear", graduationYear],
            ["tenthPercentage", tenthPercentage],
            ["twelfthPercentage", twelfthPercentage]
        ]) {
            if (value !== undefined && value !== null && value !== "") {
                const number = Number(value);

                if (!Number.isFinite(number)) {
                    return res.status(400).json({
                        success: false,
                        message: `${field} must be a valid number`
                    });
                }

                if (
                    field === "graduationYear" &&
                    (!Number.isInteger(number) || number <= 0)
                ) {
                    return res.status(400).json({
                        success: false,
                        message: "Graduation year must be a positive integer"
                    });
                }

                if (
                    field !== "graduationYear" &&
                    (number < 0 || number > 100)
                ) {
                    return res.status(400).json({
                        success: false,
                        message: `${field} must be between 0 and 100`
                    });
                }
            }
        }

        const user = await prisma.user.findUnique({
            where: {
                id: Number(userId)
            }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (user.role !== "STUDENT") {
            return res.status(400).json({
                success: false,
                message: "User must have STUDENT role"
            });
        }

        const existingStudent = await prisma.student.findFirst({
            where: {
                OR: [
                    { userId: Number(userId) },
                    { prn }
                ]
            }
        });

        if (existingStudent) {
            return res.status(409).json({
                success: false,
                message: "Student profile already exists for this user or PRN"
            });
        }

        const student = await prisma.student.create({
        data: {
        userId: parsedUserId,
        prn,
        branch,
        year: parsedYear,
        graduationYear:
            graduationYear === undefined || graduationYear === null || graduationYear === ""
                ? null
                : Number(graduationYear),
        tenthPercentage:
            tenthPercentage === undefined || tenthPercentage === null || tenthPercentage === ""
                ? null
                : Number(tenthPercentage),
        twelfthPercentage:
            twelfthPercentage === undefined || twelfthPercentage === null || twelfthPercentage === ""
                ? null
                : Number(twelfthPercentage),
        cgpa: parsedCgpa,
        activeBacklogs: parsedBacklogs,
        phone,
        linkedin,
        github,
        portfolio
            },
            select: {
                id: true,
                userId: true,
                prn: true,
                branch: true,
                year: true,
                graduationYear: true,
                tenthPercentage: true,
                twelfthPercentage: true,
                cgpa: true,
                activeBacklogs: true,
                phone: true,
                linkedin: true,
                github: true,
                portfolio: true,
                profileCompleted: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        return res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student
        });
    } catch (error) {
        console.error("Error creating student:", error);

        if (error.code === "P2002") {
            return res.status(409).json({
                success: false,
                message: "A student profile with this user ID or PRN already exists"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error while creating student"
        });
    }
};


//Fetches a single student profile by student ID.
const getStudentById = async (req, res) => {
    try {
        const studentId = Number(req.params.id);

        // Validate the student ID
        if (!Number.isInteger(studentId) || studentId < 1) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        // Find the student and include related user and skills
        const student = await prisma.student.findUnique({
            where: {
                id: studentId
            },
            select: {
                id: true,
                userId: true,
                prn: true,
                branch: true,
                year: true,
                graduationYear: true,
                tenthPercentage: true,
                twelfthPercentage: true,
                cgpa: true,
                activeBacklogs: true,
                phone: true,
                linkedin: true,
                github: true,
                portfolio: true,
                profileCompleted: true,
                createdAt: true,
                updatedAt: true,
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                skills: {
                    select: {
                        id: true,
                        skillName: true
                    }
                }
            }
        });

        // Return error if student does not exist
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        // Students can access only their own profile
        if (
            req.user.role === "STUDENT" &&
            student.userId !== req.user.id
        ) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to access this student profile"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Student fetched successfully",
            data: student
        });

    } catch (error) {
        console.error("Error fetching student by ID:", error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};


//Updates an existing student profile by student ID.
const updateStudent = async (req, res) => {
    try {
        const studentId = Number(req.params.id);

        if (!Number.isInteger(studentId) || studentId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        const existingStudent = await prisma.student.findUnique({
            where: { id: studentId }
        });

        if (!existingStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        // Students can update only their own profile
        if (
            req.user.role === "STUDENT" &&
            existingStudent.userId !== req.user.id
        ) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this student profile"
            });
        }

        const {
            prn,
            branch,
            year,
            graduationYear,
            tenthPercentage,
            twelfthPercentage,
            cgpa,
            activeBacklogs,
            phone,
            linkedin,
            github,
            portfolio
        } = req.body;

        const updateData = {};

        if (prn !== undefined) {
        if (typeof prn !== "string" || !prn.trim()) {
            return res.status(400).json({
                success: false,
                message: "PRN must be a non-empty string"
            });
        }
        updateData.prn = prn.trim();
        }

        if (branch !== undefined) {
            if (typeof branch !== "string" || !branch.trim()) {
                return res.status(400).json({
                    success: false,
                    message: "Branch must be a non-empty string"
                });
            }
        updateData.branch = branch.trim();
        }

        if (phone !== undefined) {
            if (typeof phone !== "string" || !phone.trim()) {
                return res.status(400).json({
                success: false,
                message: "Phone must be a non-empty string"
                });
            }
        updateData.phone = phone.trim();
        }

        for (const [field, value] of [
        ["linkedin", linkedin],
        ["github", github],
        ["portfolio", portfolio]
        ]) {
            if (value !== undefined) {
            if (value !== null && typeof value !== "string") {
                return res.status(400).json({
                    success: false,
                    message: `${field} must be a string or null`
                });
            }

            updateData[field] =
                typeof value === "string" && value.trim() === ""
                    ? null
                    : typeof value === "string"
                        ? value.trim()
                        : value;
            }
        }

        if (year !== undefined) {
            const value = Number(year);
            if (!Number.isInteger(value) || value <= 0) {
                return res.status(400).json({
                    success: false,
                    message: "Year must be a positive integer"
                });
            }
            updateData.year = value;
        }

        if (graduationYear !== undefined) {
            if (graduationYear === null || graduationYear === "") {
                updateData.graduationYear = null;
            } else {
                const value = Number(graduationYear);
                if (!Number.isInteger(value) || value <= 0) {
                    return res.status(400).json({
                        success: false,
                        message: "Graduation year must be a positive integer or null"
                    });
                }
                updateData.graduationYear = value;
            }
        }

        for (const [field, value] of [
            ["tenthPercentage", tenthPercentage],
            ["twelfthPercentage", twelfthPercentage]
        ]) {
            if (value !== undefined) {
                if (value === null || value === "") {
                    updateData[field] = null;
                } else {
                    const number = Number(value);
                    if (!Number.isFinite(number) || number < 0 || number > 100) {
                        return res.status(400).json({
                            success: false,
                            message: `${field} must be between 0 and 100, or null`
                        });
                    }
                    updateData[field] = number;
                }
            }
        }

        if (cgpa !== undefined) {
            const value = Number(cgpa);
            if (!Number.isFinite(value) || value < 0 || value > 10) {
                return res.status(400).json({
                    success: false,
                    message: "CGPA must be between 0 and 10"
                });
            }
            updateData.cgpa = value;
        }

        if (activeBacklogs !== undefined) {
            const value = Number(activeBacklogs);
            if (!Number.isInteger(value) || value < 0) {
                return res.status(400).json({
                    success: false,
                    message: "Active backlogs must be a non-negative integer"
                });
            }
            updateData.activeBacklogs = value;
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "No valid fields provided for update"
            });
        }

        const updatedStudent = await prisma.student.update({
            where: { id: studentId },
            data: updateData,
            select: {
                id: true,
                userId: true,
                prn: true,
                branch: true,
                year: true,
                graduationYear: true,
                tenthPercentage: true,
                twelfthPercentage: true,
                cgpa: true,
                activeBacklogs: true,
                phone: true,
                linkedin: true,
                github: true,
                portfolio: true,
                updatedAt: true
            }
        });

        return res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: updatedStudent
        });
    } catch (error) {
        console.error("Error updating student:", error);

        if (error.code === "P2002") {
            return res.status(409).json({
                success: false,
                message: "PRN already exists"
            });
        }

        if (error.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error while updating student"
        });
    }
};

//Deletes a student profile by student ID.
const deleteStudent = async (req, res) => {
    try {
        const studentId = Number(req.params.id);

        // Validate the student ID
        if (!Number.isInteger(studentId) || studentId < 1) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        // Check whether the student exists
        const existingStudent = await prisma.student.findUnique({
            where: {
                id: studentId
            }
        });

        if (!existingStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        // Students can delete only their own profile
        if (
            req.user.role === "STUDENT" &&
            existingStudent.userId !== req.user.id
        ) {
            return res.status(403).json({
            success: false,
            message: "You are not authorized to delete this student profile"
            });
        }

        // Delete the student profile
        await prisma.student.delete({
            where: {
                id: studentId
            }
        });

        return res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting student:", error);
        
        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

//Adds a skill to a student's profile.
const addStudentSkill = async (req, res) => {
    try {
        const studentId = Number(req.params.id);
        const { skillName } = req.body;

        // Validate the student ID
        if (!Number.isInteger(studentId) || studentId < 1) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        // Validate the skill name
        if (!skillName || typeof skillName !== "string" || !skillName.trim()) {
            return res.status(400).json({
                success: false,
                message: "skillName is required"
            });
        }

        // Check whether the student exists
        const student = await prisma.student.findUnique({
            where: {
                id: studentId
            }
        });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }


        // Students can add skills only to their own profile
        if (
            req.user.role === "STUDENT" &&
            student.userId !== req.user.id
        ) {
            return res.status(403).json({
            success: false,
            message: "You are not authorized to add skills to this student profile"
            });
        }

        const trimmedSkillName = skillName.trim();

        // Check whether the student already has this skill
        const existingSkill = await prisma.studentSkill.findFirst({
            where: {
                studentId,
                skillName: trimmedSkillName
            }
        });

        if (existingSkill) {
            return res.status(409).json({
                success: false,
                message: "Skill already exists for this student"
            });
        }

        // Add the new skill
        const skill = await prisma.studentSkill.create({
            data: {
                studentId,
                skillName: trimmedSkillName
            }
        });

        return res.status(201).json({
            success: true,
            message: "Student skill added successfully",
            data: skill
        });
        } catch (error) {
        console.error("Error adding student skill:", error);

        if (error.code === "P2002") {
        return res.status(409).json({
            success: false,
            message: "Skill already exists for this student"
            });
        }

        return res.status(500).json({
        success: false,
        message: "Server error"
        });
    }
};

//Removes a skill from a student's profile
const deleteStudentSkill = async (req, res) => {
    try {
        const studentId = Number(req.params.id);
        const skillId = Number(req.params.skillId);

        // Validate student ID
        if (!Number.isInteger(studentId) || studentId < 1) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        // Validate skill ID
        if (!Number.isInteger(skillId) || skillId < 1) {
            return res.status(400).json({
                success: false,
                message: "Invalid skill ID"
            });
        }

        // Check whether the student exists
        const student = await prisma.student.findUnique({
            where: {
                id: studentId
            }
        });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        // Students can delete skills only from their own profile
        if (
            req.user.role === "STUDENT" &&
            student.userId !== req.user.id
        ) {
            return res.status(403).json({
            success: false,
            message: "You are not authorized to delete skills from this student profile"
            });
        }

        // Check whether the skill belongs to this student
        const skill = await prisma.studentSkill.findFirst({
            where: {
                id: skillId,
                studentId
            }
        });

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found for this student"
            });
        }

        // Delete the skill
        await prisma.studentSkill.delete({
            where: {
                id: skillId
            }
        });

        return res.status(200).json({
            success: true,
            message: "Student skill deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting student skill:", error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

/**
 * Uploads or replaces a student's resume.
 * The resume must be a PDF file uploaded through Multer.
 * If the student already has a resume, the existing resume record is updated with the new file.
 */
const uploadStudentResume = async (req, res) => {
    try {
        const studentId = Number(req.params.id);

        // Validate student ID
        if (!Number.isInteger(studentId) || studentId < 1) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        // Check whether the student exists
        const student = await prisma.student.findUnique({
            where: {
                id: studentId
            }
        });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        // Students can upload resumes only to their own profile
        if (
            req.user.role === "STUDENT" &&
            student.userId !== req.user.id
        ) {
            return res.status(403).json({
            success: false,
            message: "You are not authorized to upload a resume for this student"
            });
        }

        // Check whether a resume file was uploaded
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Resume PDF file is required"
            });
        }

        const resumeUrl = `/uploads/resumes/${req.file.filename}`;

        // Check whether the student already has a resume
        const existingResume = await prisma.resume.findUnique({
            where: {
                studentId
            }
        });

        let resume;

        if (existingResume) {
            // Update the existing resume record
            resume = await prisma.resume.update({
                where: {
                    studentId
                },
                data: {
                    resumeUrl,
                    uploadedAt: new Date()
                }
            });

            // Delete the old resume file
            if (existingResume.resumeUrl) {
                const oldFilePath = path.join(
                    __dirname,
                    "../../",
                    existingResume.resumeUrl.replace(/^\/uploads\//, "uploads/")
                );

                if (fs.existsSync(oldFilePath)) {
                    try {
                    fs.unlinkSync(oldFilePath);
                    } catch (fileError) {
                        console.error("Error deleting old resume file:", fileError);
                    }
                }
            }
        } else {
            // Create a new resume record
            resume = await prisma.resume.create({
                data: {
                    studentId,
                    resumeUrl
                }
            });
        }

        return res.status(200).json({
            success: true,
            message: existingResume
                ? "Student resume replaced successfully"
                : "Student resume uploaded successfully",
            data: resume
        });
    } catch (error) {
        console.error("Error uploading student resume:", error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};


//Fetches the resume information of a student.
const getStudentResume = async (req, res) => {
    try {
        const studentId = Number(req.params.id);

        // Validate student ID
        if (!Number.isInteger(studentId) || studentId < 1) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        // Check whether the student exists
        const student = await prisma.student.findUnique({
            where: {
                id: studentId
            }
        });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        // Students can access only their own resume
        if (
            req.user.role === "STUDENT" &&
            student.userId !== req.user.id
        ) {
            return res.status(403).json({
            success: false,
            message: "You are not authorized to access this student's resume"
            });
        }

        // Find the student's resume
        const resume = await prisma.resume.findUnique({
            where: {
                studentId
            }
        });

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Student resume fetched successfully",
            data: resume
        });
    } catch (error) {
        console.error("Error fetching student resume:", error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports = {
    getStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent,
    addStudentSkill,
    deleteStudentSkill,
    uploadStudentResume,
    getStudentResume
};