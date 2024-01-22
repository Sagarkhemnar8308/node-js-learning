const express = require("express");
const server = express();
const LoginAPI=require('./router/login.route')

function healthcheck(req, res) {
  res.status(404).json({ message: "Application is running.........." });
}

server.get("/healthcheck", healthcheck);

server.use('/login',LoginAPI);

server.listen(4300,()=>{
console.log("server is started.......")
})
