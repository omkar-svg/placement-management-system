import React, { useState, useRef, useEffect } from 'react';
import { FaBell, FaEnvelope, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext.jsx';
import './DashboardHeader.css';

// Welcome hero + notification/mail/year controls for the Admin Dashboard
// page. Kept in components/admin-dashboard because the copy ("Welcome
// back...") is specific to this page, not a generic app-wide header.
function DashboardHeader({ academicYear, notificationCount, messageCount }) {
  const { user } = useAuth();
  const [openPanel, setOpenPanel] = useState(null); // 'bell' | 'mail' | 'year' | null
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenPanel(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const togglePanel = (panel) => setOpenPanel((current) => (current === panel ? null : panel));

  return (
    <header className="dashboard-header" ref={headerRef}>
      <div className="dashboard-header__hero">
        <div className="dashboard-header__welcome">
          <h1>
            Welcome back, <span className="dashboard-header__welcome-name">{user?.name || 'Admin'}</span>{' '}
            <span role="img" aria-label="waving hand">👋</span>
          </h1>
          <p>Here's your central admin overview.</p>
        </div>

        <div className="dashboard-header__controls">
          <div className="dashboard-header__control-wrap">
            <button
              type="button"
              className="dashboard-header__icon-btn"
              aria-label="Notifications"
              onClick={() => togglePanel('bell')}
            >
              <FaBell />
              {notificationCount > 0 && (
                <span className="dashboard-header__badge">{notificationCount}</span>
              )}
            </button>
            {openPanel === 'bell' && (
              <div className="dashboard-header__popover" role="menu">
                {notificationCount > 0
                  ? `${notificationCount} new notifications`
                  : 'No new notifications'}
              </div>
            )}
          </div>

          <div className="dashboard-header__control-wrap">
            <button
              type="button"
              className="dashboard-header__icon-btn"
              aria-label="Messages"
              onClick={() => togglePanel('mail')}
            >
              <FaEnvelope />
              {messageCount > 0 && <span className="dashboard-header__badge">{messageCount}</span>}
            </button>
            {openPanel === 'mail' && (
              <div className="dashboard-header__popover" role="menu">
                {messageCount > 0 ? `${messageCount} new messages` : 'No new messages'}
              </div>
            )}
          </div>

          <div className="dashboard-header__control-wrap">
            <button
              type="button"
              className="dashboard-header__year-btn"
              onClick={() => togglePanel('year')}
              aria-haspopup="listbox"
              aria-expanded={openPanel === 'year'}
            >
              <FaCalendarAlt className="dashboard-header__year-icon" />
              <span>{academicYear}</span>
              <FaChevronDown className="dashboard-header__year-chevron" />
            </button>
            {openPanel === 'year' && (
              <ul className="dashboard-header__popover dashboard-header__popover--list" role="listbox">
                <li className="dashboard-header__popover-item dashboard-header__popover-item--selected">
                  {academicYear}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
