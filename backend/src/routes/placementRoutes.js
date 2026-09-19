const express = require("express");

const {
    getPlacements,
    getPlacementById,
    updatePlacementStatus
} = require("../controllers/placementController");


const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", authMiddleware, roleMiddleware("ADMIN", "TPO"), getPlacements);

router.get("/:id", authMiddleware, roleMiddleware("ADMIN", "TPO", "STUDENT"), getPlacementById);

router.put("/:id", authMiddleware, roleMiddleware("ADMIN", "TPO"), updatePlacementStatus);

module.exports = router;