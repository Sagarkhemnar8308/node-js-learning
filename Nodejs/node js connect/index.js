const express = require("express");
const cors = require("cors");
// const coursesRoutes = require("./routes/courses.routes");

const db = require("./config/db");
const app = express();
app.use(cors());

const bodyParser = require("body-parser");
const appRoute = require("./routes/app.route");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    JSON.stringify([
      { Name: "Sagar", Age: 18, Education: "BCA" },
      { Name: "Akash", Age: 19, Education: "BCA" },
      { Name: "Rushi", Age: 21, Education: "BCA" },
      { Name: "Swapnil", Age: 18, Education: "BCA" },
    ])
  );
});
app.use("/app", appRoute);

// app.use("/course", coursesRoutes);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = app;
