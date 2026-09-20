// ============================================================
// REPORTS — not supported by the backend yet
//
// There is no reports endpoint. Needed on the backend:
//   GET  /api/reports
//   POST /api/reports/generate
//
// Until then this resolves to an empty list WITHOUT calling the network.
// ============================================================
export const REPORTS_SUPPORTED = false;

export async function getReports() {
  return [];
}
