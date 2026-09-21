import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import SettingsSection from './SettingsSection.jsx';
import ToggleSwitch from './ToggleSwitch.jsx';

function SecuritySettings({ settings, onChange }) {
  return (
    <SettingsSection icon={FaShieldAlt} title="Security" description="Access control for admin accounts.">
      <div className="settings-row">
        <div>
          <p className="settings-row__label">Require two-factor authentication</p>
          <p className="settings-row__hint">Applies to all Admin and TPO accounts.</p>
        </div>
        <ToggleSwitch
          checked={settings.twoFactorRequired}
          onChange={(value) => onChange({ ...settings, twoFactorRequired: value })}
          label="Require two-factor authentication"
        />
      </div>

      <div className="settings-row">
        <div>
          <p className="settings-row__label">Session timeout (minutes)</p>
          <p className="settings-row__hint">Auto-logout after inactivity.</p>
        </div>
        <input
          type="number"
          min="1"
          placeholder="Not set"
          value={settings.sessionTimeoutMinutes}
          onChange={(event) => onChange({ ...settings, sessionTimeoutMinutes: event.target.value })}
        />
      </div>
    </SettingsSection>
  );
}

export default SecuritySettings;
