const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/NodeConnect').then(e=>{
    console.log("Connect to db");
});
const sagar=new mongoose.Schema({
    username:String,
    password:String,
})

module.exports=mongoose.model('employe',sagar);