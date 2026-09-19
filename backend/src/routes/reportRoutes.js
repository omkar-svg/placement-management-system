const express = require("express");
const {
  getPlacementAnalytics,
  exportPlacementPDF,
  exportPlacementExcel,
} = require("../controllers/reportController");
const { route } = require("./authRoutes");
const router = express.Router();

router.get("/", getPlacementAnalytics);
router.get("/export/pdf", exportPlacementPDF);
router.get("/export/excel", exportPlacementExcel);

module.exports = router;
