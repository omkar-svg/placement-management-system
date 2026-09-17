// Drive Controller - To be implemented
const prisma = require("../prisma");

// Create Placement Drive
const createDrive = async (req, res) => {
    try {
        const {
            companyId,
            role,
            package: packageAmount,
            driveDate,
            venue,
            deadline,
            jobType,
            description,
            hiringProcess
        } = req.body;

        if (!companyId || !role || !packageAmount || !driveDate || !deadline || !jobType) {
            return res.status(400).json({
                success: false,
                message: "Required fields are missing"
            });
        }

        const drive = await prisma.placementDrive.create({
            data: {
                companyId,
                createdBy: req.user.id,
                role,
                package: packageAmount,
                driveDate: new Date(driveDate),
                venue,
                deadline: new Date(deadline),
                jobType,
                description,
                hiringProcess
            }
        });

        return res.status(201).json({
            success: true,
            message: "Placement drive created successfully",
            data: drive
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
// Get all Placement Drives
const getAllDrives = async (req, res) => {
    try {
        const drives = await prisma.placementDrive.findMany({
            include: {
                company: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        return res.status(200).json({
            success: true,
            message: "Placement drives fetched successfully",
            data: drives
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
// Get Placement Drive by ID
const getDriveById = async (req, res) => {
    try {
        const { id } = req.params;

        const drive = await prisma.placementDrive.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                company: true
            }
        });

        if (!drive) {
            return res.status(404).json({
                success: false,
                message: "Placement drive not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Placement drive fetched successfully",
            data: drive
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
// Update Placement Drive
const updateDrive = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            companyId,
            role,
            package: packageAmount,
            driveDate,
            venue,
            deadline,
            jobType,
            description,
            hiringProcess
        } = req.body;

        const existingDrive = await prisma.placementDrive.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!existingDrive) {
            return res.status(404).json({
                success: false,
                message: "Placement drive not found"
            });
        }

        const updateData = {};

        if (companyId !== undefined) updateData.companyId = companyId;
        if (role !== undefined) updateData.role = role;
        if (packageAmount !== undefined) updateData.package = packageAmount;
        if (driveDate !== undefined) updateData.driveDate = new Date(driveDate);
        if (venue !== undefined) updateData.venue = venue;
        if (deadline !== undefined) updateData.deadline = new Date(deadline);
        if (jobType !== undefined) updateData.jobType = jobType;
        if (description !== undefined) updateData.description = description;
        if (hiringProcess !== undefined) updateData.hiringProcess = hiringProcess;

        const drive = await prisma.placementDrive.update({
            where: {
                id: parseInt(id)
            },
            data: updateData
        });

        return res.status(200).json({
            success: true,
            message: "Placement drive updated successfully",
            data: drive
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
// Delete Placement Drive
const deleteDrive = async (req, res) => {
    try {
        const { id } = req.params;

        const existingDrive = await prisma.placementDrive.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!existingDrive) {
            return res.status(404).json({
                success: false,
                message: "Placement drive not found"
            });
        }

        await prisma.placementDrive.delete({
            where: {
                id: parseInt(id)
            }
        });

        return res.status(200).json({
            success: true,
            message: "Placement drive deleted successfully"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
module.exports = {
    createDrive,
    getAllDrives,
    getDriveById,
    updateDrive,
    deleteDrive
};