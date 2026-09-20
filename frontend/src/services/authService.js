import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const authService = {
  /**
   * Login user with email and password
   * @param {{ email: string, password: string }} credentials
   */
  async login({ email, password }) {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (response.data?.success && response.data?.data?.token) {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }
    return response.data;
  },

  /**
   * Register new user (STUDENT, TPO, or ADMIN)
   * @param {{ name: string, email: string, password: string, role?: string }} userData
   */
  async register({ name, email, password, role = 'STUDENT' }) {
    const response = await axios.post(`${API_URL}/auth/register`, {
      name,
      email,
      password,
      role,
    });
    return response.data;
  },

  /**
   * Get current authenticated user profile
   */
  async getCurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const response = await axios.get(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  /**
   * Clear user session from storage
   */
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  /**
   * Get stored token
   */
  getToken() {
    return localStorage.getItem('token');
  },

  /**
   * Get stored user
   */
  getUser() {
    const user = localStorage.getItem('user');
    try {
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  },
};

export default authService;
