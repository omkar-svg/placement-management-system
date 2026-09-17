import React, { useState } from 'react';
import { FaCog, FaMemory, FaClock, FaChartBar } from 'react-icons/fa';
import './ServerStatus.css';

const METRIC_ICONS = {
  gear: FaCog,
  memory: FaMemory,
  clock: FaClock,
  bars: FaChartBar,
};

function ServerStatus({ metrics }) {
  const [showReport, setShowReport] = useState(false);

  return (
    <section className="server-status">
      <div className="server-status__header">
        <h2>Server Load &amp; API Status</h2>
        <button type="button" className="server-status__link" onClick={() => setShowReport((v) => !v)}>
          View Report
        </button>
      </div>

      <div className="server-status__grid">
        {metrics.map((metric) => {
          const Icon = METRIC_ICONS[metric.icon];
          return (
            <div className="server-status__metric" key={metric.id}>
              <div>
                <p className="server-status__label">{metric.label}</p>
                <p className="server-status__value">{metric.value}</p>
              </div>
              <span className="server-status__icon">
                <Icon />
              </span>
            </div>
          );
        })}
      </div>

      {showReport && <p className="server-status__note">Full server report data has not been provided.</p>}
    </section>
  );
}

export default ServerStatus;
