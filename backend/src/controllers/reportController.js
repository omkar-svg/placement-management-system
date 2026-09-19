const prisma = require("../prismaClient");
const PDFDocument = require("pdfkit");
const ExcelJS = require("exceljs");

const getPlacementReportData = async () => {
  const totalStudents = await prisma.student.count();

  // Find all unique students whose placement status is SELECTED
  const placedStudents = await prisma.placementStatus.findMany({
    where: {
      status: "SELECTED",
    },
    select: {
      studentId: true,
    },
    distinct: ["studentId"],
  });
  const totalPlacedStudents = placedStudents.length;
  const placementPercentage =
    totalStudents > 0 ? ((totalPlacedStudents / totalStudents) * 100).toFixed(2) : 0;

  // List of branches for which placement statistics are required
  const branch = [
    "Computer Science",
    "Civil",
    "Electrical",
    "Electronics & Telecommunication",
    "Textile",
    "Mechanical",
  ];

  // Create branch-wise placement statistics
  const branchWise = await Promise.all(
    branch.map(async (element) => {
      const totalStudents = await prisma.student.count({
        where: {
          branch: element,
        },
      });

      // Find unique selected students from the current branch
      const placedStudents = await prisma.placementStatus.findMany({
        where: {
          status: "SELECTED",
          student: { branch: element },
        },
        select: {
          studentId: true,
        },
        distinct: ["studentId"],
      });

      const totalPlacedStudents = placedStudents.length;

      const placementPercentage =
        totalStudents > 0 ? ((totalPlacedStudents / totalStudents) * 100).toFixed(2) : 0;

      return {
        branch: element,
        totalStudents,
        placedStudents: totalPlacedStudents,
        placementPercentage,
      };
    }),
  );

  // Get all companies from the Company table
  const companies = await prisma.company.findMany({
    select: {
      id: true,
      companyName: true,
    },
  });

  // Create company-wise placement statistics
  const companyWise = await Promise.all(
    companies.map(async (company) => {
      // Find unique students selected by this company
      const placedStudents = await prisma.placementStatus.findMany({
        where: {
          status: "SELECTED",
          drive: {
            companyId: company.id,
          },
        },
        select: {
          studentId: true,
        },
        distinct: ["studentId"],
      });

      return {
        company: company.companyName,
        placedStudents: placedStudents.length,
      };
    }),
  );

  return {
    totalStudents,
    placedStudents: totalPlacedStudents,
    placementPercentage,
    branchWise,
    companyWise,
  };
};

// Helper function to draw a table row in the PDF
const drawTableRow = (doc, columns, y, widths, isHeader = false) => {
  let x = 50;

  columns.forEach((column, index) => {
    // Draw the cell border
    doc.rect(x, y, widths[index], 25).stroke();

    // Header text is bold
    doc
      .fontSize(10)
      .font(isHeader ? "Helvetica-Bold" : "Helvetica")
      .text(column, x + 5, y + 7, {
        width: widths[index] - 10,
        align: index === 0 ? "left" : "center",
      });

    x += widths[index];
  });
};
// GET PLACEMENT REPORT
const getPlacementAnalytics = async (req, res) => {
  try {
    const reportData = await getPlacementReportData();

    return res.status(200).json(reportData);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch placement analytics",
    });
  }
};

const exportPlacementPDF = async (req, res) => {
  try {
    const reportData = await getPlacementReportData();

    const doc = new PDFDocument({
      margin: 50,
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=placement-report.pdf");

    doc.pipe(res);

    // =========================
    // REPORT HEADER
    // =========================

    doc.fontSize(24).font("Helvetica-Bold").text("Placement Report", {
      align: "center",
    });

    doc.fontSize(12).font("Helvetica").text("Placement Management System", {
      align: "center",
    });

    doc.moveDown();

    // Report date
    const currentDate = new Date().toLocaleDateString("en-IN");

    doc.fontSize(10).text(`Report Generated: ${currentDate}`, {
      align: "right",
    });

    doc.moveDown(2);

    // =========================
    // OVERALL SUMMARY
    // =========================

    doc.fontSize(16).font("Helvetica-Bold").text("Overall Placement Summary");

    doc.moveDown();

    doc.fontSize(12).font("Helvetica").text(`Total Students: ${reportData.totalStudents}`);

    doc.text(`Placed Students: ${reportData.placedStudents}`);

    doc.text(`Placement Percentage: ${reportData.placementPercentage}%`);

    doc.moveDown(2);

    // =========================
    // BRANCH-WISE PLACEMENT
    // =========================

    doc.fontSize(16).font("Helvetica-Bold").text("Branch-wise Placement");

    doc.moveDown();

    let branchTableY = doc.y;

    // Table column widths
    const branchWidths = [250, 130, 115];

    // Header row
    drawTableRow(
      doc,
      ["Branch", "Students Placed", "Placement %"],
      branchTableY,
      branchWidths,
      true,
    );

    branchTableY += 25;

    // Data rows
    reportData.branchWise.forEach((branchData) => {
      drawTableRow(
        doc,
        [
          branchData.branch,
          `${branchData.placedStudents}/${branchData.totalStudents}`,
          `${branchData.placementPercentage}%`,
        ],
        branchTableY,
        branchWidths,
      );

      branchTableY += 25;
    });

    doc.y = branchTableY + 15;

    // =========================
    // COMPANY-WISE TABLE
    // =========================

    doc.fontSize(16).font("Helvetica-Bold").text("Company-wise Placement", 50, doc.y, {
      width: 500,
      lineBreak: false,
    });

    if (reportData.companyWise.length === 0) {
      doc.fontSize(11).font("Helvetica").text("No company placement data available.");
    } else {
      let companyTableY = doc.y;

      const companyWidths = [380, 115];

      // Header row
      drawTableRow(doc, ["Company", "Students Placed"], companyTableY, companyWidths, true);

      companyTableY += 25;

      // Data rows
      reportData.companyWise.forEach((companyData) => {
        drawTableRow(
          doc,
          [companyData.company, `${companyData.placedStudents}`],
          companyTableY,
          companyWidths,
        );

        companyTableY += 25;
      });

      doc.y = companyTableY + 15;
    }

    // =========================
    // FOOTER
    // =========================

    doc.moveDown(2);

    doc.fontSize(9).font("Helvetica").text("Generated by Placement Management System", {
      align: "center",
    });

    doc.end();
  } catch (error) {
    console.error("Error generating placement PDF:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate placement PDF",
      error: error.message,
    });
  }
};

const exportPlacementExcel = async (req, res) => {
  try {
    const reportData = await getPlacementReportData();

    const workbook = new ExcelJS.Workbook();

    const worksheet = workbook.addWorksheet("Placement Report");

    worksheet.addRow(["Placement Report"]);
    worksheet.addRow(["Placement Management System"]);
    worksheet.addRow([]);

    // Overall placement summary
    worksheet.addRow(["Overall Placement Summary"]);
    worksheet.addRow(["Total Students", reportData.totalStudents]);
    worksheet.addRow(["Placed Students", reportData.placedStudents]);
    worksheet.addRow(["Placement Percentage", `${reportData.placementPercentage}%`]);

    worksheet.addRow([]);

    // Branch-wise placement
    worksheet.addRow(["Branch-wise Placement"]);
    worksheet.addRow(["Branch", "Students Placed", "Placement %"]);

    reportData.branchWise.forEach((branchData) => {
      worksheet.addRow([
        branchData.branch,
        `${branchData.placedStudents}/${branchData.totalStudents}`,
        `${branchData.placementPercentage}%`,
      ]);
    });

    worksheet.addRow([]);

    // Company-wise placement
    worksheet.addRow(["Company-wise Placement"]);
    worksheet.addRow(["Company", "Students Placed"]);

    reportData.companyWise.forEach((companyData) => {
      worksheet.addRow([companyData.company, companyData.placedStudents]);
    });

    // Adjust column widths
    worksheet.getColumn(1).width = 35;
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 20;

    // Send Excel file
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );

    res.setHeader("Content-Disposition", "attachment; filename=placement-report.xlsx");

    await workbook.xlsx.write(res);

    res.end();
  } catch (error) {
    console.error("Error generating placement Excel:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate placement Excel",
      error: error.message,
    });
  }
};
module.exports = {
  getPlacementAnalytics,
  exportPlacementPDF,
  exportPlacementExcel,
};
