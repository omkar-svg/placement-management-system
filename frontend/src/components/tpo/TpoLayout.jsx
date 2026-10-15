import React, { useState } from "react";
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
  FiMenu,
  FiX,
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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    setMenuOpen(false);
    await logout();
    navigate("/login", { replace: true });
  };

  const closeMenu = () => setMenuOpen(false);

  const renderNavItems = () =>
    navItems.map(({ label, path, icon: Icon }) => (
      <NavLink
        key={path}
        to={path}
        end={path === "/tpo/dashboard"}
        onClick={closeMenu}
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${isActive
            ? "bg-[#ffc52c] font-bold text-[#0b1f3a]"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
          }`
        }
      >
        <Icon size={19} />
        {label}
      </NavLink>
    ));

  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-[#0b1f3a] text-white md:flex">
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
          className="flex-1 space-y-2 overflow-y-auto p-4"
        >
          {renderNavItems()}
        </nav>

        <div className="px-4 pb-4">
          <div className="mb-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-semibold text-[#ffc52c]">Placement Office</p>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              Manage students, companies and campus recruitment.
            </p>
          </div>

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

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-[#0b1f3a] px-4 text-white md:hidden">
        <div>
          <h2 className="text-lg font-extrabold">
            DKTE <span className="text-[#ffc52c]">PLACEMENTS</span>
          </h2>
          <p className="text-[10px] text-slate-400">
            Training & Placement Portal
          </p>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 transition hover:bg-white/10"
        >
          {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </header>

      {/* Mobile sidebar overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="absolute inset-0 h-full w-full bg-black/50"
          />

          <aside className="absolute inset-y-0 right-0 flex h-full w-[min(300px,85vw)] flex-col bg-[#0b1f3a] text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <div>
                <h2 className="text-lg font-extrabold">
                  DKTE <span className="text-[#ffc52c]">PLACEMENTS</span>
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Training & Placement Portal
                </p>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="rounded-lg p-2 hover:bg-white/10"
              >
                <FiX size={22} />
              </button>
            </div>

            <nav
              aria-label="Mobile TPO navigation"
              className="flex-1 space-y-2 overflow-y-auto p-4"
            >
              {renderNavItems()}

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-[#ffc52c]">
                  Placement Office
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-300">
                  Manage students, companies and campus recruitment.
                </p>
              </div>
            </nav>

            {/* Logout pinned at the bottom */}
            <div className="border-t border-white/10 p-4">
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
        </div>
      )}

      {/* Page content */}
      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
}