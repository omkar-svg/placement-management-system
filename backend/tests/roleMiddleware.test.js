

const roleMiddleware = require("../middleware/roleMiddleware");

describe("roleMiddleware", () => {
    let req, res, next;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
        next = jest.fn();
    });

    test("blocks the request when req.user is missing", () => {
        const middleware = roleMiddleware("ADMIN", "TPO");

        middleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: "Access denied"
        });
        expect(next).not.toHaveBeenCalled();
    });

    test("blocks a role that is not in the allowed list (e.g. STUDENT)", () => {
        req.user = { id: 1, role: "STUDENT" };
        const middleware = roleMiddleware("ADMIN", "TPO");

        middleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: "Access denied"
        });
        expect(next).not.toHaveBeenCalled();
    });

    test("allows ADMIN through", () => {
        req.user = { id: 1, role: "ADMIN" };
        const middleware = roleMiddleware("ADMIN", "TPO");

        middleware(req, res, next);

        expect(next).toHaveBeenCalledTimes(1);
        expect(res.status).not.toHaveBeenCalled();
    });

    test("allows TPO through", () => {
        req.user = { id: 2, role: "TPO" };
        const middleware = roleMiddleware("ADMIN", "TPO");

        middleware(req, res, next);

        expect(next).toHaveBeenCalledTimes(1);
        expect(res.status).not.toHaveBeenCalled();
    });

    test("supports a single-role restriction too", () => {
        req.user = { id: 3, role: "TPO" };
        const middleware = roleMiddleware("ADMIN");

        middleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(403);
        expect(next).not.toHaveBeenCalled();
    });
});