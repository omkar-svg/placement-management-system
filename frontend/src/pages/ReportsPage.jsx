import React, { useEffect, useMemo, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import ReportsToolbar from '../components/reports/ReportsToolbar.jsx';
import ReportsTable from '../components/reports/ReportsTable.jsx';
import { getReports } from '../services/reportsService.js';
import './ReportsPage.css';

// Reports page. Loads through reportsService.js on mount. The backend has
// no reports endpoint yet (see that service), so the list is empty and
// "Generate Report" is disabled.
function ReportsPage() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState('all');

  useEffect(() => {
    let isMounted = true;

    async function loadReports() {
      const data = await getReports();
      if (isMounted) {
        setReports(data);
        setIsLoading(false);
      }
    }

    loadReports();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredReports = useMemo(() => {
    if (typeFilter === 'all') return reports;
    return reports.filter((report) => report.type === typeFilter);
  }, [reports, typeFilter]);

  return (
    <DashboardLayout>
      <div className="reports-page__intro">
        <h1>Reports</h1>
        <p>Generate and download reports on placements, applications, and system activity.</p>
      </div>

      <ReportsToolbar
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        generateDisabledReason="Not available yet — the backend has no reports endpoint."
      />

      {isLoading ? (
        <p className="reports-page__loading">Loading reports…</p>
      ) : (
        <ReportsTable reports={filteredReports} />
      )}
    </DashboardLayout>
  );
}

export default ReportsPage;
