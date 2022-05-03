const express = require("express");

const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ hello: "jestes w dodawaniu użytkownik" });
});

//Contact routes
app.use("/api", contactRoutes.routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
