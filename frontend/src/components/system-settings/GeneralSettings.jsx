import React from 'react';
import { FaCog } from 'react-icons/fa';
import SettingsSection from './SettingsSection.jsx';

function GeneralSettings({ settings, onChange }) {
  return (
    <SettingsSection icon={FaCog} title="General" description="Basic platform identity and locale.">
      <div className="settings-row">
        <div>
          <p className="settings-row__label">Platform name</p>
          <p className="settings-row__hint">Shown in the sidebar brand and page titles.</p>
        </div>
        <input
          type="text"
          placeholder="Not set"
          value={settings.platformName}
          onChange={(event) => onChange({ ...settings, platformName: event.target.value })}
        />
      </div>

      <div className="settings-row">
        <div>
          <p className="settings-row__label">Support email</p>
          <p className="settings-row__hint">Where user-reported issues get routed.</p>
        </div>
        <input
          type="email"
          placeholder="Not set"
          value={settings.supportEmail}
          onChange={(event) => onChange({ ...settings, supportEmail: event.target.value })}
        />
      </div>

      <div className="settings-row">
        <div>
          <p className="settings-row__label">Timezone</p>
          <p className="settings-row__hint">Used for dates across the dashboard.</p>
        </div>
        <select
          value={settings.timezone}
          onChange={(event) => onChange({ ...settings, timezone: event.target.value })}
        >
          <option value="">Not set</option>
          <option value="Asia/Kolkata">Asia/Kolkata</option>
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New_York</option>
        </select>
      </div>
    </SettingsSection>
  );
}

export default GeneralSettings;
