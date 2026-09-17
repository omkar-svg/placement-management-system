import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './ReportsToolbar.css';

function ReportsToolbar({ typeFilter, onTypeFilterChange, onGenerateReport, isGenerating }) {
  return (
    <div className="reports-toolbar">
      <select
        className="reports-toolbar__filter"
        value={typeFilter}
        onChange={(event) => onTypeFilterChange(event.target.value)}
      >
        <option value="all">All report types</option>
        <option value="placements">Placements</option>
        <option value="applications">Applications</option>
        <option value="audit">Audit</option>
      </select>

      <button type="button" className="reports-toolbar__generate-btn" onClick={onGenerateReport} disabled={isGenerating}>
        <FaPlus aria-hidden="true" /> {isGenerating ? 'Generating…' : 'Generate Report'}
      </button>
    </div>
  );
}

export default ReportsToolbar;
