# Backend API Cheat-Sheet 🔌

> **Base URL:** `/api`  
> *For Frontend:* Real endpoints ready to use right now.  
> *For Backend:* When you add a new endpoint, append it to this list in your PR!  

---

## 1. Dashboards (`/api/dashboard`)
* `GET /api/dashboard/student` ➔ Returns student profile, skills, resume, upcoming drives, and application statuses.
* `GET /api/dashboard/tpo` ➔ Returns total counts (students, companies, placed) and drives list.
* `GET /api/dashboard/admin` ➔ Returns system overview metrics and recent drives.

---

## 2. Companies (`/api/companies`)
* `GET /api/companies` ➔ List all companies.
* `POST /api/companies` ➔ Add company: `{ companyName, about, location, website }`
* `DELETE /api/companies/:id` ➔ Delete company by ID.

---

## 3. Placement Drives & Eligibility (`/api/drives`)
* `GET /api/drives/:dId/eligibility` ➔ Fetch criteria thresholds (CGPA, backlogs, branch).
* `PUT /api/drives/:dId/eligibility` ➔ Update criteria.
* `GET /api/drives/:dId/eligible-students` ➔ **List of students who qualify for drive `dId`!**

---

## 4. Notifications (`/api/notifications`)
* `GET /api/notifications` ➔ List logged-in user's notifications.
* `PATCH /api/notifications/:id/read` ➔ Mark notification as read.

---

## 5. Auth (`/api/auth`)
* `POST /api/auth/login` ➔ Body: `{ email, password }` ➔ Returns `{ token, user }`.
* `GET /api/auth/me` ➔ Current logged-in user session.
