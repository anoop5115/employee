"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const loggerMiddleware = (req, resp, next) => {
    resp.on("finish", () => {
        const statusCode = resp.statusCode;
        console.log(`${new Date().toISOString()} ${req.method}${req.originalUrl} ${statusCode}`);
    });
    next();
};
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=middleware.js.map