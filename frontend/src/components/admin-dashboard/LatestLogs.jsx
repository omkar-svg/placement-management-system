import React, { useState } from 'react';
import { FaBell, FaBuilding, FaBriefcase, FaClock, FaFileAlt, FaCog, FaCloud } from 'react-icons/fa';
import EmptyState from '../common/EmptyState.jsx';
import './LatestLogs.css';

const LOG_ICONS = {
  bell: FaBell,
  building: FaBuilding,
  briefcase: FaBriefcase,
  clock: FaClock,
  file: FaFileAlt,
  gear: FaCog,
  cloud: FaCloud,
};

const COLLAPSED_COUNT = 3;

// `logs` are the admin's own notifications (GET /api/notifications).
// Shows the latest few; "View All" expands to everything that was loaded.
function LatestLogs({ logs }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? logs : logs.slice(0, COLLAPSED_COUNT);

  return (
    <section className="latest-logs">
      <div className="latest-logs__header">
        <h2>Latest Notifications</h2>
        {logs.length > COLLAPSED_COUNT && (
          <button type="button" className="latest-logs__link" onClick={() => setExpanded((v) => !v)}>
            {expanded ? 'Show Less' : 'View All'}
          </button>
        )}
      </div>

      {visible.length > 0 ? (
        <div className="latest-logs__list">
          {visible.map((log) => {
            const Icon = LOG_ICONS[log.icon] || FaFileAlt;
            return (
              <div className="latest-logs__item" key={log.id}>
                <span className="latest-logs__icon">
                  <Icon />
                </span>
                <div className="latest-logs__info">
                  <p className="latest-logs__title">{log.title}</p>
                  <p className="latest-logs__subtitle">{log.subtitle}</p>
                </div>
                <span className="latest-logs__date">{log.date}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyState icon={FaBell} title="No notifications" description="Notifications sent to you will appear here." />
      )}
    </section>
  );
}

export default LatestLogs;
