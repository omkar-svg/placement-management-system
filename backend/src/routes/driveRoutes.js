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

const router = express.Router();

router.post("/", authMiddleware, createDrive);
router.get("/", authMiddleware, getAllDrives);
router.get("/:id", authMiddleware, getDriveById);
router.put("/:id", authMiddleware, updateDrive);
router.delete("/:id", authMiddleware, deleteDrive);
module.exports = router;