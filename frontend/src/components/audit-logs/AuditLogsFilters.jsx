import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './AuditLogsFilters.css';

function AuditLogsFilters({ searchTerm, onSearchChange, actionFilter, onActionFilterChange, dateFilter, onDateFilterChange }) {
  return (
    <div className="audit-filters">
      <div className="audit-filters__search">
        <FaSearch aria-hidden="true" />
        <input
          type="text"
          placeholder="Search by user or action…"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <select
        className="audit-filters__select"
        value={actionFilter}
        onChange={(event) => onActionFilterChange(event.target.value)}
      >
        <option value="all">All actions</option>
        <option value="role-change">Role changes</option>
        <option value="account">Account changes</option>
        <option value="system">System updates</option>
        <option value="security">Security</option>
      </select>

      <input
        type="date"
        className="audit-filters__date"
        value={dateFilter}
        onChange={(event) => onDateFilterChange(event.target.value)}
      />
    </div>
  );
}

export default AuditLogsFilters;
