const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const homeRoute = require("./routes/homeRoute");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", homeRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
