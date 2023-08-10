// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Add the Firebase products that you want to use

document.addEventListener('DOMContentLoaded', function() {
    const loadEl = document.querySelector('#load');
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.functions().httpsCallable('yourFunction')().then(() => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    // firebase.analytics(); // call to activate
    // firebase.analytics().logEvent('tutorial_completed');
    // firebase.performance(); // call to activate
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

    try {
      let app = firebase.app();
      let features = [
        'auth',
        'database',
        'firestore',
        'functions',
        'messaging',
        'storage',
        'analytics',
        'remoteConfig',
        'performance',
      ].filter(feature => typeof app[feature] === 'function');
      loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
      loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
    }
});

const BookBtu = document.getElementById("Bookbtu");
const OrderName = document.getElementById("OrderName").value;
const OrderPhone = document.getElementById("OrderPhone").value;
const delivery_location = document.getElementById("delivery_location").value;


BookBtu.addEventListener('click',function(){
    writedb();
    // writedX();
})

//  function writedX (){
//     const data = {
//         name: 'Los Angeles',
//         state: 'CA',
//         country: 'USA'
//       };
//     firebase.firestore().collection('users').doc().set(data);
// }

// const db = getFirestore();
// const docRef = db.collection(dbname).doc(dbDoc);
// var writes = docRef.set({
//   first: firesname,
//   last: lastname,
//   born: born

async function writedb () {

    // this.dbname= dbname
    // this.dbDoc= dbDoc;
    this.OrderName= OrderName;
    this.OrderPhone= OrderPhone;
    this.delivery_location= delivery_location;

    const data = {
        姓名: OrderName,
        電話: OrderPhone,
        地址: delivery_location
      };

    const feback = firebase.firestore().collection('users').doc().set(data);
    await console.log  (feback.id)
}
