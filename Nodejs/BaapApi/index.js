const express=require('express');
const PORT=4300;
const connection=require('./db/Connection');
const app=express();
const category=require('./routes/user.category.routes');
const group= require('./routes/user.group.routes');
const user= require('./routes/user.routes');
const gram= require('./routes/gramsewak.routes');
const population= require('./routes/population.routes');

app.use('/',group);
app.use("/",gram);
app.use('/',user);
app.use('/',population);
app.use('/',category);

app.get('/healthcheck',(req,res)=>{
  res.send("Application is running");
});



app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`);
});