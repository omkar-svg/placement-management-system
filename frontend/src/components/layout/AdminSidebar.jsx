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
import './AdminSidebar.css';

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

// Backend Role enum -> label shown under the name.
const ROLE_LABELS = { ADMIN: 'Admin', TPO: 'TPO', STUDENT: 'Student' };

function AdminSidebar() {
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
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__spacer" />

      <div className="sidebar__profile">
        <Avatar name={user?.name || 'Admin'} size={64} online />
        <p className="sidebar__profile-name">{user?.name || 'Admin'}</p>
        <p className="sidebar__profile-role">{ROLE_LABELS[user?.role] ?? user?.role ?? 'Admin'}</p>
      </div>

      <div className="sidebar__divider" />

      <button type="button" className="sidebar__logout" onClick={logout}>
        <FaSignOutAlt aria-hidden="true" />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default AdminSidebar;
