import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import authService from '../services/authService.js';

const AuthContext = createContext(null);

// Exposes the real logged-in user to the whole app.
//
// Login itself is done by the Main frontend's AuthPage through
// authService, which keeps the JWT and user in localStorage (`token` /
// `user`). This provider reads that same storage, so there is a single
// source of truth. It re-reads on every route change, which is how it
// picks up a login/logout that happened on another page.
export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [, forceRefresh] = useState(0);

  // Subscribing to the router re-renders this provider on every
  // navigation, so the storage read below is always fresh after AuthPage
  // stores a new session and navigates away.
  useLocation();
  const token = authService.getToken();
  const user = authService.getUser();

  // Once per page load, confirm the session with GET /auth/me so the
  // name/role shown come from the server rather than only from storage.
  useEffect(() => {
    if (!authService.getToken()) return undefined;
    let cancelled = false;

    authService
      .getCurrentUser()
      .then((res) => {
        if (cancelled || !res?.success || !res.data) return;
        localStorage.setItem('user', JSON.stringify(res.data));
        forceRefresh((n) => n + 1);
      })
      .catch((error) => {
        // Expired/invalid token: clear it so ProtectedRoute sends the
        // person to /login.
        if (!cancelled && error.response?.status === 401) {
          authService.logout();
          forceRefresh((n) => n + 1);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const login = async (credentials) => {
    const res = await authService.login(credentials);
    forceRefresh((n) => n + 1);
    return res;
  };

  const logout = () => {
    authService.logout();
    forceRefresh((n) => n + 1);
    navigate('/login', { replace: true });
  };

  const value = {
    user,
    role: user?.role ?? null,
    isAuthenticated: Boolean(token && user),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook used by any component that needs the current user or auth actions.
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an <AuthProvider>');
  }
  return context;
}
