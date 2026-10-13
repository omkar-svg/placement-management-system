
import { useCallback, useEffect, useMemo, useState } from "react";
import api from "../../services/api";

const STATUS_STYLES = {
  APPLIED: "bg-blue-50 text-blue-700 ring-blue-200",
  UNDER_REVIEW: "bg-amber-50 text-amber-700 ring-amber-200",
  SHORTLISTED: "bg-violet-50 text-violet-700 ring-violet-200",
  SELECTED: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  REJECTED: "bg-red-50 text-red-700 ring-red-200",
};

const STATUS_OPTIONS = [
  "APPLIED",
  "UNDER_REVIEW",
  "SHORTLISTED",
  "SELECTED",
  "REJECTED",
];

const formatStatus = (status = "APPLIED") =>
  status.replaceAll("_", " ").toLowerCase().replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

const getApplicationList = (response) => {
  const payload = response?.data;

  const result =
    payload?.data?.applications ??
    payload?.data?.items ??
    payload?.applications ??
    payload?.items ??
    payload?.data ??
    payload;

  return Array.isArray(result) ? result : [];
};

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchApplications = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      // Uses the existing API service; no backend changes are required.
      const response = await api.get("/applications");
      setApplications(getApplicationList(response));
    } catch (err) {
      console.error("Failed to fetch applications:", err);
      setApplications([]);
      setError(
        err?.response?.status === 404
          ? "The applications API endpoint is not available."
          : "Unable to load applications. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return applications.filter((application) => {
      const student = application.student ?? {};
      const user = student.user ?? application.user ?? {};
      const company = application.company ?? {};
      const drive = application.drive ?? application.placementDrive ?? {};

      const studentName =
        student.name ?? user.name ?? application.studentName ?? "";
      const companyName =
        company.companyName ??
        drive.company?.companyName ??
        application.companyName ??
        "";
      const driveName =
        drive.title ??
        drive.driveName ??
        drive.position ??
        application.position ??
        "";

      const searchableText = [
        studentName,
        student.prn,
        student.email,
        user.email,
        companyName,
        driveName,
        application.status,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);
      const matchesStatus =
        statusFilter === "ALL" ||
        (application.status ?? "APPLIED").toUpperCase() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, statusFilter]);

  const stats = useMemo(
    () => ({
      total: applications.length,
      applied: applications.filter(
        (item) => (item.status ?? "APPLIED").toUpperCase() === "APPLIED"
      ).length,
      shortlisted: applications.filter(
        (item) => item.status?.toUpperCase() === "SHORTLISTED"
      ).length,
      selected: applications.filter(
        (item) => item.status?.toUpperCase() === "SELECTED"
      ).length,
    }),
    [applications]
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-7">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold text-amber-600">
              PLACEMENT MANAGEMENT / APPLICATIONS
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#0b1f3a] sm:text-4xl">
              Applications
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Review student applications and track their placement progress.
            </p>
          </div>

          <button
            onClick={fetchApplications}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b1f3a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16365e] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>{loading ? "Loading..." : "↻ Refresh"}</span>
          </button>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Applications"
            value={stats.total}
            icon="▤"
            accent="bg-blue-50 text-blue-700"
          />
          <StatCard
            title="Applied"
            value={stats.applied}
            icon="◷"
            accent="bg-amber-50 text-amber-700"
          />
          <StatCard
            title="Shortlisted"
            value={stats.shortlisted}
            icon="✓"
            accent="bg-violet-50 text-violet-700"
          />
          <StatCard
            title="Selected"
            value={stats.selected}
            icon="★"
            accent="bg-emerald-50 text-emerald-700"
          />
        </div>

        {/* Main table */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-lg font-bold text-[#0b1f3a]">
                  Student Applications
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {filteredApplications.length} application
                  {filteredApplications.length !== 1 ? "s" : ""} displayed
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    ⌕
                  </span>
                  <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search student, PRN, company..."
                    className="w-full rounded-xl border border-slate-200 py-3 pl-9 pr-4 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100 sm:w-72"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                >
                  <option value="ALL">All statuses</option>
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {formatStatus(status)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {error && (
            <div className="m-5 flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-amber-900">
                  Applications unavailable
                </p>
                <p className="mt-1 text-sm text-amber-800">{error}</p>
              </div>
              <button
                onClick={fetchApplications}
                className="shrink-0 rounded-lg border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100"
              >
                Try again
              </button>
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center px-6 py-20">
              <div className="h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-amber-400" />
              <p className="mt-4 text-sm text-slate-500">
                Loading applications...
              </p>
            </div>
          ) : filteredApplications.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl text-slate-400">
                ▤
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#0b1f3a]">
                {applications.length === 0
                  ? "No applications found"
                  : "No matching applications"}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                {applications.length === 0
                  ? "Applications will appear here when student applications are available from the API."
                  : "Try changing your search or status filter."}
              </p>
              {(search || statusFilter !== "ALL") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("ALL");
                  }}
                  className="mt-4 rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-[#0b1f3a] transition hover:bg-amber-300"
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full min-w-[850px] text-left">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Student</th>
                      <th className="px-6 py-4 font-semibold">Company</th>
                      <th className="px-6 py-4 font-semibold">Position / Drive</th>
                      <th className="px-6 py-4 font-semibold">Applied On</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredApplications.map((application, index) => {
                      const student = application.student ?? {};
                      const user = student.user ?? application.user ?? {};
                      const company = application.company ?? {};
                      const drive =
                        application.drive ?? application.placementDrive ?? {};

                      const studentName =
                        student.name ??
                        user.name ??
                        application.studentName ??
                        "Unknown student";

                      const email =
                        student.email ?? user.email ?? application.email ?? "—";

                      const companyName =
                        company.companyName ??
                        drive.company?.companyName ??
                        application.companyName ??
                        "—";

                      const position =
                        drive.title ??
                        drive.driveName ??
                        drive.position ??
                        application.position ??
                        "—";

                      const status = (
                        application.status ?? "APPLIED"
                      ).toUpperCase();

                      const appliedDate =
                        application.appliedAt ??
                        application.createdAt ??
                        application.applicationDate;

                      return (
                        <tr
                          key={application.id ?? application._id ?? index}
                          className="transition hover:bg-slate-50/80"
                        >
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] text-sm font-bold text-[#ffc52c]">
                                {studentName.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <p className="font-semibold text-slate-800">
                                  {studentName}
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                  {email}
                                </p>
                                <p className="mt-1 text-xs text-slate-400">
                                  PRN: {student.prn ?? application.prn ?? "—"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <p className="font-semibold text-slate-700">
                              {companyName}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {company.location ?? "Company"}
                            </p>
                          </td>
                          <td className="px-6 py-5">
                            <p className="font-medium text-slate-700">
                              {position}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {drive.location ?? ""}
                            </p>
                          </td>
                          <td className="px-6 py-5 text-sm text-slate-500">
                            {appliedDate
                              ? new Date(appliedDate).toLocaleDateString()
                              : "—"}
                          </td>
                          <td className="px-6 py-5">
                            <span
                              className={`inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${
                                STATUS_STYLES[status] ??
                                "bg-slate-100 text-slate-600 ring-slate-200"
                              }`}
                            >
                              {formatStatus(status)}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="grid gap-4 p-4 md:hidden">
                {filteredApplications.map((application, index) => {
                  const student = application.student ?? {};
                  const user = student.user ?? application.user ?? {};
                  const company = application.company ?? {};
                  const drive =
                    application.drive ?? application.placementDrive ?? {};

                  const studentName =
                    student.name ??
                    user.name ??
                    application.studentName ??
                    "Unknown student";

                  const companyName =
                    company.companyName ??
                    drive.company?.companyName ??
                    application.companyName ??
                    "—";

                  const status = (
                    application.status ?? "APPLIED"
                  ).toUpperCase();

                  return (
                    <article
                      key={application.id ?? application._id ?? index}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] font-bold text-[#ffc52c]">
                            {studentName.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800">
                              {studentName}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                              {companyName}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            STATUS_STYLES[status] ??
                            "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {formatStatus(status)}
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-sm">
                        <div>
                          <p className="text-xs text-slate-400">Position</p>
                          <p className="mt-1 font-medium text-slate-700">
                            {drive.title ??
                              drive.driveName ??
                              application.position ??
                              "—"}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">Applied on</p>
                          <p className="mt-1 font-medium text-slate-700">
                            {application.appliedAt || application.createdAt
                              ? new Date(
                                  application.appliedAt ?? application.createdAt
                                ).toLocaleDateString()
                              : "—"}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}

          <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50 px-5 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Showing {loading ? 0 : filteredApplications.length} of{" "}
              {loading ? 0 : applications.length} applications
            </span>
            <span>Placement Management System</span>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, accent }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl font-bold ${accent}`}
        >
          {icon}
        </div>
      </div>
      <p className="mt-4 text-3xl font-extrabold tracking-tight text-[#0b1f3a]">
        {value}
      </p>
      <p className="mt-1 text-xs text-slate-400">Current records</p>
    </div>
  );
}
