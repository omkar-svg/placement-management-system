import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import GeneralSettings from '../components/system-settings/GeneralSettings.jsx';
import NotificationSettings from '../components/system-settings/NotificationSettings.jsx';
import SecuritySettings from '../components/system-settings/SecuritySettings.jsx';
import AppearanceSettings from '../components/system-settings/AppearanceSettings.jsx';
import { getSystemSettings, updateSystemSettings } from '../services/systemSettingsService.js';
import './SystemSettingsPage.css';

// System Settings page. Loads through systemSettingsService.js on mount.
// Every field starts blank/off (see the data policy comment in that
// service) until a real settings endpoint exists — the form itself is
// fully functional and ready to save once it does.
function SystemSettingsPage() {
  const [settings, setSettings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saveState, setSaveState] = useState('idle'); // idle | saving | saved

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
    setSaveState('idle');
  };

  const handleSave = async () => {
    setSaveState('saving');
    await updateSystemSettings(settings);
    setSaveState('saved');
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
        <button type="button" className="system-settings-page__save-btn" onClick={handleSave}>
          {saveState === 'saving' ? 'Saving…' : saveState === 'saved' ? 'Saved ✓' : 'Save Changes'}
        </button>
      </div>

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
    </DashboardLayout>
  );
}

export default SystemSettingsPage;
