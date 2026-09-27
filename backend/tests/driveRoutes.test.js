
// Integration tests for POST/PUT/DELETE /api/drives.
// Mocks the JWT verification step inside authMiddleware and mocks Prisma,
// so these tests only exercise routing + role authorization, not the DB.

const request = require("supertest");
const express = require("express");
const jwt = require("jsonwebtoken");

// ---- Mock prisma so no real DB is hit ----
jest.mock("../prisma", () => ({
    placementDrive: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn()
    },
    company: {
        findUnique: jest.fn()
    }
}));

const prisma = require("../prisma");
const driveRoutes = require("../routes/driveRoutes");

// Build a minimal app that mounts just the drive routes,
// the same way your real server does.
const app = express();
app.use(express.json());
app.use("/api/drives", driveRoutes);

const JWT_SECRET = process.env.JWT_SECRET || "test-secret";

const tokenFor = (user) => jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });

const validDrivePayload = {
    companyId: 1,
    role: "SDE Intern",
    package: 12,
    driveDate: "2026-12-01T00:00:00.000Z",
    deadline: "2026-11-01T00:00:00.000Z",
    jobType: "INTERNSHIP",
    venue: "Auditorium",
    description: "Campus drive",
    hiringProcess: "OA + 2 interviews"
};

beforeEach(() => {
    jest.clearAllMocks();

    // Reasonable default mocks so a request that passes auth
    // doesn't blow up on the DB layer.
    prisma.company.findUnique.mockResolvedValue({ id: 1, name: "Acme Corp" });
    prisma.placementDrive.create.mockResolvedValue({ id: 100, ...validDrivePayload });
    prisma.placementDrive.findUnique.mockResolvedValue({
        id: 100,
        ...validDrivePayload,
        driveDate: new Date(validDrivePayload.driveDate),
        deadline: new Date(validDrivePayload.deadline)
    });
    prisma.placementDrive.update.mockResolvedValue({ id: 100, ...validDrivePayload, venue: "New Venue" });
    prisma.placementDrive.delete.mockResolvedValue({ id: 100 });
});

describe("Drive routes - authorization", () => {
    describe("no JWT provided", () => {
        test("POST /api/drives is blocked (401)", async () => {
            const res = await request(app).post("/api/drives").send(validDrivePayload);

            expect(res.status).toBe(401);
            expect(prisma.placementDrive.create).not.toHaveBeenCalled();
        });

        test("PUT /api/drives/:id is blocked (401)", async () => {
            const res = await request(app).put("/api/drives/1").send({ venue: "New Venue" });

            expect(res.status).toBe(401);
            expect(prisma.placementDrive.update).not.toHaveBeenCalled();
        });

        test("DELETE /api/drives/:id is blocked (401)", async () => {
            const res = await request(app).delete("/api/drives/1");

            expect(res.status).toBe(401);
            expect(prisma.placementDrive.delete).not.toHaveBeenCalled();
        });
    });

    describe("authenticated as STUDENT (non-privileged role)", () => {
        const studentToken = () => tokenFor({ id: 5, role: "STUDENT" });

        test("POST /api/drives is blocked (403)", async () => {
            const res = await request(app)
                .post("/api/drives")
                .set("Authorization", `Bearer ${studentToken()}`)
                .send(validDrivePayload);

            expect(res.status).toBe(403);
            expect(res.body.success).toBe(false);
            expect(prisma.placementDrive.create).not.toHaveBeenCalled();
        });

        test("PUT /api/drives/:id is blocked (403)", async () => {
            const res = await request(app)
                .put("/api/drives/1")
                .set("Authorization", `Bearer ${studentToken()}`)
                .send({ venue: "New Venue" });

            expect(res.status).toBe(403);
            expect(prisma.placementDrive.update).not.toHaveBeenCalled();
        });

        test("DELETE /api/drives/:id is blocked (403)", async () => {
            const res = await request(app)
                .delete("/api/drives/1")
                .set("Authorization", `Bearer ${studentToken()}`);

            expect(res.status).toBe(403);
            expect(prisma.placementDrive.delete).not.toHaveBeenCalled();
        });

        test("GET /api/drives is still allowed (reads aren't role-restricted)", async () => {
            prisma.placementDrive.findMany.mockResolvedValue([]);

            const res = await request(app)
                .get("/api/drives")
                .set("Authorization", `Bearer ${studentToken()}`);

            expect(res.status).toBe(200);
        });
    });

    describe("authenticated as ADMIN", () => {
        const adminToken = () => tokenFor({ id: 1, role: "ADMIN" });

        test("POST /api/drives is allowed (201)", async () => {
            const res = await request(app)
                .post("/api/drives")
                .set("Authorization", `Bearer ${adminToken()}`)
                .send(validDrivePayload);

            expect(res.status).toBe(201);
            expect(prisma.placementDrive.create).toHaveBeenCalledTimes(1);
        });

        test("PUT /api/drives/:id is allowed (200)", async () => {
            const res = await request(app)
                .put("/api/drives/1")
                .set("Authorization", `Bearer ${adminToken()}`)
                .send({ venue: "New Venue" });

            expect(res.status).toBe(200);
            expect(prisma.placementDrive.update).toHaveBeenCalledTimes(1);
        });

        test("DELETE /api/drives/:id is allowed (200)", async () => {
            const res = await request(app)
                .delete("/api/drives/1")
                .set("Authorization", `Bearer ${adminToken()}`);

            expect(res.status).toBe(200);
            expect(prisma.placementDrive.delete).toHaveBeenCalledTimes(1);
        });
    });

    describe("authenticated as TPO", () => {
        const tpoToken = () => tokenFor({ id: 2, role: "TPO" });

        test("POST /api/drives is allowed (201)", async () => {
            const res = await request(app)
                .post("/api/drives")
                .set("Authorization", `Bearer ${tpoToken()}`)
                .send(validDrivePayload);

            expect(res.status).toBe(201);
            expect(prisma.placementDrive.create).toHaveBeenCalledTimes(1);
        });

        test("PUT /api/drives/:id is allowed (200)", async () => {
            const res = await request(app)
                .put("/api/drives/1")
                .set("Authorization", `Bearer ${tpoToken()}`)
                .send({ venue: "New Venue" });

            expect(res.status).toBe(200);
        });

        test("DELETE /api/drives/:id is allowed (200)", async () => {
            const res = await request(app)
                .delete("/api/drives/1")
                .set("Authorization", `Bearer ${tpoToken()}`);

            expect(res.status).toBe(200);
        });
    });

    test("invalid/garbage JWT is blocked (401)", async () => {
        const res = await request(app)
            .post("/api/drives")
            .set("Authorization", "Bearer not-a-real-token")
            .send(validDrivePayload);

        expect(res.status).toBe(401);
        expect(prisma.placementDrive.create).not.toHaveBeenCalled();
    });
});