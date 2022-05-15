const {
  collection,
  addDoc,
  getDocs,
  Timestamp,
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

const getContact = async (req, res) => {
  try {
    let contacts = [];
    const collectionReferecne = collection(firestore, "Contacts");
    const response = await getDocs(collectionReferecne);

    const data = response.forEach((doc) => {
      console.log(doc.data());
      contacts.push(doc.id);
      contacts.push(doc.data());
    });
    res.json(contacts);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = {
  addNewContact,
  getContact,
};
