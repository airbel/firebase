const { initializeApp } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

var admin = require("firebase-admin");

var serviceAccount = require("path/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://polor-ar-default-rtdb.asia-southeast1.firebasedatabase.app"
});

console.log("hi")
console.log('Starting directory: ' + process.cwd());


// var db = firebase.database();
// var ref = db.ref("data1/-MgLb41nTlzu_0hQrObV");
// ref.once("value",function(snapshot){

//   console.log (snapshot.val());
// })




