// Small formatting helpers shared by the dashboard services.

// "2026-09-20T10:15:00.000Z" -> "20 Sep 2026"
export function formatDate(iso) {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// "INTERVIEW_SCHEDULED" -> "Interview scheduled"
export function humanize(value) {
  if (!value) return '';
  const text = String(value).replace(/_/g, ' ').toLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Builds `count` consecutive month buckets ending with the current month,
// e.g. [{ key: '2026-04', month: 'Apr' }, ... { key: '2026-09', month: 'Sep' }].
export function lastMonths(count = 6, now = new Date()) {
  const months = [];
  for (let i = count - 1; i >= 0; i -= 1) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({
      key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`,
      month: d.toLocaleString('en-US', { month: 'short' }),
    });
  }
  return months;
}

// Month bucket key ("2026-09") of an ISO date string, in local time.
export function monthKey(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

// Indian academic year label derived from today's date: the year starts in
// July, odd semester Jul-Dec, even semester Jan-Jun.
export function academicYearLabel(now = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth(); // 0 = Jan
  const startYear = month >= 6 ? year : year - 1;
  const semester = month >= 6 ? 'Odd' : 'Even';
  return `AY ${startYear}-${String((startYear + 1) % 100).padStart(2, '0')} (${semester} Sem)`;
}
