const prisma = require("../prismaClient");

const getPlacements = async (req, res) => {
    try {
        const placements = await prisma.placementStatus.findMany({
            include: {
                student: true,
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
        const { id } = req.params;

        const placement = await prisma.placementStatus.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                student: true,
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
        const { id } = req.params;
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
                id: Number(id)
            }
        });

        if (!existingPlacement) {
            return res.status(404).json({
                success: false,
                message: "Placement status not found"
            });
        }

        const updatedPlacement = await prisma.placementStatus.update({
            where: {
                id: Number(id)
            },
            data: {
                status,
                remarks
            }
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




module.exports = {
    getPlacements,
    getPlacementById,
    updatePlacementStatus
};
