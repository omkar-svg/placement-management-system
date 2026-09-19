import { useState } from "react";
import { Link } from "react-router-dom";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Roles", path: "/roles" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const features = [
  {
    title: "Student Management",
    description:
      "Create profiles, add skills, upload resumes and track placement progress.",
    type: "student",
  },
  {
    title: "Company Management",
    description:
      "Manage companies, job roles, CTC, locations and hiring processes.",
    type: "company",
  },
  {
    title: "Placement Drives",
    description:
      "Create drives, set schedules, venues, deadlines and job types.",
    type: "drive",
  },
  {
    title: "Smart Eligibility",
    description:
      "Automatic eligibility based on CGPA, backlogs, branch and graduation year.",
    type: "eligibility",
  },
  {
    title: "Analytics & Reports",
    description:
      "Get insights, branch-wise reports and analytics with useful reports.",
    type: "analytics",
  },
  {
    title: "Notifications",
    description:
      "Get real-time updates on drives, shortlists and important announcements.",
    type: "notification",
  },
];

const placementSteps = [
  {
    number: "01",
    title: "Create Profile",
    description: "Add academic and personal details.",
    type: "profile",
  },
  {
    number: "02",
    title: "Discover Opportunities",
    description: "Browse drives and companies looking for talent.",
    type: "opportunities",
  },
  {
    number: "03",
    title: "Check Eligibility",
    description: "System checks eligibility based on configured rules.",
    type: "eligibility",
  },
  {
    number: "04",
    title: "Appear & Track",
    description: "Attend drives and track your placement status.",
    type: "track",
  },
  {
    number: "05",
    title: "Get Placed",
    description:
      "Move ahead in the process and achieve your career goals.",
    type: "placed",
  },
];

const roles = [
  {
    title: "Student",
    description:
      "Build your profile, find opportunities and track your placement journey.",
    type: "student",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85",
    points: [
      "Profile & Resume",
      "Find Drives",
      "Check Eligibility",
      "Track Placement Status",
    ],
  },
  {
    title: "TPO",
    description:
      "Manage placements efficiently and connect the right talent with companies.",
    type: "tpo",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85",
    points: [
      "Manage Students",
      "Manage Companies",
      "Create Drives",
      "Analytics & Reports",
    ],
  },
  {
    title: "Admin",
    description:
      "Oversee the entire placement ecosystem and maintain platform integrity.",
    type: "admin",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
    points: [
      "User Management",
      "System Settings",
      "Reports & Analytics",
      "Audit & Logs",
    ],
  },
];

const statistics = [
  ["500+", "Students"],
  ["180+", "Placed Students"],
  ["36%", "Placement Rate"],
  ["42+", "Recruiting Companies"],
  ["25+", "Placement Drives"],
  ["100%", "Secure Platform"],
];

/* ================= ICONS ================= */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
    </svg>
  );
}

function FeatureIcon({ type }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
  };

  if (type === "student") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20c.5-3.3 2.5-5 6-5s5.5 1.7 6 5" />
      </svg>
    );
  }

  if (type === "company") {
    return (
      <svg {...props}>
        <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
        <path d="M15 10h4a1 1 0 0 1 1 1v10" />
        <path d="M8 8h3M8 12h3M8 16h3M17 14h1M17 17h1" />
        <path d="M2 21h20" />
      </svg>
    );
  }

  if (type === "drive") {
    return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="M8 14h3M13 14h3M8 17h3" />
      </svg>
    );
  }

  if (type === "eligibility") {
    return (
      <svg {...props}>
        <path d="M12 3 20 6v5c0 5-3.2 8.3-8 10-4.8-1.7-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.3 2.3 4.7-5" />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg {...props}>
        <path d="M4 19V5M4 19h17" />
        <path d="m7 15 4-4 3 2 6-7" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
      <path d="M10 21h4" />
    </svg>
  );
}

function StepIcon({ type }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
  };

  if (type === "profile") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20c.5-3.5 2.5-5 6-5s5.5 1.5 6 5" />
      </svg>
    );
  }

  if (type === "opportunities") {
    return (
      <svg {...props}>
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M9 7V5h6v2M8 12h8" />
      </svg>
    );
  }

  if (type === "eligibility") {
    return (
      <svg {...props}>
        <path d="M12 3 20 6v5c0 5-3.2 8.3-8 10-4.8-1.7-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.3 2.3 4.7-5" />
      </svg>
    );
  }

  if (type === "track") {
    return (
      <svg {...props}>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="m12 3 2.3 5 5.5.7-4 3.8 1 5.5-4.8-2.6-4.8 2.6 1-5.5-4-3.8L9.7 8 12 3Z" />
    </svg>
  );
}

/* ================= NAVBAR ================= */

function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07152d] shadow-lg">
      <div className="mx-auto flex h-[78px] max-w-[1320px] items-center justify-between px-4 sm:px-7 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/DKTE-LOGO.png"
            alt="DKTE Logo"
            className="h-10 w-auto sm:h-11"
          />

          <div className="hidden border-l border-white/25 pl-3 leading-tight md:block">
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

        <nav className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="rounded-lg px-3 py-3 text-[13px] font-semibold text-white transition hover:bg-white/10 hover:text-[#ffc52c] xl:px-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {/* THEME TOGGLE */}
          <button
            type="button"
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            onClick={() => setDarkMode((current) => !current)}
            className="flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 text-white transition hover:border-[#ffc52c] hover:text-[#ffc52c]"
          >
            {darkMode ? <MoonIcon /> : <SunIcon />}

            <span className="text-[11px] font-semibold">
              {darkMode ? "Dark" : "Light"}
            </span>

            <span className="relative h-5 w-9 rounded-full bg-white/20">
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-[#ffc52c] transition-all ${
                  darkMode ? "left-[17px]" : "left-0.5"
                }`}
              />
            </span>
          </button>

          {/* LOGIN */}
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:border-[#ffc52c] hover:bg-white hover:text-[#07152d]"
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          aria-label={
            mobileMenuOpen ? "Close menu" : "Open menu"
          }
          onClick={() =>
            setMobileMenuOpen((current) => !current)
          }
          className="rounded-lg border border-white/25 p-2 text-white hover:bg-white/10 lg:hidden"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#07152d] px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:text-[#ffc52c]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full border-2 border-white/70 px-4 py-3 text-xs font-bold text-white transition hover:bg-white hover:text-[#07152d]"
            >
              Login
            </Link>
          </div>

          <button
            type="button"
            onClick={() =>
              setDarkMode((current) => !current)
            }
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-xs font-semibold text-white"
          >
            {darkMode ? <MoonIcon /> : <SunIcon />}
            {darkMode ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      )}
    </header>
  );
}

/* ================= HERO ================= */

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07152d] pt-[78px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2000&q=90"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07152d] via-[#07152d]/90 to-[#07152d]/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07152d] via-transparent to-[#07152d]/20" />
      </div>

      <div className="relative mx-auto flex min-h-[620px] max-w-[1320px] items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-[650px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffc52c]/30 bg-[#ffc52c]/10 px-4 py-2 text-[10px] font-bold tracking-[0.12em] text-[#ffc52c] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffc52c]" />
            DKTE Placement Management System
          </div>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[62px]">
            Connecting Talent.
            <span className="block text-[#ffc52c]">
              Creating Futures.
            </span>
          </h1>

          <p className="mt-6 max-w-[580px] text-base leading-7 text-slate-200 sm:text-lg">
            A unified platform to manage students, companies,
            placement drives, eligibility and placement progress
            with ease and efficiency.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* LOGIN */}
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ffc52c] px-7 py-4 text-sm font-bold text-[#07152d] transition hover:-translate-y-1 hover:bg-[#ffd45c]"
            >
              Login
              <ArrowIcon />
            </Link>

            {/* EXPLORE FEATURES */}
            <Link
              to="/features"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/50 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Explore Features
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-y-5 border-t border-white/15 pt-7 sm:grid-cols-4 sm:gap-0">
            {[
              ["500+", "Students"],
              ["180+", "Placed"],
              ["42+", "Companies"],
              ["36%", "Placement Rate"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-white/10 sm:border-r sm:px-5 first:sm:pl-0 last:sm:border-r-0"
              >
                <p className="text-xl font-bold text-[#ffc52c]">
                  {value}
                </p>

                <p className="mt-1 text-xs text-slate-300">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto -mt-2 max-w-[1080px] px-5 pb-7 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#111f3a] px-5 py-4 shadow-2xl sm:flex-row sm:px-7">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffc52c] text-sm text-[#07152d]">
              !
            </span>

            <div>
              <p className="text-[10px] font-semibold tracking-wider text-[#ffc52c] uppercase">
                Upcoming Placement Drive
              </p>

              <p className="mt-1 text-xs text-white sm:text-sm">
                TCS Digital Campus Drive on 25 May 2024
              </p>
            </div>
          </div>

          <Link
            to="/placement-drives"
            className="flex items-center gap-2 text-xs font-bold text-[#ffc52c] hover:text-white"
          >
            View All Drives
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURES ================= */

function FeatureCard({ feature, darkMode }) {
  const isAnalytics = feature.type === "analytics";

  return (
    <article
      className={`group rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        darkMode
          ? "border-slate-700 bg-[#111f3a]"
          : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
          isAnalytics
            ? "bg-purple-100 text-purple-700"
            : darkMode
              ? "bg-[#1d355d] text-[#ffc52c]"
              : "bg-[#edf3fb] text-[#0b2854]"
        }`}
      >
        <FeatureIcon type={feature.type} />
      </div>

      <h3
        className={`mt-5 text-lg font-bold ${
          darkMode ? "text-white" : "text-[#0b1f3a]"
        }`}
      >
        {feature.title}
      </h3>

      <p
        className={`mt-3 text-sm leading-6 ${
          darkMode ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {feature.description}
      </p>

      <Link
        to="/features"
        className={`mt-5 inline-flex items-center gap-2 text-xs font-bold ${
          darkMode
            ? "text-[#ffc52c]"
            : "text-[#0b2854] group-hover:text-[#a17b00]"
        }`}
      >
        Explore
        <ArrowIcon />
      </Link>
    </article>
  );
}

function FeaturesSection({ darkMode }) {
  return (
    <section
      className={
        darkMode
          ? "bg-[#0b1f3a] py-20"
          : "bg-[#f7f9fc] py-20"
      }
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#ffc52c] uppercase">
            Powerful Modules
          </p>

          <h2
            className={`mt-3 text-3xl font-bold sm:text-4xl ${
              darkMode ? "text-white" : "text-[#0b1f3a]"
            }`}
          >
            Everything You Need in One Platform
          </h2>

          <p
            className={`mt-4 text-sm leading-6 ${
              darkMode ? "text-slate-300" : "text-slate-500"
            }`}
          >
            A centralized system designed to simplify every stage
            of campus placements.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= HOW IT WORKS ================= */

function PlacementStep({ step }) {
  return (
    <div className="relative flex flex-1 flex-col items-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-[#17274b] text-[#ffc52c]">
        <StepIcon type={step.type} />
      </div>

      <span className="mt-3 text-[9px] font-bold text-[#ffc52c]">
        {step.number}
      </span>

      <h3 className="mt-2 text-sm font-bold text-white">
        {step.title}
      </h3>

      <p className="mt-2 max-w-[160px] text-xs leading-5 text-slate-300">
        {step.description}
      </p>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="bg-[#0b1f3a] py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#07152d] to-[#211653] px-6 py-12 shadow-2xl sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[270px_1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#ffc52c] uppercase">
                How It Works
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                From Profile to Placement
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                A simple five-step journey from creating your profile
                to achieving your placement goal.
              </p>

              <Link
                to="/how-it-works"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ffc52c] px-6 py-3 text-xs font-bold text-[#07152d]"
              >
                Learn More
                <ArrowIcon />
              </Link>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:flex lg:gap-0">
              {placementSteps.map((step) => (
                <PlacementStep
                  key={step.number}
                  step={step}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= ROLES ================= */

function getRoleTheme(type, darkMode) {
  if (type === "student") {
    return {
      card: darkMode ? "bg-[#17274b]" : "bg-[#fff8e5]",
      title: "text-white",
      text: darkMode
        ? "text-slate-300"
        : "text-slate-600",
      button: "bg-[#ffc52c] text-[#07152d]",
    };
  }

  return {
    card: "bg-[#0b2854]",
    title: "text-white",
    text: "text-slate-300",
    button: "bg-white/10 text-white",
  };
}

function RoleCard({ role, darkMode }) {
  const theme = getRoleTheme(role.type, darkMode);

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-slate-200/20 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.card}`}
    >
      <div className="grid min-h-[300px] grid-cols-[40%_60%]">
        <div className="overflow-hidden">
          <img
            src={role.image}
            alt={`${role.title} role`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col p-5">
          <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">
            Placement Role
          </span>

          <h3
            className={`mt-2 text-xl font-bold ${theme.title}`}
          >
            {role.title}
          </h3>

          <p
            className={`mt-2 text-xs leading-5 ${theme.text}`}
          >
            {role.description}
          </p>

          <ul className="mt-4 space-y-2">
            {role.points.map((point) => (
              <li
                key={point}
                className={`flex items-center gap-2 text-[10px] font-medium ${theme.text}`}
              >
                <span className="text-[#ffc52c]">✓</span>
                {point}
              </li>
            ))}
          </ul>

          <Link
            to="/roles"
            className={`mt-auto flex h-8 w-8 items-center justify-center self-end rounded-full ${theme.button}`}
          >
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

function RolesSection({ darkMode }) {
  return (
    <section
      className={
        darkMode
          ? "bg-[#07152d] py-20"
          : "bg-white py-20"
      }
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#ffc52c] uppercase">
            One Platform. Three Roles.
          </p>

          <h2
            className={`mt-3 text-3xl font-bold sm:text-4xl ${
              darkMode ? "text-white" : "text-[#0b1f3a]"
            }`}
          >
            Built for Students, TPOs and Admins
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {roles.map((role) => (
            <RoleCard
              key={role.title}
              role={role}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= STATISTICS ================= */

function StatisticsSection() {
  return (
    <section className="bg-[#07152d] py-10">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {statistics.map(([value, label]) => (
            <div
              key={label}
              className="px-4 py-4 text-center"
            >
              <p className="text-2xl font-bold text-[#ffc52c] sm:text-3xl">
                {value}
              </p>

              <p className="mt-1 text-[10px] text-slate-300 sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */

function AboutSection({ darkMode }) {
  return (
    <section
      className={
        darkMode
          ? "bg-[#0b1f3a] py-20"
          : "bg-[#f7f9fc] py-20"
      }
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#ffc52c] uppercase">
            About Us
          </p>

          <h2
            className={`mt-3 text-3xl font-bold sm:text-4xl ${
              darkMode ? "text-white" : "text-[#0b1f3a]"
            }`}
          >
            Simplifying the Placement Journey
          </h2>

          <p
            className={`mt-5 max-w-xl text-sm leading-7 ${
              darkMode
                ? "text-slate-300"
                : "text-slate-600"
            }`}
          >
            The DKTE Placement Management System brings students,
            placement activities, companies and administrators
            together on one organized platform.
          </p>

          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0b1f3a] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#12345f]"
          >
            Learn About Us
            <ArrowIcon />
          </Link>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-xl">
          <div className="rounded-2xl bg-[#0b1f3a] p-6">
            <p className="text-[9px] tracking-widest text-slate-400 uppercase">
              Placement Dashboard
            </p>

            <h3 className="mt-2 text-lg font-bold text-white">
              Placement Overview
            </h3>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["500+", "Students"],
                ["180+", "Placed"],
                ["42+", "Companies"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl bg-white/10 p-3 text-center"
                >
                  <p className="text-lg font-bold text-[#ffc52c]">
                    {value}
                  </p>

                  <p className="mt-1 text-[8px] text-slate-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex h-28 items-end gap-2 rounded-xl bg-white/5 p-4">
              {[35, 48, 42, 65, 58, 78, 70, 90].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-[#ffc52c]"
                    style={{ height: `${height}px` }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= FINAL CTA ================= */

function FinalCTA() {
  return (
    <section className="bg-[#211653]">
      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center lg:px-10">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#ffc52c] uppercase">
            Welcome to the Placement Portal
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Ready to Access Your Placement Portal?
          </h2>

          <p className="mt-2 text-sm text-slate-300">
            Login to continue with your placement journey.
          </p>
        </div>

        <Link
          to="/login"
          className="inline-flex items-center gap-3 rounded-full bg-[#ffc52c] px-7 py-4 text-sm font-bold text-[#07152d] transition hover:bg-[#ffd45c]"
        >
          Login
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="bg-[#07152d] text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/DKTE-LOGO.png"
              alt="DKTE Logo"
              className="h-10 w-auto"
            />

            <p className="mt-4 text-xs font-bold">
              DKTE Society&apos;s
            </p>

            <p className="mt-1 text-xs text-slate-300">
              Textile & Engineering Institute, Ichalkaranji
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-xs text-slate-400 hover:text-[#ffc52c]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">
              Features
            </h3>

            <ul className="mt-4 space-y-2">
              {features.map((feature) => (
                <li key={feature.title}>
                  <Link
                    to="/features"
                    className="text-xs text-slate-400 hover:text-[#ffc52c]"
                  >
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">
              Support
            </h3>

            <ul className="mt-4 space-y-2">
              {[
                "Help Center",
                "Documentation",
                "Privacy Policy",
                "Terms & Conditions",
                "Contact Support",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/contact"
                    className="text-xs text-slate-400 hover:text-[#ffc52c]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-[10px] text-slate-500">
            © 2024 DKTE Society&apos;s Textile & Engineering
            Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ================= MAIN PAGE ================= */

function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode
            ? "bg-[#07152d] text-white"
            : "bg-white text-[#0b1f3a]"
        }`}
      >
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <HeroSection />

        <FeaturesSection darkMode={darkMode} />

        <HowItWorksSection />

        <RolesSection darkMode={darkMode} />

        <StatisticsSection />

        <AboutSection darkMode={darkMode} />

        <FinalCTA />

        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;