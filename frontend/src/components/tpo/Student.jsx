
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  FiUsers,
  FiSearch,
  FiRefreshCw,
  FiUser,
  FiMail,
  FiPhone,
  FiBookOpen,
  FiAward,
  FiX,
  FiFilter,
  FiCalendar,
  FiAlertCircle,
} from "react-icons/fi";
import api from "../../services/api";

function extractStudents(response) {
  const payload = response?.data;

  const result =
    payload?.data?.students ??
    payload?.data?.items ??
    payload?.students ??
    payload?.items ??
    payload?.data ??
    payload;

  return Array.isArray(result) ? result : [];
}

// Convert the backend Student + related User into one consistent shape.
function normalizeStudent(student, index) {
  const user = student.user ?? student.User ?? {};

  const cgpa = Number(student.cgpa ?? 0);
  const backlogs = Number(
    student.activeBacklogs ?? student.backlogs ?? 0
  );

  return {
    id: student.id ?? student._id ?? index,
    prn: student.prn ?? "—",
    name:
      student.name ??
      user.name ??
      student.studentName ??
      "Unknown Student",
    email: student.email ?? user.email ?? "—",
    phone: student.phone ?? "—",
    branch: student.branch ?? "Not specified",
    year: student.year ?? "—",
    cgpa: Number.isFinite(cgpa) ? cgpa : 0,
    backlogs: Number.isFinite(backlogs) ? backlogs : 0,
    graduationYear: student.graduationYear ?? "—",
    tenthPercentage: student.tenthPercentage ?? null,
    twelfthPercentage: student.twelfthPercentage ?? null,
    linkedin: student.linkedin ?? null,
    github: student.github ?? null,
    portfolio: student.portfolio ?? null,
    skills: student.skills ?? [],
    profileCompleted: student.profileCompleted === true,
    raw: student,
  };
}

function Student() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [branch, setBranch] = useState("ALL");
  const [profileStatus, setProfileStatus] = useState("ALL");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStudents = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      // The shared api service handles the backend base URL and auth token.
      const response = await api.get("/students");
      const result = extractStudents(response);

      setStudents(result.map(normalizeStudent));
    } catch (err) {
      console.error("Failed to fetch students:", err);
      setStudents([]);

      setError(
        err?.response?.status === 404
          ? "The students API endpoint was not found."
          : err?.response?.data?.message ??
              "Unable to load students. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  // Generate branch options from actual API records.
  const branches = useMemo(
    () => [
      ...new Set(
        students
          .map((student) => student.branch)
          .filter((value) => value && value !== "Not specified")
      ),
    ].sort(),
    [students]
  );

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return students.filter((student) => {
      const matchesSearch = [
        student.name,
        student.prn,
        student.email,
        student.branch,
        student.phone,
      ].some((value) => String(value ?? "").toLowerCase().includes(query));

      const matchesBranch =
        branch === "ALL" || student.branch === branch;

      const matchesProfile =
        profileStatus === "ALL" ||
        (profileStatus === "COMPLETE" && student.profileCompleted) ||
        (profileStatus === "INCOMPLETE" && !student.profileCompleted);

      return matchesSearch && matchesBranch && matchesProfile;
    });
  }, [students, search, branch, profileStatus]);

  const completedCount = students.filter(
    (student) => student.profileCompleted
  ).length;

  const averageCgpa = students.length
    ? (
        students.reduce((sum, student) => sum + student.cgpa, 0) /
        students.length
      ).toFixed(2)
    : "0.00";

  const resetFilters = () => {
    setSearch("");
    setBranch("ALL");
    setProfileStatus("ALL");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      {/* Header */}
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">
            TPO / Students
          </p>

          <h1 className="mt-1 text-2xl font-extrabold text-[#0b1f3a] sm:text-3xl">
            Student Management
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            View registered students, academic performance, and profiles.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchStudents}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0b1f3a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#16365e] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FiRefreshCw className={loading ? "animate-spin" : ""} />
          {loading ? "Loading..." : "Refresh Students"}
        </button>
      </header>

      {/* Error message */}
      {error && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <FiAlertCircle className="mt-0.5 text-red-600" size={20} />
            <div>
              <p className="font-semibold text-red-800">
                Unable to load students
              </p>
              <p className="mt-1 text-sm text-red-700">{error}</p>
            </div>
          </div>

          <button
            onClick={fetchStudents}
            className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Summary cards */}
      <section className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          icon={FiUsers}
          label="Total Students"
          value={loading ? "—" : students.length}
          color="bg-blue-50 text-blue-700"
        />

        <SummaryCard
          icon={FiAward}
          label="Completed Profiles"
          value={loading ? "—" : completedCount}
          color="bg-emerald-50 text-emerald-700"
        />

        <SummaryCard
          icon={FiBookOpen}
          label="Branches"
          value={loading ? "—" : new Set(
            students
              .map((student) => student.branch)
              .filter((value) => value !== "Not specified")
          ).size}
          color="bg-purple-50 text-purple-700"
        />

        <SummaryCard
          icon={FiAward}
          label="Average CGPA"
          value={loading ? "—" : averageCgpa}
          color="bg-amber-50 text-amber-700"
        />
      </section>

      {/* Search and filters */}
      <section className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <FiFilter className="text-[#b88900]" size={19} />
          <h2 className="font-bold text-[#0b1f3a]">
            Search and Filter Students
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search name, PRN, email..."
              className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#0b1f3a] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <select
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#0b1f3a]"
          >
            <option value="ALL">All Branches</option>
            {branches.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={profileStatus}
            onChange={(event) => setProfileStatus(event.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#0b1f3a]"
          >
            <option value="ALL">All Profile Statuses</option>
            <option value="COMPLETE">Profile Complete</option>
            <option value="INCOMPLETE">Profile Incomplete</option>
          </select>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-bold text-[#0b1f3a]">
              {loading ? 0 : filteredStudents.length}
            </span>{" "}
            of {loading ? 0 : students.length} students
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b1f3a] hover:text-amber-700"
          >
            <FiRefreshCw size={15} />
            Reset Filters
          </button>
        </div>
      </section>

      {/* Student table */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5">
          <h2 className="text-lg font-bold text-[#0b1f3a]">
            Registered Students
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Select a student to view their details.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-4 font-semibold">Student</th>
                <th className="px-5 py-4 font-semibold">PRN</th>
                <th className="px-5 py-4 font-semibold">Branch</th>
                <th className="px-5 py-4 font-semibold">CGPA</th>
                <th className="px-5 py-4 font-semibold">Backlogs</th>
                <th className="px-5 py-4 font-semibold">Profile</th>
                <th className="px-5 py-4 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-5 py-16 text-center">
                    <FiRefreshCw className="mx-auto animate-spin text-2xl text-amber-500" />
                    <p className="mt-3 font-semibold text-[#0b1f3a]">
                      Loading students...
                    </p>
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-16 text-center">
                    <FiUsers className="mx-auto text-3xl text-slate-400" />
                    <p className="mt-3 font-bold text-[#0b1f3a]">
                      {students.length === 0
                        ? "No students available"
                        : "No students found"}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {students.length === 0
                        ? "Registered student records will appear here when returned by the API."
                        : "Try changing your search or filters."}
                    </p>
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] font-bold text-[#ffc52c]">
                          {student.name
                            .split(" ")
                            .filter(Boolean)
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>

                        <div>
                          <p className="font-semibold text-[#0b1f3a]">
                            {student.name}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {student.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 font-medium text-slate-600">
                      {student.prn}
                    </td>

                    <td className="px-5 py-4">{student.branch}</td>

                    <td className="px-5 py-4 font-bold text-[#0b1f3a]">
                      {student.cgpa.toFixed(2)}
                    </td>

                    <td className="px-5 py-4">{student.backlogs}</td>

                    <td className="px-5 py-4">
                      <StatusBadge
                        status={
                          student.profileCompleted
                            ? "Complete"
                            : "Incomplete"
                        }
                      />
                    </td>

                    <td className="px-5 py-4">
                      <button
                        type="button"
                        onClick={() => setSelectedStudent(student)}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-[#0b1f3a] transition hover:border-[#ffc52c] hover:bg-amber-50"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mt-5 text-center text-xs text-slate-400">
        Student information is loaded from the backend API.
      </p>

      {/* Student details modal */}
      {selectedStudent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedStudent(null);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="student-modal-title"
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 bg-[#0b1f3a] p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-[#ffc52c]">
                  {selectedStudent.name
                    .split(" ")
                    .filter(Boolean)
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </div>

                <div>
                  <h2
                    id="student-modal-title"
                    className="text-xl font-bold"
                  >
                    {selectedStudent.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-300">
                    {selectedStudent.prn}
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close student details"
                onClick={() => setSelectedStudent(null)}
                className="rounded-lg p-2 hover:bg-white/10"
              >
                <FiX size={21} />
              </button>
            </div>

            <div className="space-y-5 p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <DetailItem
                  icon={FiMail}
                  label="Email"
                  value={selectedStudent.email}
                />
                <DetailItem
                  icon={FiPhone}
                  label="Phone"
                  value={selectedStudent.phone}
                />
                <DetailItem
                  icon={FiBookOpen}
                  label="Branch"
                  value={selectedStudent.branch}
                />
                <DetailItem
                  icon={FiUser}
                  label="Current Year"
                  value={
                    selectedStudent.year === "—"
                      ? "—"
                      : `Year ${selectedStudent.year}`
                  }
                />
                <DetailItem
                  icon={FiAward}
                  label="CGPA"
                  value={selectedStudent.cgpa.toFixed(2)}
                />
                <DetailItem
                  icon={FiBookOpen}
                  label="Active Backlogs"
                  value={selectedStudent.backlogs}
                />
                <DetailItem
                  icon={FiCalendar}
                  label="Graduation Year"
                  value={selectedStudent.graduationYear}
                />
                <DetailItem
                  icon={FiAward}
                  label="Profile Status"
                  value={
                    selectedStudent.profileCompleted
                      ? "Complete"
                      : "Incomplete"
                  }
                />
                <DetailItem
                  icon={FiBookOpen}
                  label="10th Percentage"
                  value={
                    selectedStudent.tenthPercentage == null
                      ? "—"
                      : `${selectedStudent.tenthPercentage}%`
                  }
                />
                <DetailItem
                  icon={FiBookOpen}
                  label="12th Percentage"
                  value={
                    selectedStudent.twelfthPercentage == null
                      ? "—"
                      : `${selectedStudent.twelfthPercentage}%`
                  }
                />
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-[#0b1f3a]">
                  Additional Information
                </h3>

                <DetailItem
                  icon={FiBookOpen}
                  label="Skills"
                  value={
                    Array.isArray(selectedStudent.skills)
                      ? selectedStudent.skills
                          .map((skill) =>
                            typeof skill === "string"
                              ? skill
                              : skill.skillName
                          )
                          .filter(Boolean)
                          .join(", ") || "—"
                      : "—"
                  }
                />

                <DetailItem
                  icon={FiBookOpen}
                  label="LinkedIn"
                  value={selectedStudent.linkedin || "—"}
                />
                <DetailItem
                  icon={FiBookOpen}
                  label="GitHub"
                  value={selectedStudent.github || "—"}
                />
                <DetailItem
                  icon={FiBookOpen}
                  label="Portfolio"
                  value={selectedStudent.portfolio || "—"}
                />
              </div>

              <button
                type="button"
                onClick={() => setSelectedStudent(null)}
                className="w-full rounded-lg bg-[#ffc52c] px-4 py-3 font-bold text-[#0b1f3a] transition hover:bg-amber-400"
              >
                Close Details
              </button>
            </div>
          </section>
        </div>
      )}
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

function StatusBadge({ status }) {
  const styles =
    status === "Complete"
      ? "bg-emerald-50 text-emerald-700"
      : "bg-amber-50 text-amber-700";

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${styles}`}
    >
      {status}
    </span>
  );
}

function DetailItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
      <div className="mb-2 flex items-center gap-2 text-slate-500">
        <Icon size={16} />
        <span className="text-xs font-medium">{label}</span>
      </div>
      <p className="break-words text-sm font-semibold text-[#0b1f3a]">
        {value ?? "—"}
      </p>
    </div>
  );
}

export default Student;
