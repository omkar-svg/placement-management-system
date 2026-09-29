import api, { unwrap } from './api.js';

export async function getStudentDashboard() {
  const response = await api.get('/dashboard/student');
  return unwrap(response);
}
