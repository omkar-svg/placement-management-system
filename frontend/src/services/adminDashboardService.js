import { getPlacements, getCompanies, getNotifications, getHealth } from './placementsService.js';
import { academicYearLabel, formatDate, humanize, lastMonths, monthKey } from '../utils/format.js';

// ============================================================
// ADMIN DASHBOARD — built from the real backend
//
//   GET /api/companies      -> company count
//   GET /api/placements     -> placement records, drives, status mix, activity
//   GET /api/notifications  -> the admin's own notifications (bell + panel)
//   GET /api/health         -> API / database status, uptime
//
// Nothing here is sample data. Things the backend has no endpoint for
// yet (user counts, pending TPO registrations, audit/security logs,
// CPU/memory) are simply not shown.
// ============================================================

// Status groups used by the activity chart.
const IN_PROGRESS = ['ELIGIBLE', 'SHORTLISTED', 'INTERVIEW_SCHEDULED'];
const SELECTED = ['SELECTED', 'OFFER_ACCEPTED'];

// One colour per StudentStatus enum value (donut).
const STATUS_COLORS = {
  ELIGIBLE: 'var(--color-chart-light)',
  SHORTLISTED: 'var(--color-purple)',
  INTERVIEW_SCHEDULED: 'var(--color-gold-500)',
  SELECTED: 'var(--color-success)',
  OFFER_ACCEPTED: 'var(--color-navy-900)',
  REJECTED: 'var(--color-danger)',
};

// Notification.type -> icon key understood by LatestLogs.
const NOTIFICATION_ICONS = {
  ANNOUNCEMENT: 'bell',
  COMPANY: 'building',
  DRIVE: 'briefcase',
  REMINDER: 'clock',
};

function buildActivityChart(placements) {
  const months = lastMonths(6);
  const rows = months.map(({ month }) => ({ month, inProgress: 0, selected: 0, rejected: 0 }));
  const indexByKey = new Map(months.map((m, i) => [m.key, i]));

  placements.forEach((placement) => {
    const index = indexByKey.get(monthKey(placement.updatedAt));
    if (index === undefined) return;
    if (IN_PROGRESS.includes(placement.status)) rows[index].inProgress += 1;
    else if (SELECTED.includes(placement.status)) rows[index].selected += 1;
    else if (placement.status === 'REJECTED') rows[index].rejected += 1;
  });

  return {
    legend: [
      { key: 'inProgress', name: 'In progress', color: 'var(--color-chart-dark)' },
      { key: 'selected', name: 'Selected / offer accepted', color: 'var(--color-chart-mid)' },
      { key: 'rejected', name: 'Rejected', color: 'var(--color-chart-light)' },
    ],
    periodOptions: ['Last 6 months'],
    data: rows,
  };
}

function buildStatusDistribution(placements) {
  const counts = {};
  placements.forEach((p) => {
    counts[p.status] = (counts[p.status] || 0) + 1;
  });

  const total = placements.length;
  const statuses = Object.keys(STATUS_COLORS)
    .filter((status) => counts[status] > 0)
    .map((status) => ({
      key: status,
      name: humanize(status),
      count: counts[status],
      percent: Math.round((counts[status] / total) * 1000) / 10,
      color: STATUS_COLORS[status],
    }));

  return { title: 'Placement Status Distribution', totalLabel: 'Placements', total, roles: statuses };
}

function buildServerStatus(health) {
  const apiValue = !health ? 'Offline' : health.status === 'OK' ? 'Online' : 'Degraded';
  const dbValue = !health ? 'Unknown' : health.database === 'connected' ? 'Connected' : 'Disconnected';

  return [
    { id: 'api', label: 'API:', value: apiValue, icon: 'gear' },
    { id: 'database', label: 'Database:', value: dbValue, icon: 'memory' },
    { id: 'uptime', label: 'Uptime:', value: health?.uptime ?? '—', icon: 'clock' },
    { id: 'environment', label: 'Environment:', value: health?.environment ?? '—', icon: 'bars' },
  ];
}

function buildStatCards({ companies, placements, health }) {
  const drives = new Set(placements.map((p) => p.driveId));
  const selected = placements.filter((p) => SELECTED.includes(p.status)).length;
  const healthy = health?.status === 'OK' && health?.database === 'connected';
  const healthValue = !health ? 'Unreachable' : healthy ? 'Optimal' : 'Degraded';

  return [
    {
      id: 'companies',
      label: 'Registered Companies',
      value: String(companies.length),
      subtitle: '',
    },
    {
      id: 'placement-records',
      label: 'Placement Records',
      value: String(placements.length),
      subtitle: `Across ${drives.size} ${drives.size === 1 ? 'drive' : 'drives'}`,
    },
    {
      id: 'system-health',
      label: 'System Health',
      value: healthValue,
      subtitle: health?.uptime ? `Uptime ${health.uptime}` : '',
      trend: healthy ? 'up' : undefined,
    },
    {
      id: 'students-selected',
      label: 'Students Selected',
      value: String(selected),
      subtitle: '',
    },
  ];
}

// Loads everything the Admin Dashboard page needs. Throws if the
// authenticated endpoints fail so the page can show the error instead of
// pretending there is no data.
export async function getAdminDashboardOverview() {
  const [companies, placements, notifications, health] = await Promise.all([
    getCompanies(),
    getPlacements(),
    getNotifications(),
    getHealth(),
  ]);

  const year = new Date().getFullYear();

  return {
    academicYear: academicYearLabel(),
    notificationCount: notifications.filter((n) => !n.isRead).length,
    messageCount: 0, // the backend has no messaging feature

    statCards: buildStatCards({ companies, placements, health }),
    activityChart: buildActivityChart(placements),

    // The backend creates accounts immediately on register — there is no
    // "pending" state or approval endpoint.
    pendingRegistrations: [],

    statusDistribution: buildStatusDistribution(placements),
    serverStatus: buildServerStatus(health),

    latestNotifications: notifications.slice(0, 10).map((n) => ({
      id: n.id,
      icon: NOTIFICATION_ICONS[n.type] || 'file',
      title: n.title,
      subtitle: n.message,
      date: formatDate(n.createdAt),
    })),

    // Static interface copy (not data).
    promoBanner: {
      heading: 'Monitor, secure, and empower the placement ecosystem!',
      subheading: 'Keep the system running smoothly for all stakeholders.',
    },
    footer: {
      copyright: `© ${year} Campus Placement Portal. All rights reserved.`,
      links: ['Better Placements', 'Stronger Futures'],
    },
  };
}
