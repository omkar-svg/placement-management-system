import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import DrivesSummary from '../components/main-dashboard/DrivesSummary.jsx';
import ApplicationsTrend from '../components/main-dashboard/ApplicationsTrend.jsx';
import UpcomingDrives from '../components/main-dashboard/UpcomingDrives.jsx';
import RecentActivity from '../components/main-dashboard/RecentActivity.jsx';
import { getMainDashboardOverview } from '../services/mainDashboardService.js';
import './MainDashboardPage.css';

// Main Dashboard page. Fetches all its data through the service layer
// (mainDashboardService.js) on mount, same pattern as AdminDashboardPage.
// There is no original design/mock data for this page, so every number
// starts at 0 and every list starts empty until the real backend endpoint
// is wired up — see the comments in mainDashboardService.js.
function MainDashboardPage() {
  const [dashboard, setDashboard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadDashboard() {
      const data = await getMainDashboardOverview();
      if (isMounted) {
        setDashboard(data);
        setIsLoading(false);
      }
    }

    loadDashboard();
    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading || !dashboard) {
    return (
      <DashboardLayout>
        <p className="main-dashboard-page__loading">Loading dashboard…</p>
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
