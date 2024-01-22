const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ExamNode');

const productSchema=new mongoose.Schema({
    dept_id_Number:Number,
    name:String,
    dept_head_id:Number,
    desc:Number,
});

const productModel=mongoose.model('Data',productSchema);

module.exports=productModel;