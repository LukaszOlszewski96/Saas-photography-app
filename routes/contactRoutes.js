const express = require("express");

const { addNewContact } = require("../controllers/contact.controllers");

const routes = express.Router();

//route for add new contact
routes.post("/mail/contact", addNewContact);

module.exports = {
  routes: routes,
};
