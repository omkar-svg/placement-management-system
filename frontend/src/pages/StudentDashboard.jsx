import { useEffect, useState } from 'react'
import { FaBell, FaBars, FaChevronDown } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext.jsx'
import { getStudentDashboard } from '../services/studentDashboardService.js'
import Sidebar from '../components/layout/Sidebar'
import campusImage from '../assets/images/rajwada-palace.jpg'

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
      })

    return () => {
      cancelled = true
    }
  }, [])

  const studentName = user?.name ?? 'Student'
  const prn = studentData?.student?.prn ?? '—'
  const notificationCount =
    studentData?.recentNotifications?.filter((n) => !n.isRead).length ?? 0

  return (
    <div className="flex min-h-screen bg-[var(--off-white)]">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* ── Header ── */}
        <header
          className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-[var(--border)] bg-white px-6 shadow-[0_1px_6px_rgba(11,31,58,0.06)]"
          role="banner"
        >
          {/* Left: decorative menu icon + page title */}
          <div className="flex items-center gap-[14px]">
            <span
              className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] text-[var(--navy)]"
              aria-hidden="true"
            >
              <FaBars size={18} />
            </span>
            <span className="text-[1.125rem] font-bold leading-none tracking-[-0.01em] text-[var(--navy-dark)]">
              Dashboard
            </span>
          </div>

          {/* Right: notification bell + profile chip */}
          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <div className="relative">
              <button
                type="button"
                className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] text-[var(--navy)] transition-colors hover:bg-[var(--off-white)]"
                aria-label={
                  notificationCount > 0
                    ? `${notificationCount} unread notification${notificationCount > 1 ? 's' : ''}`
                    : 'Notifications'
                }
              >
                <FaBell size={17} />
              </button>
              {notificationCount > 0 && (
                <span
                  className="absolute right-1 top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full border-2 border-white bg-[var(--gold)] px-[4px] text-[10px] font-bold leading-none text-[var(--navy-dark)]"
                  aria-hidden="true"
                >
                  {notificationCount}
                </span>
              )}
            </div>

            {/* Divider */}
            <div
              className="h-7 w-px shrink-0 bg-[var(--border)] max-sm:hidden"
              aria-hidden="true"
            />

            {/* Profile chip — display only, no interaction until dropdown is implemented */}
            <div className="flex items-center gap-[10px] rounded-[40px] border border-[var(--border)] bg-white py-1 pl-1 pr-[10px]">
              <div
                className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--navy-light)] text-[13px] font-bold leading-none tracking-[0.02em] text-[var(--gold)]"
                aria-hidden="true"
              >
                {getInitials(studentName)}
              </div>
              <div className="flex flex-col gap-px max-sm:hidden">
                <span className="whitespace-nowrap text-[13px] font-semibold leading-[1.2] text-[var(--navy-dark)]">
                  {studentName}
                </span>
                <span className="whitespace-nowrap text-[11px] font-medium leading-[1.2] text-[var(--text-muted)]">
                  {prn}
                </span>
              </div>
              <FaChevronDown
                size={11}
                className="shrink-0 text-[var(--text-muted)]"
                aria-hidden="true"
              />
            </div>
          </div>
        </header>

        {/* ── Hero ── */}
        <section
          className="relative mx-6 mt-6 shrink-0 overflow-hidden rounded-[20px] bg-[linear-gradient(125deg,var(--navy-dark)_0%,var(--navy)_55%,var(--navy-light)_100%)] shadow-[0_4px_24px_rgba(11,31,58,0.18)] max-sm:mx-4 max-sm:mt-4 max-sm:rounded-[14px]"
          aria-label="Welcome section"
        >
          {/* Decorative ring rendered via a positioned child instead of ::before,
              which is not expressible in Tailwind utility classes */}
          <div
            className="pointer-events-none absolute -right-[60px] -top-[60px] h-[260px] w-[260px] rounded-full border-[48px] border-[rgba(255,197,44,0.07)]"
            aria-hidden="true"
          />

          <div className="relative z-10 grid min-h-[168px] grid-cols-[1fr_auto] items-center gap-6 max-sm:grid-cols-1 max-sm:min-h-0">
            {/* Text content */}
            <div className="py-8 pl-9 max-sm:px-5 max-sm:pb-0 max-sm:pt-6">
              <div
                className="mb-3 inline-block h-[3px] w-10 rounded-full bg-[var(--gold)]"
                aria-hidden="true"
              />
              <h1 className="mb-[10px] text-[1.65rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-white max-[900px]:text-[1.4rem] max-sm:text-[1.25rem]">
                Hello,{' '}
                <span className="text-[var(--gold)]">{studentName}</span>
                {' '}👋
              </h1>
              <p className="m-0 max-w-[360px] text-[0.9375rem] leading-[1.55] text-white/70 max-sm:max-w-full max-sm:text-[0.875rem]">
                Stay consistent — your dream job is closer than you think.
              </p>
            </div>

            {/* Campus image */}
            <div className="flex h-[168px] items-end justify-end pr-8 max-sm:h-[120px] max-sm:justify-center max-sm:px-5 max-sm:pb-5">
              <img
                src={campusImage}
                alt="DKTE campus"
                className="block h-[168px] w-[220px] rounded-t-[14px] object-cover opacity-[0.88] [filter:brightness(0.92)_contrast(1.04)] max-[900px]:w-[160px] max-sm:h-[120px] max-sm:w-full max-sm:rounded-[10px]"
              />
            </div>
          </div>
        </section>

        {/* Dashboard content will be added here later */}
      </div>
    </div>
  )
}

export default StudentDashboard