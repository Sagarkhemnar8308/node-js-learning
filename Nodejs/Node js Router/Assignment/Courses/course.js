const express = require("express");
const body = require("body-parser");
const router = express.Router();

router.use(body.json());

const Course = [
  {
    id: 1,
    Coursename: "BCA",
    Fee: 100000,
  },
  {
    id: 2,
    Coursename: "MCA",
    Fee: 150000,
  },
  {
    id: 3,
    Coursename: "11",
    Fee: 25000,
  },
];

router.get("/course/:id", (req, resp) => {
  const search = Course.find((e) => e.id === Number(req.params.id));

  if (search) {
    resp.send(search);
  } else {
    resp.send("No record found.......");
  }
});

router.get("/course", (req, resp) => {
  resp.json(Course);
});

router.post("/course", (req, resp) => {
 
  const Coursename = req.body.Coursename;
  const fee = req.body.fee;

  const newObj = {
    id: Course.length + 1,
    Coursename: Coursename,
    fee: fee,
  };
  const push = Course.push(newObj);

  resp.send(newObj);

  if (!Coursename || !fee) {
    resp.send("Record not insert ! Error");
  }
});

module.exports = router;
