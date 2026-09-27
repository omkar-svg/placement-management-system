import React from 'react';
import { FaBriefcase, FaFileAlt, FaCalendarCheck, FaAward } from 'react-icons/fa';
import SummaryCard from '../common/SummaryCard.jsx';

const ICONS = {
  'active-drives': FaBriefcase,
  'total-applications': FaFileAlt,
  'interviews-scheduled': FaCalendarCheck,
  'offers-extended': FaAward,
};

const ACCENTS = {
  'active-drives': 'navy',
  'total-applications': 'purple',
  'interviews-scheduled': 'gold',
  'offers-extended': 'success',
};

// `summary` comes from the page (mainDashboardService) — no data is
// hard-coded here. Values render as 0 until the real endpoint is wired up.
function DrivesSummary({ summary }) {
  return (
    <div className="summary-cards">
      {summary.map((card) => (
        <SummaryCard
          key={card.id}
          icon={ICONS[card.id]}
          label={card.label}
          value={card.value}
          accent={ACCENTS[card.id]}
        />
      ))}
    </div>
  );
}

export default DrivesSummary;
