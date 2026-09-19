// Drive Routes - To be implemented

const express = require("express");

const {
    createDrive,
    getAllDrives,
    getDriveById,
    updateDrive,
    deleteDrive
} = require("../controllers/driveController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("ADMIN", "TPO"), createDrive);

router.get("/", authMiddleware, getAllDrives);

router.get("/:id", authMiddleware, getDriveById);

router.put("/:id", authMiddleware, roleMiddleware("ADMIN", "TPO"), updateDrive);

router.delete("/:id", authMiddleware, roleMiddleware("ADMIN", "TPO"), deleteDrive);

module.exports = router;