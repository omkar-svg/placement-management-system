jest.mock("../src/prismaClient", () => ({
  student: {
    count: jest.fn(),
    groupBy: jest.fn(),
  },
  placementStatus: {
    findMany: jest.fn(),
  },
  company: {
    findMany: jest.fn(),
  },
}));

const request = require("supertest");
const express = require("express");
const prisma = require("../src/prismaClient");

const {
  getPlacementAnalytics,
  exportPlacementPDF,
  exportPlacementExcel,
} = require("../src/controllers/reportController");

const app = express();
app.get("/reports", getPlacementAnalytics);
app.get("/reports/export/pdf", exportPlacementPDF);
app.get("/reports/export/excel", exportPlacementExcel);

describe("Placement analytics controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("handles zero students and zero companies", async () => {
    prisma.student.count.mockResolvedValue(0);
    prisma.student.groupBy.mockResolvedValue([]);
    prisma.placementStatus.findMany.mockResolvedValue([]);
    prisma.company.findMany.mockResolvedValue([]);

    const response = await request(app).get("/reports");

    expect(response.status).toBe(200);
    expect(response.body.totalStudents).toBe(0);
    expect(response.body.placedStudents).toBe(0);
    expect(Number(response.body.placementPercentage)).toBe(0);
    expect(response.body.branchWise).toEqual([]);
    expect(response.body.companyWise).toEqual([]);
  });

  test("counts a student only once overall and per company", async () => {
    prisma.student.count.mockResolvedValue(2);

    prisma.student.groupBy.mockResolvedValue([
      {
        branch: "CSE",
        _count: { _all: 2 },
      },
    ]);

    // Student 1 has two selected records for company 1.
    // Student 2 is also selected by company 1.
    prisma.placementStatus.findMany.mockResolvedValue([
      {
        studentId: 1,
        student: { branch: "CSE" },
        drive: { companyId: 1 },
      },
      {
        studentId: 1,
        student: { branch: "CSE" },
        drive: { companyId: 1 },
      },
      {
        studentId: 2,
        student: { branch: "CSE" },
        drive: { companyId: 1 },
      },
    ]);

    prisma.company.findMany.mockResolvedValue([{ id: 1, companyName: "Test Company" }]);

    const response = await request(app).get("/reports");

    expect(response.status).toBe(200);
    expect(response.body.placedStudents).toBe(2);
    expect(response.body.branchWise[0].placedStudents).toBe(2);
    expect(response.body.companyWise[0].placedStudents).toBe(2);
  });

  test("includes branches not in a predefined list", async () => {
    prisma.student.count.mockResolvedValue(1);

    prisma.student.groupBy.mockResolvedValue([
      {
        branch: "AIML",
        _count: { _all: 1 },
      },
    ]);

    prisma.placementStatus.findMany.mockResolvedValue([
      {
        studentId: 9,
        student: { branch: "AIML" },
        drive: { companyId: 1 },
      },
    ]);

    prisma.company.findMany.mockResolvedValue([{ id: 1, companyName: "AI Company" }]);

    const response = await request(app).get("/reports");

    expect(response.status).toBe(200);
    expect(response.body.branchWise).toHaveLength(1);
    expect(response.body.branchWise[0].branch).toBe("AIML");
    expect(response.body.branchWise[0].placedStudents).toBe(1);
  });
});

test("exports PDF with the correct response headers", async () => {
  prisma.student.count.mockResolvedValue(2);

  prisma.student.groupBy.mockResolvedValue([{ branch: "CSE", _count: { _all: 2 } }]);

  prisma.placementStatus.findMany.mockResolvedValue([
    {
      studentId: 1,
      student: { branch: "CSE" },
      drive: { companyId: 1 },
    },
  ]);

  prisma.company.findMany.mockResolvedValue([{ id: 1, companyName: "Test Company" }]);

  const response = await request(app).get("/reports/export/pdf");

  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toContain("application/pdf");
  expect(response.headers["content-disposition"]).toContain("attachment");
  expect(response.body.length).toBeGreaterThan(0);
});

test("exports Excel with the correct response headers", async () => {
  prisma.student.count.mockResolvedValue(2);

  prisma.student.groupBy.mockResolvedValue([{ branch: "CSE", _count: { _all: 2 } }]);

  prisma.placementStatus.findMany.mockResolvedValue([
    {
      studentId: 1,
      student: { branch: "CSE" },
      drive: { companyId: 1 },
    },
  ]);

  prisma.company.findMany.mockResolvedValue([{ id: 1, companyName: "Test Company" }]);

  const response = await request(app)
    .get("/reports/export/excel")
    .buffer(true)
    .parse((res, callback) => {
      const chunks = [];

      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => callback(null, Buffer.concat(chunks)));
      res.on("error", callback);
    });

  expect(response.status).toBe(200);

  expect(response.headers["content-type"]).toContain("spreadsheetml.sheet");

  expect(response.headers["content-disposition"]).toContain("attachment");

  expect(Buffer.isBuffer(response.body)).toBe(true);
  expect(response.body.length).toBeGreaterThan(0);
});

test("exports a PDF with many companies", async () => {
  const companies = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    companyName: `Company ${index + 1} - Placement Test`,
  }));

  prisma.student.count.mockResolvedValue(200);

  prisma.student.groupBy.mockResolvedValue([{ branch: "CSE", _count: { _all: 200 } }]);

  prisma.placementStatus.findMany.mockResolvedValue(
    companies.map((company, index) => ({
      studentId: index + 1,
      student: { branch: "CSE" },
      drive: { companyId: company.id },
    })),
  );

  prisma.company.findMany.mockResolvedValue(companies);

  const response = await request(app).get("/reports/export/pdf");

  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toContain("application/pdf");
  expect(response.headers["content-disposition"]).toContain("attachment");
  expect(response.body.length).toBeGreaterThan(0);
});
