const express = require("express");
const app = express.Router();
const population = require("../models/population.schema");
app.use(express.json());
app.get("/pop", async (req, resp) => {
  const data = await population.find();
  resp.json(data);
});

app.post("/pop/post", async (req, resp) => {
  const groupId = req.body.groupId;
  const year = req.body.year;
  const mailcount = req.body.mailcount;
  const femailcount = req.body.femailcount;
  const totalcount = req.body.totalcount;

  const data = new userGroup(groupId, year, mailcount, femailcount, totalcount);

  const result = await data.save();

  resp.json(result);
});

module.exports = app;
