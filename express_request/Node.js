const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  if (req.query.name) {
    res.send(`I got this query param: ${req.query.name}`);
  } else {
    res.send("Hello User");
  }
});

app.get("/:id", (req, res) => {
  res.send(`I got this id: ${req.params.id}`);
});

app.post("/", (req, res) => {
  const data = req.body;
  res.send(`Name: ${data.name} and Email: ${data.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
