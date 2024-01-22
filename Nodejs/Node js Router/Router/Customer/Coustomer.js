const express = require("express");
const server = express.Router();

server.get("/customer/all", (req, resp) => {
  const stud = [
    {
      name: "sagar",
      age:19,
    },
    {
        name: "suraj",
        age: 19,
      },
  ];

  resp.send(stud);
});


module.exports=server;