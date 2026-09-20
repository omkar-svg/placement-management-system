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

const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/admin-dashboard',
    icon: FaHome,
  },
  {
    id: 'main-dashboard',
    label: 'Main Dashboard',
    path: '/main-dashboard',
    icon: FaUsers,
  },
  {
    id: 'tpo-accounts',
    label: 'TPO Accounts',
    path: '/tpo-accounts',
    icon: FaUniversity,
  },
  {
    id: 'system-settings',
    label: 'System Settings',
    path: '/system-settings',
    icon: FaCog,
  },
  {
    id: 'reports',
    label: 'Reports',
    path: '/reports',
    icon: FaFileAlt,
  },
  {
    id: 'audit-logs',
    label: 'Audit Logs',
    path: '/audit-logs',
    icon: FaHistory,
  },
];

function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <FaGraduationCap
          className="sidebar__brand-icon"
          aria-hidden="true"
        />
        <span className="sidebar__brand-text">
          Admin Dashboard
        </span>
      </div>

      <nav>
        <ul className="sidebar__nav">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar__nav-item${
                      isActive
                        ? ' sidebar__nav-item--active'
                        : ''
                    }`
                  }
                >
                  <Icon
                    className="sidebar__nav-icon"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar__spacer" />

      <div className="sidebar__profile">
        <Avatar
          name={user?.name || 'Admin'}
          size={64}
          online
        />
        <p className="sidebar__profile-name">
          {user?.name || 'Admin'}
        </p>
        <p className="sidebar__profile-role">
          {user?.role || 'Admin'}
        </p>
      </div>

      <div className="sidebar__divider" />

      <button
        type="button"
        className="sidebar__logout"
        onClick={logout}
      >
        <FaSignOutAlt aria-hidden="true" />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;