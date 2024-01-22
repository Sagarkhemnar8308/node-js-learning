const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Login').then((e)=>{
  console.log("Connect to mongodb");
}).catch((e)=>{
 console.log("error to get connect");
})

const schema=new mongoose.Schema({
    username:String,
    password:String
})

const model=mongoose.model('data',schema);

module.exports=model;