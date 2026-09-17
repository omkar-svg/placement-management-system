import React, { useEffect, useMemo, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import ReportsToolbar from '../components/reports/ReportsToolbar.jsx';
import ReportsTable from '../components/reports/ReportsTable.jsx';
import { getReports, generateReport } from '../services/reportsService.js';
import './ReportsPage.css';

// Reports page. Fetches through reportsService.js on mount — starts as
// an empty list (see the data policy comment in that service) until real
// report records exist. "Generate Report" is wired to the service stub
// so it's ready to work the moment the backend endpoint exists.
function ReportsPage() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);

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

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    const newReport = await generateReport(typeFilter === 'all' ? 'placements' : typeFilter);
    if (newReport) {
      setReports((current) => [newReport, ...current]);
    }
    setIsGenerating(false);
  };

  return (
    <DashboardLayout>
      <div className="reports-page__intro">
        <h1>Reports</h1>
        <p>Generate and download reports on placements, applications, and system activity.</p>
      </div>

      <ReportsToolbar
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        onGenerateReport={handleGenerateReport}
        isGenerating={isGenerating}
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
