const express = require("express");
const Model = require("../modal/login.schema");
const bcrypt = require("bcryptjs");

const router = express.Router();
router.use(express.json());
router.get("/users", async (req, res) => {
  const users = await Model.find();
  res.status(200).json(users);
});

router.get("/users/find", async (req, res) => {
  const { username, password } = req.body;

  const found = await Model.findOne({ username: username });

  if (!found) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const pass = await bcrypt.compare(password, found.password);

  if (!pass) {
    return res.status(401).json({
      message: "Incorrect password",
    });
  }

  res.status(200).json({
    message: "User found",
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const hashpass = await bcrypt.hash(password, 10);

  const data = new Model({ username: username, password: hashpass });

  const result = await data.save();

  res.send(result);
});

router.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;

  const data = await Model.deleteOne({ _id: userId });

  if (data) {
    res.send(data);
  }
});

router.put("/users/update/:id", async (req, res) => {
  const userID = req.params.id;

  const { username, password } = req.body;

  const userUpdate = {};

  if (username) {
    userUpdate.username = username;
  }

  if (password) {
    const userpass = await bcrypt.hash(password, 10);

    userUpdate.password = userpass;
  }

  const data = await Model.updateOne(userID, userUpdate, {
    new: true,
  });

  if (data) {
    res.status(200).json({
      message: "data update successfully",
    });
  }

  if (!data) {
    res.status(404).json({
      message: "User Not Found",
    });
  }
});

router.get("/id", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Model.findOne({ username });

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      res.send(user);
    } else {
      res.status(401).send("Incorrect password");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/query',(req,resp)=>{
    
})
module.exports = router;
