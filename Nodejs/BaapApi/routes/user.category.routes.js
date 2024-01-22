const express = require("express");
const category = require("../models/user.category.schema");

const router = express.Router();

router.use(express.json());

router.get("/cata", async (req, resp) => {
  const data = await category.find();

  if (data) {
    resp.status(200).json({
      message: "success",
      code: 200,
      Data: data,
    });
  }
});

router.post('/cata/post',async (req,resp)=>{
   const name= req.body.name;
   const desc= req.body.description;

   const data = new category(name,desc);

   const result= await data.save();

   resp.status(200).json({
    message:'success',
    code:200,
    data:result
   })
});

module.exports = router;
