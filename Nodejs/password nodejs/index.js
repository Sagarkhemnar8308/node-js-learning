const express = require("express");
const Route=require('./routes/user.routes')
const app = express();
const PORT = 4300;

app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Welcome Application get started.......");
});
app.use('/',Route);
app.listen(PORT, () => {
  console.log("Server get started.............");
});
