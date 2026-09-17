import api from './api.js';

// The admin dashboard's "Latest System Logs" only shows a *preview* of
// 3 entries copied from the original design, and that data stays owned
// by adminDashboardService.js (DEFAULT_DASHBOARD_DATA.latestLogs) —
// untouched here. The full Audit Logs page has no such design to copy
// from, so its fallback is a genuine empty list.
const EMPTY_AUDIT_LOGS = [];

export async function getAuditLogs() {
  try {
    const { data } = await api.get('/audit-logs');
    return data;
  } catch (error) {
    console.warn('[auditLogsService] Falling back to empty log list — API call failed:', error.message);
    return EMPTY_AUDIT_LOGS;
  }
}

export { EMPTY_AUDIT_LOGS };
