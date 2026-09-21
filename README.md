# Placement Management System

## 🎓 Overview

A full-stack Placement Management System for colleges to simplify and digitize the campus placement process.

## 🛠️ Tech Stack

| Layer          | Technology                     |
|----------------|--------------------------------|
| Frontend       | React.js, Vite, Tailwind CSS   |
| Backend        | Node.js, Express.js            |
| Database       | MySQL                          |
| ORM            | Prisma (Code First)            |
| Authentication | JWT, bcrypt                    |
| File Upload    | Multer                         |

## 📁 Project Structure

```
placement-management-system/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma         # Database models
│   ├── src/
│   │   ├── controllers/          # Request handlers
│   │   ├── routes/               # API route definitions
│   │   ├── middleware/            # Auth & upload middleware
│   │   ├── utils/                # Helper functions
│   │   ├── generated/            # Prisma generated client
│   │   ├── prismaClient.js       # Prisma singleton
│   │   └── server.js             # Express entry point
│   ├── uploads/                  # Uploaded files (resumes)
│   ├── .env                      # Environment variables
│   ├── .env.example              # Env template
│   └── package.json
│
├── frontend/
│   └── src/
│       ├── components/           # Reusable UI components
│       ├── pages/                # Page components
│       ├── services/             # API service layer (Axios)
│       ├── context/              # React context (Auth, etc.)
│       └── App.jsx               # Root component
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MySQL Server
- Git

### Backend Setup

```bash
cd backend
npm install
```

Update the `.env` file with your MySQL credentials:

```env
DATABASE_URL="mysql://root:yourpassword@localhost:3306/placement_db"
JWT_SECRET="your-super-secret-jwt-key"
```

Run Prisma migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Start the server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 👥 User Roles

| Role     | Description                                      |
|----------|--------------------------------------------------|
| Admin    | Manage users, TPO accounts, monitor system       |
| TPO      | Manage students, companies, drives, eligibility  |
| Student  | View drives, update profile, upload resume       |

## 📊 Database Models

- User
- Student
- StudentSkill
- Company
- PlacementDrive
- EligibilityCriteria
- EligibleBranch
- PlacementStatus
- Notification
- Resume

## 📜 License

This project is licensed under the MIT License.
