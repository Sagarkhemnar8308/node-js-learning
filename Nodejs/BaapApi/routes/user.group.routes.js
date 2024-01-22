const express = require("express");
const app = express.Router();
const userGroup = require("../models/user.group.schema.js");
const { Model } = require("mongoose");

app.use(express.json());

app.get("/grp", async (req, resp) => {
  const data = await userGroup.find();

  resp.json(data);

  if(!data){resp.send("Not data exist")}
});

app.post('/grp/post',async (req,resp)=>{
    const groupname= req.body.groupname;
    const shortname= req.body.shortname;
    const color=req.body.color;
    const coverimage=req.body.coverimage;
    const backgroundimg=req.body.backgroundimage;
    const backgroundcolor=req.body.backgroundcolor;

    const data = new userGroup({groupname,shortname,color,coverimage,backgroundimg,backgroundcolor});

    const result= await data.save();

    resp.json(result);

});

app.put('/grp/update/:id',async (req,res)=>{
  const userid=req.params.id;

  const {groupname,shortname,color,coverimage,backgroundimg,backgroundcolor}=req.body;
  const userdata={};
  if(groupname){
    userdata.groupname=groupname;
  };
  if(shortname){
    userdata.shortname=shortname;
  };
  if(color){
    userdata.color=color;
  };
  if(coverimage){
    userdata.coverimage=coverimage;
  }
  if(backgroundimg){
    userdata.backgroundimg=backgroundimg;
  }
 
  const updated= await userGroup.findByIdAndUpdate(userid,userdata,{
    new:true,
  })
  
  if(updated){
    res.status(200).json({
    message:"success",
    data:updated

    })
  }
})

app.delete('/grp/del/:id',async (req,rep)=>{
  
 const userid=req.params.id;

 const data= await userGroup.deleteOne({_id:userid});

 if(data){
   rep.status(200).json({
     message:"delete successfully"
   })

 }


})

module.exports=app;
