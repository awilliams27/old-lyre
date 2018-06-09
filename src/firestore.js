const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: process.env.FIREBASEAPIKEY,
    authDomain: 'lyre-3294f.firebaseapp.com',
    projectId: "lyre-3294f"
  });

  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();


  export default db;