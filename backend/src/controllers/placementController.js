const prisma = require("../prismaClient");

const getPlacements = async (req, res) => {
    try {
        const placements = await prisma.placementStatus.findMany({
            include: {
                student: {
                    select: {
                        id: true,
                        userId: true,
                        branch: true,
                        year: true
                    }
                },
                drive: true
            }
        });


        return res.status(200).json({
            success: true,
            data: placements
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

const getPlacementById = async (req, res) => {
    try {
        const placementId = Number(req.params.id);

        if (!Number.isInteger(placementId) || placementId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid placement ID"
            });
        }
        const placement = await prisma.placementStatus.findUnique({
            where: {
                id: placementId
            },
            include: {
                student: {
                    select: {
                        id: true,
                        userId: true,
                        branch: true,
                        year: true
                    }
                },
                drive: true
            }
        });

        if (!placement) {
            return res.status(404).json({
                success: false,
                message: "Placement status not found"
            });
        }

        // Students can only view their own placement status
        if (req.user.role === "STUDENT") {
            const student = await prisma.student.findUnique({
                where: {
                    userId: req.user.id
                }
            });

            if (!student || placement.studentId !== student.id) {
                return res.status(403).json({
                    success: false,
                    message: "Access denied"
                });
            }
        }

        return res.status(200).json({
            success: true,
            data: placement
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

const updatePlacementStatus = async (req, res) => {
    try {
        const placementId = Number(req.params.id);

        if (!Number.isInteger(placementId) || placementId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid placement ID"
            });
        }

        const { status, remarks } = req.body;

        const validStatuses = [
            "ELIGIBLE",
            "SHORTLISTED",
            "INTERVIEW_SCHEDULED",
            "SELECTED",
            "REJECTED",
            "OFFER_ACCEPTED"
        ];

        if (!status) {
            return res.status(400).json({
                success: false,
                message: "Status is required"
            });
        }

        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid placement status"
            })
        }

        const existingPlacement = await prisma.placementStatus.findUnique({
            where: {
                id: placementId
            }
        });

        if (!existingPlacement) {
            return res.status(404).json({
                success: false,
                message: "Placement status not found"
            });
        }

        const updatedPlacement = await prisma.$transaction(async (tx) => {

            const updatedPlacement = await tx.placementStatus.update({
                where: {
                    id: placementId
                },
                data: {
                    status,
                    remarks
                }
            });

            await tx.placementStatusHistory.create({
                data: {
                    placementId,
                    status,
                    remarks,
                    changedByUserId: req.user.id
                }
            });

            return updatedPlacement;
        });

        return res.status(200).json({
            success: true,
            message: "Placement status updated successfully",
            data: updatedPlacement
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

const getPlacementHistory = async (req, res) => {
    try {
        const placementId = Number(req.params.id);

        if (!Number.isInteger(placementId) || placementId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid placement ID"
            });
        }

        const placement = await prisma.placementStatus.findUnique({
            where: {
                id: placementId
            }
        });

        if (!placement) {
            return res.status(404).json({
                success: false,
                message: "Placement status not found"
            });
        }

        if (req.user.role === "STUDENT") {
            const student = await prisma.student.findUnique({
                where: {
                    userId: req.user.id
                }
            });
            if (!student || placement.studentId !== student.id) {
                return res.status(403).json({
                    success: false,
                    message: "Access denied"
                });
            }
        }

        const history = await prisma.placementStatusHistory.findMany({
            where: {
                placementId
            },
            orderBy: {
                changedAt: "desc"
            },
            include: {
                changedBy: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            data: history
        });


    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}





module.exports = {
    getPlacements,
    getPlacementById,
    updatePlacementStatus,
    getPlacementHistory
};
