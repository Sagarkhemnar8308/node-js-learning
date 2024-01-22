const mongoose =require('mongoose');

const userGroup=new mongoose.Schema({
groupname:{
    type:String,
    required:true,
},
shortname:{
    type:String,
    required:true,
},
color:String,
coverImage:String,
backgroundimage:String,
backgroundcolor:String,
});

const userModal=mongoose.model('Group',userGroup);

module.exports=userModal;