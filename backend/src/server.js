// Backend Entry Point
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const prisma = require("./prismaClient");

const authRoutes = require('./routes/authRoutes');
const driveRoutes = require('./routes/driveRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const authRoutes = require("./routes/authRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const companyRoutes = require("./routes/companyRoutes");

dotenv.config();
if (!process.env.JWT_SECRET?.trim()) {
  throw new Error("JWT_SECRET is not configured.");
}

if (!process.env.JWT_EXPIRES_IN?.trim()) {
  throw new Error("JWT_EXPIRES_IN is not configured.");
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -- Health Check API ---------------------------------------------

app.get("/api/health", async (req, res) => {
  const healthData = {
    status: "OK",
    message: "Placement Management System API is running",
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    environment: process.env.NODE_ENV || "development",
    database: "disconnected",
  };

  try {
    await prisma.$queryRaw`SELECT 1`;
    healthData.database = "connected";
  } catch (error) {
    healthData.status = "DEGRADED";
    healthData.database = "disconnected";
    healthData.dbError = error.message;
  }

  const statusCode = healthData.status === "OK" ? 200 : 503;
  res.status(statusCode).json(healthData);
});

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/students', studentRoutes);
// app.use('/api/companies', companyRoutes);
app.use('/api/drives', driveRoutes);
app.use('/api/notifications', notificationRoutes);
// Routes will be registered here in next phase
app.use("/api/auth", authRoutes);
// app.use('/api/students', studentRoutes);
app.use("/api/companies", companyRoutes);
// app.use('/api/drives', driveRoutes);
app.use("/api/notifications", notificationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
