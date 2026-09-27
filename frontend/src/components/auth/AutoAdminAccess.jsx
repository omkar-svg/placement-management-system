import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import authService from '../../services/authService.js';

// Dev convenience while there is no seed script and no user-management
// screen: the first time anyone opens an admin page on their own machine,
// this quietly logs into a shared local demo ADMIN account, creating it
// first if it doesn't exist yet — using only the existing public
// POST /api/auth/register and POST /api/auth/login endpoints. No backend
// changes, no curl, no shared seed data. Every teammate ends up with a real
// admin session against their own local database.
//
// To remove later: delete this file, and in App.jsx swap
//   const adminOnly = (page) => <AutoAdminAccess>{page}</AutoAdminAccess>;
// back to
//   const adminOnly = (page) => <ProtectedRoute allowedRoles={['ADMIN']}>{page}</ProtectedRoute>;

const DEMO_ADMIN = {
  name: 'Demo Admin',
  email: 'admin@placement.local',
  password: 'Admin@12345',
  role: 'ADMIN',
};

function AutoAdminAccess({ children }) {
  const { isAuthenticated, login } = useAuth();
  const [status, setStatus] = useState(isAuthenticated ? 'ready' : 'working');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      setStatus('ready');
      return undefined;
    }

    let cancelled = false;

    (async () => {
      const credentials = { email: DEMO_ADMIN.email, password: DEMO_ADMIN.password };

      try {
        // Most common case after the first run: the demo admin already
        // exists on this machine's DB, so this alone succeeds.
        await login(credentials);
        if (!cancelled) setStatus('ready');
      } catch {
        // Likely means the account doesn't exist on this DB yet — create it,
        // then log in for real.
        try {
          const reg = await authService.register(DEMO_ADMIN);
          if (!reg?.success) {
            throw new Error(reg?.message || 'Could not create the demo admin account');
          }
          await login(credentials);
          if (!cancelled) setStatus('ready');
        } catch (setupErr) {
          if (!cancelled) {
            const message =
              setupErr.response?.data?.message ||
              setupErr.message ||
              'Could not set up demo admin access';
            setError(message);
          }
        }
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  if (status === 'ready') return children;

  if (error) {
    return (
      <div style={{ padding: 32, fontFamily: 'sans-serif', lineHeight: 1.6 }}>
        <p>
          <strong>Couldn&apos;t set up demo admin access:</strong> {error}
        </p>
        <p>Make sure the backend is running on <code>http://localhost:5000</code>, then refresh this page.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, fontFamily: 'sans-serif' }}>Setting up admin access…</div>
  );
}

export default AutoAdminAccess;
