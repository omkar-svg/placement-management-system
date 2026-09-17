import React from 'react';
import { FaFileAlt, FaDownload } from 'react-icons/fa';
import EmptyState from '../common/EmptyState.jsx';
import './ReportsTable.css';

// `reports` comes from the page (already filtered by type).
function ReportsTable({ reports }) {
  if (!reports || reports.length === 0) {
    return (
      <div className="reports-table reports-table--empty">
        <EmptyState
          icon={FaFileAlt}
          title="No reports available yet"
          description="Reports you generate, or ones produced by scheduled jobs, will be listed here."
        />
      </div>
    );
  }

  return (
    <div className="reports-table">
      <table>
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Type</th>
            <th>Generated On</th>
            <th>Status</th>
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.name}</td>
              <td className="reports-table__type">{report.type}</td>
              <td>{report.generatedOn}</td>
              <td>
                <span className={`reports-table__status reports-table__status--${report.status}`}>
                  {report.status}
                </span>
              </td>
              <td className="reports-table__actions">
                {report.status === 'ready' && report.downloadUrl && (
                  <a href={report.downloadUrl} className="reports-table__download">
                    <FaDownload aria-hidden="true" /> Download
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReportsTable;
