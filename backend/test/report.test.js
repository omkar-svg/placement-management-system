const express = require("express");
const request = require("supertest");
const jwt = require("jsonwebtoken");

const authMiddleware = require("../src/middleware/authMiddleware");
const roleMiddleware = require("../src/middleware/roleMiddleware");

process.env.JWT_SECRET = "test-secret-for-jest";

const app = express();

app.get("/reports", authMiddleware, roleMiddleware("ADMIN", "TPO"), (req, res) => {
  res.status(200).json({
    success: true,
    role: req.user.role,
  });
});

describe("Report authentication and authorization", () => {
  test("rejects a request without a token", async () => {
    const response = await request(app).get("/reports");

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Authorization token required");
  });

  test("rejects an invalid token", async () => {
    const response = await request(app)
      .get("/reports")
      .set("Authorization", "Bearer invalid-token");

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid or expired token");
  });

  test("rejects a student role", async () => {
    const token = jwt.sign({ id: 1, role: "STUDENT" }, process.env.JWT_SECRET, { expiresIn: "5m" });

    const response = await request(app).get("/reports").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(403);
    expect(response.body.message).toBe("Access denied");
  });

  test.each(["ADMIN", "TPO"])("allows the %s role", async (role) => {
    const token = jwt.sign({ id: 1, role }, process.env.JWT_SECRET, { expiresIn: "5m" });

    const response = await request(app).get("/reports").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.role).toBe(role);
  });
});
