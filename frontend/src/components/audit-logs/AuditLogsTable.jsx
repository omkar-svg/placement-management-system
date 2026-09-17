import React from 'react';
import { FaCog, FaFileAlt, FaCloud, FaShieldAlt, FaHistory } from 'react-icons/fa';
import EmptyState from '../common/EmptyState.jsx';
import './AuditLogsTable.css';

// Same icon-key convention as the admin dashboard's LatestLogs component,
// with a couple of extra keys this fuller page can use.
const LOG_ICONS = {
  gear: FaCog,
  file: FaFileAlt,
  cloud: FaCloud,
  security: FaShieldAlt,
};

// `logs` comes from the page (already filtered by search/action/date).
function AuditLogsTable({ logs }) {
  if (!logs || logs.length === 0) {
    return (
      <div className="audit-table audit-table--empty">
        <EmptyState
          icon={FaHistory}
          title="No audit log entries yet"
          description="Role changes, account approvals, and system updates will be recorded here."
        />
      </div>
    );
  }

  return (
    <div className="audit-table">
      <table>
        <thead>
          <tr>
            <th aria-label="Type" />
            <th>Event</th>
            <th>Performed By</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => {
            const Icon = LOG_ICONS[log.icon] || FaFileAlt;
            return (
              <tr key={log.id}>
                <td className="audit-table__icon-cell">
                  <span className="audit-table__icon">
                    <Icon aria-hidden="true" />
                  </span>
                </td>
                <td>
                  <p className="audit-table__title">{log.title}</p>
                  {log.subtitle && <p className="audit-table__subtitle">{log.subtitle}</p>}
                </td>
                <td>{log.performedBy || '—'}</td>
                <td>{log.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AuditLogsTable;
