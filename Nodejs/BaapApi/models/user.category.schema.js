const mongoose =require('mongoose');

const userCategory=new mongoose.Schema({
name:String,
description:String
});

const userModal=mongoose.model('catagery',userCategory);

module.exports=userModal;