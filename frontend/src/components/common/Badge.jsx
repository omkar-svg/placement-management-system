const statusStyles = {
  Selected: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Offer Accepted": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Shortlisted: "bg-amber-50 text-amber-700 border-amber-200",
  Interview: "bg-amber-50 text-amber-700 border-amber-200",
  Eligible: "bg-blue-50 text-blue-700 border-blue-200",
  Upcoming: "bg-blue-50 text-blue-700 border-blue-200",
  Rejected: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function Badge({ status, className = "" }) {
  const colorClasses =
    statusStyles[status] ?? "bg-slate-50 text-slate-700 border-slate-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${colorClasses} ${className}`}
    >
      {status}
    </span>
  );
}
