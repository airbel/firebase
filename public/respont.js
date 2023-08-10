
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


const responted = document.getElementById("responted");
const respontBtu = document.getElementById("respontBtu");
const getName = document.getElementById("getName").value;

class renderIdforuser{
    renderid(){
    let htmlStr ='';
    const usersid =  firebase.firestore().collection('users').get().then(result =>{
        Array.prototype.forEach.call(result.docs, r => {
            htmlStr = htmlStr + `
                <div id="message">
                    <div>
                    <p>uid:${r.id}</p>
                    <p>內容:${JSON.stringify(r.data(),0,'\t')}</p>
                    </div>
                </div>
                `
        responted.innerHTML = htmlStr ;
        });
    })
    }
    async search(na){
    let htmlStr ='';
    const searchN = firebase.firestore().collection('users');
    const snapshot = await searchN.where("姓名",'==',na).get();
        if (snapshot.empty){
            alert ( "沒資料");
            return ;
        }
        snapshot.forEach(doc =>{
            htmlStr = htmlStr+`
            <div id="message">
            <p>uid:${doc.id}</p>
            <p>內容:${JSON.stringify(doc.data(),0,'\t')}</p>
            </div>
            `
        })
        responted.innerHTML = htmlStr ;
    }
}

let resp1 = new renderIdforuser();
var refash = false;
respontBtu.addEventListener('click',function(){
    if (refash === true){
        window.location.reload();
        refash = false;
    }
    if (getName === ""){
        alert("名子不能空格");
        refash = true;
        return;
    }else{
        resp1.search(getName);
        refash = true;}
    // window.location.reload();
})


