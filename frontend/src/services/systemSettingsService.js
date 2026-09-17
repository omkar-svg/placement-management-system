import api from './api.js';

// ============================================================
// SYSTEM SETTINGS — data policy
// There is no original design to copy configured values from, so every
// field below starts blank/off. These are neutral UI defaults for form
// controls (an empty text field, a toggle in the "off" position) — not
// invented business data or metrics. Once the real settings endpoint
// exists, its response overrides these defaults entirely.
// ============================================================
const EMPTY_SYSTEM_SETTINGS = {
  general: {
    platformName: '',
    supportEmail: '',
    timezone: '',
  },
  notifications: {
    emailAlerts: false,
    smsAlerts: false,
    weeklyDigest: false,
  },
  security: {
    twoFactorRequired: false,
    sessionTimeoutMinutes: '',
  },
  appearance: {
    theme: 'light',
    compactSidebar: false,
  },
};

export async function getSystemSettings() {
  try {
    const { data } = await api.get('/system-settings');
    return data;
  } catch (error) {
    console.warn(
      '[systemSettingsService] Falling back to empty settings — API call failed:',
      error.message
    );
    return EMPTY_SYSTEM_SETTINGS;
  }
}

// Persists the full settings object. Stub until the real backend
// endpoint exists — the page still updates its own local state so the
// form feels functional.
export async function updateSystemSettings(settings) {
  try {
    await api.put('/system-settings', settings);
  } catch (error) {
    console.warn('[systemSettingsService] settings not persisted (no backend yet):', error.message);
  }
  return settings;
}

export { EMPTY_SYSTEM_SETTINGS };
