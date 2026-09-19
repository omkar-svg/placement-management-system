import { Link } from 'react-router-dom'

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

function StudentIcon() {
  return (
    <svg
      className="h-10 w-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" />
      <path d="M6 10.2V15c0 1.8 2.7 3.5 6 3.5s6-1.7 6-3.5v-4.8" />
      <path d="M21.5 8v6" />
    </svg>
  )
}

function AdminIcon() {
  return (
    <svg
      className="h-10 w-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 4V2.5h8V4" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  )
}

function GetStarted() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#0b1f3a]">

      {/* Navbar */}
      <header className="border-b border-slate-200 bg-[#07152d]">
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">

          <Link to="/" className="flex items-center gap-3">
            <img
              src="/DKTE-LOGO.png"
              alt="DKTE Logo"
              className="h-10 w-auto sm:h-11"
            />

            <div className="hidden border-l border-white/25 pl-3 leading-tight sm:block">
              <p className="text-xs font-bold text-white">
                DKTE Society&apos;s
              </p>
              <p className="text-[10px] font-semibold text-white">
                Textile & Engineering Institute
              </p>
              <p className="text-[9px] text-slate-300">
                Ichalkaranji
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="text-sm font-semibold text-white transition hover:text-[#ffc52c]"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="px-5 py-16 sm:px-8 lg:py-24">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex rounded-full bg-[#ffc52c]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#8a6500]">
            Placement Management System
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#07152d] sm:text-5xl lg:text-6xl">
            Get Started
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Choose your role to access the placement management system
            and get started with your placement journey.
          </p>
        </div>

        {/* Role Cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-7 md:grid-cols-3">

          {/* Student */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#ffc52c] hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffc52c]/15 text-[#a17b00] transition group-hover:bg-[#ffc52c] group-hover:text-[#07152d]">
              <StudentIcon />
            </div>

            <h2 className="mt-6 text-xl font-bold text-[#07152d]">
              Student
            </h2>

            <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
              Create your profile, discover placement opportunities,
              check eligibility and track your placement journey.
            </p>

            <Link
              to="/login"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ffc52c] px-5 py-3.5 text-sm font-bold text-[#07152d] transition hover:bg-[#ffd45c]"
            >
              Continue as Student
              <ArrowIcon />
            </Link>
          </div>

          {/* TPO */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0b1f3a] hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b1f3a] text-white">
              <AdminIcon />
            </div>

            <h2 className="mt-6 text-xl font-bold text-[#07152d]">
              TPO
            </h2>

            <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
              Manage students, companies, placement drives,
              eligibility criteria and placement activities.
            </p>

            <Link
              to="/login"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b1f3a] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#12345f]"
            >
              Continue as TPO
              <ArrowIcon />
            </Link>
          </div>

          {/* Admin */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6d28d9] hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6d28d9]/10 text-[#6d28d9]">
              <AdminIcon />
            </div>

            <h2 className="mt-6 text-xl font-bold text-[#07152d]">
              Admin
            </h2>

            <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
              Manage the platform, users, system settings and
              overall placement management operations.
            </p>

            <Link
              to="/login"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#6d28d9] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#5b21b6]"
            >
              Continue as Admin
              <ArrowIcon />
            </Link>
          </div>

        </div>

        {/* Bottom info */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#ffc52c]/30 bg-white p-6 text-center shadow-sm">
          <p className="text-sm leading-6 text-slate-600">
            Already have an account?
            <Link
              to="/login"
              className="ml-1 font-bold text-[#0b1f3a] underline decoration-[#ffc52c] decoration-2 underline-offset-4 hover:text-[#a17b00]"
            >
              Sign In
            </Link>
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#07152d] px-5 py-8 text-center text-sm text-slate-300">
        <p>
          © {new Date().getFullYear()} DKTE Society&apos;s Textile &
          Engineering Institute. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default GetStarted