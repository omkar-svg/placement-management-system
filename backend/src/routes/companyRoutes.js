// Company Routes - To be implemented
const express = require("express");
const {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");
const { route } = require("./authRoutes");

const router = express.Router();

router.post("/", createCompany);
router.get("/", getCompanies);
router.get("/:id", getCompanyById);
router.patch("/:id", updateCompany);
router.delete("/:id", deleteCompany);

module.exports = router;
