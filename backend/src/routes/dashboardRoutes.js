// Dashboard Routes
const express = require("express");

const {
    getStudentDashboard,
    getTpoDashboard,
    getAdminDashboard
} = require("../controllers/dashboardController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Student Dashboard - accessible only by STUDENT
router.get("/student", authMiddleware, roleMiddleware("STUDENT"), getStudentDashboard);

// TPO Dashboard - accessible only by TPO
router.get("/tpo", authMiddleware, roleMiddleware("TPO"), getTpoDashboard);

// Admin Dashboard - accessible only by ADMIN
router.get("/admin", authMiddleware, roleMiddleware("ADMIN"), getAdminDashboard);

module.exports = router;