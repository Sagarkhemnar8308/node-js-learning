const express=require('express');
const server=express.Router();
const model=require('../models/user.schema')
const bcrypt=require('bcryptjs')

server.post('/routes',async (req,resp)=>{

const username=req.body.username;
const password=req.body.password;

const hash=await bcrypt.hash(password,10);

const data1 =new model({username,hash});

const res=await data1.save();

console.log(res);

resp.send(res);

});

module.exports=server;