const express = require("express");
const user = require("../models/user.schema");

const router = express.Router();

router.use(express.json());

router.get("/user", async (req, resp) => {
  const data = await user.find();

  if (data) {
    resp.status(200).json({
      message: "success",
      code: 200,
      Data: data,
    });
  }
});

router.post('/user/post',async (req,resp)=>{
   const name = req.body.username;
   const pass = req.body.password;
   const email = req.body.email

   const data = new user({username:name,password:pass,email:email});

   const result= await data.save();

   resp.status(200).json({
    message:'success',
    code:200,
    data:result
   })
});

router.delete('/user/delete/:id',(req,resp)=>{

})

module.exports = router;
