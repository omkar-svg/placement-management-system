// Company Routes - To be implemented
const express = require("express");
const {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("ADMIN", "TPO"), createCompany);
router.get("/", authMiddleware, getCompanies);
router.get("/:id", authMiddleware, getCompanyById);
router.patch("/:id", authMiddleware, roleMiddleware("ADMIN", "TPO"), updateCompany);
router.delete("/:id", authMiddleware, roleMiddleware("ADMIN", "TPO"), deleteCompany);

module.exports = router;
