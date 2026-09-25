import React from 'react';
import { FaCog, FaMemory, FaClock, FaChartBar } from 'react-icons/fa';
import './ServerStatus.css';

const METRIC_ICONS = {
  gear: FaCog,
  memory: FaMemory,
  clock: FaClock,
  bars: FaChartBar,
};

// `metrics` come from GET /api/health via adminDashboardService.
function ServerStatus({ metrics }) {
  return (
    <section className="server-status">
      <div className="server-status__header">
        <h2>API &amp; Database Status</h2>
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
              <span className="server-status__icon">{Icon && <Icon />}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServerStatus;
