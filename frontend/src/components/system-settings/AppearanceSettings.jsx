import React from 'react';
import { FaPalette } from 'react-icons/fa';
import SettingsSection from './SettingsSection.jsx';
import ToggleSwitch from './ToggleSwitch.jsx';

function AppearanceSettings({ settings, onChange }) {
  return (
    <SettingsSection icon={FaPalette} title="Appearance" description="Look and feel of the dashboard shell.">
      <div className="settings-row">
        <div>
          <p className="settings-row__label">Theme</p>
          <p className="settings-row__hint">Applies across every dashboard page.</p>
        </div>
        <select value={settings.theme} onChange={(event) => onChange({ ...settings, theme: event.target.value })}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="settings-row">
        <div>
          <p className="settings-row__label">Compact sidebar</p>
          <p className="settings-row__hint">Show icons only, no labels.</p>
        </div>
        <ToggleSwitch
          checked={settings.compactSidebar}
          onChange={(value) => onChange({ ...settings, compactSidebar: value })}
          label="Compact sidebar"
        />
      </div>
    </SettingsSection>
  );
}

export default AppearanceSettings;
