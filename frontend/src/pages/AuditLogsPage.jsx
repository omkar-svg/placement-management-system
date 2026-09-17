import React, { useEffect, useMemo, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import AuditLogsFilters from '../components/audit-logs/AuditLogsFilters.jsx';
import AuditLogsTable from '../components/audit-logs/AuditLogsTable.jsx';
import { getAuditLogs } from '../services/auditLogsService.js';
import './AuditLogsPage.css';

// Audit Logs page. Fetches through auditLogsService.js on mount — starts
// as an empty list (see the data policy comment in that service) until
// real log entries exist. Fully wired up to search/filter once they do.
function AuditLogsPage() {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadLogs() {
      const data = await getAuditLogs();
      if (isMounted) {
        setLogs(data);
        setIsLoading(false);
      }
    }

    loadLogs();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesAction = actionFilter === 'all' || log.action === actionFilter;
      const matchesDate = dateFilter === '' || log.isoDate === dateFilter;
      const term = searchTerm.trim().toLowerCase();
      const matchesSearch =
        term === '' ||
        log.title.toLowerCase().includes(term) ||
        (log.performedBy || '').toLowerCase().includes(term);
      return matchesAction && matchesDate && matchesSearch;
    });
  }, [logs, actionFilter, dateFilter, searchTerm]);

  return (
    <DashboardLayout>
      <div className="audit-logs-page__intro">
        <h1>Audit Logs</h1>
        <p>Full history of role changes, account approvals, and system events.</p>
      </div>

      <AuditLogsFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        actionFilter={actionFilter}
        onActionFilterChange={setActionFilter}
        dateFilter={dateFilter}
        onDateFilterChange={setDateFilter}
      />

      {isLoading ? (
        <p className="audit-logs-page__loading">Loading audit logs…</p>
      ) : (
        <AuditLogsTable logs={filteredLogs} />
      )}
    </DashboardLayout>
  );
}

export default AuditLogsPage;
