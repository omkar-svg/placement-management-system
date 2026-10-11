const roleMiddleware = (...allowedRoles) => {
    return (req, res, next) => {

        //to debug uncomment below
        // console.log("USER:", req.user);
        // console.log("ALLOWED ROLES:", allowedRoles);

        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "Access denied"
            });
        }
        next();
    };
};
module.exports = roleMiddleware;