"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_1 = __importDefault(require("./employee"));
let employees = [
    {
        id: 0,
        name: "anoop",
        email: "examp.com",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 0,
        name: "adhi",
        email: "examp1.com",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];
const employeeRouter = (0, express_1.Router)();
employeeRouter.get("/", (req, resp) => {
    resp.status(200).send(employees);
});
employeeRouter.get("/:id", (req, resp) => {
    const id = req.params.id;
    console.log("employees fetched by id");
    let e = employees.find((emp) => emp.id == Number(id));
    resp.status(200).send(e);
});
employeeRouter.patch("/:id", (req, resp) => {
    const id = req.params.id;
    console.log("employees patched");
    resp.status(200).send("patched employee by id" + id);
});
employeeRouter.delete("/:id", (req, resp) => {
    const id = req.params.id;
    resp.status(200).send("deleted employee by id" + id);
    console.log("employee deleted by id ");
});
employeeRouter.put("/:id", (req, resp) => {
    const id = req.params.id;
    resp.status(200).send(" employee by id" + id);
    console.log("employee modified ");
});
employeeRouter.post("/", (req, resp) => {
    const name = req.body.name;
    const email = req.body.email;
    const employee = new employee_1.default();
    employee.name = name;
    employee.email = email;
    employee.id = employees.length + 1;
    employee.createdAt = new Date();
    employee.updatedAt = new Date();
    employees.push(employee);
    resp.status(201).send(employees);
    console.log("employee added");
});
exports.default = employeeRouter;
//# sourceMappingURL=employee_router.js.map