import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// --- Pages from the Main frontend (unchanged) ---
import LandingPage from './pages/LandingPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import AdminSetupPage from './pages/AdminSetupPage.jsx';

// --- Admin pages ---
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import MainDashboardPage from './pages/MainDashboardPage.jsx';
import TpoAccountsPage from './pages/TpoAccountsPage.jsx';
import SystemSettingsPage from './pages/SystemSettingsPage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';
import AuditLogsPage from './pages/AuditLogsPage.jsx';

import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import Logout from './components/auth/Logout.jsx';

// ============================================================
// APP ROUTES
// This file is shared by the whole team. When you add a new page,
// add ONE <Route> line here — don't touch anyone else's route.
// ============================================================

// Admin pages are only for users whose backend role is ADMIN.
// Protected routes are temporarily disabled (not removed) — to re-enable,
// swap the line below for:
//   const adminOnly = (page) => <ProtectedRoute allowedRoles={['ADMIN']}>{page}</ProtectedRoute>;
const adminOnly = (page) => page;

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<Navigate to="/login" replace />} />
      <Route path="/admin-setup" element={<AdminSetupPage />} />
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