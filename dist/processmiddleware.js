"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processMiddleWare = void 0;
const processMiddleWare = (req, resp, next) => {
    const startTime = Number(new Date());
    resp.on("finish", () => {
        const endTime = Number(new Date());
        console.log(`timetaken :${endTime - startTime}ms`);
    });
    next();
};
exports.processMiddleWare = processMiddleWare;
//# sourceMappingURL=processmiddleware.js.map