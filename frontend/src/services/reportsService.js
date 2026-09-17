import api from './api.js';

// No original design/mock data exists for report records, so this
// fallback is a genuine empty list, not invented report names or dates.
const EMPTY_REPORTS = [];

export async function getReports() {
  try {
    const { data } = await api.get('/reports');
    return data;
  } catch (error) {
    console.warn('[reportsService] Falling back to empty report list — API call failed:', error.message);
    return EMPTY_REPORTS;
  }
}

// Requests generation of a new report. Stub until the real backend
// endpoint exists.
export async function generateReport(type) {
  try {
    const { data } = await api.post('/reports/generate', { type });
    return data;
  } catch (error) {
    console.warn('[reportsService] report not generated (no backend yet):', error.message);
    return null;
  }
}

export { EMPTY_REPORTS };
