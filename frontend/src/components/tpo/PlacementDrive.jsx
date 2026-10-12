
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  FiTarget,
  FiSearch,
  FiRefreshCw,
  FiCalendar,
  FiMapPin,
  FiBriefcase,
  FiUsers,
  FiAlertCircle,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

import api from "../../services/api";

function formatDate(value) {
  if (!value) return "Date not set";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Date not set";

  return date.toLocaleDateString("en-IN", {
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

function PlacementDrive() {
  const [drives, setDrives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const fetchDrives = useCallback(async () => {
    setLoading(true);

    try {
      // Uses the existing Axios service and authentication setup.
      const response = await api.get("/drives");
      const payload = response.data;

      // Support common API response structures.
      const result =
        payload?.data?.drives ??
        payload?.data?.items ??
        payload?.data ??
        payload?.drives ??
        payload?.items ??
        payload;

      setDrives(Array.isArray(result) ? result : []);
    } catch (error) {
      console.error("Placement drives API error:", error);

      // Show an empty state instead of breaking the page.
      setDrives([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDrives();
  }, [fetchDrives]);

  const filteredDrives = useMemo(() => {
    const query = search.trim().toLowerCase();

    return drives.filter((drive) => {
      const companyName =
        drive.company?.companyName ??
        drive.companyName ??
        "";

      const matchesSearch =
        (drive.role ?? "").toLowerCase().includes(query) ||
        companyName.toLowerCase().includes(query) ||
        (drive.venue ?? "").toLowerCase().includes(query) ||
        (drive.jobType ?? "").toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "ALL" || drive.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [drives, search, statusFilter]);

  const totalDrives = drives.length;
  const ongoingDrives = drives.filter(
    (drive) => drive.status === "ONGOING"
  ).length;
  const upcomingDrives = drives.filter(
    (drive) => drive.status === "UPCOMING"
  ).length;
  const completedDrives = drives.filter(
    (drive) => drive.status === "COMPLETED"
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      {/* Header */}
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">
            TPO / Placement Drives
          </p>

          <h1 className="mt-1 text-2xl font-extrabold text-[#0b1f3a] sm:text-3xl">
            Placement Drives
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Monitor company recruitment drives and schedules.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchDrives}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#0b1f3a] shadow-sm hover:bg-slate-100 disabled:opacity-50"
        >
          <FiRefreshCw
            size={17}
            className={loading ? "animate-spin" : ""}
          />
          Refresh
        </button>
      </header>

      {/* Summary cards */}
      <section className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          icon={FiTarget}
          label="Total Drives"
          value={loading ? "—" : totalDrives}
          color="bg-blue-50 text-blue-700"
        />

        <SummaryCard
          icon={FiClock}
          label="Upcoming Drives"
          value={loading ? "—" : upcomingDrives}
          color="bg-amber-50 text-amber-700"
        />

        <SummaryCard
          icon={FiUsers}
          label="Ongoing Drives"
          value={loading ? "—" : ongoingDrives}
          color="bg-emerald-50 text-emerald-700"
        />

        <SummaryCard
          icon={FiCheckCircle}
          label="Completed Drives"
          value={loading ? "—" : completedDrives}
          color="bg-purple-50 text-purple-700"
        />
      </section>

      {/* Search and filter */}
      <section className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search role, company, location..."
              className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#0b1f3a] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#0b1f3a]"
          >
            <option value="ALL">All Statuses</option>
            <option value="UPCOMING">Upcoming</option>
            <option value="ONGOING">Ongoing</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Showing{" "}
          <span className="font-bold text-[#0b1f3a]">
            {loading ? "—" : filteredDrives.length}
          </span>{" "}
          of {loading ? "—" : totalDrives} placement drives
        </p>
      </section>

      {/* Drive list */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5">
          <h2 className="text-lg font-bold text-[#0b1f3a]">
            Recruitment Schedule
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Placement drive details received from the API.
          </p>
        </div>

        {loading ? (
          <div className="space-y-4 p-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse rounded-xl border border-slate-100 p-5"
              >
                <div className="h-5 w-1/3 rounded bg-slate-200" />
                <div className="mt-3 h-4 w-1/2 rounded bg-slate-100" />
                <div className="mt-4 h-4 w-2/3 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        ) : filteredDrives.length === 0 ? (
          <div className="px-5 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <FiTarget size={30} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-[#0b1f3a]">
              No drives available
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              No placement drives were returned by the API, or the request
              failed. You can refresh to try again.
            </p>

            <button
              type="button"
              onClick={fetchDrives}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#ffc52c] px-5 py-3 text-sm font-bold text-[#0b1f3a] hover:bg-amber-400"
            >
              <FiRefreshCw size={16} />
              Try Again
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredDrives.map((drive) => {
              const companyName =
                drive.company?.companyName ??
                drive.companyName ??
                "Company not specified";

              return (
                <article
                  key={drive.id}
                  className="p-5 transition hover:bg-slate-50 sm:p-6"
                >
                  <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold text-[#0b1f3a]">
                          {drive.role || "Role not specified"}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                            drive.status
                          )}`}
                        >
                          {drive.status || "UPCOMING"}
                        </span>
                      </div>

                      <p className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                        <FiBriefcase className="shrink-0" />
                        {companyName}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">
                        <span className="flex items-center gap-2">
                          <FiCalendar />
                          {formatDate(drive.driveDate)}
                        </span>

                        <span className="flex items-center gap-2">
                          <FiMapPin />
                          {drive.venue || "Venue not specified"}
                        </span>
                      </div>

                      {drive.jobType && (
                        <p className="mt-3 text-xs text-slate-500">
                          Job type: {drive.jobType}
                        </p>
                      )}

                      {drive.description && (
                        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                          {drive.description}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 rounded-xl bg-amber-50 px-5 py-4 lg:min-w-36">
                      <p className="text-xs font-medium text-slate-500">
                        Package
                      </p>
                      <p className="mt-1 text-xl font-extrabold text-[#0b1f3a]">
                        {drive.package || "—"}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <footer className="py-8 text-center text-xs text-slate-500">
        DKTE Placement Management System
      </footer>
    </div>
  );
}

function SummaryCard({ icon: Icon, label, value, color }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{label}</p>

        <span className={`rounded-xl p-3 ${color}`}>
          <Icon size={21} />
        </span>
      </div>

      <p className="mt-4 text-3xl font-extrabold text-[#0b1f3a]">
        {value}
      </p>
    </article>
  );
}

export default PlacementDrive;
