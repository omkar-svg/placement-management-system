import api from './api.js';

// ============================================================
// MAIN DASHBOARD — data policy
// Unlike adminDashboardService.js, there is no original design/mock
// data for this page to copy values from. So the fallback below is a
// genuine EMPTY/ZERO state (counts at 0, empty lists) — not invented
// numbers or names. Once the real backend endpoint exists, its response
// drives the UI and this fallback is only ever seen if that call fails.
// ============================================================
const EMPTY_MAIN_DASHBOARD_DATA = {
  summary: [
    { id: 'active-drives', label: 'Active Drives', value: 0 },
    { id: 'total-applications', label: 'Total Applications', value: 0 },
    { id: 'interviews-scheduled', label: 'Interviews Scheduled', value: 0 },
    { id: 'offers-extended', label: 'Offers Extended', value: 0 },
  ],
  applicationsTrend: [], // [{ month, applications }]
  upcomingDrives: [], // [{ id, company, role, date }]
  recentActivity: [], // [{ id, title, subtitle, date }]
};

// Fetches all data needed by the Main Dashboard page in one call.
// Swap the endpoint path for whatever the backend actually exposes.
export async function getMainDashboardOverview() {
  try {
    const { data } = await api.get('/main-dashboard/overview');
    return data;
  } catch (error) {
    console.warn(
      '[mainDashboardService] Falling back to empty dashboard state — API call failed:',
      error.message
    );
    return EMPTY_MAIN_DASHBOARD_DATA;
  }
}

export { EMPTY_MAIN_DASHBOARD_DATA };
