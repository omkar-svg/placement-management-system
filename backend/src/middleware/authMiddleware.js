// Auth Middleware - To be implemented

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization token required"
            });
        }

        const token = authHeader.split(" ")[1];

        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decode;

        next();


    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

module.exports = authMiddleware;

// JWT verification and role-based access control


