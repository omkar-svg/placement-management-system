// Drive Controller - To be implemented
const prisma = require('../prismaClient')

//create or update eligibility criteria for placement drive
const setEligibility = async (req, res) => {

    try {

        //check if the user has permission to set eligibility criteria
        if (req.user.role !== "ADMIN" && req.user.role !== "TPO") {
            return res.status(403).json({
                success: false,
                message: "access denied"
            })
        }

        //get the driveId from the params which will be in string format
        const { dId } = req.params

        //convert the driveId to int from string
        const driveId = Number(dId)

        //check if the driveId is parsed successfully or not
        if (isNaN(driveId) || driveId <= 0) {
            return res.status(400).json({
                success: false,
                message: "invalid drive ID"
            })
        }

        const { minCGPA, maxBacklogs, graduationYear, eligibleBranches } = req.body

        //check if eligibleBranches array is valid or not
        if (!Array.isArray(eligibleBranches) || eligibleBranches.length === 0) {
            return res.status(400).json({
                success: false,
                message: "eligible branches are required and should be array"
            })
        }

        //check if the placement drive with id = driveId exists in the db or not
        const placementDrive = await prisma.placementDrive.findUnique({
            where: {
                id: driveId
            }
        })
        if (!placementDrive) {
            return res.status(404).json({
                success: false,
                message: "drive doesnt exists"
            })
        }

        //start atomic transaction for updating eligibility criteria
        const eligibilityCriteria = await prisma.$transaction(async (tx) => {

            //update or insert the criteria
            const criteria = await tx.eligibilityCriteria.upsert({
                where: {
                    driveId: driveId
                },
                update: {
                    minCGPA: minCGPA,
                    maxBacklogs: maxBacklogs,
                    graduationYear: graduationYear
                },
                create: {
                    driveId: driveId,
                    minCGPA: minCGPA,
                    maxBacklogs: maxBacklogs,
                    graduationYear: graduationYear
                }
            })

            //delete previously stored branches for this eligibility criteria
            await tx.eligibleBranch.deleteMany({
                where: {
                    eligibilityId: criteria.id
                }
            })

            //prepare branch data for insertion in db
            const branchData = eligibleBranches.map((branch) => ({
                eligibilityId: criteria.id,
                branch: branch
            }))

            //insert new branch data in db
            await tx.eligibleBranch.createMany({
                data: branchData
            })

            return criteria
        })

        return res.status(200).json({
            success: true,
            message: "eligibility criteria set/updated successfully",
            data: eligibilityCriteria
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

//get eligibility criteria for a particular placement drive
const getEligibility = async (req, res) => {

    try {

        //get the driveId from the params which will be in string format
        const { dId } = req.params

        //convert the driveId to int from string
        const driveId = Number(dId)

        //check if the driveId is parsed successfully or not
        if (isNaN(driveId) || driveId <= 0) {
            return res.status(400).json({
                success: false,
                message: "invalid drive ID"
            })
        }

        //check if the placement drive with id = driveId exists in the db or not
        const placementDrive = await prisma.placementDrive.findUnique({
            where: {
                id: driveId
            }
        })
        if (!placementDrive) {
            return res.status(404).json({
                success: false,
                message: "drive doesnt exists"
            })
        }

        //get the eligibility criteria along with eligible branches
        const eligibilityCriteria = await prisma.eligibilityCriteria.findUnique({
            where: {
                driveId: driveId
            },
            include: {
                eligibleBranches: true
            }
        })

        if (!eligibilityCriteria) {
            return res.status(404).json({
                success: false,
                message: "eligibility criteria not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "eligibility criteria retrieved successfully",
            data: eligibilityCriteria
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

// get eligible and ineligible students for a placement drive
const getEligibleStudents = async (req, res) => {

    try {

        //check if the user has permission to get all eligible and ineligible students
        if (req.user.role !== "ADMIN" && req.user.role !== "TPO") {
            return res.status(403).json({
                success: false,
                message: "access denied"
            })
        }

        //get the driveId from the params which will be in string format
        const { dId } = req.params

        //convert the driveId to int from string
        const driveId = Number(dId)

        //check if the driveId is parsed successfully or not
        if (isNaN(driveId) || driveId <= 0) {
            return res.status(400).json({
                success: false,
                message: "invalid drive ID"
            })
        }

        //check if the placement drive with id = driveId exists in the db or not
        const placementDrive = await prisma.placementDrive.findUnique({
            where: {
                id: driveId
            }
        })
        if (!placementDrive) {
            return res.status(404).json({
                success: false,
                message: "drive doesnt exists"
            })
        }

        //get the eligibility criteria along with eligible branches
        const eligibilityCriteria = await prisma.eligibilityCriteria.findUnique({
            where: {
                driveId: driveId
            },
            include: {
                eligibleBranches: true
            }
        })
        if (!eligibilityCriteria) {
            return res.status(404).json({
                success: false,
                message: "eligibility criteria not found"
            })
        }

        //get all students from the database
        const students = await prisma.student.findMany({
            select: {
                id: true,
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
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true
                    }
                }
            }
        })

        const eligibleStudents = []
        const ineligibleStudents = []

        //check each student against the eligibility criteria
        students.forEach((student) => {

            const reasons = []

            //check minimum CGPA
            if (student.cgpa < eligibilityCriteria.minCGPA) {
                reasons.push("CGPA is lower than required CGPA")
            }

            //check maximum active backlogs
            if (student.activeBacklogs > eligibilityCriteria.maxBacklogs) {
                reasons.push("active backlogs are more than allowed limit")
            }

            //check eligible branch
            const isBranchEligible = eligibilityCriteria.eligibleBranches.some(
                (eligibleBranch) => eligibleBranch.branch === student.branch
            )
            if (!isBranchEligible) {
                reasons.push(" your branch is not eligible")
            }

            //calculate graduation year of student
            const studentGraduationYear = student.year + 4 //+4 for all four years of college

            //check graduation year
            if (studentGraduationYear !== eligibilityCriteria.graduationYear) {
                reasons.push("your graduation year does not match")
            }

            //add student to eligible or ineligible list
            if (reasons.length === 0) { //passed all criterias
                eligibleStudents.push(student)
            }
            else {
                ineligibleStudents.push({
                    student: student,
                    reasons: reasons
                })
            }

        })

        return res.status(200).json({
            success: true,
            message: "eligible students retrieved successfully",
            data: {
                eligible: eligibleStudents,
                ineligible: ineligibleStudents
            }
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

module.exports = {
    setEligibility,
    getEligibility,
    getEligibleStudents
}