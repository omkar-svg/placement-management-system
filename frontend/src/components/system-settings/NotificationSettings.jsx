import React from 'react';
import { FaBell } from 'react-icons/fa';
import SettingsSection from './SettingsSection.jsx';
import ToggleSwitch from './ToggleSwitch.jsx';

function NotificationSettings({ settings, onChange }) {
  return (
    <SettingsSection icon={FaBell} title="Notifications" description="Control which alerts admins receive.">
      <div className="settings-row">
        <div>
          <p className="settings-row__label">Email alerts</p>
          <p className="settings-row__hint">Security alerts and TPO registration requests.</p>
        </div>
        <ToggleSwitch
          checked={settings.emailAlerts}
          onChange={(value) => onChange({ ...settings, emailAlerts: value })}
          label="Email alerts"
        />
      </div>

      <div className="settings-row">
        <div>
          <p className="settings-row__label">SMS alerts</p>
          <p className="settings-row__hint">Critical security alerts only.</p>
        </div>
        <ToggleSwitch
          checked={settings.smsAlerts}
          onChange={(value) => onChange({ ...settings, smsAlerts: value })}
          label="SMS alerts"
        />
      </div>

      <div className="settings-row">
        <div>
          <p className="settings-row__label">Weekly digest</p>
          <p className="settings-row__hint">Summary email of platform activity.</p>
        </div>
        <ToggleSwitch
          checked={settings.weeklyDigest}
          onChange={(value) => onChange({ ...settings, weeklyDigest: value })}
          label="Weekly digest"
        />
      </div>
    </SettingsSection>
  );
}

export default NotificationSettings;
