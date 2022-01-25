const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

var admin = require("firebase-admin");
var serviceAccount = require("./path/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://polor-ar-default-rtdb.asia-southeast1.firebasedatabase.app"
});
//上面資料讀取區~

// const data = {
//   name: 'Los Angeles',
//   state: 'CA',
//   country: 'USA'
// };

// // Add a new document in collection "cities" with ID 'LA'
// const res = await db.collection('cities').doc('LA').set(data);

// writed('users','sitar','瓜小董','無知','40')
readed()
//下面程式區~
console.log ("hi");

function writed (dbname,dbDoc,firesname,lastname,born) {

  this.dbname= dbname
  this.dbDoc= dbDoc;
  this.firesname= firesname;
  this.lastname= lastname;
  this.born= born;

  const db = getFirestore();
    const docRef = db.collection(dbname).doc(dbDoc);
    var writes = docRef.set({
      first: firesname,
      last: lastname,
      born: born
    });
}

function readed(){
  const db = getFirestore();
  var snapshot = db.collection('users').get().then(result => {
  Array.prototype.forEach.call(result.docs, r => {
    console.log(r.id);
    console.log(r.data());
  })
  })
}
console.log ("ok")