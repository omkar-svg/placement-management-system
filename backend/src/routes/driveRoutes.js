// Drive Routes - To be implemented

const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { setEligibility } = require("../controllers/driveController");

const router = express.Router();

router.put("/:dId/eligibility", authMiddleware, setEligibility);

module.exports = router;