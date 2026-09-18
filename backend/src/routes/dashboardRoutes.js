// Dashboard Routes
const express = require("express");

const {
    getStudentDashboard
} = require("../controllers/dashboardController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Student Dashboard
router.get("/student", authMiddleware, getStudentDashboard);

module.exports = router;