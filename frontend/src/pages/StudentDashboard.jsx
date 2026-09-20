import Sidebar from '../components/layout/Sidebar'

/**
 * Displays the student dashboard.
 *
 * Currently contains only the dashboard sidebar.
 * Dashboard data and backend API integration will be added later.
 *
 * @returns {JSX.Element} Student dashboard page.
 */
function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="min-w-0 flex-1">
          {/* Dashboard content will be added here later */}
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard