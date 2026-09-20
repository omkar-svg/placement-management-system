import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaGraduationCap,
  FaHome,
  FaUsers,
  FaUniversity,
  FaCog,
  FaFileAlt,
  FaHistory,
  FaSignOutAlt,
} from 'react-icons/fa';
import Avatar from '../common/Avatar.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import './Sidebar.css';

// ============================================================
// SHARED NAV LIST
// This is shared UI. When a teammate adds a new page, they add ONE
// object here (and a matching <Route> in App.jsx) rather than
// touching anyone else's code.
// ============================================================
const navItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/admin-dashboard', icon: FaHome },
  { id: 'main-dashboard', label: 'Main Dashboard', path: '/main-dashboard', icon: FaUsers },
  { id: 'tpo-accounts', label: 'TPO Accounts', path: '/tpo-accounts', icon: FaUniversity },
  { id: 'system-settings', label: 'System Settings', path: '/system-settings', icon: FaCog },
  { id: 'reports', label: 'Reports', path: '/reports', icon: FaFileAlt },
  { id: 'audit-logs', label: 'Audit Logs', path: '/audit-logs', icon: FaHistory },
];

function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <FaGraduationCap className="sidebar__brand-icon" aria-hidden="true" />
        <span className="sidebar__brand-text">Admin Dashboard</span>
      </div>

      <nav>
        <ul className="sidebar__nav">
          {navItems.map((item) => (
            <li key={item.id}>
              {/* NavLink automatically gets the active class when its
                  path matches the current route — no manual state needed. */}
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar__nav-item${isActive ? ' sidebar__nav-item--active' : ''}`
                }
              >
                <item.icon className="sidebar__nav-icon" aria-hidden="true" />
                <span>{item.label}</span>
import { NavLink } from 'react-router-dom'

/**
 * Displays the navigation sidebar for the student dashboard.
 *
 * @returns {JSX.Element} Student dashboard sidebar.
 */
function Sidebar() {
  const navigationItems = [
    {
      label: 'Dashboard',
      path: '/student/dashboard',
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H4.5A1.5 1.5 0 0 1 3 19.5v-9Z" />
        </svg>
      ),
    },
    {
      label: 'My Profile',
      path: '/student/profile',
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="3.5" />
          <path
            strokeLinecap="round"
            d="M5 20c.8-3.2 3.3-5 7-5s6.2 1.8 7 5"
          />
        </svg>
      ),
    },
    {
      label: 'Placement Drives',
      path: '/student/drives',
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path
            strokeLinecap="round"
            d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18"
          />
        </svg>
      ),
    },
    {
      label: 'My Applications',
      path: '/student/applications',
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path
            strokeLinecap="round"
            d="M9 7h6M9 11h6M9 15h4"
          />
        </svg>
      ),
    },
    {
      label: 'My Placements',
      path: '/student/placements',
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12 3 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 3Z"
          />
        </svg>
      ),
    },
    {
      label: 'Eligibility',
      path: '/student/eligibility',
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3 20 6v5c0 4.5-3 8-8 10-5-2-8-5.5-8-10V6l8-3Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12 2 2 4-4"
          />
        </svg>
      ),
    },
    {
      label: 'Notifications',
      path: '/student/notifications',
      badge: 3,
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"
          />
        </svg>
      ),
    },
    {
      label: 'Resources',
      path: '/student/resources',
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4V4Z"
          />
          <path strokeLinecap="round" d="M9 8h6M9 12h6" />
        </svg>
      ),
    },
    {
      label: 'My Resume',
      path: '/student/resume',
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 3h9l4 4v14H6V3Z"
          />
          <path
            strokeLinecap="round"
            d="M14 3v5h5M9 12h6M9 16h5"
          />
        </svg>
      ),
    },
    {
      label: 'Settings',
      path: '/student/settings',
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-2.6V20a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.6-1H6v-2.6h.4A1.7 1.7 0 0 0 8 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2H15V5a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v2.6H21a1.7 1.7 0 0 0-1.6 1.4Z"
          />
        </svg>
      ),
    },
  ]

  return (
    <aside className="hidden h-screen w-70 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
      {/* Branding */}
      <div className="flex h-[92px] shrink-0 items-center bg-gradient-to-br from-primary-700 to-primary-600 px-5 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
            <img
              src="/DKTE-LOGO.png"
              alt="DKTE Logo"
              className="h-9 w-9 object-contain"
            />
          </div>

          <div>
            <h1 className="text-[22px] font-bold leading-none">
              PMS
            </h1>

            <p className="mt-1 whitespace-nowrap text-[10px] font-medium text-primary-100">
              Placement Management System
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-7">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex h-11 items-center gap-3 rounded-xl px-3.5 text-[14px] font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-800 hover:bg-slate-50 hover:text-primary-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center ${
                        isActive
                          ? 'text-primary-600'
                          : 'text-slate-600'
                      }`}
                    >
                      {item.icon}
                    </span>

                    <span className="min-w-0 flex-1 whitespace-nowrap">
                      {item.label}
                    </span>

                    {item.badge !== undefined && (
                      <span className="flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 px-1.5 text-[11px] font-semibold leading-none text-white">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__spacer" />

      <div className="sidebar__profile">
        <Avatar name={user.name} size={64} online />
        <p className="sidebar__profile-name">{user.name}</p>
        <p className="sidebar__profile-role">{user.role}</p>
      </div>

      <div className="sidebar__divider" />

      <button type="button" className="sidebar__logout" onClick={logout}>
        <FaSignOutAlt aria-hidden="true" />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;

        {/* Logout */}
        <div className="my-5 border-t border-slate-200" />

        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `flex h-11 items-center gap-3 rounded-xl px-3.5 text-[14px] font-medium transition-colors ${
              isActive
                ? 'bg-primary-50 text-primary-700'
                : 'text-slate-800 hover:bg-slate-50 hover:text-primary-700'
            }`
          }
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center text-slate-600">
            <svg
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 17l5-5-5-5M15 12H3"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"
              />
            </svg>
          </span>

          Logout
        </NavLink>
      </nav>

      {/* Promotional card */}
      <div className="shrink-0 px-4 pb-5">
        <div className="h-55 rounded-2xl border border-primary-100 bg-primary-50 px-4 py-5">
          <p className="text-[12px] font-medium leading-5 text-slate-700">
            Keep your profile updated and grab the best opportunities!
          </p>

          <div className="mt-3 flex h-36 items-end justify-center overflow-hidden rounded-xl bg-primary-100/40">
            <span className="mb-2 text-6xl leading-none">
              🏆
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
