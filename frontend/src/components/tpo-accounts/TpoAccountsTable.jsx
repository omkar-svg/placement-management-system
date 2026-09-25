import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import EmptyState from '../common/EmptyState.jsx';
import './TpoAccountsTable.css';

// `accounts` comes from the page (already filtered by search/status).
function TpoAccountsTable({ accounts, onStatusChange }) {
  if (!accounts || accounts.length === 0) {
    return (
      <div className="tpo-table tpo-table--empty">
        <EmptyState
          icon={FaUniversity}
          title="No TPO accounts data available yet"
          description="The backend does not have an endpoint for listing TPO accounts yet, so nothing can be shown here."
        />
      </div>
    );
  }

  return (
    <div className="tpo-table">
      <table>
        <thead>
          <tr>
            <th>Institution</th>
            <th>Contact Person</th>
            <th>Email</th>
            <th>Status</th>
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.institution}</td>
              <td>{account.contactName}</td>
              <td>{account.email}</td>
              <td>
                <span className={`tpo-table__status tpo-table__status--${account.status}`}>
                  {account.status}
                </span>
              </td>
              <td className="tpo-table__actions">
                {onStatusChange && account.status !== 'active' && (
                  <button type="button" onClick={() => onStatusChange(account.id, 'active')}>
                    Activate
                  </button>
                )}
                {onStatusChange && account.status !== 'suspended' && (
                  <button type="button" onClick={() => onStatusChange(account.id, 'suspended')}>
                    Suspend
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TpoAccountsTable;
