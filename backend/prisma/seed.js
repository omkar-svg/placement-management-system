
require("dotenv").config();

const bcrypt = require("bcrypt");
const { PrismaClient } = require("../src/generated/client");

const prisma = new PrismaClient();

const TEST_PASSWORD = "Test@12345";

const daysFromNow = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

async function main() {
  console.log("Starting Placement Management System seed...");

  const hashedPassword = await bcrypt.hash(TEST_PASSWORD, 10);

  // 1. Create users with different roles
  const userData = [
    {
      name: "System Admin",
      email: "admin.seed@example.com",
      role: "ADMIN",
    },
    {
      name: "Placement Officer",
      email: "tpo.seed@example.com",
      role: "TPO",
    },
    {
      name: "Aarav Sharma",
      email: "aarav.seed@example.com",
      role: "STUDENT",
    },
    {
      name: "Ayesha Khan",
      email: "ayesha.seed@example.com",
      role: "STUDENT",
    },
    {
      name: "Rahul Patil",
      email: "rahul.seed@example.com",
      role: "STUDENT",
    },
    {
      name: "Sara Shaikh",
      email: "sara.seed@example.com",
      role: "STUDENT",
    },
    {
      name: "Kabir Desai",
      email: "kabir.seed@example.com",
      role: "STUDENT",
    },
    {
      name: "Meera Joshi",
      email: "meera.seed@example.com",
      role: "STUDENT",
    },
  ];

  const users = {};

  for (const data of userData) {
    users[data.email] = await prisma.user.upsert({
      where: { email: data.email },
      update: {
        name: data.name,
        role: data.role,
      },
      create: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  const tpo = users["tpo.seed@example.com"];

  // 2. Create student profiles
  const studentData = [
    {
      email: "aarav.seed@example.com",
      prn: "SEED2026001",
      branch: "Computer Engineering",
      year: 3,
      graduationYear: 2027,
      tenthPercentage: 90,
      twelfthPercentage: 85,
      cgpa: 9.1,
      activeBacklogs: 0,
      phone: "9000000001",
      linkedin: "https://www.linkedin.com/in/aarav-example",
      github: "https://github.com/aarav-example",
      portfolio: "https://example.com/aarav",
      profileCompleted: true,
      skills: ["Java", "React", "SQL"],
    },
    {
      email: "ayesha.seed@example.com",
      prn: "SEED2026002",
      branch: "Information Technology",
      year: 3,
      graduationYear: 2027,
      tenthPercentage: 88,
      twelfthPercentage: 82,
      cgpa: 8.5,
      activeBacklogs: 0,
      phone: "9000000002",
      linkedin: null,
      github: "https://github.com/ayesha-example",
      portfolio: null,
      profileCompleted: true,
      skills: ["Python", "Machine Learning"],
    },
    {
      email: "rahul.seed@example.com",
      prn: "SEED2026003",
      branch: "Computer Engineering",
      year: 3,
      graduationYear: 2027,
      tenthPercentage: 75,
      twelfthPercentage: 70,
      cgpa: 6.8,
      activeBacklogs: 2,
      phone: "9000000003",
      linkedin: null,
      github: null,
      portfolio: null,
      profileCompleted: false,
      skills: ["C++", "SQL"],
    },
    {
      email: "sara.seed@example.com",
      prn: "SEED2026004",
      branch: "Electronics",
      year: 3,
      graduationYear: 2027,
      tenthPercentage: 92,
      twelfthPercentage: 90,
      cgpa: 9.4,
      activeBacklogs: 0,
      phone: "9000000004",
      linkedin: "https://www.linkedin.com/in/sara-example",
      github: "https://github.com/sara-example",
      portfolio: "https://example.com/sara",
      profileCompleted: true,
      skills: ["Java", "Python", "Git"],
    },
    {
      email: "kabir.seed@example.com",
      prn: "SEED2026005",
      branch: "Mechanical",
      year: 3,
      graduationYear: 2027,
      tenthPercentage: 80,
      twelfthPercentage: 76,
      cgpa: 7.5,
      activeBacklogs: 1,
      phone: "9000000005",
      linkedin: null,
      github: "https://github.com/kabir-example",
      portfolio: null,
      profileCompleted: false,
      skills: ["Python", "SQL"],
    },
    {
      email: "meera.seed@example.com",
      prn: "SEED2026006",
      branch: "Information Technology",
      year: 3,
      graduationYear: 2027,
      tenthPercentage: 86,
      twelfthPercentage: 84,
      cgpa: 8.8,
      activeBacklogs: 0,
      phone: "9000000006",
      linkedin: "https://www.linkedin.com/in/meera-example",
      github: "https://github.com/meera-example",
      portfolio: null,
      profileCompleted: true,
      skills: ["React", "JavaScript", "Node.js"],
    },
  ];

  const students = [];

  for (const data of studentData) {
    const user = users[data.email];

    const student = await prisma.student.upsert({
      where: { userId: user.id },
      update: {
        prn: data.prn,
        branch: data.branch,
        year: data.year,
        graduationYear: data.graduationYear,
        tenthPercentage: data.tenthPercentage,
        twelfthPercentage: data.twelfthPercentage,
        cgpa: data.cgpa,
        activeBacklogs: data.activeBacklogs,
        phone: data.phone,
        linkedin: data.linkedin,
        github: data.github,
        portfolio: data.portfolio,
        profileCompleted: data.profileCompleted,
      },
      create: {
        userId: user.id,
        prn: data.prn,
        branch: data.branch,
        year: data.year,
        graduationYear: data.graduationYear,
        tenthPercentage: data.tenthPercentage,
        twelfthPercentage: data.twelfthPercentage,
        cgpa: data.cgpa,
        activeBacklogs: data.activeBacklogs,
        phone: data.phone,
        linkedin: data.linkedin,
        github: data.github,
        portfolio: data.portfolio,
        profileCompleted: data.profileCompleted,
      },
    });

    students.push({ ...student, email: data.email });

    // Add skills without duplicates
    for (const skillName of data.skills) {
      await prisma.studentSkill.upsert({
        where: {
          studentId_skillName: {
            studentId: student.id,
            skillName,
          },
        },
        update: {},
        create: {
          studentId: student.id,
          skillName,
        },
      });
    }

    // Placeholder resume metadata for frontend testing
    await prisma.resume.upsert({
      where: { studentId: student.id },
      update: {},
      create: {
        studentId: student.id,
        resumeUrl: `https://example.com/resumes/${data.prn}.pdf`,
      },
    });
  }

  // 3. Create companies
  const companyData = [
    {
      companyName: "TechNova Solutions",
      about: "Software development and technology services company.",
      location: "Pune, Maharashtra",
      website: "https://example.com/technova",
    },
    {
      companyName: "CloudBridge Systems",
      about: "Cloud computing, backend and infrastructure services.",
      location: "Bengaluru, Karnataka",
      website: "https://example.com/cloudbridge",
    },
    {
      companyName: "DataSphere Analytics",
      about: "Data analytics and machine learning solutions.",
      location: "Mumbai, Maharashtra",
      website: "https://example.com/datasphere",
    },
  ];

  const companies = [];

  for (const data of companyData) {
    let company = await prisma.company.findFirst({
      where: { companyName: data.companyName },
    });

    if (company) {
      company = await prisma.company.update({
        where: { id: company.id },
        data,
      });
    } else {
      company = await prisma.company.create({ data });
    }

    companies.push(company);
  }

  // 4. Create drives covering every drive status
  const driveData = [
    {
      company: companies[0],
      role: "Software Engineer",
      package: "8 LPA",
      driveDate: daysFromNow(30),
      deadline: daysFromNow(20),
      venue: "College Auditorium",
      jobType: "Full-time",
      status: "UPCOMING",
      description: "Entry-level software engineering opportunity.",
      hiringProcess: "Online assessment, technical interview, HR interview",
    },
    {
      company: companies[1],
      role: "Backend Developer",
      package: "10 LPA",
      driveDate: daysFromNow(7),
      deadline: daysFromNow(3),
      venue: "Online",
      jobType: "Full-time",
      status: "ONGOING",
      description: "Backend development role involving APIs and databases.",
      hiringProcess: "Coding test, technical interview, HR interview",
    },
    {
      company: companies[2],
      role: "Data Analyst",
      package: "6 LPA",
      driveDate: daysFromNow(-30),
      deadline: daysFromNow(-40),
      venue: "College Seminar Hall",
      jobType: "Full-time",
      status: "COMPLETED",
      description: "Entry-level data analytics opportunity.",
      hiringProcess: "Aptitude test, technical interview, HR interview",
    },
  ];

  const drives = [];

  for (const data of driveData) {
    const driveFields = {
      createdBy: tpo.id,
      role: data.role,
      package: data.package,
      driveDate: data.driveDate,
      deadline: data.deadline,
      venue: data.venue,
      jobType: data.jobType,
      status: data.status,
      description: data.description,
      hiringProcess: data.hiringProcess,
    };

    let drive = await prisma.placementDrive.findFirst({
      where: {
        companyId: data.company.id,
        role: data.role,
      },
    });

    if (drive) {
      drive = await prisma.placementDrive.update({
        where: { id: drive.id },
        data: driveFields,
      });
    } else {
      drive = await prisma.placementDrive.create({
        data: {
          ...driveFields,
          companyId: data.company.id,
        },
      });
    }

    drives.push(drive);
  }

  // 5. Eligibility criteria and eligible branches
  const eligibilityData = [
    {
      driveId: drives[0].id,
      minCGPA: 7.0,
      minTenthPercentage: 60,
      minTwelfthPercentage: 60,
      maxBacklogs: 0,
      graduationYear: 2027,
      branches: ["Computer Engineering", "Information Technology"],
    },
    {
      driveId: drives[1].id,
      minCGPA: 6.5,
      minTenthPercentage: 60,
      minTwelfthPercentage: 60,
      maxBacklogs: 1,
      graduationYear: 2027,
      branches: ["Computer Engineering", "Information Technology", "Electronics"],
    },
    {
      driveId: drives[2].id,
      minCGPA: 6.0,
      minTenthPercentage: null,
      minTwelfthPercentage: null,
      maxBacklogs: 2,
      graduationYear: 2027,
      branches: ["Computer Engineering", "Information Technology"],
    },
  ];

  for (const data of eligibilityData) {
    const { branches, ...criteria } = data;

    const eligibility = await prisma.eligibilityCriteria.upsert({
      where: { driveId: data.driveId },
      update: criteria,
      create: criteria,
    });

    for (const branch of branches) {
      await prisma.eligibleBranch.upsert({
        where: {
          eligibilityId_branch: {
            eligibilityId: eligibility.id,
            branch,
          },
        },
        update: {},
        create: {
          eligibilityId: eligibility.id,
          branch,
        },
      });
    }
  }

  // 6. Placement statuses and history
  const statuses = [
    "ELIGIBLE",
    "SHORTLISTED",
    "INTERVIEW_SCHEDULED",
    "SELECTED",
    "REJECTED",
    "OFFER_ACCEPTED",
  ];

  for (let driveIndex = 0; driveIndex < drives.length; driveIndex++) {
    for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
      const student = students[studentIndex];
      const drive = drives[driveIndex];
      const status = statuses[(studentIndex + driveIndex) % statuses.length];
      const remarks = `Seed test record: ${status}`;

      const placement = await prisma.placementStatus.upsert({
        where: {
          studentId_driveId: {
            studentId: student.id,
            driveId: drive.id,
          },
        },
        update: { status, remarks },
        create: {
          studentId: student.id,
          driveId: drive.id,
          status,
          remarks,
        },
      });

      // Avoid adding the same seed history record on every run.
      const existingHistory = await prisma.placementStatusHistory.findFirst({
        where: {
          placementId: placement.id,
          status,
          remarks,
          changedByUserId: tpo.id,
        },
      });

      if (!existingHistory) {
        await prisma.placementStatusHistory.create({
          data: {
            placementId: placement.id,
            status,
            remarks,
            changedByUserId: tpo.id,
          },
        });
      }
    }
  }

  // 7. Notifications for all test accounts
  const notificationData = [
    {
      email: "admin.seed@example.com",
      title: "Seed data ready",
      message: "Test accounts and sample placement records are available.",
      type: "ANNOUNCEMENT",
    },
    {
      email: "tpo.seed@example.com",
      title: "Upcoming placement drive",
      message: "Review the upcoming Software Engineer drive.",
      type: "DRIVE",
    },
    {
      email: "aarav.seed@example.com",
      title: "Application update",
      message: "Your placement application status has been updated.",
      type: "DRIVE",
    },
    {
      email: "ayesha.seed@example.com",
      title: "Company announcement",
      message: "A new company opportunity is available for review.",
      type: "COMPANY",
    },
    {
      email: "rahul.seed@example.com",
      title: "Placement reminder",
      message: "Check your profile and placement eligibility.",
      type: "REMINDER",
    },
  ];

  for (const data of notificationData) {
    const user = users[data.email];

    const existing = await prisma.notification.findFirst({
      where: {
        userId: user.id,
        title: data.title,
        message: data.message,
      },
    });

    if (!existing) {
      await prisma.notification.create({
        data: {
          userId: user.id,
          title: data.title,
          message: data.message,
          type: data.type,
          isRead: false,
        },
      });
    }
  }

  console.log("Seed completed successfully.");
  console.log("Test login password for all seeded accounts:", TEST_PASSWORD);
  console.log("Seeded users:", Object.keys(users).length);
  console.log("Seeded student profiles:", students.length);
  console.log("Seeded placement drives:", drives.length);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
