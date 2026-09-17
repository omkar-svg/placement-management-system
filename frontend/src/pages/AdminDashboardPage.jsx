import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { getAdminDashboardOverview } from '../services/adminDashboardService.js';
import './AdminDashboardPage.css';

// Campus Admin Dashboard page. Fetches all its data through the service
// layer (adminDashboardService.js) on mount, so components stay "dumb"
// and only render whatever data they're given as props.
function AdminDashboardPage() {
  const [dashboard, setDashboard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    async function loadDashboard() {
      const data = await getAdminDashboardOverview();
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
        <p className="admin-dashboard-page__loading">Loading dashboard…</p>
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

      <StatCards cards={dashboard.statCards} onViewSecurityDetails={() => navigate('/audit-logs')} />

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
          total={dashboard.userRolesDistribution.total}
          totalLabel={dashboard.userRolesDistribution.totalLabel}
          roles={dashboard.userRolesDistribution.roles}
        />
        <ServerStatus metrics={dashboard.serverStatus} />
        <LatestLogs logs={dashboard.latestLogs} />
      </div>

      <PromoBanner heading={dashboard.promoBanner.heading} subheading={dashboard.promoBanner.subheading} />

      <Footer copyright={dashboard.footer.copyright} links={dashboard.footer.links} />
    </DashboardLayout>
  );
}

export default AdminDashboardPage;
