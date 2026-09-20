// ============================================================
// AUDIT LOGS — not supported by the backend yet
//
// There is no audit-log model or endpoint. Needed on the backend:
//   GET /api/audit-logs
//
// Until then this resolves to an empty list WITHOUT calling the network.
// (The admin dashboard's "Latest Notifications" panel is separate: it
// shows the real notifications from GET /api/notifications.)
// ============================================================
export const AUDIT_LOGS_SUPPORTED = false;

export async function getAuditLogs() {
  return [];
}
