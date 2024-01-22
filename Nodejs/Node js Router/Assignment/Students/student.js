const express = require("express");
const app = express.Router();
const Students = [
  {
    id: 1,
    name: "Akash",
    Courseid: 2000,
    phoneNo: 1234567890,
  },
  {
    id: 2,
    name: "Sagar",
    Courseid: 2001,
    phoneNo: 1234567890,
  },
  {
    id: 3,
    name: "Rushi",
    Courseid: 2002,
    phoneNo: 1234567890,
  },
  {
    id: 4,
    name: "Swapnil",
    Courseid: 2003,
    phoneNo: 1234567890,
  },
  {
    id: 5,
    name: "Suraj",
    Courseid: 2004,
    phoneNo: 1234567890,
  },
];

app.get("/student", (req, resp) => {
  resp.send(Students);
});

app.get("/student/:Course_id", (req, resp) => {
  const search = Students.find((e) => e.Courseid === Number(req.params.Course_id));

  if (search) {
    resp.send(search);
  } else {
    resp.send("Not found");
  }
});

module.exports = app;
