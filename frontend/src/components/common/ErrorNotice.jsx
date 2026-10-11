import React from 'react';
import './ErrorNotice.css';

// Inline error box for a page whose data failed to load.
function ErrorNotice({ message, onRetry }) {
  return (
    <div className="error-notice" role="alert">
      <p className="error-notice__message">{message}</p>
      {onRetry && (
        <button type="button" className="error-notice__retry" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

export default ErrorNotice;
