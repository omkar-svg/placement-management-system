import React from 'react';
import { FaUsers, FaUniversity, FaHeartbeat, FaShieldAlt, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import './StatCards.css';

const CARD_ICONS = {
  'total-users': FaUsers,
  'tpo-accounts': FaUniversity,
  'system-health': FaHeartbeat,
  'security-alerts': FaShieldAlt,
};

// Renders the 4 top stat cards. `cards` comes from the page, which gets
// it from adminDashboardService — no data is hard-coded here.
function StatCards({ cards, onViewSecurityDetails }) {
  return (
    <div className="stat-cards">
      {cards.map((card) => {
        const Icon = CARD_ICONS[card.id];
        const isAlert = card.id === 'security-alerts';
        return (
          <div key={card.id} className={`stat-card${isAlert ? ' stat-card--alert' : ''}`}>
            <div className={`stat-card__icon stat-card__icon--${card.id}`}>
              <Icon />
            </div>
            <div className="stat-card__body">
              <p className="stat-card__label">{card.label}</p>
              <p className="stat-card__value">{card.value}</p>

              {!isAlert && card.subtitle && (
                <p className="stat-card__subtitle">
                  {card.trend === 'up' && <FaArrowUp className="stat-card__trend-icon" />}
                  {card.subtitle}
                </p>
              )}

              {isAlert && (
                <button type="button" className="stat-card__cta" onClick={onViewSecurityDetails}>
                  {card.ctaLabel} <FaArrowRight />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatCards;
