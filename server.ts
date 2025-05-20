import express from "express";
import employeeRouter from "./employee_router";
import { loggerMiddleware } from "./middleware";
import { processMiddleWare } from "./processmiddleware";

const server = express();
server.use(processMiddleWare);
server.use(loggerMiddleware);
server.use(express.json());
server.use("/employees", employeeRouter);

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
