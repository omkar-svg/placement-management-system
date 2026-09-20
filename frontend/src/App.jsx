import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import MainDashboardPage from './pages/MainDashboardPage.jsx';
import TpoAccountsPage from './pages/TpoAccountsPage.jsx';
import SystemSettingsPage from './pages/SystemSettingsPage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';
import AuditLogsPage from './pages/AuditLogsPage.jsx';

import LandingPage from './pages/LandingPage.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';

function App() {
  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* Admin routes */}
      <Route
        path="/admin-dashboard"
        element={<AdminDashboardPage />}
      />

      <Route
        path="/main-dashboard"
        element={<MainDashboardPage />}
      />

      <Route
        path="/tpo-accounts"
        element={<TpoAccountsPage />}
      />

      <Route
        path="/system-settings"
        element={<SystemSettingsPage />}
      />

      <Route
        path="/reports"
        element={<ReportsPage />}
      />

      <Route
        path="/audit-logs"
        element={<AuditLogsPage />}
      />

      {/* Student routes */}
      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />

      {/* Unknown URLs */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;