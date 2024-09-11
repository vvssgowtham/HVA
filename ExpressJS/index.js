const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs", { route: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { route: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", { route: "Contact" });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});