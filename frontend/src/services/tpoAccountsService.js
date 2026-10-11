// ============================================================
// TPO ACCOUNTS — not supported by the backend yet
//
// The backend has no endpoint that lists users, and the User model has no
// status (active / suspended) field, so there is nothing to fetch or
// update. The only related endpoint is the public POST /api/auth/register
// (which accepts role: "TPO").
//
// Needed on the backend before this page can show data:
//   GET   /api/users?role=TPO         (ADMIN only)
//   PATCH /api/users/:id/status       (ADMIN only, needs a schema change)
//
// Until then this resolves to an empty list WITHOUT calling the network.
// ============================================================
export const TPO_ACCOUNTS_SUPPORTED = false;

export async function getTpoAccounts() {
  return [];
}
