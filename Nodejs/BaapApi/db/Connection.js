const mongoose =require('mongoose');

const connect= mongoose.connect('mongodb://127.0.0.1:27017/Grampanchayat').then(e=>{
    console.log("Connect to database");
});


module.exports=connect;