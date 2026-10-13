const express = require("express");
const {
  getPlacementAnalytics,
  exportPlacementPDF,
  exportPlacementExcel,
} = require("../controllers/reportController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();

router.get("/", authMiddleware, roleMiddleware("ADMIN", "TPO"), getPlacementAnalytics);
router.get("/export/pdf", authMiddleware, roleMiddleware("ADMIN", "TPO"), exportPlacementPDF);
router.get("/export/excel", authMiddleware, roleMiddleware("ADMIN", "TPO"), exportPlacementExcel);

module.exports = router;
