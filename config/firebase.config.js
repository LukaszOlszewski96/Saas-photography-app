const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
//const admin = require('firebase-admin');
const config = require("../config/keys");

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

module.exports = {
  firestore,
};
