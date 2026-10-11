import React from 'react';
import './SummaryCard.css';

// Generic stat card: icon + label + value + optional subtitle.
// The Admin Dashboard has its own bespoke StatCards component (with
// alert-styling, CTA button, etc.) that stays in components/admin-dashboard/
// untouched. This lighter version is for the newer pages so they don't
// each reinvent the same markup/CSS.
function SummaryCard({ icon: Icon, label, value, subtitle, accent = 'navy' }) {
  return (
    <div className="summary-card">
      <div className={`summary-card__icon summary-card__icon--${accent}`}>
        {Icon && <Icon aria-hidden="true" />}
      </div>
      <div className="summary-card__body">
        <p className="summary-card__label">{label}</p>
        <p className="summary-card__value">{value}</p>
        {subtitle && <p className="summary-card__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

export default SummaryCard;
