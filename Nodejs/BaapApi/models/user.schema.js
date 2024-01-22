const mongoose =require('mongoose');

const user= new mongoose.Schema({
    username:String,
    password:String,
    email:String,
});

const userModal= mongoose.model('users',user);

module.exports=userModal;