import React, { useState } from 'react';
import { FaCog, FaFileAlt, FaCloud } from 'react-icons/fa';
import './LatestLogs.css';

const LOG_ICONS = {
  gear: FaCog,
  file: FaFileAlt,
  cloud: FaCloud,
};

function LatestLogs({ logs }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="latest-logs">
      <div className="latest-logs__header">
        <h2>Latest System Logs</h2>
        <button type="button" className="latest-logs__link" onClick={() => setExpanded((v) => !v)}>
          View All
        </button>
      </div>

      <div className="latest-logs__list">
        {logs.map((log) => {
          const Icon = LOG_ICONS[log.icon];
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

      {expanded && <p className="latest-logs__note">No further log entries are available.</p>}
    </section>
  );
}

export default LatestLogs;
