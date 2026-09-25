import axios from 'axios';
import authService from './authService.js';

// One shared axios instance for every admin service.
//
// - Base URL matches the Main frontend: VITE_API_URL, or "/api" which Vite
//   proxies to the backend on port 5000 (see vite.config.js).
// - The JWT is read through authService, i.e. the same `token` key the
//   Main frontend's login stores it under.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attaches "Authorization: Bearer <token>" — the format backend/src/
// middleware/authMiddleware.js expects.
api.interceptors.request.use((config) => {
  const token = authService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// The backend answers 401 for a missing/expired/invalid token. Drop the
// stale session and send the person back to the login page.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname !== '/login') {
      authService.logout();
      window.location.assign('/login');
    }
    return Promise.reject(error);
  }
);

// Every backend controller replies with { success, data, message? }.
// Services call unwrap(response) to get at `data`.
export function unwrap(response) {
  return response.data?.data;
}

// Turns an axios error into a message that can be shown in the UI, using
// the backend's own { message } when it sent one.
export function getErrorMessage(error, fallback = 'Something went wrong.') {
  if (error.response?.data?.message) return error.response.data.message;
  if (!error.response) {
    return 'Unable to connect to the backend server. Please ensure the backend is running on port 5000.';
  }
  return fallback;
}

export default api;
