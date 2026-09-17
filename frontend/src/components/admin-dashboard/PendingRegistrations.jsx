import React, { useState } from 'react';
import Avatar from '../common/Avatar.jsx';
import { decideRegistration } from '../../services/adminDashboardService.js';
import './PendingRegistrations.css';

// `registrations` comes from the page (fetched via adminDashboardService).
function PendingRegistrations({ registrations: initialRegistrations }) {
  const [registrations, setRegistrations] = useState(
    initialRegistrations.map((reg) => ({ ...reg, status: 'pending' }))
  );
  const [showAllDrives, setShowAllDrives] = useState(false);

  // Approves/rejects a registration: updates local state immediately,
  // and calls the service so the backend can persist the decision.
  const handleDecision = async (id, decision) => {
    setRegistrations((current) =>
      current.map((reg) => (reg.id === id ? { ...reg, status: decision } : reg))
    );
    await decideRegistration(id, decision);
  };

  return (
    <section className="pending-reg">
      <h2>Pending TPO Registrations</h2>

      <div className="pending-reg__list">
        {registrations.map((reg) => (
          <div className="pending-reg__item" key={reg.id}>
            <Avatar name={reg.name.replace(/^New\s+/, '')} size={44} />
            <div className="pending-reg__info">
              <p className="pending-reg__name">{reg.name}</p>
              <p className="pending-reg__desc">{reg.description}</p>
            </div>

            {reg.status === 'pending' ? (
              <div className="pending-reg__actions">
                <button type="button" className="pending-reg__btn" onClick={() => handleDecision(reg.id, 'approved')}>
                  Approve
                </button>
                <span className="pending-reg__divider">/</span>
                <button type="button" className="pending-reg__btn" onClick={() => handleDecision(reg.id, 'rejected')}>
                  Reject
                </button>
              </div>
            ) : (
              <span className={`pending-reg__status pending-reg__status--${reg.status}`}>
                {reg.status === 'approved' ? 'Approved' : 'Rejected'}
              </span>
            )}
          </div>
        ))}
      </div>

      <button type="button" className="pending-reg__view-all" onClick={() => setShowAllDrives((open) => !open)}>
        View All Drives →
      </button>
      {showAllDrives && (
        <p className="pending-reg__empty-note">No additional drive records are available.</p>
      )}
    </section>
  );
}

export default PendingRegistrations;
