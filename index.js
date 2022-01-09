const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

var firebase = require("firebase-admin");
var serviceAccount = require("./path/serviceAccountKey.json");

firebase.initializeApp({
  credential : firebase.credential.cert(serviceAccount),
  databaseURL: "https://polor-ar-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

// var db = firebase.database();
// var ref = db.ref("data1/-MgLb41nTlzu_0hQrObV");
// ref.once("value",function(snapshot){

//   console.log (snapshot.val());
// })


console.log("hi")
console.log('Starting directory: ' + process.cwd());