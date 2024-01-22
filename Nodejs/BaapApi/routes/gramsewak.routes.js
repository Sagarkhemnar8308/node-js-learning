const express = require("express");
const gram = require("../models/gramsewak.schema");
const router = express.Router();



router.use(express.json());

router.get("/gram", async (req, resp) => {
  const data = await gram.find();

  if (data) {
    resp.status(200).json({
      message: "success",
      code: 200,
      Data: data,
    });
  }

});

router.post('/gram/post',async (req,resp)=>{
   const groupname= req.body.groupname;
   const name= req.body.name;
  

   const data = new gram({groupname,name});

   const result= await data.save();

   resp.status(200).json({
    message:'success',
    code:200,
    data:result
   })
});

router.put('/gram/update/:id',async (req,resp)=>{
    const userid=req.params.id;
    const userdata={};

    const {groupname,schema}=req.body;

    if(groupname){
      userdata.groupname=groupname;
    }

    if(schema){
      userdata.schema=schema;
    }

    const data= await gram.findByIdAndUpdate(userid,userdata,{
      new:true,
    });

    if(data){
      resp.send("update successfully")
    }
})

router.delete('/gram/delete/:id',async (req,res)=>{
   const userid=req.params.id;
   const data = await gram.findByIdAndDelete(userid);

   if(data){
   res.status(200).json({
    message:"successfully delete"
   })
   }
});

module.exports = router;
