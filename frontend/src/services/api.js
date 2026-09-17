import axios from 'axios';

// One shared axios instance for the whole app. Every feature's service
// file (adminDashboardService.js, mainDashboardService.js, etc.) should
// import THIS instead of creating its own — that way base URL, auth
// headers, and error handling only need to be configured in one place.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attaches the auth token (if any) to every outgoing request.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Central place to react to auth failures etc. across the whole app.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Real apps would redirect to login / clear auth state here.
      console.warn('Unauthorized request:', error.config?.url);
    }
    return Promise.reject(error);
  }
);

export default api;
