import React from 'react';
import { FaHistory } from 'react-icons/fa';
import EmptyState from '../common/EmptyState.jsx';
import './RecentActivity.css';

// `activity` comes from the page (mainDashboardService).
function RecentActivity({ activity }) {
  return (
    <section className="recent-activity">
      <h2>Recent Activity</h2>

      {activity && activity.length > 0 ? (
        <ul className="recent-activity__list">
          {activity.map((item) => (
            <li className="recent-activity__item" key={item.id}>
              <div>
                <p className="recent-activity__title">{item.title}</p>
                {item.subtitle && <p className="recent-activity__subtitle">{item.subtitle}</p>}
              </div>
              <span className="recent-activity__date">{item.date}</span>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState icon={FaHistory} title="No recent activity" description="Activity across drives and applications will appear here." />
      )}
    </section>
  );
}

export default RecentActivity;
