const express = require("express");
const { route } = require("express/lib/application");

const {
  addNewContact,
  getAllContacts,
} = require("../controllers/contact.controllers");

const routes = express.Router();

//route for add new contact
routes.post("/mail/contact", addNewContact);

routes.get("/mail/contact", getAllContacts);

module.exports = {
  routes: routes,
};

/**
 * @swagger
 * components:
 *  schemas:
 *    Contacts:
 *      type: object
 *      required:
 *        - first_name
 *        - email
 *        - category_photo
 *        - city
 *        - street
 *        - date
 *        - time
 *        - message
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the contact
 *        first_name:
 *          type: string
 *          description: The new client first name
 *        email:
 *          type: string
 *          description: The new client email
 *        category_photo:
 *          type: string
 *          description: The photography category (wedding)
 *        city:
 *          type: string
 *          description: The city in which it takes place
 *        street:
 *          type: string
 *          description: The street in which it takes place
 *        date:
 *          type: string
 *          description: The date of the meeting
 *        time:
 *          type: string
 *          description: The time of the meeting
 *        message:
 *          type: string
 *          description: Contact details
 *
 */

/**
 * @swagger
 *  tags:
 *    name: Contacts
 *    description: The contact managing API
 */

/**
 * @swagger
 * /contacts:
 *  get:
 *   summary: Returns the list of all the contacts
 *   tags: [Contacts]
 *   responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           aplication/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contacts'
 */

/**
 * @swagger
 * /contacts:
 *  post:
 *    summary: Create a new contact
 *    tags: [Contants]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Contacts'
 *      responses:
 *        200:
 *          description: The contact was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Contacts'
 *        500:
 *          description: Some server error
 *
 */
