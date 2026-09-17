import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import MainDashboardPage from './pages/MainDashboardPage.jsx';
import TpoAccountsPage from './pages/TpoAccountsPage.jsx';
import SystemSettingsPage from './pages/SystemSettingsPage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';
import AuditLogsPage from './pages/AuditLogsPage.jsx';

// ============================================================
// APP ROUTES
// This file is shared by the whole team. When you add a new page,
// add ONE <Route> line here — don't touch anyone else's route.
// ============================================================
function App() {
  return (
    <Routes>
      {/* Default route — sends people straight to the admin dashboard */}
      <Route path="/" element={<Navigate to="/admin-dashboard" replace />} />

      {/* ✅ My page */}
      <Route path="/admin-dashboard" element={<AdminDashboardPage />} />

      {/* ✅ Main Dashboard — built out with its own service/components,
          starting from empty/zero states until the real backend endpoint
          exists (see services/mainDashboardService.js). */}
      <Route path="/main-dashboard" element={<MainDashboardPage />} />

      {/* ✅ TPO Accounts, System Settings, Reports, Audit Logs — all built
          out the same way: own page, own components/<feature>/ folder,
          own services/<feature>Service.js, starting from empty/zero
          states rather than any hard-coded data. */}
      <Route path="/tpo-accounts" element={<TpoAccountsPage />} />
      <Route path="/system-settings" element={<SystemSettingsPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/audit-logs" element={<AuditLogsPage />} />

      {/* Catch-all for unknown URLs */}
      <Route path="*" element={<Navigate to="/admin-dashboard" replace />} />
    </Routes>
  );
}

export default App;
