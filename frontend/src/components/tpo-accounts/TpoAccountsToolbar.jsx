import React from 'react';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import './TpoAccountsToolbar.css';

// Purely presentational: search text + status filter are controlled by
// the page, which does the actual filtering of whatever list it got from
// tpoAccountsService.
function TpoAccountsToolbar({ searchTerm, onSearchChange, statusFilter, onStatusFilterChange, onAddAccount }) {
  return (
    <div className="tpo-toolbar">
      <div className="tpo-toolbar__search">
        <FaSearch aria-hidden="true" />
        <input
          type="text"
          placeholder="Search by institution or contact name…"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <select
        className="tpo-toolbar__filter"
        value={statusFilter}
        onChange={(event) => onStatusFilterChange(event.target.value)}
      >
        <option value="all">All statuses</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="suspended">Suspended</option>
      </select>

      <button type="button" className="tpo-toolbar__add-btn" onClick={onAddAccount}>
        <FaUserPlus aria-hidden="true" /> Add TPO Account
      </button>
    </div>
  );
}

export default TpoAccountsToolbar;
