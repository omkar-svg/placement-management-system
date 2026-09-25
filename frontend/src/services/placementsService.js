import api, { unwrap } from './api.js';

// Thin wrappers over the backend endpoints the admin dashboards read.
// Each returns the already-unwrapped `data` array/object.

// GET /api/placements  (ADMIN or TPO)
// -> PlacementStatus[] where each row is
//    { id, studentId, driveId, status, remarks, updatedAt,
//      student: { id, userId, branch, year }, drive: PlacementDrive }
// Note: `drive` carries `companyId` but not the company name, and the
// student's name is not included by the backend.
export async function getPlacements() {
  return unwrap(await api.get('/placements')) ?? [];
}

// GET /api/companies
// -> Company[] { id, companyName, about, location, website, createdAt, updatedAt }
export async function getCompanies() {
  return unwrap(await api.get('/companies')) ?? [];
}

// GET /api/notifications  (the logged-in user's own notifications)
// -> Notification[] { id, userId, title, message, type, isRead, createdAt }
export async function getNotifications() {
  return unwrap(await api.get('/notifications')) ?? [];
}

// GET /api/health  (public)
// The backend answers 503 with the same JSON body when the database is
// down, so that body is still usable. Returns null when the API itself
// can't be reached.
export async function getHealth() {
  try {
    const { data } = await api.get('/health');
    return data;
  } catch (error) {
    return error.response?.data?.status ? error.response.data : null;
  }
}
