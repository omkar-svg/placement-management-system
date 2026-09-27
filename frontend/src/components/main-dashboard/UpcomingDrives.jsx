import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import EmptyState from '../common/EmptyState.jsx';
import './UpcomingDrives.css';

// `drives` comes from the page (mainDashboardService). Renders a genuine
// empty state — not sample company names — until real drives exist.
function UpcomingDrives({ drives }) {
  return (
    <section className="upcoming-drives">
      <h2>Upcoming Drives</h2>

      {drives && drives.length > 0 ? (
        <div className="upcoming-drives__list">
          {drives.map((drive) => (
            <div className="upcoming-drives__item" key={drive.id}>
              <div className="upcoming-drives__info">
                <p className="upcoming-drives__company">{drive.company}</p>
                <p className="upcoming-drives__role">{drive.role}</p>
              </div>
              <span className="upcoming-drives__date">{drive.date}</span>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={FaCalendarAlt}
          title="No upcoming drives scheduled"
          description="Drives scheduled by TPOs will show up here."
        />
      )}
    </section>
  );
}

export default UpcomingDrives;
