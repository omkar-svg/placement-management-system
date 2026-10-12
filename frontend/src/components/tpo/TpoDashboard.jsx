
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {
  FiUsers,
  FiBriefcase,
  FiTarget,
  FiTrendingUp,
  FiPlus,
  FiArrowUpRight,
  FiCalendar,
  FiBell,
  FiSearch,
  FiMapPin,
} from "react-icons/fi";
import { Link } from "react-router-dom";

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
  },
  {
    label: "Companies",
    key: "totalCompanies",
    icon: FiBriefcase,
    color: "bg-amber-50 text-amber-700",
  },
  {
    label: "Placement Drives",
    key: "totalDrives",
    icon: FiTarget,
    color: "bg-purple-50 text-purple-700",
  },
  {
    label: "Students Placed",
    key: "totalPlaced",
    icon: FiTrendingUp,
    color: "bg-emerald-50 text-emerald-700",
  },
];

function TpoDashboard() {
  const [dashboard, setDashboard] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadDashboard() {
      try {
        const response = await api.get("/dashboard/tpo");
        if (active) {
          setDashboard(response.data?.data ?? response.data ?? {});
          setError("");
        }
      } catch {
        if (active) {
          setError("Unable to load dashboard. Check your backend connection.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadDashboard();

    return () => {
      active = false;
    };
  }, []);

  const stats = statsConfig.map((item) => ({
    ...item,
    value: dashboard[item.key] ?? 0,
  }));

  const drives = dashboard.drives ?? [];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 md:flex">
      {/* Sidebar */}
      <aside className="w-full shrink-0 bg-[#0b1f3a] text-white md:min-h-screen md:w-64">
        <div className="border-b border-white/10 px-6 py-6">
          <h2 className="text-xl font-extrabold tracking-wide">
            DKTE <span className="text-[#ffc52c]">PLACEMENTS</span>
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Training & Placement Portal
          </p>
        </div>

        <nav className="flex gap-2 overflow-x-auto p-4 md:block md:space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
                index === 0
                  ? "bg-[#ffc52c] font-bold text-[#07152d]"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="m-4 hidden rounded-xl border border-white/10 bg-white/5 p-4 md:block">
          <p className="text-sm font-semibold text-[#ffc52c]">
            Placement Office
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-300">
            Manage recruitment drives, student eligibility and placement
            progress from one place.
          </p>
        </div>
      </aside>

      {/* Main content */}
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
              aria-label="Notifications"
              className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 hover:bg-slate-100"
            >
              <FiBell size={19} />
            </button>
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

        {/* Error / loading */}
        {error && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700"
          >
            {error}
          </div>
        )}

        {loading && (
          <p className="mb-6 text-sm text-slate-500">
            Loading placement statistics...
          </p>
        )}

        {/* Statistics */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </span>
                  <span className={`rounded-xl p-3 ${stat.color}`}>
                    <Icon size={21} />
                  </span>
                </div>

                <p className="mt-4 text-3xl font-extrabold text-[#0b1f3a]">
                  {loading ? "—" : stat.value}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Live placement overview
                </p>
              </div>
            );
          })}
        </section>

        {/* Drives and quick actions */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-[#0b1f3a]">
                  Placement Drives
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Review scheduled recruitment activities.
                </p>
              </div>

              <Link
                to="/tpo/drives"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#0b1f3a] hover:text-blue-700"
              >
                View all <FiArrowUpRight />
              </Link>
            </div>

            {drives.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 py-12 text-center">
                <FiCalendar className="mx-auto text-3xl text-slate-400" />
                <p className="mt-3 font-semibold text-slate-700">
                  No placement drives available
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Drives returned by your backend will appear here.
                </p>
                <Link
                  to="/tpo/drives/new"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#ffc52c] px-4 py-2 text-sm font-bold text-[#07152d]"
                >
                  <FiPlus /> Add a drive
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {drives.map((drive) => (
                  <div
                    key={drive.id}
                    className="flex flex-col justify-between gap-3 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <h4 className="font-bold text-[#0b1f3a]">
                        {drive.role}
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">
                        {drive.company?.companyName ?? drive.companyName ?? "Company"}
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                        <FiCalendar />
                        {drive.driveDate
                          ? new Date(drive.driveDate).toLocaleDateString()
                          : "Date not set"}
                        <FiMapPin />
                        {drive.venue ?? "Venue not set"}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {drive.status ?? "UPCOMING"}
                      </span>
                      <span className="font-bold text-[#0b1f3a]">
                        {drive.package ?? "—"}
                      </span>
                    </div>
                  </div>
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
                <FiSearch />
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-8 border-t border-slate-200 py-5 text-center text-xs text-slate-500">
          DKTE Placement Management System
        </footer>
      </main>
    </div>
  );
}

export default TpoDashboard;
