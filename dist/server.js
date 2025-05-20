"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_router_1 = __importDefault(require("./employee_router"));
const middleware_1 = require("./middleware");
const processmiddleware_1 = require("./processmiddleware");
const server = (0, express_1.default)();
server.use(processmiddleware_1.processMiddleWare);
server.use(middleware_1.loggerMiddleware);
server.use(express_1.default.json());
server.use("/employees", employee_router_1.default);
server.listen(3004, () => {
    console.log("listening");
});
// server.get("/", (req, res) => {
//   res.status(200).send("hello");
// });
// server.get("/employees", (req, resp) => {
//   resp.status(200).send("employees");
// });
// server.get("/employees/:id", (req, resp) => {
//   const id = req.params.id;
//   resp.status(200).send("employee by id" + id);
// });
// server.patch("/employees/:id", (req, resp) => {
//   const id = req.params.id;
//   resp.status(200).send("patched employee by id" + id);
// });
// server.delete("/employees/:id", (req, resp) => {
//   const id = req.params.id;
//   resp.status(200).send("deleted employee by id" + id);
// });
// server.put("/employees/:id", (req, resp) => {
//   const id = req.params.id;
//   resp.status(200).send(" employee by id" + id);
// });
// server.post("/employees", (req, resp) => {
//   resp.status(201).send("employees created");
// });
//# sourceMappingURL=server.js.map