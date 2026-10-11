import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import './PlaceholderPage.css';

// Reused for any sidebar route that doesn't have a real page built yet.
// All of the original placeholder routes (Main Dashboard, TPO Accounts,
// System Settings, Reports, Audit Logs) now have real pages — this stays
// here as a ready-made fallback for the next new route.
function PlaceholderPage({ title }) {
  return (
    <DashboardLayout>
      <div className="placeholder-page">
        <h2>{title}</h2>
        <p>No data has been provided for this page yet.</p>
      </div>
    </DashboardLayout>
  );
}

export default PlaceholderPage;
