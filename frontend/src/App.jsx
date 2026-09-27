import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// --- Pages from the Main frontend (unchanged) ---
import LandingPage from './pages/LandingPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';

import AutoAdminAccess from './components/auth/AutoAdminAccess.jsx';
import Logout from './components/auth/Logout.jsx';

// --- Admin pages ---
// Lazy-loaded: these pull in recharts and the rest of the admin bundle,
// so students/public visitors never download that code on pages that
// don't need it (only paid when someone actually opens an admin route).
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage.jsx'));
const MainDashboardPage = lazy(() => import('./pages/MainDashboardPage.jsx'));
const TpoAccountsPage = lazy(() => import('./pages/TpoAccountsPage.jsx'));
const SystemSettingsPage = lazy(() => import('./pages/SystemSettingsPage.jsx'));
const ReportsPage = lazy(() => import('./pages/ReportsPage.jsx'));
const AuditLogsPage = lazy(() => import('./pages/AuditLogsPage.jsx'));

// ============================================================
// APP ROUTES
// This file is shared by the whole team. When you add a new page,
// add ONE <Route> line here — don't touch anyone else's route.
// ============================================================

// Admin pages are only for users whose backend role is ADMIN.
//
// There is no seed script and no public self-registration (that would be
// a real security hole — see PR #25 review). Instead, AutoAdminAccess
// transparently signs into (creating on first run) a local-only demo
// ADMIN account before rendering the page, using the existing
// register/login endpoints. It never renders `children` until a real
// user is loaded, so `user` is never null inside an admin page.
//
// To go back to normal login-required access, swap this for:
//   import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
//   const adminOnly = (page) => <ProtectedRoute allowedRoles={['ADMIN']}>{page}</ProtectedRoute>;
const adminOnly = (page) => (
  <AutoAdminAccess>
    <Suspense fallback={<div style={{ padding: 32, fontFamily: 'sans-serif' }}>Loading…</div>}>
      {page}
    </Suspense>
  </AutoAdminAccess>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<Navigate to="/login" replace />} />
      <Route path="/logout" element={<Logout />} />

      {/* Student (Main frontend) */}
      <Route path="/student/dashboard" element={<StudentDashboard />} />

      {/* Admin */}
      <Route path="/admin-dashboard" element={adminOnly(<AdminDashboardPage />)} />
      <Route path="/main-dashboard" element={adminOnly(<MainDashboardPage />)} />
      <Route path="/tpo-accounts" element={adminOnly(<TpoAccountsPage />)} />
      <Route path="/system-settings" element={adminOnly(<SystemSettingsPage />)} />
      <Route path="/reports" element={adminOnly(<ReportsPage />)} />
      <Route path="/audit-logs" element={adminOnly(<AuditLogsPage />)} />

      {/* Catch-all for unknown URLs */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
