const express = require("express");
const config = require("./config/keys");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ hello: "jestes w dodawaniu użytkownika" });
});

app.listen(PORT);
