import { getPlacements, getCompanies } from './placementsService.js';
import { formatDate, humanize, lastMonths, monthKey } from '../utils/format.js';

// ============================================================
// MAIN DASHBOARD — built from the real backend
//
//   GET /api/placements  -> every student's status per drive (+ the drive)
//   GET /api/companies   -> company names (drives only carry companyId)
//
// The backend has no "list drives" endpoint yet (routes/driveRoutes.js is
// empty), so drives are discovered through placement records. A drive
// with no student placement rows yet will not appear here until
// GET /api/drives exists.
// ============================================================

const ACTIVE_DRIVE_STATUSES = ['UPCOMING', 'ONGOING'];

export async function getMainDashboardOverview() {
  const [placements, companies] = await Promise.all([getPlacements(), getCompanies()]);

  const companyNames = new Map(companies.map((c) => [c.id, c.companyName]));
  const companyOf = (drive) => companyNames.get(drive.companyId) ?? `Company #${drive.companyId}`;

  // Unique drives seen through placement records.
  const drives = new Map();
  placements.forEach((p) => {
    if (p.drive) drives.set(p.drive.id, p.drive);
  });
  const driveList = [...drives.values()];

  const countStatus = (...statuses) => placements.filter((p) => statuses.includes(p.status)).length;

  // Placement records created/updated per month over the last 6 months.
  const months = lastMonths(6);
  const perMonth = new Map(months.map((m) => [m.key, 0]));
  placements.forEach((p) => {
    const key = monthKey(p.updatedAt);
    if (perMonth.has(key)) perMonth.set(key, perMonth.get(key) + 1);
  });
  const trend = months.map(({ key, month }) => ({ month, records: perMonth.get(key) }));
  const hasTrend = trend.some((point) => point.records > 0);

  const upcomingDrives = driveList
    .filter((d) => d.status === 'UPCOMING')
    .sort((a, b) => new Date(a.driveDate) - new Date(b.driveDate))
    .slice(0, 5)
    .map((d) => ({ id: d.id, company: companyOf(d), role: d.role, date: formatDate(d.driveDate) }));

  const recentActivity = [...placements]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 8)
    .map((p) => ({
      id: p.id,
      title: `Student #${p.studentId}${p.student?.branch ? ` (${p.student.branch})` : ''} — ${humanize(p.status)}`,
      subtitle: p.drive ? `${p.drive.role} at ${companyOf(p.drive)}` : '',
      date: formatDate(p.updatedAt),
    }));

  return {
    summary: [
      {
        id: 'active-drives',
        label: 'Active Drives',
        value: driveList.filter((d) => ACTIVE_DRIVE_STATUSES.includes(d.status)).length,
      },
      { id: 'total-applications', label: 'Placement Records', value: placements.length },
      {
        id: 'interviews-scheduled',
        label: 'Interviews Scheduled',
        value: countStatus('INTERVIEW_SCHEDULED'),
      },
      { id: 'offers-extended', label: 'Offers Extended', value: countStatus('SELECTED', 'OFFER_ACCEPTED') },
    ],
    applicationsTrend: hasTrend ? trend : [],
    upcomingDrives,
    recentActivity,
  };
}
