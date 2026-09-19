// Upload Middleware - To be implemented
// Multer configuration for file uploads (resume PDFs)
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDirectory = path.join(
    __dirname,
    "../../uploads/resumes"
);

// Create the upload directory if it does not exist
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, {
        recursive: true
    });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },

    filename: (req, file, cb) => {
        const uniqueName = `resume-${Date.now()}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    const fileExtension = path.extname(file.originalname).toLowerCase();

    if (
        fileExtension === ".pdf" ||
        file.mimetype === "application/pdf"
    ) {
        cb(null, true);
    } else {
        cb(new Error("Only PDF files are allowed"));
    }
};

const uploadResume = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = uploadResume;