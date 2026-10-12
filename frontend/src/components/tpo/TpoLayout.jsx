
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiUsers,
  FiBriefcase,
  FiTarget,
  FiFileText,
  FiTrendingUp,
  FiBell,
  FiLogOut,
} from "react-icons/fi";

import { useAuth } from "../../context/AuthContext";

const navItems = [
  { label: "Dashboard", path: "/tpo/dashboard", icon: FiGrid },
  { label: "Students", path: "/tpo/students", icon: FiUsers },
  { label: "Companies", path: "/tpo/companies", icon: FiBriefcase },
  { label: "Placement Drives", path: "/tpo/drives", icon: FiTarget },
  { label: "Applications", path: "/tpo/applications", icon: FiFileText },
  { label: "Placements", path: "/tpo/placements", icon: FiTrendingUp },
  { label: "Notifications", path: "/tpo/notifications", icon: FiBell },
];

export default function TpoLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      {/* Shared sidebar */}
      <aside className="w-full shrink-0 bg-[#0b1f3a] text-white md:sticky md:top-0 md:h-screen md:w-64">
        <div className="border-b border-white/10 px-6 py-6">
          <h2 className="text-xl font-extrabold">
            DKTE <span className="text-[#ffc52c]">PLACEMENTS</span>
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Training & Placement Portal
          </p>
        </div>

        <nav
          aria-label="TPO navigation"
          className="flex gap-2 overflow-x-auto p-4 md:block md:space-y-2"
        >
          {navItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/tpo/dashboard"}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#ffc52c] font-bold text-[#0b1f3a]"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={19} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden px-4 md:block">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-semibold text-[#ffc52c]">
              Placement Office
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              Manage students, companies and campus recruitment.
            </p>
          </div>
        </div>

        <div className="p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <FiLogOut size={19} />
            Logout
          </button>
        </div>
      </aside>

      {/* Each page renders here */}
      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
