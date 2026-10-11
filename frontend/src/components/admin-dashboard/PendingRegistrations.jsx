import React from 'react';
import { FaUserClock } from 'react-icons/fa';
import Avatar from '../common/Avatar.jsx';
import EmptyState from '../common/EmptyState.jsx';
import './PendingRegistrations.css';

// `registrations` comes from the page (adminDashboardService).
//
// The backend creates an account immediately on POST /auth/register, so
// there is no "pending" state and no approve/reject endpoint. The list is
// therefore empty today; it is kept so the panel can show entries the day
// such an endpoint exists (Approve / Reject buttons should be added with it).
function PendingRegistrations({ registrations = [] }) {
  return (
    <section className="pending-reg">
      <h2>Pending TPO Registrations</h2>

      {registrations.length > 0 ? (
        <div className="pending-reg__list">
          {registrations.map((reg) => (
            <div className="pending-reg__item" key={reg.id}>
              <Avatar name={reg.name} size={44} />
              <div className="pending-reg__info">
                <p className="pending-reg__name">{reg.name}</p>
                <p className="pending-reg__desc">{reg.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={FaUserClock}
          title="No pending registrations"
          description="Accounts are created immediately on registration, so nothing waits for approval."
        />
      )}
    </section>
  );
}

export default PendingRegistrations;
