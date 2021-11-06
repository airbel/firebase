//const { app } = require('firebase-admin');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
var serviceAccount = require("./path/polor-serverAccountKey.json");

initializeApp({
    credential : cert(serviceAccount),
  });

const db = getFirestore();
const snapshot = db.collection('users').get();
snapshot.forEach(function(v,i){
  console.log (v.data)
})



  //   const db = getFirestore();
//   const docRef = db.collection('users').doc('adoroable');

//   await docRef.set({
//     first: 'cuteG',
//     last: 'Taipei',
//     born: 1995
//   });

// const db = getFirestore();
// const snapshot = db.collection('users').get();
// snapshot.forEach((doc) => {
//   console.log(doc.data);
// });


console.log ("hi");

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
//     });

// }