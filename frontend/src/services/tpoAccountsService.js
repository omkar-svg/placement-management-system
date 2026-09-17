import api from './api.js';

// No original design/mock data exists for the full TPO Accounts list (the
// admin dashboard only shows a couple of *pending* registrations, which
// stay owned by adminDashboardService.js). So this fallback is a genuine
// empty list, not invented institution names.
const EMPTY_TPO_ACCOUNTS = [];

// Fetches the full list of TPO accounts (institution, contact, status).
export async function getTpoAccounts() {
  try {
    const { data } = await api.get('/tpo-accounts');
    return data;
  } catch (error) {
    console.warn(
      '[tpoAccountsService] Falling back to empty account list — API call failed:',
      error.message
    );
    return EMPTY_TPO_ACCOUNTS;
  }
}

// Updates a TPO account's status (active / suspended / rejected).
// Stub until the real backend endpoint exists.
export async function updateTpoAccountStatus(id, status) {
  try {
    await api.patch(`/tpo-accounts/${id}`, { status });
  } catch (error) {
    console.warn('[tpoAccountsService] status change not persisted (no backend yet):', error.message);
  }
  return { id, status };
}

export { EMPTY_TPO_ACCOUNTS };
