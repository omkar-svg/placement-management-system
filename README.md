# Placement Management System

Campus placement portal: a **Node/Express + Prisma + MySQL** backend and a **React (Vite + Tailwind)** frontend
that contains the public site, the login page, the student area and the admin dashboards.

```
placement-management-system/
├── backend/    Express API (port 5000)      -> src/routes, controllers, middleware, prisma/schema.prisma
└── frontend/   React app   (port 3000)      -> src/pages, components, services
```

## Requirements

- **Node.js 20.19+ or 22.12+** (required by Vite 8) — check with `node -v`
- **MySQL 8** running locally, with an empty database (e.g. `placement_db`)

## 1. Run the backend

```bash
cd backend
cp .env.example .env          # Windows: copy .env.example .env
```

Edit `.env`: put your MySQL password in `DATABASE_URL` and change `JWT_SECRET` to any long random string.
The server refuses to start if `JWT_SECRET` or `JWT_EXPIRES_IN` is missing.

```bash
npm install
npx prisma migrate dev        # creates the tables AND generates the Prisma client (src/generated/client)
npm run dev                   # API on http://localhost:5000
```

Check it: open <http://localhost:5000/api/health> — you should see `"database": "connected"`.

### Create your first admin user

There is no seed script and no user-management screen yet, so create the first ADMIN through the register endpoint
(leave the backend running, use a second terminal):

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Admin","email":"admin@dkte.ac.in","password":"Admin@123","role":"ADMIN"}'
```

<details><summary>Windows PowerShell version</summary>

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:5000/api/auth/register `
  -ContentType "application/json" `
  -Body '{"name":"Admin","email":"admin@dkte.ac.in","password":"Admin@123","role":"ADMIN"}'
```
</details>

Use `"role":"STUDENT"` or `"TPO"` the same way to create other users.

## 2. Run the frontend

```bash
cd frontend
npm install
npm run dev                   # http://localhost:3000
```

Vite proxies every `/api/...` request to `http://localhost:5000`, so no frontend `.env` is needed
(set `VITE_API_URL` only if the API lives somewhere else — see `frontend/.env.example`).

Open <http://localhost:3000>, click **Login**, and sign in. Where you land depends on the role:

| Role    | Lands on             | Can open                                   |
|---------|----------------------|--------------------------------------------|
| ADMIN   | `/admin-dashboard`   | all admin pages                            |
| STUDENT | `/student/dashboard` | student pages                              |
| TPO     | `/`                  | (no TPO dashboard yet)                     |

## What is real vs. not built yet

The admin pages only show data the backend can actually provide.

| Admin page            | Status |
|-----------------------|--------|
| Dashboard             | Real: company count, placement records, status chart/donut (`/api/placements`, `/api/companies`), your notifications (`/api/notifications`), API/DB health (`/api/health`) |
| Main Dashboard        | Real: active drives, interviews, offers, upcoming drives, recent activity (built from `/api/placements` + `/api/companies`) |
| TPO Accounts          | Empty state — backend has no endpoint to list/manage users |
| Reports               | Empty state — backend has no reports endpoint |
| Audit Logs            | Empty state — backend has no audit-log endpoint |
| System Settings       | Read-only — backend has no settings endpoint |
| Pending registrations | Empty — accounts are created immediately on register, there is no approval step |

Backend endpoints that would unlock the rest: `GET /api/drives` (drives with no student records don't show up today),
`GET /api/users`, `GET /api/reports`, `GET /api/audit-logs`, `GET|PUT /api/system-settings`.

## Project conventions

- **Auth**: `frontend/src/services/authService.js` stores the JWT under `token` and the user under `user` in
  `localStorage`. `frontend/src/services/api.js` (shared axios instance) sends it as `Authorization: Bearer <token>`
  and sends you back to `/login` on a 401. Admin routes are wrapped in `components/auth/ProtectedRoute.jsx`
  (UI convenience only — the backend enforces roles).
- **Two sidebars**: `components/layout/Sidebar.jsx` is the *student* sidebar; the admin one is `AdminSidebar.jsx`.
- **Add a page**: create `src/pages/YourPage.jsx`, put its parts in `src/components/<feature>/`, its API calls in
  `src/services/<feature>Service.js` (import the shared `api.js`, and use `unwrap()` — every backend reply is
  `{ success, data }`), then add one `<Route>` in `src/App.jsx`.
- **Styling**: the public/login/student pages use Tailwind; the admin pages use plain CSS scoped under `.app-shell`.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Cannot find module './generated/client'` | Run `npx prisma generate` (or `npx prisma migrate dev`) in `backend/` |
| `JWT_SECRET is not configured` | Create `backend/.env` from `.env.example` |
| Login says *Unable to connect to the backend* | Backend isn't running on port 5000 — start it (`npm run dev` in `backend/`) |
| `Can't reach database server` | MySQL isn't running, or `DATABASE_URL` in `backend/.env` is wrong |
| Vite fails to start / syntax errors | Node is too old — use 20.19+ or 22.12+ |
| Port 3000 or 5000 already in use | Stop the other process, or change `PORT` in `backend/.env` and the proxy target in `frontend/vite.config.js` |
