import React from 'react';
import Sidebar from './Sidebar.jsx';
import './DashboardLayout.css';

// Wraps any page in the shared sidebar + content area, so every page
// (mine, a teammate's, or a future one) looks consistent without
// duplicating the sidebar markup. Usage:
//
//   <DashboardLayout>
//     ...your page's own header/content/footer...
//   </DashboardLayout>
function DashboardLayout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main">{children}</main>
    </div>
  );
}

export default DashboardLayout;
