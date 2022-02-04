var listContent = [];

const addbtu = document.getElementById("addbtu");
const listtoHtml = document.getElementById("list");
const filterName =  document.getElementById("fname");
const filterPhone = document.getElementById("fphone");

//object 轉 Array;
function objectToArray () {
var _arr = [];
this.setArray = function(e){ Object.values(e).forEach((v,i)=>{
        _arr.push(v);
    })
}

//前面插入資料 PS:左邊
this.setUnshift = function(uns){
    _arr.unshift(uns);

}
//後面加入資料 PS:右邊
this.setPush = function(pus){
    _arr.push(pus);
}
//前面刪除資料 PS:左邊邊移除
this.delRight = function(){
    _arr.shift();
}

//前面刪除資料 PS:左邊邊移除
this.delLeft = function(){
    _arr.pop();
}

this.getArray = function(){
    return _arr;
}

}
//實體化 object 轉化 array
var binA =new objectToArray();

document.addEventListener('DOMContentLoaded', function() {
  const loadEl = document.querySelector('#load');
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
   firebase.firestore().collection('goobela').get().then(result => {
      Array.prototype.forEach.call(result.docs, r => {
        listContent.unshift({
          uid:r.id,
          data:r.data(),
      })
        console.log(r.id)
        console.log(r.data())
      })
    });
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
//var stList = JSON.stringify(increatwList,0,'\t');
class renderFeature{
      render(){
        let htmlStr ='';

        listContent.forEach(function(v,i){
          // htmlStr = htmlStr + `
          htmlStr =  `
          <div id="message">
            <div>
              <p>uid:${v.uid}</p>
              <p>內容:${Object.keys(v.data)}</p>
              <p>內容str:${Object.entries(v.data)}</p>
              <p>內容Json:${JSON.stringify(v.data,0,'\t')}</p>
              <p>長度:${i}</p>
            </div>
          </div>
           `
        })
    listtoHtml.innerHTML = htmlStr ;
  }
}

let rf1 = new renderFeature();

addbtu.addEventListener('click',function(){
    rf1.render();
    })