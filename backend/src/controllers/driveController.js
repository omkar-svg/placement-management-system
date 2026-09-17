// Drive Controller - To be implemented
const prisma = require('../prisma')

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

        //update or insert the criteria
        const eligibilityCriteria = await prisma.eligibilityCriteria.upsert({
            where: {
                driveId: driveId
            },
            update: { //update the criteria
                minCGPA: minCGPA,
                maxBacklogs: maxBacklogs,
                graduationYear: graduationYear
            },
            create: { //if criteria doesnt exists then create 
                driveId: driveId,
                minCGPA: minCGPA,
                maxBacklogs: maxBacklogs,
                graduationYear: graduationYear
            }
        })

        //prepare branch data for insertion in db
        const branchData = eligibleBranches.map((branch) => ({
            eligibilityId: eligibilityCriteria.id,
            branch: branch
        }))

        //insert branch data in db
        await prisma.eligibleBranch.createMany({
            data: branchData
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
        const {dId} = req.params

        //convert the driveId to int from string
        const driveId = Number(dId)

        //check if the driveId is parsed successfully or not
        if(isNaN(driveId) || driveId <= 0){
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
        if(!placementDrive){
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

        if(!eligibilityCriteria){
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
    catch(error){
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

module.exports = {
    setEligibility,
    getEligibility
}