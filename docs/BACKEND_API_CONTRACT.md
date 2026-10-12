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

## 5. Authentication (`/api/auth`)

- `POST /api/auth/register` — Register a new student. **Body:** `{ name, email, password }` | **Success:** `201 Created`
- `POST /api/auth/login` — Log in and receive a JWT token with user details. **Body:** `{ email, password }` | **Success:** `200 OK`
- `GET /api/auth/me` — Get the authenticated user's details. **Auth:** `Bearer <token>` | **Success:** `200 OK`

### Common Error Responses

- `400 Bad Request` — Invalid or missing fields.
- `401 Unauthorized` — Invalid credentials or token.
- `404 Not Found` — User not found.
- `409 Conflict` — Email already registered.
- `500 Internal Server Error` — Unexpected server error.

**Response format:** `{ "success": true/false, "message": "...", "data": {} }`

**Note:** Public registration must assign `STUDENT`; users cannot self-assign `ADMIN` or `TPO`.

---

## 6. Placement Status (`/api/placements`)

- `GET /api/placements` — List all placement statuses. **Access:** `ADMIN`, `TPO`.
- `GET /api/placements/:id` — Get placement status details. **Access:** `ADMIN`, `TPO`, `STUDENT` (own record only).
- `PUT /api/placements/:id` — Update placement status and remarks. **Access:** `ADMIN`, `TPO`.
- `GET /api/placements/:id/history` — View placement status history. **Access:** `ADMIN`, `TPO`, `STUDENT` (own record only).

**Valid statuses:** `ELIGIBLE`, `SHORTLISTED`, `INTERVIEW_SCHEDULED`, `SELECTED`, `REJECTED`, `OFFER_ACCEPTED`.

**Response format:** `{ "success": true/false, "message": "...", "data": {} }`

### Common Error Responses

- `400 Bad Request` — Invalid placement ID or status.
- `401 Unauthorized` — Missing or invalid token.
- `403 Forbidden` — Access denied.
- `404 Not Found` — Placement status not found.
- `500 Internal Server Error` — Unexpected server error.
