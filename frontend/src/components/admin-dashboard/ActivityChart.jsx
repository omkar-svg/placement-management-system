import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { FaChevronDown } from 'react-icons/fa';
import './ActivityChart.css';

// `legend`, `data`, and `periodOptions` all come from adminDashboardService
// via the page — one <Bar> is drawn per legend entry (matched by `key`).
function ActivityChart({ legend, data, periodOptions }) {
  const [period, setPeriod] = useState(periodOptions[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelectPeriod = (option) => {
    setPeriod(option);
    setMenuOpen(false);
  };

  return (
    <section className="activity-chart">
      <div className="activity-chart__header">
        <h2>Placement Activity</h2>

        <div className="activity-chart__period">
          <button
            type="button"
            className="activity-chart__period-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-haspopup="listbox"
            aria-expanded={menuOpen}
          >
            {period} <FaChevronDown />
          </button>
          {menuOpen && (
            <ul className="activity-chart__period-menu" role="listbox">
              {periodOptions.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    className="activity-chart__period-option"
                    onClick={() => handleSelectPeriod(option)}
                    role="option"
                    aria-selected={option === period}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="activity-chart__legend">
        {legend.map((series) => (
          <div className="activity-chart__legend-item" key={series.key}>
            <span className="activity-chart__legend-dot" style={{ background: series.color }} />
            {series.name}
          </div>
        ))}
      </div>

      <div className="activity-chart__canvas">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} barGap={4} barCategoryGap={28}>
            <CartesianGrid vertical={false} stroke="#eef0f6" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9aa1b3', fontSize: 13 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9aa1b3', fontSize: 12 }}
              allowDecimals={false}
            />
            <Tooltip cursor={{ fill: 'rgba(16,25,58,0.04)' }} />
            {legend.map((series) => (
              <Bar
                key={series.key}
                dataKey={series.key}
                name={series.name}
                fill={series.color}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default ActivityChart;
