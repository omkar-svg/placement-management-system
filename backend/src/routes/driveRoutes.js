// Drive Routes - To be implemented

const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { setEligibility, getEligibility } = require("../controllers/driveController");

const router = express.Router();

router.put("/:dId/eligibility", authMiddleware, setEligibility);
router.get("/:dId/eligibility", authMiddleware, getEligibility)

module.exports = router;