import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaChartBar } from 'react-icons/fa';
import EmptyState from '../common/EmptyState.jsx';
import './ApplicationsTrend.css';

// `data` comes from the page. Renders a real bar chart once
// mainDashboardService returns points; shows an empty state instead of a
// blank/zero-value chart when there's nothing to plot yet.
function ApplicationsTrend({ data }) {
  const hasData = data && data.length > 0;

  return (
    <section className="applications-trend">
      <div className="applications-trend__header">
        <h2>Applications Trend</h2>
      </div>

      {hasData ? (
        <div className="applications-trend__chart">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="applications" fill="var(--color-navy-900)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <EmptyState
          icon={FaChartBar}
          title="No application data yet"
          description="Once drives start receiving applications, the monthly trend will appear here."
        />
      )}
    </section>
  );
}

export default ApplicationsTrend;
