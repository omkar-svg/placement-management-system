const steps = [
  {
    number: '01',
    title: 'Create Profile',
    description:
      'Students create their profile and add academic & personal details.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21c.8-4 3.2-6 7-6s6.2 2 7 6" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Discover Opportunities',
    description:
      'Browse placement drives and companies looking for talent.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Check Eligibility',
    description:
      'System automatically checks eligibility based on the placement rules.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l8 3v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Appear & Track',
    description:
      'Attend drives and track your placement status in real time.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 21c.7-4 2.7-6 6-6s5.3 2 6 6" />
        <path d="M14 15c3.2 0 5.2 1.8 6 5" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Get Placed',
    description:
      'Move ahead in the process and achieve your dream career.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 4h8v3H8z" />
        <path d="M6 7h12l1 13H5L6 7z" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
]


function ProcessStep({ step, isLast }) {
  return (
    <div className="relative flex min-w-0 flex-1 flex-col items-center text-center">

      {/* Icon */}
      <div className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-purple-500/60 bg-[#16102f] shadow-[0_0_22px_rgba(124,58,237,0.35)]">
        <div className="h-7 w-7 text-purple-400">
          {step.icon}
        </div>
      </div>

      {/* Number */}
      <div className="relative z-20 mt-[-1px] flex h-6 min-w-6 items-center justify-center rounded-full border border-purple-500/40 bg-[#211842] px-1.5 text-[10px] font-bold text-white">
        {step.number}
      </div>

      {/* Title */}
      <h3 className="mt-2 text-[13px] font-bold leading-tight text-white sm:text-sm">
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-1.5 max-w-[170px] text-[10px] leading-[1.45] text-slate-300 sm:text-[11px]">
        {step.description}
      </p>

      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-[calc(50%+34px)] right-[calc(-50%+34px)] top-[29px] hidden border-t border-dashed border-purple-400/60 lg:block">
          <span className="absolute right-[-2px] top-[-8px] text-sm text-purple-200">
            →
          </span>
        </div>
      )}
    </div>
  )
}


export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full px-5 py-5 sm:px-7 sm:py-6 lg:px-10"
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          overflow-hidden
          rounded-[14px]
          bg-[#100a25]
          px-5
          py-7
          sm:px-8
          sm:py-8
          lg:px-10
          lg:py-8
        "
      >

        {/* Background glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

        {/* Decorative background line */}
        <div className="pointer-events-none absolute right-0 top-0 h-px w-64 rotate-[-25deg] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <div className="pointer-events-none absolute bottom-5 left-0 h-px w-48 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />


        {/* Heading */}
        <div className="relative z-10 mb-7 text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-400 sm:text-[11px]">
            How It Works
          </p>

          <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl lg:text-[26px]">
            From Profile to Placement
          </h2>

        </div>


        {/* Process Steps */}
        <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">

          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}

        </div>

      </div>
    </section>
  )
}