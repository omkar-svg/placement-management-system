const express = require("express");

const {
    getStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent,
    addStudentSkill,
    deleteStudentSkill,
    uploadStudentResume,
    getStudentResume
} = require("../controllers/studentController");

const {
    authMiddleware,
    authorizeRoles
} = require("../middleware/authMiddleware");

const uploadResume = require("../middleware/uploadMiddleware");

const router = express.Router();

/**
 * GET /students
 * Lists students for ADMIN and TPO users.
 */
router.get(
    "/",
    authMiddleware,
    authorizeRoles("ADMIN", "TPO"),
    getStudents
);

//Creates a student profile for ADMIN and TPO users.
router.post(
    "/",
    authMiddleware,
    authorizeRoles("ADMIN", "TPO"),
    createStudent
);

//Fetches a student's details.
router.get(
    "/:id",
    authMiddleware,
    authorizeRoles("ADMIN", "TPO", "STUDENT"),
    getStudentById
);

//Updates a student's profile.
router.put(
    "/:id",
    authMiddleware,
    authorizeRoles("ADMIN", "TPO", "STUDENT"),
    updateStudent
);

//Deletes a student profile.
router.delete(
    "/:id",
    authMiddleware,
    authorizeRoles("ADMIN"),
    deleteStudent
);

//Adds a skill to a student's profile.
router.post(
    "/:id/skills",
    authMiddleware,
    authorizeRoles("ADMIN", "TPO", "STUDENT"),
    addStudentSkill
);

//Removes a skill from a student's profile.
router.delete(
    "/:id/skills/:skillId",
    authMiddleware,
    authorizeRoles("ADMIN", "TPO", "STUDENT"),
    deleteStudentSkill
);

//Uploads or replaces a student's resume.
router.post(
    "/:id/resume",
    authMiddleware,
    authorizeRoles("ADMIN", "TPO", "STUDENT"),
    uploadResume.single("resume"),
    uploadStudentResume
);

//Fetches a student's resume information.
router.get(
    "/:id/resume",
    authMiddleware,
    getStudentResume
);

module.exports = router;