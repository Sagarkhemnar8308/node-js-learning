const mongoose =require('mongoose');

const gramsewek= new mongoose.Schema({
  groupname:String,
  name:String,
});

const userModal= mongoose.model('gramsewak',gramsewek);

module.exports=userModal;