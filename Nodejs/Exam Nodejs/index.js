const express = require('express');
const app=express();
const First=require('./Routers/frist.question');


app.use('/First',First);

app.get('/health',(req,resp)=>{
resp.send("Health is okk...")
});

app.listen(4300,()=>{
    console.log("Server is running .......")
})