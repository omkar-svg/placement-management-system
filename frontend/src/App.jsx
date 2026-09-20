import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';

import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import MainDashboardPage from './pages/MainDashboardPage.jsx';
import TpoAccountsPage from './pages/TpoAccountsPage.jsx';
import SystemSettingsPage from './pages/SystemSettingsPage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';
import AuditLogsPage from './pages/AuditLogsPage.jsx';
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import StudentDashboard from './pages/StudentDashboard'

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<LandingPage />} />

      {/* Student */}
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<Navigate to="/login" replace />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />

      {/* Admin */}
      <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      <Route path="/main-dashboard" element={<MainDashboardPage />} />
      <Route path="/tpo-accounts" element={<TpoAccountsPage />} />
      <Route path="/system-settings" element={<SystemSettingsPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/audit-logs" element={<AuditLogsPage />} />

      {/* Catch-all: keep last */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;