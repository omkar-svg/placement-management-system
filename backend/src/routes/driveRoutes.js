// Drive Routes

const express = require("express");

const {
    createDrive,
    getAllDrives,
    getDriveById,
    updateDrive,
    deleteDrive,
    setEligibility,
    getEligibility,
    getEligibleStudents
} = require("../controllers/driveController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Placement Drive routes
router.post("/", authMiddleware, roleMiddleware("ADMIN", "TPO"), createDrive);

router.get("/", authMiddleware, getAllDrives);

router.get("/:id", authMiddleware, getDriveById);

router.put("/:id", authMiddleware, roleMiddleware("ADMIN", "TPO"), updateDrive);

router.delete("/:id", authMiddleware, roleMiddleware("ADMIN", "TPO"), deleteDrive);

// Eligibility routes
router.put("/:dId/eligibility", authMiddleware, setEligibility);

router.get("/:dId/eligibility", authMiddleware, getEligibility);

router.get("/:dId/eligible-students", authMiddleware, getEligibleStudents);

module.exports = router;