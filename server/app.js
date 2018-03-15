const express = require("express");
const morgan = require("morgan");
const path = require("path");
const ejs = require("ejs");

var app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname + "/../public")));
app.set("views", "./views");
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index");
});


module.exports = app;