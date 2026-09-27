import React from 'react';
import './EmptyState.css';

// Generic "nothing to show yet" block. Used by every new page instead of
// hard-coding fake rows/records — when a service has no data (API not
// wired up yet, or a genuinely empty result), render this rather than
// inventing placeholder content.
function EmptyState({ icon: Icon, title = 'Nothing here yet', description }) {
  return (
    <div className="empty-state">
      {Icon && <Icon className="empty-state__icon" aria-hidden="true" />}
      <p className="empty-state__title">{title}</p>
      {description && <p className="empty-state__description">{description}</p>}
    </div>
  );
}

export default EmptyState;
