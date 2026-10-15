
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FiUsers,
    FiBriefcase,
    FiTarget,
    FiTrendingUp,
    FiPlus,
    FiArrowUpRight,
    FiCalendar,
    FiBell,
    FiMapPin,
    FiLogOut,
    FiRefreshCw,
    FiAlertCircle,
} from "react-icons/fi";

import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

const navItems = [
    { label: "Dashboard", icon: "▦", href: "/tpo/dashboard" },
    { label: "Students", icon: "♙", href: "/tpo/students" },
    { label: "Companies", icon: "▣", href: "/tpo/companies" },
    { label: "Placement Drives", icon: "◷", href: "/tpo/drives" },
    { label: "Applications", icon: "▤", href: "/tpo/applications" },
    { label: "Placements", icon: "↗", href: "/tpo/placements" },
    { label: "Notifications", icon: "♧", href: "/tpo/notifications" },
];

const statsConfig = [
    {
        label: "Total Students",
        key: "totalStudents",
        icon: FiUsers,
        color: "bg-blue-50 text-blue-700",
        description: "Registered student profiles",
    },
    {
        label: "Total Companies",
        key: "totalCompanies",
        icon: FiBriefcase,
        color: "bg-amber-50 text-amber-700",
        description: "Companies in the system",
    },
    {
        label: "Placement Drives",
        key: "totalDrives",
        icon: FiTarget,
        color: "bg-purple-50 text-purple-700",
        description: "Total recruitment drives",
    },
    {
        label: "Students Placed",
        key: "totalPlaced",
        icon: FiTrendingUp,
        color: "bg-emerald-50 text-emerald-700",
        description: "Selected or accepted offers",
    },
];

function formatDate(date) {
    if (!date) return "Date not set";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "Date not set";
    }

    return parsedDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

function getStatusStyle(status) {
    switch (status) {
        case "ONGOING":
            return "bg-emerald-50 text-emerald-700";
        case "COMPLETED":
            return "bg-slate-100 text-slate-600";
        default:
            return "bg-blue-50 text-blue-700";
    }
}

function TpoDashboard() {
    const { logout } = useAuth();

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadDashboard = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            // Existing Axios service attaches the JWT automatically.
            const response = await api.get("/dashboard/tpo");

            // Backend format: { success, message, data }
            const result = response.data?.data;

            if (response.data?.success === false || !result) {
                throw new Error(
                    response.data?.message || "Invalid dashboard response."
                );
            }

            setDashboard(result);
        } catch (err) {
            console.error("Failed to load TPO dashboard:", err);

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to load dashboard. Check the backend connection."
            );
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadDashboard();
    }, [loadDashboard]);

    // Map the API response to the four statistic cards.
    const stats = statsConfig.map((item) => ({
        ...item,
        value:
            item.key === "totalPlaced"
                ? dashboard?.placementStats?.totalPlaced ?? 0
                : dashboard?.[item.key] ?? 0,
    }));

    // Correct property returned by GET /api/dashboard/tpo.
    const drives = dashboard?.upcomingOngoingDrives ?? [];

    const notifications = dashboard?.recentNotifications ?? [];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 md:flex relative">
            {/* Sidebar */}


            {/* Main dashboard */}
            <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-slate-500">
                            Training & Placement
                        </p>
                        <h1 className="mt-1 text-2xl font-extrabold text-[#0b1f3a] sm:text-3xl">
                            TPO Dashboard
                        </h1>
                        <p className="mt-2 text-sm text-slate-500">
                            Manage recruitment activities and placement performance.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={loadDashboard}
                            disabled={loading}
                            title="Refresh dashboard"
                            aria-label="Refresh dashboard"
                            className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 transition hover:bg-slate-100 disabled:opacity-50"
                        >
                            <FiRefreshCw className={loading ? "animate-spin" : ""} />
                        </button>

                        <Link
                            to="/tpo/notifications"
                            aria-label="View notifications"
                            className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 hover:bg-slate-100"
                        >
                            <FiBell size={19} />
                        </Link>

                        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-2 pr-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1f3a] font-bold text-[#ffc52c]">
                                TPO
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#0b1f3a]">
                                    Placement Officer
                                </p>
                                <p className="text-xs text-slate-500">TPO Account</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero */}
                <section className="mb-8 flex flex-col justify-between gap-5 overflow-hidden rounded-2xl bg-[#0b1f3a] p-6 text-white sm:p-8 lg:flex-row lg:items-center">
                    <div>
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-[#ffc52c]">
                            PLACEMENT MANAGEMENT
                        </span>

                        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                            Build successful careers.
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                            Track students, coordinate companies and manage campus
                            recruitment from a single dashboard.
                        </p>
                    </div>

                    <Link
                        to="/tpo/drives/new"
                        className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-[#ffc52c] px-5 py-3 text-sm font-bold text-[#07152d] hover:bg-[#ffd45c] lg:self-center"
                    >
                        <FiPlus size={18} />
                        Create Placement Drive
                    </Link>
                </section>

                {/* API error */}
                {error && (
                    <div
                        role="alert"
                        className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700"
                    >
                        <div className="flex items-center gap-2">
                            <FiAlertCircle size={19} />
                            <span>{error}</span>
                        </div>

                        <button
                            type="button"
                            onClick={loadDashboard}
                            className="font-bold underline"
                        >
                            Retry
                        </button>
                    </div>
                )}

                {/* Four live statistics */}
                <section
                    aria-label="Placement statistics"
                    className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
                >
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <article
                                key={stat.key}
                                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-sm font-medium text-slate-500">
                                        {stat.label}
                                    </span>

                                    <span className={`rounded-xl p-3 ${stat.color}`}>
                                        <Icon size={21} />
                                    </span>
                                </div>

                                <p className="mt-4 text-3xl font-extrabold text-[#0b1f3a]">
                                    {loading ? "—" : stat.value.toLocaleString("en-IN")}
                                </p>

                                <p className="mt-2 text-xs text-slate-500">
                                    {stat.description}
                                </p>
                            </article>
                        );
                    })}
                </section>

                {/* Drive list and quick actions */}
                <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <h3 className="text-lg font-bold text-[#0b1f3a]">
                                    Placement Drives
                                </h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    Review upcoming and ongoing recruitment activities.
                                </p>
                            </div>

                            <Link
                                to="/tpo/drives"
                                className="inline-flex items-center gap-1 text-sm font-bold text-[#0b1f3a] hover:text-blue-700"
                            >
                                View all <FiArrowUpRight />
                            </Link>
                        </div>

                        {loading ? (
                            <div className="py-12 text-center text-sm text-slate-500">
                                Loading placement drives...
                            </div>
                        ) : drives.length === 0 ? (
                            <div className="rounded-xl border border-dashed border-slate-300 py-12 text-center">
                                <FiCalendar className="mx-auto text-3xl text-slate-400" />
                                <p className="mt-3 font-semibold text-slate-700">
                                    No placement drives available
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    Create a drive to get started.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {drives.map((drive) => (
                                    <article
                                        key={drive.id}
                                        className="flex flex-col justify-between gap-4 rounded-xl border border-slate-100 p-4 transition hover:border-slate-300 sm:flex-row sm:items-center"
                                    >
                                        <div className="min-w-0">
                                            <h4 className="font-bold text-[#0b1f3a]">
                                                {drive.role}
                                            </h4>

                                            <p className="mt-1 text-sm text-slate-500">
                                                {drive.company?.companyName ?? "Company"}
                                            </p>

                                            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
                                                <span className="flex items-center gap-1">
                                                    <FiCalendar />
                                                    {formatDate(drive.driveDate)}
                                                </span>

                                                <span className="flex items-center gap-1">
                                                    <FiMapPin />
                                                    {drive.venue || drive.company?.location || "Venue not set"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex shrink-0 items-center gap-3">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                                                    drive.status
                                                )}`}
                                            >
                                                {drive.status || "UPCOMING"}
                                            </span>

                                            <span className="font-bold text-[#0b1f3a]">
                                                {drive.package || "—"}
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Quick actions */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                        <h3 className="text-lg font-bold text-[#0b1f3a]">
                            Quick Actions
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            Common placement tasks.
                        </p>

                        <div className="mt-5 space-y-3">
                            <Link
                                to="/tpo/companies"
                                className="flex items-center justify-between rounded-xl border border-slate-200 p-4 hover:border-[#0b1f3a] hover:bg-slate-50"
                            >
                                <div>
                                    <p className="text-sm font-bold">Manage Companies</p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Company profiles and details
                                    </p>
                                </div>
                                <FiArrowUpRight />
                            </Link>

                            <Link
                                to="/tpo/students"
                                className="flex items-center justify-between rounded-xl border border-slate-200 p-4 hover:border-[#0b1f3a] hover:bg-slate-50"
                            >
                                <div>
                                    <p className="text-sm font-bold">View Students</p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Profiles, CGPA and backlogs
                                    </p>
                                </div>
                                <FiUsers />
                            </Link>

                            <Link
                                to="/tpo/placements"
                                className="flex items-center justify-between rounded-xl border border-slate-200 p-4 hover:border-[#0b1f3a] hover:bg-slate-50"
                            >
                                <div>
                                    <p className="text-sm font-bold">Update Placements</p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Selection status and offers
                                    </p>
                                </div>
                                <FiTrendingUp />
                            </Link>

                            <Link
                                to="/tpo/applications"
                                className="flex items-center justify-between rounded-xl border border-slate-200 p-4 hover:border-[#0b1f3a] hover:bg-slate-50"
                            >
                                <div>
                                    <p className="text-sm font-bold">Review Applications</p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Track student applications
                                    </p>
                                </div>
                                <FiTarget />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Recent notifications */}
                <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                        <div>
                            <h3 className="text-lg font-bold text-[#0b1f3a]">
                                Recent Notifications
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                                Latest updates for your TPO account.
                            </p>
                        </div>

                        <Link
                            to="/tpo/notifications"
                            className="text-sm font-bold text-[#0b1f3a] hover:text-blue-700"
                        >
                            View all
                        </Link>
                    </div>

                    {loading ? (
                        <p className="py-4 text-sm text-slate-500">
                            Loading notifications...
                        </p>
                    ) : notifications.length === 0 ? (
                        <p className="py-6 text-center text-sm text-slate-500">
                            No recent notifications.
                        </p>
                    ) : (
                        <div className="divide-y divide-slate-100">
                            {notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    className="flex items-start gap-3 py-4"
                                >
                                    <span className="rounded-lg bg-amber-50 p-2 text-amber-700">
                                        <FiBell size={17} />
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-semibold text-[#0b1f3a]">
                                            {notification.title}
                                        </p>
                                        <p className="mt-1 text-sm text-slate-500">
                                            {notification.message}
                                        </p>
                                        <p className="mt-2 text-xs text-slate-400">
                                            {formatDate(notification.createdAt)}
                                        </p>
                                    </div>

                                    {!notification.isRead && (
                                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#ffc52c]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                <footer className="mt-8 border-t border-slate-200 py-5 text-center text-xs text-slate-500">
                    DKTE Placement Management System
                </footer>
                <div className="pointer-events-none bottom-0 left-0 z-0 w-full overflow-hidden">
                    <img
                        src="/DKTE_IMG.png"
                        alt=""
                        aria-hidden="true"
                        className="block h-auto w-full object-contain opacity-[0.10]"
                    />
                </div>
            </main>
            {/* Faint DKTE Background Image */}
            {/* Full-width faint DKTE background at bottom */}
            {/* Full viewport width DKTE background */}

        </div>
    );
}

export default TpoDashboard;
