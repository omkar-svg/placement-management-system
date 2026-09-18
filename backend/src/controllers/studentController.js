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

        // Validate minimum CGPA.
        if (
            minCgpa !== undefined &&
            !Number.isFinite(Number(minCgpa))
        ) {
            return res.status(400).json({
                success: false,
                message: "minCgpa must be a valid number"
            });
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
            cgpa,
            activeBacklogs,
            phone,
            linkedin,
            github,
            portfolio
        } = req.body;

        if (
            userId === undefined ||
            !prn ||
            !branch ||
            year === undefined ||
            cgpa === undefined ||
            !phone
        ) {
            return res.status(400).json({
                success: false,
                message: "userId, prn, branch, year, cgpa and phone are required"
            });
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
                userId: Number(userId),
                prn,
                branch,
                year: Number(year),
                cgpa: Number(cgpa),
                activeBacklogs:
                    activeBacklogs === undefined
                        ? 0
                        : Number(activeBacklogs),
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
                cgpa: true,
                activeBacklogs: true,
                phone: true,
                linkedin: true,
                github: true,
                portfolio: true,
                profileCompleted: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error"
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

        return res.status(200).json({
            success: true,
            message: "Student fetched successfully",
            data: student
        });
    } catch (error) {
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

        const {
            prn,
            branch,
            year,
            cgpa,
            activeBacklogs,
            phone,
            linkedin,
            github,
            portfolio
        } = req.body;

        // Build update data using only fields provided by the client
        const updateData = {};

        if (prn !== undefined) updateData.prn = prn;
        if (branch !== undefined) updateData.branch = branch;
        if (year !== undefined) updateData.year = Number(year);
        if (cgpa !== undefined) updateData.cgpa = Number(cgpa);
        if (activeBacklogs !== undefined) {
            updateData.activeBacklogs = Number(activeBacklogs);
        }
        if (phone !== undefined) updateData.phone = phone;
        if (linkedin !== undefined) updateData.linkedin = linkedin;
        if (github !== undefined) updateData.github = github;
        if (portfolio !== undefined) updateData.portfolio = portfolio;

        // Check that at least one field is provided
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "At least one field is required to update"
            });
        }

        const updatedStudent = await prisma.student.update({
            where: {
                id: studentId
            },
            data: updateData,
            select: {
                id: true,
                userId: true,
                prn: true,
                branch: true,
                year: true,
                cgpa: true,
                activeBacklogs: true,
                phone: true,
                linkedin: true,
                github: true,
                portfolio: true,
                profileCompleted: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: updatedStudent
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error"
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
                    fs.unlinkSync(oldFilePath);
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