// ============================================================
// SYSTEM SETTINGS — not supported by the backend yet
//
// There is no settings model or endpoint. Needed on the backend:
//   GET /api/system-settings
//   PUT /api/system-settings
//
// Until then the form starts from the neutral defaults below (blank
// fields, toggles off — not business data) and cannot be saved.
// ============================================================
export const SYSTEM_SETTINGS_SUPPORTED = false;

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
  return EMPTY_SYSTEM_SETTINGS;
}
