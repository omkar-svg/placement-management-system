// Company Controller - To be implemented
const prisma = require("../prisma");

// Create a new company
const createCompany = async (req, res, next) => {
  try {
    // Trim inputs before validation so whitespace-only values are rejected too
    const companyName = req.body.companyName?.trim();
    const about = req.body.about?.trim();
    const location = req.body.location?.trim();
    const website = req.body.website?.trim();

    if (!companyName || !about || !location || !website) {
      return res.status(400).json({
        success: false,
        message: "Company name,about,location and website are required",
      });
    }
    const company = await prisma.company.create({
      data: {
        companyName,
        about,
        location,
        website,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Company created successfully",
      data: company,
    });
  } catch (error) {
    if (error.code === "P2002") {
      return res
        .status(409)
        .json({ success: false, message: "A company with this name already exists" });
    }

    console.error("Create company error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create company",
    });
  }
};

// Get all companies
const getCompanies = async (req, res, next) => {
  try {
    const companies = await prisma.company.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Companies fetched successfully",
      data: companies,
    });
  } catch (error) {
    console.error("Get companies error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch companies",
    });
  }
};

// Get a company by its ID
const getCompanyById = async (req, res, next) => {
  try {
    const companyId = Number(req.params.id);

    if (!Number.isInteger(companyId) || companyId <= 0) {
      return res.status(400).json({ success: false, message: "Invalid company ID" });
    }

    const company = await prisma.company.findUnique({
      where: {
        id: companyId,
      },
      include: {
        drives: {
          orderBy: { driveDate: "desc" },
          select: { id: true, role: true, package: true, driveDate: true, status: true },
        },
      },
    });

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Company fetched successfully",
      data: company,
    });
  } catch (error) {
    console.error("Get company by Id error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch company",
    });
  }
};

// Update an existing company by its ID
const updateCompany = async (req, res, next) => {
  try {
    const companyId = Number(req.params.id);

    const { companyName, about, location, website } = req.body;

    if (!Number.isInteger(companyId) || companyId <= 0) {
      return res.status(400).json({ success: false, message: "Invalid company ID" });
    }

    const existing = await prisma.company.findUnique({ where: { id: companyId } });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    if (
      companyName === undefined &&
      about === undefined &&
      location === undefined &&
      website === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "At least one field is required to update",
      });
    }

    const data = {};
    if (companyName !== undefined) {
      const trimmed = companyName.trim();
      if (!trimmed) {
        return res.status(400).json({
          success: false,
          message: "Company name cannot be empty",
        });
      }
      data.companyName = trimmed;
    }
    if (about !== undefined) {
      const trimmed = about.trim();
      if (!trimmed) {
        return res.status(400).json({ success: false, message: "About cannot be empty" });
      }
      data.about = trimmed;
    }

    if (location !== undefined) {
      const trimmed = location.trim();
      if (!trimmed) {
        return res.status(400).json({ success: false, message: "Location cannot be empty" });
      }
      data.location = trimmed;
    }

    if (website !== undefined) {
      const trimmed = website.trim();
      if (!trimmed) {
        return res.status(400).json({ success: false, message: "Website cannot be empty" });
      }
      data.website = trimmed;
    }

    const updated = await prisma.company.update({
      where: { id: companyId },
      data,
    });

    return res.status(200).json({
      success: true,
      message: "Company updated successfully",
      data: updated,
    });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "A company with this name already exists",
      });
    }

    console.error("Update company:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update company",
    });
  }
};

// Delete a company by its ID
const deleteCompany = async (req, res, next) => {
  try {
    const companyId = Number(req.params.id);

    if (!Number.isInteger(companyId) || companyId <= 0) {
      return res.status(400).json({ success: false, message: "Invalid company ID" });
    }

    const existing = await prisma.company.findUnique({
      where: {
        id: companyId,
      },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    await prisma.company.delete({
      where: { id: companyId },
    });

    return res.status(200).json({
      success: true,
      message: "Company deleted successfully",
    });
  } catch (error) {
    console.error("Delete company:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete company",
    });
  }
};

module.exports = {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
};
