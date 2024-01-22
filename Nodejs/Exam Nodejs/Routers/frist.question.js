const express = require("express");
const server = express.Router();
const Model = require("../Modals/second.question.schema");

server.use(express.json());

server.post("/s", (req, resp) => {
  const data = req.body.sentence;

  let len = data.length;

  console.log(data);

  //  {
  //   "sentence":"i am an indian citizen from 2022"
  //  }
});

server.post("/data", async (req, resp) => {
  const { dept_id, name, dept_head_id, desc } = req.body;

  const data = new Model(req.body);
  const result = await data.save();

  resp.send(result);

  //    {
  //     "dept_id":2701,
  //     "name":"sagar khemnar",
  //     "dept_head_id":270454553,
  //     "desc":456343246
  //    }
});

server.delete("/data/:id", async (req, resp) => {
  const del = await Model.deleteOne();

  resp.status(200).json({
    message: "success",
    data: del,
  });
});

server.get("/data", async (req, resp) => {
  const data = await Model.find();

  resp.send(data);
});

server.put("/data/:id", async (req, resp) => {
  const userId = req.params.id;

  const { dept_id, name, dept_head_id, desc } = req.body;

  const userData = {};

  if (dept_id) {
    userData.dept_id = dept_id;
  }

  if (name) {
    userData.name = name;
  }

  if (dept_head_id) {
    userData.dept_head_id = dept_head_id;
  }

  if (desc) {
    userData.desc = desc;
  }

  const updateData = await Model.findByIdAndUpdate(userId, userData, {
  new: true,
  });

  resp.status(200).json({
    message: "update success",
    data: updateData,
  });
});

server.post("/sugar", (req, resp) => {
  const sugarcane = req.body.sugarcane;
  const bamboo = req.body.bamboo;

  const sugarPrise = sugarcane * 2300;
  const bambooPrise = bamboo * 4800;

  resp.status(200).json({
    message: "success",
    sugarBill: sugarPrise,
    bambooBill: bambooPrise,
  });

  //   {
  //     "sugarcane":10,
  //     "bamboo":20
  //    }
  console.log(
    "Total sugarcane is " +
      sugarcane +
      " sugarcane total amount is " +
      sugarPrise
  );
  console.log(
    "Total sugarcbamboone is " +
      bamboo +
      "bamboo total amount is " +
      bambooPrise
  );
});

module.exports = server;
