import React from 'react';
import { FaBuilding, FaClipboardList, FaHeartbeat, FaUserCheck, FaArrowUp } from 'react-icons/fa';
import './StatCards.css';

const CARD_ICONS = {
  companies: FaBuilding,
  'placement-records': FaClipboardList,
  'system-health': FaHeartbeat,
  'students-selected': FaUserCheck,
};

// Renders the 4 top stat cards. `cards` comes from the page, which gets
// it from adminDashboardService — no data is hard-coded here.
function StatCards({ cards }) {
  return (
    <div className="stat-cards">
      {cards.map((card) => {
        const Icon = CARD_ICONS[card.id];
        return (
          <div key={card.id} className="stat-card">
            <div className={`stat-card__icon stat-card__icon--${card.id}`}>{Icon && <Icon />}</div>
            <div className="stat-card__body">
              <p className="stat-card__label">{card.label}</p>
              <p className="stat-card__value">{card.value}</p>

              {card.subtitle && (
                <p className="stat-card__subtitle">
                  {card.trend === 'up' && <FaArrowUp className="stat-card__trend-icon" />}
                  {card.subtitle}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatCards;
