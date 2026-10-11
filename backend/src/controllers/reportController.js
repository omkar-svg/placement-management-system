const prisma = require("../prismaClient");
const pdfmake = require("pdfmake");
const ExcelJS = require("exceljs");
const path = require("path");

const fonts = {
  Roboto: {
    normal: path.join(__dirname, "../../node_modules/pdfmake/fonts/Roboto/Roboto-Regular.ttf"),

    bold: path.join(__dirname, "../../node_modules/pdfmake/fonts/Roboto/Roboto-Medium.ttf"),

    italics: path.join(__dirname, "../../node_modules/pdfmake/fonts/Roboto/Roboto-Italic.ttf"),

    bolditalics: path.join(
      __dirname,
      "../../node_modules/pdfmake/fonts/Roboto/Roboto-MediumItalic.ttf",
    ),
  },
};

// Register fonts
pdfmake.addFonts(fonts);

/*
|--------------------------------------------------------------------------
| GET PLACEMENT REPORT DATA
|--------------------------------------------------------------------------
*/

const getPlacementReportData = async () => {
  // 1. Get total students
  const totalStudents = await prisma.student.count();

  // 2. Get student counts grouped by branch
  const branchCounts = await prisma.student.groupBy({
    by: ["branch"],
    _count: {
      _all: true,
    },
  });

  // 3. Fetch selected placement records in one query
  const selectedRecords = await prisma.placementStatus.findMany({
    where: {
      status: {
        in: ["SELECTED", "OFFER_ACCEPTED"],
      },
    },
    select: {
      studentId: true,
      student: {
        select: {
          branch: true,
        },
      },
      drive: {
        select: {
          companyId: true,
        },
      },
    },
  });

  // 4. Get company names
  const companies = await prisma.company.findMany({
    select: {
      id: true,
      companyName: true,
    },
  });

  // 5. Count unique placed students overall
  const uniquePlacedStudents = new Set(selectedRecords.map((record) => record.studentId));

  const totalPlacedStudents = uniquePlacedStudents.size;

  const placementPercentage =
    totalStudents > 0 ? Number(((totalPlacedStudents / totalStudents) * 100).toFixed(2)) : 0;

  // 6. Prepare branch-wise statistics
  const branchPlacedStudents = new Map();

  for (const record of selectedRecords) {
    const branch = record.student.branch;

    if (!branchPlacedStudents.has(branch)) {
      branchPlacedStudents.set(branch, new Set());
    }

    branchPlacedStudents.get(branch).add(record.studentId);
  }

  const branchWise = branchCounts.map((item) => {
    const total = item._count._all;
    const placed = branchPlacedStudents.get(item.branch)?.size ?? 0;

    return {
      branch: item.branch,
      totalStudents: total,
      placedStudents: placed,
      placementPercentage: total > 0 ? Number(((placed / total) * 100).toFixed(2)) : 0,
    };
  });

  // 7. Prepare company-wise statistics
  const companyPlacedStudents = new Map();

  for (const record of selectedRecords) {
    const companyId = record.drive.companyId;

    if (!companyPlacedStudents.has(companyId)) {
      companyPlacedStudents.set(companyId, new Set());
    }

    companyPlacedStudents.get(companyId).add(record.studentId);
  }

  const companyWise = companies.map((company) => ({
    company: company.companyName,
    placedStudents: companyPlacedStudents.get(company.id)?.size ?? 0,
  }));

  // 8. Return report data
  return {
    totalStudents,
    placedStudents: totalPlacedStudents,
    placementPercentage,
    branchWise,
    companyWise,
  };
};
/*
|--------------------------------------------------------------------------
| GET PLACEMENT ANALYTICS
|--------------------------------------------------------------------------
*/

const getPlacementAnalytics = async (req, res) => {
  try {
    const reportData = await getPlacementReportData();

    return res.status(200).json(reportData);
  } catch (error) {
    console.error("Error fetching placement analytics:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch placement analytics",
    });
  }
};

/*
|--------------------------------------------------------------------------
| EXPORT PLACEMENT REPORT AS PDF
|--------------------------------------------------------------------------
*/

const exportPlacementPDF = async (req, res) => {
  try {
    // --------------------------------------------------
    // GET REPORT DATA
    // --------------------------------------------------

    const reportData = await getPlacementReportData();

    // --------------------------------------------------
    // CURRENT DATE
    // --------------------------------------------------

    const currentDate = new Date().toLocaleDateString("en-IN");

    // --------------------------------------------------
    // BRANCH TABLE
    // --------------------------------------------------

    const branchRows = [
      [
        {
          text: "Branch",
          bold: true,
        },

        {
          text: "Students Placed",
          bold: true,
        },

        {
          text: "Placement %",
          bold: true,
        },
      ],
    ];

    reportData.branchWise.forEach((branchData) => {
      branchRows.push([
        branchData.branch,

        `${branchData.placedStudents}/${branchData.totalStudents}`,

        `${branchData.placementPercentage}%`,
      ]);
    });

    // --------------------------------------------------
    // COMPANY TABLE
    // --------------------------------------------------

    const companyRows = [
      [
        {
          text: "Company",
          bold: true,
        },

        {
          text: "Students Placed",
          bold: true,
        },
      ],
    ];

    reportData.companyWise.forEach((companyData) => {
      companyRows.push([companyData.company, `${companyData.placedStudents}`]);
    });

    // --------------------------------------------------
    // PDF DOCUMENT DEFINITION
    // --------------------------------------------------

    const docDefinition = {
      pageSize: "A4",

      pageMargins: [50, 50, 50, 50],

      // Default font
      defaultStyle: {
        font: "Roboto",
        fontSize: 10,
      },

      // ------------------------------------------------
      // PDF CONTENT
      // ------------------------------------------------

      content: [
        // ----------------------------------------------
        // HEADER
        // ----------------------------------------------

        {
          text: "Placement Report",

          style: "title",

          alignment: "center",
        },

        {
          text: "Placement Management System",

          style: "subtitle",

          alignment: "center",
        },

        {
          text: `Report Generated: ${currentDate}`,

          alignment: "right",

          fontSize: 10,

          margin: [0, 10, 0, 20],
        },

        // ----------------------------------------------
        // OVERALL SUMMARY
        // ----------------------------------------------

        {
          text: "Overall Placement Summary",

          style: "sectionHeading",
        },

        {
          text: `Total Students: ${reportData.totalStudents}`,

          margin: [0, 5, 0, 0],
        },

        {
          text: `Placed Students: ${reportData.placedStudents}`,

          margin: [0, 5, 0, 0],
        },

        {
          text: `Placement Percentage: ${reportData.placementPercentage}%`,

          margin: [0, 5, 0, 15],
        },

        // ----------------------------------------------
        // BRANCH-WISE PLACEMENT
        // ----------------------------------------------

        {
          text: "Branch-wise Placement",

          style: "sectionHeading",
        },

        {
          table: {
            headerRows: 1,
            keepWithHeaderRows: 1,
            dontBreakRows: true,
            widths: ["*", 130, 100],

            body: branchRows,
          },

          layout: "lightHorizontalLines",

          margin: [0, 0, 0, 20],
        },

        // ----------------------------------------------
        // COMPANY-WISE PLACEMENT
        // ----------------------------------------------

        {
          text: "Company-wise Placement",

          style: "sectionHeading",
        },

        reportData.companyWise.length === 0
          ? {
              text: "No company placement data available.",

              fontSize: 11,
            }
          : {
              table: {
                headerRows: 1,
                keepWithHeaderRows: 1,
                dontBreakRows: true,
                widths: ["*", 115],
                body: companyRows,
              },

              layout: "lightHorizontalLines",
            },
      ],

      // ------------------------------------------------
      // FOOTER
      // ------------------------------------------------

      footer: {
        text: "Generated by Placement Management System",

        alignment: "center",

        fontSize: 9,

        margin: [0, 10, 0, 0],
      },

      // ------------------------------------------------
      // STYLES
      // ------------------------------------------------

      styles: {
        title: {
          fontSize: 24,

          bold: true,

          margin: [0, 0, 0, 5],
        },

        subtitle: {
          fontSize: 12,

          margin: [0, 0, 0, 10],
        },

        sectionHeading: {
          fontSize: 16,

          bold: true,

          margin: [0, 10, 0, 10],
        },
      },
    };

    // --------------------------------------------------
    // CREATE PDF
    // --------------------------------------------------

    const pdf = pdfmake.createPdf(docDefinition);

    // --------------------------------------------------
    // CONVERT PDF TO BUFFER
    // --------------------------------------------------

    const pdfBuffer = await pdf.getBuffer();

    // --------------------------------------------------
    // SEND PDF RESPONSE
    // --------------------------------------------------

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader("Content-Disposition", "attachment; filename=placement-report.pdf");

    return res.end(pdfBuffer);
  } catch (error) {
    console.error("Error generating placement PDF:", error);

    return res.status(500).json({
      success: false,

      message: "Failed to generate placement PDF",
    });
  }
};

/*
|--------------------------------------------------------------------------
| EXPORT PLACEMENT REPORT AS EXCEL
|--------------------------------------------------------------------------
*/

const exportPlacementExcel = async (req, res) => {
  try {
    // --------------------------------------------------
    // GET REPORT DATA
    // --------------------------------------------------

    const reportData = await getPlacementReportData();

    // --------------------------------------------------
    // CREATE WORKBOOK
    // --------------------------------------------------

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Placement Report");

    // --------------------------------------------------
    // COLUMN WIDTHS
    // --------------------------------------------------

    worksheet.getColumn(1).width = 35;
    worksheet.getColumn(2).width = 22;
    worksheet.getColumn(3).width = 18;

    // --------------------------------------------------
    // TITLE
    // --------------------------------------------------

    worksheet.mergeCells("A1:C1");
    worksheet.getCell("A1").value = "Placement Report";

    worksheet.getCell("A1").font = {
      bold: true,
      size: 16,
    };

    worksheet.getCell("A1").alignment = {
      horizontal: "left",
    };

    worksheet.mergeCells("A2:C2");
    worksheet.getCell("A2").value = "Placement Management System";

    worksheet.getCell("A2").alignment = {
      horizontal: "left",
    };

    worksheet.mergeCells("A3:C3");
    worksheet.getCell("A3").value = `Report Generated: ${new Date().toLocaleDateString("en-IN")}`;

    worksheet.getCell("A3").alignment = {
      horizontal: "right",
    };

    // --------------------------------------------------
    // SPACE
    // --------------------------------------------------

    worksheet.addRow([]);

    // --------------------------------------------------
    // OVERALL PLACEMENT SUMMARY
    // --------------------------------------------------

    worksheet.getCell("A5").value = "Overall Placement Summary";

    worksheet.getCell("A5").font = {
      bold: true,
      size: 12,
    };

    worksheet.getCell("A5").alignment = {
      horizontal: "left",
    };

    worksheet.addRow(["Total Students", reportData.totalStudents]);

    worksheet.addRow(["Placed Students", reportData.placedStudents]);

    worksheet.addRow(["Placement Percentage", `${reportData.placementPercentage}%`]);

    // Labels left, values right

    for (let row = 6; row <= 8; row++) {
      worksheet.getCell(row, 1).alignment = {
        horizontal: "left",
      };

      worksheet.getCell(row, 2).alignment = {
        horizontal: "right",
      };
    }

    // --------------------------------------------------
    // SPACE
    // --------------------------------------------------

    worksheet.addRow([]);

    // --------------------------------------------------
    // BRANCH-WISE PLACEMENT
    // --------------------------------------------------

    worksheet.getCell("A10").value = "Branch-wise Placement";

    worksheet.getCell("A10").font = {
      bold: true,
      size: 12,
    };

    worksheet.getCell("A10").alignment = {
      horizontal: "left",
    };

    worksheet.addRow(["Branch", "Students Placed", "Placement %"]);

    // Header alignment

    worksheet.getCell("A11").alignment = {
      horizontal: "left",
    };

    worksheet.getCell("B11").alignment = {
      horizontal: "right",
    };

    worksheet.getCell("C11").alignment = {
      horizontal: "right",
    };

    worksheet.getRow(11).font = {
      bold: true,
    };

    // Branch data

    reportData.branchWise.forEach((branchData) => {
      const row = worksheet.addRow([
        branchData.branch,
        `${branchData.placedStudents}/${branchData.totalStudents}`,
        `${branchData.placementPercentage}%`,
      ]);

      row.getCell(1).alignment = {
        horizontal: "left",
      };

      row.getCell(2).alignment = {
        horizontal: "right",
      };

      row.getCell(3).alignment = {
        horizontal: "right",
      };
    });

    // --------------------------------------------------
    // SPACE
    // --------------------------------------------------

    worksheet.addRow([]);

    // --------------------------------------------------
    // COMPANY-WISE PLACEMENT
    // --------------------------------------------------

    const companyHeadingRow = worksheet.rowCount + 1;

    worksheet.getCell(`A${companyHeadingRow}`).value = "Company-wise Placement";

    worksheet.getCell(`A${companyHeadingRow}`).font = {
      bold: true,
      size: 12,
    };

    worksheet.getCell(`A${companyHeadingRow}`).alignment = {
      horizontal: "left",
    };

    // Company header

    const companyHeaderRow = companyHeadingRow + 1;

    worksheet.getCell(`A${companyHeaderRow}`).value = "Company";
    worksheet.getCell(`B${companyHeaderRow}`).value = "Students Placed";

    worksheet.getCell(`A${companyHeaderRow}`).alignment = {
      horizontal: "left",
    };

    worksheet.getCell(`B${companyHeaderRow}`).alignment = {
      horizontal: "right",
    };

    worksheet.getRow(companyHeaderRow).font = {
      bold: true,
    };

    // Company data

    reportData.companyWise.forEach((companyData) => {
      const row = worksheet.addRow([companyData.company, companyData.placedStudents]);

      row.getCell(1).alignment = {
        horizontal: "left",
      };

      row.getCell(2).alignment = {
        horizontal: "right",
      };
    });

    // --------------------------------------------------
    // GENERAL ROW HEIGHT
    // --------------------------------------------------

    worksheet.eachRow((row) => {
      row.height = 20;
    });

    // --------------------------------------------------
    // SEND EXCEL FILE
    // --------------------------------------------------

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
    });
  }
};

/*
|--------------------------------------------------------------------------
| EXPORT CONTROLLERS
|--------------------------------------------------------------------------
*/

module.exports = {
  getPlacementAnalytics,

  exportPlacementPDF,

  exportPlacementExcel,
};
