const mongoose = require("mongoose");
const express = require("express");
const body = require("body-parser");

const app = express();
app.use(body.json());

mongoose 
  .connect("mongodb://0.0.0.0/NodeConnect")
  .then((e) => {
    console.log("mongodb Connected SuccessFully");
  })
  .catch((e) => {
    console.log(e);
  });

const productSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const ProductModel = mongoose.model("course", productSchema);

app.post("/", async (req, resp) => {
  let data = new ProductModel(req.body);

  let result = await data.save();

 resp.send("Post SuccessFully"+result);
  console.log(result);
});


app.listen(4300);
