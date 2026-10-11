import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import Footer from '../components/layout/Footer.jsx';
import DashboardHeader from '../components/admin-dashboard/DashboardHeader.jsx';
import StatCards from '../components/admin-dashboard/StatCards.jsx';
import ActivityChart from '../components/admin-dashboard/ActivityChart.jsx';
import PendingRegistrations from '../components/admin-dashboard/PendingRegistrations.jsx';
import UserRolesDonut from '../components/admin-dashboard/UserRolesDonut.jsx';
import ServerStatus from '../components/admin-dashboard/ServerStatus.jsx';
import LatestLogs from '../components/admin-dashboard/LatestLogs.jsx';
import PromoBanner from '../components/admin-dashboard/PromoBanner.jsx';
import ErrorNotice from '../components/common/ErrorNotice.jsx';
import { getAdminDashboardOverview } from '../services/adminDashboardService.js';
import { getErrorMessage } from '../services/api.js';
import './AdminDashboardPage.css';

// Campus Admin Dashboard page. Fetches all its data through the service
// layer (adminDashboardService.js, which reads the real backend) on mount,
// so components stay "dumb" and only render whatever data they're given.
function AdminDashboardPage() {
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
        const data = await getAdminDashboardOverview();
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
        <p className="admin-dashboard-page__loading">Loading dashboard…</p>
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
      <DashboardHeader
        academicYear={dashboard.academicYear}
        notificationCount={dashboard.notificationCount}
        messageCount={dashboard.messageCount}
      />

      <StatCards cards={dashboard.statCards} />

      <div className="admin-dashboard-page__grid admin-dashboard-page__grid--top">
        <ActivityChart
          legend={dashboard.activityChart.legend}
          data={dashboard.activityChart.data}
          periodOptions={dashboard.activityChart.periodOptions}
        />
        <PendingRegistrations registrations={dashboard.pendingRegistrations} />
      </div>

      <div className="admin-dashboard-page__grid admin-dashboard-page__grid--bottom">
        <UserRolesDonut
          title={dashboard.statusDistribution.title}
          total={dashboard.statusDistribution.total}
          totalLabel={dashboard.statusDistribution.totalLabel}
          roles={dashboard.statusDistribution.roles}
        />
        <ServerStatus metrics={dashboard.serverStatus} />
        <LatestLogs logs={dashboard.latestNotifications} />
      </div>

      <PromoBanner heading={dashboard.promoBanner.heading} subheading={dashboard.promoBanner.subheading} />

      <Footer copyright={dashboard.footer.copyright} links={dashboard.footer.links} />
    </DashboardLayout>
  );
}

export default AdminDashboardPage;
