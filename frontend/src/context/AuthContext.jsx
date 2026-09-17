import React, { createContext, useContext, useState } from 'react';

// Current logged-in user shown across the app (sidebar profile card,
// header greeting). Once a real login endpoint exists, replace this
// with the response from that call.
const DEFAULT_USER = {
  name: 'Shivam Torvi',
  role: 'Global Admin',
};

const AuthContext = createContext(null);

// Wrap the app in this once (see main.jsx). Any component can then call
// useAuth() to read the current user or trigger login/logout, instead of
// every page having to fetch/hold that state itself.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(DEFAULT_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Placeholder for a real login call. Swap the body for an Axios POST to
  // your auth service (e.g. via services/api.js) once that endpoint exists.
  const login = (userData) => {
    setUser(userData ?? DEFAULT_USER);
    setIsAuthenticated(true);
  };

  // Signs the current user out. Clears local auth state; wire up a token
  // removal / API call here when real auth is added.
  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = { user, isAuthenticated, login, logout };

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
