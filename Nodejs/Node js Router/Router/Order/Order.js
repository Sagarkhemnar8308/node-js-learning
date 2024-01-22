const express = require("express");
const router = express.Router();

router.get("/order/:id", (req, resp) => {
  const orders = [
    {
      id: 1,
      product: "Laptop",
    },
    {
      id: 2,
      product: "Computer",
    },
  ];

  const find = orders.map((e) => e.id === Number(req.params.id));

  if (find) {
    resp.send(find);
  } else {
    resp.send("Not Found Record.......");
  }

 
});


module.exports=router;