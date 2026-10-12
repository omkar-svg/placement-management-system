
import React, { useMemo, useState } from "react";
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
} from "react-icons/fi";

// Temporary frontend data.
// Replace with the real API response when an endpoint becomes available.
const initialStudents = [
  {
    id: 1,
    prn: "2024CSE001",
    name: "Rahul Patil",
    email: "rahul.patil@example.com",
    phone: "9876543210",
    branch: "CSE",
    year: 3,
    cgpa: 8.7,
    backlogs: 0,
    graduationYear: 2027,
    status: "Eligible",
  },
  {
    id: 2,
    prn: "2024CSE002",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "9876543211",
    branch: "CSE",
    year: 3,
    cgpa: 9.1,
    backlogs: 0,
    graduationYear: 2027,
    status: "Eligible",
  },
  {
    id: 3,
    prn: "2024IT003",
    name: "Amit Desai",
    email: "amit.desai@example.com",
    phone: "9876543212",
    branch: "IT",
    year: 3,
    cgpa: 7.8,
    backlogs: 1,
    graduationYear: 2027,
    status: "Review Required",
  },
  {
    id: 4,
    prn: "2024ENTC004",
    name: "Sneha Kulkarni",
    email: "sneha.kulkarni@example.com",
    phone: "9876543213",
    branch: "ENTC",
    year: 3,
    cgpa: 8.4,
    backlogs: 0,
    graduationYear: 2027,
    status: "Eligible",
  },
  {
    id: 5,
    prn: "2024CSE005",
    name: "Rohan Jadhav",
    email: "rohan.jadhav@example.com",
    phone: "9876543214",
    branch: "CSE",
    year: 3,
    cgpa: 6.9,
    backlogs: 2,
    graduationYear: 2027,
    status: "Review Required",
  },
  {
    id: 6,
    prn: "2023ME006",
    name: "Neha Patil",
    email: "neha.patil@example.com",
    phone: "9876543215",
    branch: "Mechanical",
    year: 4,
    cgpa: 8.2,
    backlogs: 0,
    graduationYear: 2026,
    status: "Eligible",
  },
];

const branches = ["All Branches", "CSE", "IT", "ENTC", "Mechanical"];

function Student() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [branch, setBranch] = useState("All Branches");
  const [eligibility, setEligibility] = useState("All Statuses");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(query) ||
        student.prn.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query) ||
        student.branch.toLowerCase().includes(query);

      const matchesBranch =
        branch === "All Branches" || student.branch === branch;

      const matchesEligibility =
        eligibility === "All Statuses" ||
        student.status === eligibility;

      return matchesSearch && matchesBranch && matchesEligibility;
    });
  }, [students, search, branch, eligibility]);

  const eligibleCount = students.filter(
    (student) => student.status === "Eligible"
  ).length;

  const averageCgpa = students.length
    ? (
        students.reduce((sum, student) => sum + student.cgpa, 0) /
        students.length
      ).toFixed(2)
    : "0.00";

  const handleStatusChange = (id, newStatus) => {
    setStudents((current) =>
      current.map((student) =>
        student.id === id
          ? { ...student, status: newStatus }
          : student
      )
    );

    setSelectedStudent((current) =>
      current?.id === id
        ? { ...current, status: newStatus }
        : current
    );
  };

  const resetFilters = () => {
    setSearch("");
    setBranch("All Branches");
    setEligibility("All Statuses");
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
            View student profiles, academic performance and eligibility.
          </p>
        </div>

        <span className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
          <FiUsers size={18} />
          Demo Data
        </span>
      </header>

      {/* Summary cards */}
      <section className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          icon={FiUsers}
          label="Total Students"
          value={students.length}
          color="bg-blue-50 text-blue-700"
        />

        <SummaryCard
          icon={FiAward}
          label="Eligible Students"
          value={eligibleCount}
          color="bg-emerald-50 text-emerald-700"
        />

        <SummaryCard
          icon={FiBookOpen}
          label="Branches"
          value={new Set(students.map((student) => student.branch)).size}
          color="bg-purple-50 text-purple-700"
        />

        <SummaryCard
          icon={FiAward}
          label="Average CGPA"
          value={averageCgpa}
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
              placeholder="Search name, PRN or email..."
              className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#0b1f3a] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <select
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#0b1f3a]"
          >
            {branches.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={eligibility}
            onChange={(event) => setEligibility(event.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#0b1f3a]"
          >
            <option value="All Statuses">All Statuses</option>
            <option value="Eligible">Eligible</option>
            <option value="Review Required">Review Required</option>
          </select>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-bold text-[#0b1f3a]">
              {filteredStudents.length}
            </span>{" "}
            of {students.length} sample students
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
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="transition hover:bg-slate-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] font-bold text-[#ffc52c]">
                        {student.name
                          .split(" ")
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join("")}
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
                    <StatusBadge status={student.status} />
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
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-16 text-center">
                    <FiUsers className="mx-auto text-3xl text-slate-400" />
                    <p className="mt-3 font-bold text-[#0b1f3a]">
                      No students found
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Try changing your search or filters.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mt-5 text-center text-xs text-slate-400">
        Demo data only · Changes are temporary and are not saved to a database.
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
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
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
                  value={`Year ${selectedStudent.year}`}
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
                  icon={FiCalendarIcon}
                  label="Graduation Year"
                  value={selectedStudent.graduationYear}
                />
              </div>

              <div className="border-t border-slate-100 pt-5">
                <label
                  htmlFor="student-status"
                  className="mb-2 block text-sm font-bold text-[#0b1f3a]"
                >
                  Demo Eligibility Status
                </label>

                <select
                  id="student-status"
                  value={selectedStudent.status}
                  onChange={(event) =>
                    handleStatusChange(
                      selectedStudent.id,
                      event.target.value
                    )
                  }
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#0b1f3a]"
                >
                  <option value="Eligible">Eligible</option>
                  <option value="Review Required">Review Required</option>
                </select>

                <p className="mt-2 text-xs text-slate-500">
                  This changes only the local demo data.
                </p>
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
    status === "Eligible"
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
        {value}
      </p>
    </div>
  );
}

// Small calendar icon wrapper for the student details.
function FiCalendarIcon(props) {
  return <FiBookOpen {...props} />;
}

export default Student;
