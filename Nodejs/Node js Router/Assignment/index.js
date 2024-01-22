const express = require("express");
const server = express();
const Courses = require("./Courses/course");
const Students = require("./Students/student");
const Fees=require("./FeesInstallment/fee");
const PORT = 4300;
server.use("/", Courses);
server.use("/",Students);
server.use("/",Fees);
server.get("/", (req, resp) => {
  resp.send("Welcome........");
});
server.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});