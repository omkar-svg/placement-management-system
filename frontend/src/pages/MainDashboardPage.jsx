import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import DrivesSummary from '../components/main-dashboard/DrivesSummary.jsx';
import ApplicationsTrend from '../components/main-dashboard/ApplicationsTrend.jsx';
import UpcomingDrives from '../components/main-dashboard/UpcomingDrives.jsx';
import RecentActivity from '../components/main-dashboard/RecentActivity.jsx';
import ErrorNotice from '../components/common/ErrorNotice.jsx';
import { getMainDashboardOverview } from '../services/mainDashboardService.js';
import { getErrorMessage } from '../services/api.js';
import './MainDashboardPage.css';

// Main Dashboard page. Fetches all its data through the service layer
// (mainDashboardService.js, which reads the real backend) on mount, same
// pattern as AdminDashboardPage. Numbers are 0 and lists are empty only
// when the backend genuinely has no records.
function MainDashboardPage() {
  const [dashboard, setDashboard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function loadDashboard() {
      setIsLoading(true);
      setError('');
      try {
        const data = await getMainDashboardOverview();
        if (isMounted) setDashboard(data);
      } catch (err) {
        if (isMounted) setError(getErrorMessage(err, 'Failed to load the dashboard.'));
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadDashboard();
    return () => {
      isMounted = false;
    };
  }, [reloadKey]);

  if (isLoading) {
    return (
      <DashboardLayout>
        <p className="main-dashboard-page__loading">Loading dashboard…</p>
      </DashboardLayout>
    );
  }

  if (error || !dashboard) {
    return (
      <DashboardLayout>
        <ErrorNotice message={error || 'Failed to load the dashboard.'} onRetry={() => setReloadKey((k) => k + 1)} />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="main-dashboard-page__intro">
        <h1>Main Dashboard</h1>
        <p>Overview of placement drives, applications, and activity.</p>
      </div>

      <DrivesSummary summary={dashboard.summary} />

      <div className="main-dashboard-page__grid main-dashboard-page__grid--top">
        <ApplicationsTrend data={dashboard.applicationsTrend} />
        <UpcomingDrives drives={dashboard.upcomingDrives} />
      </div>

      <RecentActivity activity={dashboard.recentActivity} />
    </DashboardLayout>
  );
}

export default MainDashboardPage;
