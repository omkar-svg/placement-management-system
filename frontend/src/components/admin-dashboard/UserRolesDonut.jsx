import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './UserRolesDonut.css';

function UserRolesDonut({ total, totalLabel, roles }) {
  return (
    <section className="roles-donut">
      <h2>User Roles Distribution</h2>

      <div className="roles-donut__body">
        <div className="roles-donut__chart">
          <ResponsiveContainer width={160} height={160}>
            <PieChart>
              <Pie data={roles} dataKey="count" nameKey="name" innerRadius={52} outerRadius={72} paddingAngle={2} stroke="none">
                {roles.map((role) => (
                  <Cell key={role.key} fill={role.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value}`, name]} />
            </PieChart>
          </ResponsiveContainer>
          <div className="roles-donut__center">
            <span className="roles-donut__total">{total}</span>
            <span className="roles-donut__total-label">{totalLabel}</span>
          </div>
        </div>

        <ul className="roles-donut__legend">
          {roles.map((role) => (
            <li key={role.key} className="roles-donut__legend-item">
              <span className="roles-donut__dot" style={{ background: role.color }} />
              <span className="roles-donut__name">{role.name}</span>
              <span className="roles-donut__count">
                {role.count} ({role.percent}%)
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UserRolesDonut;
