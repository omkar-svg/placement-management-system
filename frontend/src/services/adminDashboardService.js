import api from './api.js';

// ============================================================
// DEFAULT DASHBOARD DATA
// This is NOT invented data. Every value here was copied directly
// from the original Campus Admin Dashboard design:
//  - Text and numbers that appear on-screen are copied exactly,
//    including a couple of odd/duplicated labels that exist in the
//    source design itself (e.g. "Memory Alls", the repeated "CPU
//    Usage" label, and log entries whose title and subtitle match).
//  - Bar-chart values weren't numerically labeled in the design, so
//    they're read off the chart's own gridlines (nearest ~10 units)
//    as the closest good-faith reading — not invented figures.
// This object is used ONLY as a fallback until the real backend
// endpoint below exists. Once it does, delete this and let the API
// response drive the UI.
// ============================================================
const DEFAULT_DASHBOARD_DATA = {
  academicYear: 'AY 2024-25 (Even Sem)',
  notificationCount: 5,
  messageCount: 3,

  statCards: [
    {
      id: 'total-users',
      label: 'Total Users',
      value: '3,580',
      subtitle: 'Admin, Role, TPO, last, Student',
      trend: 'up',
    },
    {
      id: 'tpo-accounts',
      label: 'TPO Accounts',
      value: '125',
      subtitle: '',
      trend: 'up',
    },
    {
      id: 'system-health',
      label: 'System Health',
      value: 'Optimal',
      subtitle: '12.5% from last month',
      trend: 'up',
    },
    {
      id: 'security-alerts',
      label: 'Security Alerts',
      value: '8 Critical',
      subtitle: '',
      ctaLabel: 'View details details',
    },
  ],

  activityChart: {
    legend: [
      { key: 'saturated', name: 'Saturated Lime Green', color: 'var(--color-chart-dark)' },
      { key: 'medium', name: 'Medium Lime Green', color: 'var(--color-chart-mid)' },
      { key: 'light', name: 'Light Lime Green', color: 'var(--color-chart-light)' },
    ],
    periodOptions: ['This Semester'],
    data: [
      { month: 'Jan', saturated: 610, medium: 410, light: 260 },
      { month: 'Feb', saturated: 680, medium: 490, light: 240 },
      { month: 'Mar', saturated: 830, medium: 620, light: 380 },
      { month: 'Apr', saturated: 990, medium: 700, light: 440 },
      { month: 'May', saturated: 1060, medium: 690, light: 470 },
    ],
  },

  pendingRegistrations: [
    { id: 'reg-1', name: 'New Anjali Desai', description: 'New TPO profile' },
    { id: 'reg-2', name: 'New Anjali Desai', description: 'New TPO profile' },
  ],

  userRolesDistribution: {
    totalLabel: 'Total Drives',
    total: 33,
    roles: [
      { key: 'admin', name: 'Admin', count: 30, percent: 30.8, color: 'var(--color-gold-500)' },
      { key: 'tpo', name: 'TPO', count: 20, percent: 20.8, color: 'var(--color-navy-900)' },
      { key: 'student', name: 'Student', count: 4, percent: 8.7, color: 'var(--color-chart-light)' },
    ],
  },

  serverStatus: [
    { id: 'cpu-1', label: 'CPU Usage:', value: '65%', icon: 'gear' },
    { id: 'memory-1', label: 'Memory:', value: '78%', icon: 'memory' },
    { id: 'cpu-2', label: 'CPU Usage:', value: '65%', icon: 'clock' },
    { id: 'memory-2', label: 'Memory Alls:', value: '78%', icon: 'bars' },
  ],

  latestLogs: [
    {
      id: 'log-1',
      icon: 'gear',
      title: 'User role changed for Rohan Patel',
      subtitle: 'User role changed for Rohan Patel',
      date: '18 May 2025',
    },
    {
      id: 'log-2',
      icon: 'file',
      title: 'New TPO account approved: IIT Bombay',
      subtitle: 'New TPO account approved: IIT Bombay',
      date: '12 May 2025',
    },
    {
      id: 'log-3',
      icon: 'cloud',
      title: 'System update v3.2.1 completed',
      subtitle: 'System update v3.2.1 completed',
      date: '10 May 2023',
    },
  ],

  promoBanner: {
    heading: 'Monitor, secure, and empower the placement ecosystem!',
    subheading: 'Keep the system running smoothly for all stakeholders.',
  },

  footer: {
    copyright: '© 2025 Campus Placement Portal. All rights reserved.',
    links: ['Better Placements', 'Stronger Futures'],
  },
};

// Fetches all data needed by the Admin Dashboard page in one call.
// Swap the endpoint path for whatever your backend actually exposes.
export async function getAdminDashboardOverview() {
  try {
    const { data } = await api.get('/admin-dashboard/overview');
    return data;
  } catch (error) {
    console.warn(
      '[adminDashboardService] Falling back to default dashboard data — API call failed:',
      error.message
    );
    return DEFAULT_DASHBOARD_DATA;
  }
}

// Approves or rejects a pending TPO registration.
// Currently a stub: real usage would be
//   await api.post(`/admin-dashboard/registrations/${id}/decision`, { decision });
export async function decideRegistration(id, decision) {
  try {
    await api.post(`/admin-dashboard/registrations/${id}/decision`, { decision });
  } catch (error) {
    console.warn('[adminDashboardService] decision not persisted (no backend yet):', error.message);
  }
  return { id, decision };
}

export { DEFAULT_DASHBOARD_DATA };
