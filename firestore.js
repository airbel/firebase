//const { app } = require('firebase-admin');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

var admin = require("firebase-admin");
var serviceAccount = require("./path/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://polor-ar-default-rtdb.asia-southeast1.firebasedatabase.app"
});


      // const db = getFirestore();
      // const docRef = db.collection('users').doc('曼陀朱');
      // var writes = docRef.set({
      //   first: '慢',
      //   last: 'ball',
      //   born: 1999
      // });



const db = getFirestore();
var snapshot = db.collection('users').get().then(result => {
  Array.prototype.forEach.call(result.docs, r => {
    console.log(r.id)
    console.log(r.data())
  })



console.log ("hi");
//<!----
// function writed () {
//     const docRef = db.collection('users').doc('孫小豬');
//     var writes = docRef.set({
//       first: '孫',
//       last: 'pipick',
//       born: 1998
//     });
// }

// function readed(){
//     const db = getFirestore();
//     const snapshot = db.collection('users').get();
//     snapshot.forEach((doc) => {
//       console.log(doc.data);
//     }); ---->