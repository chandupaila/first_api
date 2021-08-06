const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("server is running at 3000 port");
});

app.get("/", (request, response) => {
  response.send("hello world!");
});

app.get("/users", (req, res) => {
  res.json({ message: "this is users data" });
});

app.get("/users/:id", (req, res) => {
  res.json({ username: "chandu" });
});
