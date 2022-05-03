const { collection, addDoc, Timestamp } = require("firebase/firestore");

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

module.exports = {
  addNewContact,
};
