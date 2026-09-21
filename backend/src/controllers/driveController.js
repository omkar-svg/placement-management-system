// Drive Controller

const prisma = require("../prismaClient");

// Validate Placement Drive fields
const validateDriveFields = async ({
    companyId,
    packageAmount,
    driveDate,
    deadline,
    jobType,
    role,
    venue,
    checkDeadlineInFuture = true
}) => {

    // Package must not be empty
    if (packageAmount !== undefined && !String(packageAmount).trim()) {
        return "Package cannot be empty";
    }

    // Role must not be empty
    if (role !== undefined && !String(role).trim()) {
        return "Role cannot be empty";
    }

    // Venue must not be empty
    if (venue !== undefined && !String(venue).trim()) {
        return "Venue cannot be empty";
    }

    // Job type must not be empty
    if (jobType !== undefined && !String(jobType).trim()) {
        return "Job type cannot be empty";
    }

    // Deadline must be before drive date
    if (driveDate && deadline) {
        const driveTime = new Date(driveDate).getTime();
        const deadlineTime = new Date(deadline).getTime();

        if (deadlineTime >= driveTime) {
            return "Deadline must be before the drive date";
        }
    }

    // Deadline should not be in the past
    if (deadline && checkDeadlineInFuture && new Date(deadline).getTime() < Date.now()) {
        return "Deadline cannot be in the past";
    }

    // Company must exist
    if (companyId !== undefined) {
        const numericCompanyId = Number(companyId);

        if (isNaN(numericCompanyId)) {
            return "companyId must be a valid number";
        }

        const company = await prisma.company.findUnique({
            where: {
                id: numericCompanyId
            }
        });

        if (!company) {
            return "Invalid companyId: company does not exist";
        }
    }

    return null;
};


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

        // Required fields
        if (
            companyId === undefined ||
            companyId === null ||
            !role ||
            !packageAmount ||
            !driveDate ||
            !venue ||
            !deadline ||
            !jobType ||
            !description ||
            !hiringProcess
        ) {
            return res.status(400).json({
                success: false,
                message: "Required fields are missing"
            });
        }

        // Validate dates
        if (
            isNaN(new Date(driveDate).getTime()) ||
            isNaN(new Date(deadline).getTime())
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid drive date or deadline"
            });
        }

        // Validate additional fields (deadline must be in the future on create)
        const validationError = await validateDriveFields({
            companyId,
            packageAmount,
            driveDate,
            deadline,
            jobType,
            role,
            venue,
            checkDeadlineInFuture: true
        });

        if (validationError) {
            return res.status(400).json({
                success: false,
                message: validationError
            });
        }

        const drive = await prisma.placementDrive.create({
            data: {
                companyId: Number(companyId),
                createdBy: req.user.id,
                role: String(role).trim(),
                package: String(packageAmount).trim(),
                driveDate: new Date(driveDate),
                venue: String(venue).trim(),
                deadline: new Date(deadline),
                jobType: String(jobType).trim(),
                description: String(description).trim(),
                hiringProcess: String(hiringProcess).trim()
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
        const driveId = parseInt(id);

        if (isNaN(driveId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid drive ID"
            });
        }

        const drive = await prisma.placementDrive.findUnique({
            where: {
                id: driveId
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
        const driveId = parseInt(id);

        if (isNaN(driveId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid drive ID"
            });
        }

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
                id: driveId
            }
        });

        if (!existingDrive) {
            return res.status(404).json({
                success: false,
                message: "Placement drive not found"
            });
        }

        const updateData = {};

        if (companyId !== undefined) {
            updateData.companyId = Number(companyId);
        }

        if (role !== undefined) {
            updateData.role = String(role).trim();
        }

        if (packageAmount !== undefined) {
            updateData.package = String(packageAmount).trim();
        }

        if (driveDate !== undefined) {
            if (isNaN(new Date(driveDate).getTime())) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid drive date"
                });
            }

            updateData.driveDate = new Date(driveDate);
        }

        if (venue !== undefined) {
            updateData.venue = String(venue).trim();
        }

        if (deadline !== undefined) {
            if (isNaN(new Date(deadline).getTime())) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid deadline"
                });
            }

            updateData.deadline = new Date(deadline);
        }

        if (jobType !== undefined) {
            updateData.jobType = String(jobType).trim();
        }

        if (description !== undefined) {
            updateData.description = String(description).trim();
        }

        if (hiringProcess !== undefined) {
            updateData.hiringProcess = String(hiringProcess).trim();
        }

        // At least one field required
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "At least one field is required for update"
            });
        }

        // Use updated values or existing values for cross-field validation
        const effectiveDriveDate =
            updateData.driveDate ?? existingDrive.driveDate;

        const effectiveDeadline =
            updateData.deadline ?? existingDrive.deadline;

        const effectiveCompanyId =
            updateData.companyId ?? existingDrive.companyId;

        const effectiveRole =
            updateData.role ?? existingDrive.role;

        const effectivePackage =
            updateData.package ?? existingDrive.package;

        const effectiveVenue =
            updateData.venue ?? existingDrive.venue;

        const effectiveJobType =
            updateData.jobType ?? existingDrive.jobType;

        const validationError = await validateDriveFields({
            companyId: effectiveCompanyId,
            packageAmount: effectivePackage,
            driveDate: effectiveDriveDate,
            deadline: effectiveDeadline,
            jobType: effectiveJobType,
            role: effectiveRole,
            venue: effectiveVenue,
            // Only enforce "deadline can't be in the past" when the caller is
            // actually changing the deadline — not when we're just carrying
            // the existing (possibly already-past) deadline forward for the
            // ordering check above.
            checkDeadlineInFuture: updateData.deadline !== undefined
        });

        if (validationError) {
            return res.status(400).json({
                success: false,
                message: validationError
            });
        }

        const drive = await prisma.placementDrive.update({
            where: {
                id: driveId
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
        const driveId = parseInt(id);

        if (isNaN(driveId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid drive ID"
            });
        }

        const existingDrive = await prisma.placementDrive.findUnique({
            where: {
                id: driveId
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
                id: driveId
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