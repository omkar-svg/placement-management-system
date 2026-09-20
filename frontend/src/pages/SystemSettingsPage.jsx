import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import GeneralSettings from '../components/system-settings/GeneralSettings.jsx';
import NotificationSettings from '../components/system-settings/NotificationSettings.jsx';
import SecuritySettings from '../components/system-settings/SecuritySettings.jsx';
import AppearanceSettings from '../components/system-settings/AppearanceSettings.jsx';
import { getSystemSettings } from '../services/systemSettingsService.js';
import './SystemSettingsPage.css';

// System Settings page. Loads through systemSettingsService.js on mount.
// The backend has no settings endpoint yet (see that service), so every
// field starts blank/off and the form is read-only: nothing can be saved,
// and the page says so instead of pretending to.
function SystemSettingsPage() {
  const [settings, setSettings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadSettings() {
      const data = await getSystemSettings();
      if (isMounted) {
        setSettings(data);
        setIsLoading(false);
      }
    }

    loadSettings();
    return () => {
      isMounted = false;
    };
  }, []);

  const updateSection = (section, value) => {
    setSettings((current) => ({ ...current, [section]: value }));
  };

  if (isLoading || !settings) {
    return (
      <DashboardLayout>
        <p className="system-settings-page__loading">Loading settings…</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="system-settings-page__header">
        <div>
          <h1>System Settings</h1>
          <p>Configure platform-wide options for the admin dashboard.</p>
        </div>
        <button
          type="button"
          className="system-settings-page__save-btn"
          disabled
          title="Not available yet — the backend has no system-settings endpoint."
        >
          Save Changes
        </button>
      </div>

      <p className="system-settings-page__notice" role="note">
        System settings can't be changed yet: the backend has no system-settings endpoint. These options are shown
        for reference and will become editable once it exists.
      </p>

      <fieldset className="system-settings-page__fieldset" disabled>
        <div className="system-settings-page__grid">
          <GeneralSettings settings={settings.general} onChange={(value) => updateSection('general', value)} />
          <NotificationSettings
            settings={settings.notifications}
            onChange={(value) => updateSection('notifications', value)}
          />
          <SecuritySettings settings={settings.security} onChange={(value) => updateSection('security', value)} />
          <AppearanceSettings
            settings={settings.appearance}
            onChange={(value) => updateSection('appearance', value)}
          />
        </div>
      </fieldset>
    </DashboardLayout>
  );
}

export default SystemSettingsPage;
