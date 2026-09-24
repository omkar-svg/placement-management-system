// Dashboard Controller
// Aggregates data across multiple models (User, Student, Company, PlacementDrive, PlacementStatus, Notification)
// Follows existing project architecture, error handling, and Prisma client singleton.

const prisma = require("../prismaClient");

/**
 * GET /api/dashboard/student
 * Returns role-specific dashboard data for the authenticated student:
 * - profileCompleted
 * - upcomingDrives
 * - placementStatuses
 * - recentNotifications
 */
const getStudentDashboard = async (req, res) => {
    try {
        const student = await prisma.student.findUnique({
            where: {
                userId: req.user.id
            },
            include: {
                resume: {
                    select: {
                        id: true,
                        resumeUrl: true,
                        uploadedAt: true
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

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student profile not found"
            });
        }

        // Parallel queries to aggregate student dashboard data
        const [upcomingDrives, placementStatuses, recentNotifications] = await Promise.all([
            // 1. Upcoming placement drives
            prisma.placementDrive.findMany({
                where: {
                    status: "UPCOMING"
                },
                include: {
                    company: {
                        select: {
                            id: true,
                            companyName: true,
                            location: true,
                            website: true
                        }
                    },
                    eligibility: {
                        include: {
                            eligibleBranches: {
                                select: {
                                    branch: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    driveDate: "asc"
                }
            }),

            // 2. Student's application and placement statuses
            prisma.placementStatus.findMany({
                where: {
                    studentId: student.id
                },
                include: {
                    drive: {
                        select: {
                            id: true,
                            role: true,
                            package: true,
                            driveDate: true,
                            venue: true,
                            deadline: true,
                            jobType: true,
                            status: true,
                            company: {
                                select: {
                                    id: true,
                                    companyName: true,
                                    location: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    updatedAt: "desc"
                }
            }),

            // 3. Recent notifications for this user
            prisma.notification.findMany({
                where: {
                    userId: req.user.id
                },
                orderBy: {
                    createdAt: "desc"
                },
                take: 5
            })
        ]);

        return res.status(200).json({
            success: true,
            message: "Student dashboard fetched successfully",
            data: {
                student: {
                    id: student.id,
                    prn: student.prn,
                    branch: student.branch,
                    year: student.year,
                    cgpa: student.cgpa,
                    activeBacklogs: student.activeBacklogs,
                    skills: student.skills,
                    resume: student.resume
                },
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

/**
 * GET /api/dashboard/tpo
 * Returns role-specific placement statistics, active drives, and notifications for TPO officers:
 * - total students, companies, drives
 * - drive statistics by status (UPCOMING, ONGOING, COMPLETED)
 * - placement statistics (placed count, status breakdown)
 * - upcoming & ongoing drives
 * - recent notifications
 */
const getTpoDashboard = async (req, res) => {
    try {
        // Parallel aggregation queries
        const [
            totalStudents,
            totalCompanies,
            totalDrives,
            driveStatusGroups,
            totalPlaced,
            statusBreakdownRaw,
            upcomingOngoingDrives,
            recentNotifications
        ] = await Promise.all([
            // Total students count
            prisma.student.count(),

            // Total companies count
            prisma.company.count(),

            // Total placement drives count
            prisma.placementDrive.count(),

            // Drives grouped by status
            prisma.placementDrive.groupBy({
                by: ["status"],
                _count: {
                    status: true
                }
            }),

            // Total placed / offered students
            prisma.placementStatus.count({
                where: {
                    status: {
                        in: ["SELECTED", "OFFER_ACCEPTED"]
                    }
                }
            }),

            // Placement status breakdown
            prisma.placementStatus.groupBy({
                by: ["status"],
                _count: {
                    status: true
                }
            }),

            // Active drives (upcoming or ongoing)
            prisma.placementDrive.findMany({
                where: {
                    status: {
                        in: ["UPCOMING", "ONGOING"]
                    }
                },
                include: {
                    company: {
                        select: {
                            id: true,
                            companyName: true,
                            location: true
                        }
                    }
                },
                orderBy: {
                    driveDate: "asc"
                },
                take: 5
            }),

            // Recent notifications for the TPO user
            prisma.notification.findMany({
                where: {
                    userId: req.user.id
                },
                orderBy: {
                    createdAt: "desc"
                },
                take: 5
            })
        ]);

        // Format drive counts by status
        const driveStats = {
            total: totalDrives,
            upcoming: 0,
            ongoing: 0,
            completed: 0
        };
        driveStatusGroups.forEach((item) => {
            if (item.status === "UPCOMING") driveStats.upcoming = item._count.status;
            if (item.status === "ONGOING") driveStats.ongoing = item._count.status;
            if (item.status === "COMPLETED") driveStats.completed = item._count.status;
        });

        // Format placement status breakdown
        const statusBreakdown = statusBreakdownRaw.reduce((acc, curr) => {
            acc[curr.status] = curr._count.status;
            return acc;
        }, {});

        return res.status(200).json({
            success: true,
            message: "TPO dashboard fetched successfully",
            data: {
                totalStudents,
                totalCompanies,
                totalDrives,
                driveStats,
                placementStats: {
                    totalPlaced,
                    breakdown: statusBreakdown
                },
                upcomingOngoingDrives,
                recentNotifications
            }
        });
    } catch (error) {
        console.error("Get TPO dashboard error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch TPO dashboard"
        });
    }
};

/**
 * GET /api/dashboard/admin
 * Returns system-wide aggregate metrics, user distribution, placement stats, and recent drives:
 * - user statistics by role (ADMIN, TPO, STUDENT)
 * - total students, companies, drives
 * - drive statistics by status
 * - placement statistics (placed count, status breakdown)
 * - recent drives created
 * - recent notifications
 */
const getAdminDashboard = async (req, res) => {
    try {
        // Parallel aggregation queries
        const [
            totalUsers,
            roleGroups,
            totalStudents,
            totalCompanies,
            totalDrives,
            driveStatusGroups,
            totalPlaced,
            statusBreakdownRaw,
            recentDrives,
            recentNotifications
        ] = await Promise.all([
            // Total users count
            prisma.user.count(),

            // Users grouped by role
            prisma.user.groupBy({
                by: ["role"],
                _count: {
                    role: true
                }
            }),

            // Total student profiles
            prisma.student.count(),

            // Total companies
            prisma.company.count(),

            // Total placement drives
            prisma.placementDrive.count(),

            // Drives grouped by status
            prisma.placementDrive.groupBy({
                by: ["status"],
                _count: {
                    status: true
                }
            }),

            // Total placed / selected
            prisma.placementStatus.count({
                where: {
                    status: {
                        in: ["SELECTED", "OFFER_ACCEPTED"]
                    }
                }
            }),

            // Placement status breakdown
            prisma.placementStatus.groupBy({
                by: ["status"],
                _count: {
                    status: true
                }
            }),

            // Recent drives created in the system
            prisma.placementDrive.findMany({
                include: {
                    company: {
                        select: {
                            id: true,
                            companyName: true,
                            location: true
                        }
                    },
                    creator: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            role: true
                        }
                    }
                },
                orderBy: {
                    createdAt: "desc"
                },
                take: 5
            }),

            // Recent notifications for the Admin user
            prisma.notification.findMany({
                where: {
                    userId: req.user.id
                },
                orderBy: {
                    createdAt: "desc"
                },
                take: 5
            })
        ]);

        // Format user counts by role
        const userStats = {
            total: totalUsers,
            admin: 0,
            tpo: 0,
            student: 0
        };
        roleGroups.forEach((item) => {
            if (item.role === "ADMIN") userStats.admin = item._count.role;
            if (item.role === "TPO") userStats.tpo = item._count.role;
            if (item.role === "STUDENT") userStats.student = item._count.role;
        });

        // Format drive counts by status
        const driveStats = {
            total: totalDrives,
            upcoming: 0,
            ongoing: 0,
            completed: 0
        };
        driveStatusGroups.forEach((item) => {
            if (item.status === "UPCOMING") driveStats.upcoming = item._count.status;
            if (item.status === "ONGOING") driveStats.ongoing = item._count.status;
            if (item.status === "COMPLETED") driveStats.completed = item._count.status;
        });

        // Format placement status breakdown
        const statusBreakdown = statusBreakdownRaw.reduce((acc, curr) => {
            acc[curr.status] = curr._count.status;
            return acc;
        }, {});

        return res.status(200).json({
            success: true,
            message: "Admin dashboard fetched successfully",
            data: {
                userStats,
                totalStudents,
                totalCompanies,
                totalDrives,
                driveStats,
                placementStats: {
                    totalPlaced,
                    breakdown: statusBreakdown
                },
                recentDrives,
                recentNotifications
            }
        });
    } catch (error) {
        console.error("Get admin dashboard error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch admin dashboard"
        });
    }
};

module.exports = {
    getStudentDashboard,
    getTpoDashboard,
    getAdminDashboard
};