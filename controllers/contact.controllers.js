const res = require("express/lib/response");
const {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  Timestamp,
  doc,
} = require("firebase/firestore");

const { firestore } = require("../config/firebase.config");

//function responsible for add new message from contact form
const addNewContact = async (req, res) => {
  try {
    const {
      first_name,
      email,
      category_photo,
      city,
      street,
      date,
      time,
      message,
    } = req.body;
    const collectionReferecne = collection(firestore, "Contacts");

    const response = await addDoc(collectionReferecne, {
      first_name: first_name,
      email: email,
      category_photo: category_photo,
      city: city,
      street: street,
      date: date,
      time: time,
      message: message,
      timestamp: Timestamp.fromDate(new Date()),
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

//Get all contacts form Firestore
const getAllContacts = async (req, res) => {
  try {
    let contacts = [];
    const collectionReferecne = collection(firestore, "Contacts");
    const response = await getDocs(collectionReferecne);

    response.forEach((doc) => {
      // contacts.push(doc.id);
      // contacts.push(doc.data().message);
      contacts.push(doc.data());
    });

    res.status(200).send(contacts);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

//Delete contact
const deleteContact = async (res, req) => {
  try {
    const response = await deleteDoc(
      doc(firestore, "Contacts", "bZmEwgAbjwXZc97U92XR")
    );

    // res.status(200).send(response);
  } catch (error) {
    console.log(error);
    // res.status(400).send(error.message);
  }
};

deleteContact();

module.exports = {
  addNewContact,
  getAllContacts,
  deleteContact,
};
