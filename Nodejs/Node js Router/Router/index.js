const express = require("express");
const app = express();
const Customer_id = require("./Customer/Coustomer");
const Orders_id = require("./Order/Order");

app.use("/", Customer_id);
app.use("/", Orders_id);

app.get("/", (req, resp) => {
  resp.send("Application is running ..........");
});

app.listen(4200, () => {
  console.log("Server is running.............");
});
