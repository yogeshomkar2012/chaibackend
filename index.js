require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Mr Yogesh");
});

app.get("/twiter", (req, res) => {
  res.send("Yoogesh twiter");
});
app.get("/login", (req, res) => {
  res.send("login");
});
app.listen(process.env.PORT, () => {
  console.log(`example app listing ${port}`);
});
