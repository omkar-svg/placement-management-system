import { useEffect, useState } from 'react'
import { FaBell, FaBars, FaChevronDown } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext.jsx'
import { getStudentDashboard } from '../services/studentDashboardService.js'
import Sidebar from '../components/layout/Sidebar'
import campusImage from '../assets/images/rajwada-palace.jpg'
import './StudentDashboard.css'

function getInitials(name) {
  if (!name) return 'S'
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function StudentDashboard() {
  const { user } = useAuth()
  const [studentData, setStudentData] = useState(null)

  useEffect(() => {
    let cancelled = false

    getStudentDashboard()
      .then((data) => {
        if (!cancelled) setStudentData(data)
      })
      .catch(() => {
        // Student profile may not exist yet; name still renders from AuthContext
        // and PRN falls back to "—".
      })

    return () => {
      cancelled = true
    }
  }, [])

  const studentName = user?.name ?? 'Student'
  const prn = studentData?.student?.prn ?? '—'
  const notificationCount = studentData?.recentNotifications?.length ?? 0

  return (
    <div className="sd-shell">
      <Sidebar />

      <div className="sd-main">
        <header className="sd-header" role="banner">
          <div className="sd-header__left">
            <button
              type="button"
              className="sd-header__menu-btn"
              aria-label="Toggle sidebar"
            >
              <FaBars size={18} />
            </button>
            <span className="sd-header__title">Dashboard</span>
          </div>

          <div className="sd-header__right">
            <div className="sd-header__bell-wrap">
              <button
                type="button"
                className="sd-header__icon-btn"
                aria-label={`Notifications${notificationCount > 0 ? `, ${notificationCount} new` : ''}`}
              >
                <FaBell size={17} />
              </button>
              {notificationCount > 0 && (
                <span className="sd-header__badge" aria-hidden="true">
                  {notificationCount}
                </span>
              )}
            </div>

            <div className="sd-header__divider" aria-hidden="true" />

            <div className="sd-header__profile" role="button" tabIndex={0} aria-label="Student profile">
              <div className="sd-header__avatar" aria-hidden="true">
                {getInitials(studentName)}
              </div>

              <div className="sd-header__profile-info">
                <span className="sd-header__profile-name">{studentName}</span>
                <span className="sd-header__profile-prn">{prn}</span>
              </div>

              <FaChevronDown size={11} className="sd-header__chevron" aria-hidden="true" />
            </div>
          </div>
        </header>

        <section className="sd-hero" aria-label="Welcome section">
          <div className="sd-hero__inner">
            <div className="sd-hero__content">
              <div className="sd-hero__accent" aria-hidden="true" />
              <h1 className="sd-hero__greeting">
                Hello,{' '}
                <span className="sd-hero__greeting-name">{studentName}</span>
                {' '}👋
              </h1>
              <p className="sd-hero__tagline">
                Stay consistent — your dream job is closer than you think.
              </p>
            </div>

            <div className="sd-hero__image-wrap">
              <img
                src={campusImage}
                alt="DKTE campus"
                className="sd-hero__image"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default StudentDashboard