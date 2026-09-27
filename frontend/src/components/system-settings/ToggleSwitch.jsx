import React from 'react';

// Small controlled on/off switch shared by the notification/security/
// appearance sections.
function ToggleSwitch({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className={`settings-toggle${checked ? ' settings-toggle--on' : ''}`}
      onClick={() => onChange(!checked)}
    />
  );
}

export default ToggleSwitch;
