
import { useCallback, useEffect, useMemo, useState } from "react";
import api from "../../services/api";

const STATUS_STYLES = {
  PLACED: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  OFFERED: "bg-blue-50 text-blue-700 ring-blue-200",
  PENDING: "bg-amber-50 text-amber-700 ring-amber-200",
  REJECTED: "bg-red-50 text-red-700 ring-red-200",
};

const formatStatus = (status = "PLACED") =>
  status.replaceAll("_", " ").toLowerCase().replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

function getPlacementList(response) {
  const payload = response?.data;

  const result =
    payload?.data?.placements ??
    payload?.data?.items ??
    payload?.placements ??
    payload?.items ??
    payload?.data ??
    payload;

  return Array.isArray(result) ? result : [];
}

function getStudent(placement) {
  return placement.student ?? placement.application?.student ?? {};
}

function getCompany(placement) {
  return (
    placement.company ??
    placement.drive?.company ??
    placement.placementDrive?.company ??
    placement.application?.company ??
    {}
  );
}

function getStudentName(placement) {
  const student = getStudent(placement);
  const user = student.user ?? {};

  return (
    student.name ??
    user.name ??
    placement.studentName ??
    placement.name ??
    "Unknown Student"
  );
}

function getCompanyName(placement) {
  const company = getCompany(placement);

  return (
    company.companyName ??
    company.name ??
    placement.companyName ??
    "—"
  );
}

function getPackage(placement) {
  return (
    placement.package ??
    placement.salaryPackage ??
    placement.ctc ??
    placement.salary ??
    placement.application?.package ??
    null
  );
}

function formatPackage(value) {
  if (value === null || value === undefined || value === "") return "—";

  if (typeof value === "number") {
    return `₹${value} LPA`;
  }

  const stringValue = String(value);
  return /lpa|₹|rs\.?|inr/i.test(stringValue)
    ? stringValue
    : `₹${stringValue} LPA`;
}

export default function Placements() {
  const [placements, setPlacements] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [branchFilter, setBranchFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPlacements = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      // Uses the existing API service. No backend changes are made.
      const response = await api.get("/placements");
      setPlacements(getPlacementList(response));
    } catch (err) {
      console.error("Failed to fetch placements:", err);
      setPlacements([]);
      setError(
        err?.response?.status === 404
          ? "The placements API endpoint is not available."
          : "Unable to load placement records. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlacements();
  }, [fetchPlacements]);

  const branches = useMemo(
    () =>
      [
        ...new Set(
          placements
            .map((placement) => {
              const student = getStudent(placement);
              return student.branch ?? placement.branch;
            })
            .filter(Boolean)
        ),
      ].sort(),
    [placements]
  );

  const filteredPlacements = useMemo(() => {
    const query = search.trim().toLowerCase();

    return placements.filter((placement) => {
      const student = getStudent(placement);
      const company = getCompany(placement);
      const name = getStudentName(placement);
      const companyName = getCompanyName(placement);
      const branch = student.branch ?? placement.branch ?? "";
      const prn = student.prn ?? placement.prn ?? "";
      const status = (placement.status ?? "PLACED").toUpperCase();
      const position =
        placement.position ??
        placement.jobTitle ??
        placement.drive?.title ??
        placement.placementDrive?.title ??
        "";

      const matchesSearch = [
        name,
        prn,
        branch,
        companyName,
        position,
        student.email,
        student.user?.email,
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query));

      const matchesStatus =
        statusFilter === "ALL" || status === statusFilter;

      const matchesBranch =
        branchFilter === "ALL" || branch === branchFilter;

      return (
        (!query || matchesSearch) &&
        matchesStatus &&
        matchesBranch
      );
    });
  }, [placements, search, statusFilter, branchFilter]);

  const stats = useMemo(() => {
    const placed = placements.filter(
      (item) => (item.status ?? "PLACED").toUpperCase() === "PLACED"
    ).length;

    const offered = placements.filter(
      (item) => item.status?.toUpperCase() === "OFFERED"
    ).length;

    const packages = placements
      .map(getPackage)
      .map((value) => {
        if (typeof value === "number") return value;

        if (typeof value === "string") {
          const match = value.replace(/,/g, "").match(/[\d.]+/);
          return match ? Number(match[0]) : null;
        }

        return null;
      })
      .filter((value) => value !== null && Number.isFinite(value));

    return {
      total: placements.length,
      placed,
      offered,
      highestPackage:
        packages.length > 0 ? Math.max(...packages) : null,
    };
  }, [placements]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-7">
        {/* Page heading */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold text-amber-600">
              PLACEMENT MANAGEMENT / PLACEMENTS
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#0b1f3a] sm:text-4xl">
              Placement Records
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track placed students, company offers, and package details.
            </p>
          </div>

          <button
            onClick={fetchPlacements}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b1f3a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16365e] disabled:opacity-60"
          >
            {loading ? "Loading..." : "↻ Refresh"}
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Records"
            value={stats.total}
            icon="▤"
            accent="bg-blue-50 text-blue-700"
          />

          <StatCard
            title="Students Placed"
            value={stats.placed}
            icon="✓"
            accent="bg-emerald-50 text-emerald-700"
          />

          <StatCard
            title="Offers"
            value={stats.offered}
            icon="✉"
            accent="bg-violet-50 text-violet-700"
          />

          <StatCard
            title="Highest Package"
            value={
              stats.highestPackage === null
                ? "—"
                : `₹${stats.highestPackage} LPA`
            }
            icon="₹"
            accent="bg-amber-50 text-amber-700"
          />
        </div>

        {/* Placement records */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-lg font-bold text-[#0b1f3a]">
                  Student Placement Records
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {filteredPlacements.length} record
                  {filteredPlacements.length !== 1 ? "s" : ""} displayed
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search student, PRN, company..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100 sm:w-64"
                />

                <select
                  value={branchFilter}
                  onChange={(event) => setBranchFilter(event.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-400"
                >
                  <option value="ALL">All branches</option>
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>

                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-400"
                >
                  <option value="ALL">All statuses</option>
                  <option value="PLACED">Placed</option>
                  <option value="OFFERED">Offered</option>
                  <option value="PENDING">Pending</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              </div>
            </div>
          </div>

          {error && (
            <div className="m-5 flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-amber-900">
                  Placement records unavailable
                </p>
                <p className="mt-1 text-sm text-amber-800">{error}</p>
              </div>

              <button
                onClick={fetchPlacements}
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
                Loading placement records...
              </p>
            </div>
          ) : filteredPlacements.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl text-slate-400">
                ▤
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#0b1f3a]">
                {placements.length === 0
                  ? "No placement records found"
                  : "No matching records"}
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                {placements.length === 0
                  ? "Placement information will appear here when records are available from the API."
                  : "Try changing your search or filters to see more records."}
              </p>

              {(search ||
                statusFilter !== "ALL" ||
                branchFilter !== "ALL") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("ALL");
                    setBranchFilter("ALL");
                  }}
                  className="mt-4 rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-[#0b1f3a] hover:bg-amber-300"
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Student</th>
                      <th className="px-6 py-4 font-semibold">Branch</th>
                      <th className="px-6 py-4 font-semibold">Company</th>
                      <th className="px-6 py-4 font-semibold">Position</th>
                      <th className="px-6 py-4 font-semibold">Package</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {filteredPlacements.map((placement, index) => {
                      const student = getStudent(placement);
                      const company = getCompany(placement);
                      const name = getStudentName(placement);
                      const status = (
                        placement.status ?? "PLACED"
                      ).toUpperCase();

                      const position =
                        placement.position ??
                        placement.jobTitle ??
                        placement.drive?.title ??
                        placement.placementDrive?.title ??
                        "—";

                      return (
                        <tr
                          key={placement.id ?? placement._id ?? index}
                          className="transition hover:bg-slate-50/80"
                        >
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] text-sm font-bold text-[#ffc52c]">
                                {name.charAt(0).toUpperCase()}
                              </div>

                              <div>
                                <p className="font-semibold text-slate-800">
                                  {name}
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                  PRN: {student.prn ?? placement.prn ?? "—"}
                                </p>
                                <p className="mt-1 text-xs text-slate-400">
                                  {student.email ??
                                    student.user?.email ??
                                    "—"}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-5 text-sm text-slate-600">
                            {student.branch ?? placement.branch ?? "—"}
                          </td>

                          <td className="px-6 py-5">
                            <p className="font-semibold text-slate-700">
                              {getCompanyName(placement)}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {company.location ?? "Company"}
                            </p>
                          </td>

                          <td className="px-6 py-5 text-sm text-slate-600">
                            {position}
                          </td>

                          <td className="px-6 py-5 font-semibold text-[#0b1f3a]">
                            {formatPackage(getPackage(placement))}
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
                {filteredPlacements.map((placement, index) => {
                  const student = getStudent(placement);
                  const name = getStudentName(placement);
                  const status = (
                    placement.status ?? "PLACED"
                  ).toUpperCase();

                  return (
                    <article
                      key={placement.id ?? placement._id ?? index}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] font-bold text-[#ffc52c]">
                            {name.charAt(0).toUpperCase()}
                          </div>

                          <div>
                            <p className="font-bold text-slate-800">{name}</p>
                            <p className="mt-1 text-sm text-slate-500">
                              {getCompanyName(placement)}
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

                      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                        <div>
                          <p className="text-xs text-slate-400">Branch</p>
                          <p className="mt-1 text-sm font-medium text-slate-700">
                            {student.branch ?? placement.branch ?? "—"}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">Package</p>
                          <p className="mt-1 text-sm font-bold text-[#0b1f3a]">
                            {formatPackage(getPackage(placement))}
                          </p>
                        </div>

                        <div className="col-span-2">
                          <p className="text-xs text-slate-400">Position</p>
                          <p className="mt-1 text-sm font-medium text-slate-700">
                            {placement.position ??
                              placement.jobTitle ??
                              placement.drive?.title ??
                              placement.placementDrive?.title ??
                              "—"}
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
              Showing {loading ? 0 : filteredPlacements.length} of{" "}
              {loading ? 0 : placements.length} placement records
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
