import React from 'react';
import './SettingsSection.css';

// Generic card wrapper shared by every settings section (General,
// Notifications, Security, Appearance) so they stay visually consistent.
function SettingsSection({ icon: Icon, title, description, children }) {
  return (
    <section className="settings-section">
      <div className="settings-section__header">
        {Icon && <Icon className="settings-section__icon" aria-hidden="true" />}
        <div>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </div>
      <div className="settings-section__body">{children}</div>
    </section>
  );
}

export default SettingsSection;
