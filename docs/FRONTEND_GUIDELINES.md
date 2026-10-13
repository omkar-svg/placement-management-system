# SDC Frontend Engineering Guidelines 🎨

> **Software Developers Club (SDC) — DKTE Placement Portal**  
> *Target:* All Frontend Contributors  
> *Core Philosophy:* **Build with reusable Lego blocks, style with pure Tailwind, and connect to real backend APIs.**

---

## 1. The 3 Golden Rules

1. **Tailwind CSS Only:**  
   Do **NOT** create new `.css` files. Use Tailwind utility classes (`p-4`, `bg-[#0b1f3a]`, `rounded-xl`).
2. **Reuse Common Atoms First:**  
   Before creating a button, input, badge, modal, or card, look in `src/components/common/`. Never reinvent basic UI blocks from scratch.
3. **No Fake Data:**  
   Connect your screens to real backend APIs using `src/services/`. Refer to [`docs/BACKEND_API_CONTRACT.md`](BACKEND_API_CONTRACT.md) for available endpoints.

---

## 2. Folder Structure & Where Code Lives

```text
frontend/src/
├── components/
│   ├── common/         # Shared Lego blocks (Button, Badge, Modal, Input, Card)
│   ├── layout/         # Shell components (DashboardLayout, Sidebar, Navbar)
│   ├── student/        # Student-specific components (ProfileCard, DriveCard)
│   └── tpo/            # TPO-specific components (EligibleTable, CreateDriveForm)
├── pages/              # Top-level screen components mapped to routes (App.jsx)
├── services/           # Axios API functions (one file per domain, e.g. driveService.js)
├── context/            # React contexts (AuthContext.jsx)
├── utils/              # Helper functions (formatDate, currency, role checks)
└── index.css           # Global theme & Tailwind directives
```

### Naming Conventions:
* **React Components:** `PascalCase.jsx` (e.g. `DriveCard.jsx`, `Button.jsx`, `StudentDashboard.jsx`)
* **Services & Utils:** `camelCase.js` (e.g. `studentService.js`, `formatDate.js`)
* **Custom Hooks:** `camelCase.js` prefixed with `use` (e.g. `useAuth.js`)

---

## 3. How to Write a Clean Component

Every reusable component should accept props with sensible defaults and allow custom classes to be passed in:

```jsx
// src/components/common/Card.jsx
import React from 'react';

export default function Card({ title, subtitle, action, children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm p-6 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div>
            {title && <h3 className="text-lg font-bold text-slate-900">{title}</h3>}
            {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
```

---

## 4. The 3 Mandatory States (Loading, Error, Empty)

Whenever a page or widget fetches data from the backend, **you must handle all 3 states**. Never leave the user looking at a blank white screen or let the app crash if an array is empty!

```jsx
import React, { useEffect, useState } from 'react';
import { getStudentDashboard } from '../services/studentService';
import EmptyState from '../components/common/EmptyState';
import ErrorNotice from '../components/common/ErrorNotice';

export default function UpcomingDrivesList() {
  const [drives, setDrives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const res = await getStudentDashboard();
        setDrives(res.data.upcomingDrives || []);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load placement drives.');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // 1. LOADING STATE
  if (loading) {
    return (
      <div className="p-8 text-center text-sm font-medium text-slate-500">
        Loading upcoming drives...
      </div>
    );
  }

  // 2. ERROR STATE
  if (error) {
    return <ErrorNotice message={error} onRetry={() => window.location.reload()} />;
  }

  // 3. EMPTY STATE
  if (drives.length === 0) {
    return (
      <EmptyState
        title="No Upcoming Drives"
        description="There are no placement drives scheduled at this time. Check back later!"
      />
    );
  }

  // 4. SUCCESS STATE (Render the real list)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {drives.map((drive) => (
        <div key={drive.id} className="p-4 bg-white rounded-xl border border-slate-200">
          <h4 className="font-bold text-slate-900">{drive.role}</h4>
          <p className="text-sm text-slate-600">{drive.company?.companyName}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 5. API Service Layer Pattern

* **Never write `axios.get(...)` inside your JSX component.**
* Put all network requests in `src/services/` so endpoint URLs and headers are centralized:

```javascript
// src/services/driveService.js
import api from './api';

export const driveService = {
  // Fetch criteria for a drive
  getEligibility: (driveId) => api.get(`/drives/${driveId}/eligibility`),

  // Fetch eligible candidates calculated by the backend
  getEligibleStudents: (driveId) => api.get(`/drives/${driveId}/eligible-students`),

  // Save criteria
  setEligibility: (driveId, criteriaData) => api.put(`/drives/${driveId}/eligibility`, criteriaData),
};
```

---

## 6. Mobile-First Responsive Design

College students check placement updates on their phones! Always make sure screens work on mobile:

* **Grid layouts:** Start with 1 column on mobile, expand to 2 or 3 on larger screens:
  ```jsx
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  ```
* **Flex direction:** Stack on mobile, place side-by-side on desktop:
  ```jsx
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
  ```
* **Padding:** Use smaller padding on mobile (`p-4 sm:p-6 lg:p-8`).

---

## 7. Quick Do's & Don'ts Checklist

| Do's ✅ | Don'ts ❌ |
| :--- | :--- |
| Use Tailwind utility classes | Do **NOT** create `.css` files |
| Check `src/components/common/` before coding | Do **NOT** create duplicate buttons or inputs |
| Handle Loading, Error, and Empty states | Do **NOT** assume the backend API never fails |
| Use semantic tags (`<button>`, `<input>`, `<a>`) | Do **NOT** attach `onClick` to raw `<div>` tags |
| Run `npm run build` before pushing code | Do **NOT** push code with build errors |
| Use college colors: Deep Navy (`#0b1f3a`) & Gold (`#ffc52c`) | Do **NOT** use random hex codes or unapproved colors |
