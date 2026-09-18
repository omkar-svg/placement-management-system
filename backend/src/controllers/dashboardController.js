// Dashboard Controller
const prisma = require("../prismaClient");

// Get student dashboard
const getStudentDashboard = async (req, res) => {
    try {
        const student = await prisma.student.findUnique({
            where: {
                userId: req.user.id
            }
        });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student profile not found"
            });
        }

        const upcomingDrives = await prisma.placementDrive.findMany({
            where: {
                status: "UPCOMING"
            },
            include: {
                company: true
            },
            orderBy: {
                driveDate: "asc"
            }
        });

        const placementStatuses = await prisma.placementStatus.findMany({
            where: {
                studentId: student.id
            },
            include: {
                drive: {
                    include: {
                        company: true
                    }
                }
            },
            orderBy: {
                updatedAt: "desc"
            }
        });

        const recentNotifications = await prisma.notification.findMany({
            where: {
                userId: req.user.id
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 5
        });

        return res.status(200).json({
            success: true,
            message: "Student dashboard fetched successfully",
            data: {
                profileCompleted: student.profileCompleted,
                upcomingDrives,
                placementStatuses,
                recentNotifications
            }
        });

    } catch (error) {
        console.error("Get student dashboard error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch student dashboard"
        });
    }
};

module.exports = {
    getStudentDashboard
};