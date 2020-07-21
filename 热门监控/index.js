const express = require("express");
const safari = require("safari");
const app = express();
const port = 3000;
const url = `http://127.0.0.1:${port}`;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  safari.open(url);
});