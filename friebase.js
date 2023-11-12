
// import { firestore } from "firebase-admin";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getFirestore,collection, query, where, doc,getDoc,getDocs,addDoc,updateDoc,setDoc,Timestamp,} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
//  離開要刪除
const firebaseConfig = { 

  
};

//格式化 HTML 顯示表格
var arr_dataposthere = "";
var arr_datatemp = "";


// 初始化 鑰匙
const app = initializeApp(firebaseConfig);
// 初始化雲端，取得API使用
const db = getFirestore(app);
// 讀取user的資料夾
// var citiesCol = collection(d, 'users');

//
export async function getallCities(d) {
        const citiesCol = collection(d, 'users');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return console.log (cityList);
}
// getallCities(db);

var doccollation = {
name:"",
address:"",
telphone:0,
}

async function get_specifyCities(d,name) {
        const citiesCol = collection(d, 'users');
        const cityspecify =query(citiesCol,where("姓名" ,"==", name));
        const collation = await getDocs(cityspecify);
        collation.forEach((doc) => {
            doccollation.name = doc.data().姓名;
            doccollation.telphone = doc.data().電話;
            doccollation.address = doc.data().地址;
            // return console.log (doc.id ," =>", doc.data());
            return document.getElementById("boked").innerHTML +=
            `<table>
                <tr>
                    <th>姓名</th>
                    <th>電話</th>
                    <th>地址</th>
                </tr>
                <tr>
                    <td>
                        ${doc.data().姓名}
                    </td>
                    <td>
                        ${doc.data().電話}
                    </td>
                    <td>
                        ${doc.data().地址}
                    </td>
                </tr>
            </table>`
    });
 }


async function getquery(d) {
const costRef = await where("姓名","==","圭圭");
// const query_a = costRef.where("姓名","==","圭圭");
return console.log (costRef);
}


const docData = {
姓名:"呼嚕",
年齡: 34,
地址:"水治里溫泉巷38號",
// 登記時間:Timestamp.formDate(new Date("1990/05/11"))
}

async function timest(d){
// const citiesCol = collection(d, 'users');
const citySnapshot = await addDoc(collection(d, 'users'),{
    姓名:"東門",
    年齡: 14,
    地址:"法華珊路24號",
});
return console.log (citySnapshot.id);
}
// timest(db)

async function getdata(d,idfound){
const docRef = doc(d, "users", idfound);
const docSnap = await getDoc(docRef);
if (docSnap.exists()){
    const inerr = Object.keys(docSnap.data());
    const inconteant = Object.values(docSnap.data());
    inerr.forEach((v,i)=>{
        if (v === "姓名")
        console.log (inconteant[i])
        if (v === "地址")
        console.log (inconteant[i])
        if (v==="電話")
        console.log (inconteant[i])
    })

    console.log("內容:",docSnap.data())
    console.log("ID:",docSnap.id)
} else {
    console.log ("No such Document!")
}
}

// getdata(db,"台北")
export {getdata} ;

class City {
constructor (name ,state ,county){
this.name = name ;
this.state = state;
this.county = county ;
}
toString (){
    return this.name + ','+ this.state +',' + this.county;
}
}
const cityConverter = {
toFirestore:(City) =>{
    return {
        name:City.name,
        state:City.state,
        county:City.county
    };
},
fromFirestore:(snapshot,Options) =>{
    const data = snapshot.data(Options);
    return new City(data.姓名, data.地址, data.county);
}
}

async function getfilldata(d,idfound){
const ref = doc(d, "users", idfound).withConverter(cityConverter);
const docSnap = await getDoc(ref);
if (docSnap.exists()) {
// Convert to City object
const city = docSnap.data();
// Use a City instance method
console.log(city.toString());
} else {
console.log("No such document!");
}
}
//      (db,"kuYSsJT1M2OJwZgXngOw")



// async function setdata (){
//     try{
//         const docRef = await addDoc(collection(db, "users"), {
//         first: "熟投",
//         last: "棒球",
//         born: 1990
//         });

//     }catch (e){
//         console.error("Error adding document: ", e);
//     }
// }
// setdata();

async function setdata (name,address,telphone,telbirehday){
try{
    const docRef = await addDoc(collection(db, "users"), {
    name: name,
    address: address,
    telphone: telphone,
    birehday:telbirehday
    })

}catch (e){
     console.error("Error adding document: ");
}
}

// setdata( da_name,da_address,da_telphone,da_postData);

async function upthdata (d,id){
try{
    const docRef = doc(d, "users",id);
    const Upthisdata = await updateDoc(docRef,
    {
    first: "熟投",
    last: "棒球",
    born: 1990
    });

}catch (e){
    console.error("Error adding document: ", e);
}
}
// upthdata(db,"SqLbDImjU4jhYqRKw769");

async function getdata_a(d,idfound){
    const docRef = doc(d, "users", idfound);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
        const inerr = Object.keys(docSnap.data());
        const inconteant = Object.values(docSnap.data());
        inerr.forEach((v,i)=>{
            if (v === "姓名")
            arr_datatemp = inconteant[i];

            if (v === "地址")
            arr_datatemp += inconteant[i];

            if (v === "電話")
            arr_datatemp += inconteant[i];

        })
    } else {
        console.log ("No such Document!")
    }
}

// getdata_a(db,"台北")


export async function insertToHtml_v1 (){
    const da_posttohand = document.getElementById("dataposthere");
    const docRef = doc(db, "users", "台北");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){

        const inerr = Object.keys(docSnap.data());
        const inconteant = Object.values(docSnap.data());
        let htmlStr ='';

        listContent.forEach(function(v,i){
          htmlStr = htmlStr + `          
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
   
         inerr.forEach((v,i)=>{
            if (v === "姓名")
            arr_datatemp = inconteant[i];

            if (v === "地址")
            arr_datatemp += inconteant[i];

            if (v === "電話")
            arr_datatemp += inconteant[i];
         })
    
     da_posttohand.innerHTML =arr_dataposthere;

    } else {
        console.log ("No such Document!")
    }

}
// insertToHtml_v1()

export async function insertToHtml (){
    const da_posttohand = document.getElementById("dataposthere");
    const docRef = doc(db, "users", "台北");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){

        const inerr = Object.keys(docSnap.data());
        const inconteant = Object.values(docSnap.data());
        const arr_dataposthere = `
        <H3>訂單資料</H3>
        <H3>${inerr[0]}:${inconteant[0]}</H3>
        <H3>${inerr[1]}:${inconteant[1]}</H3>
        <H3>${inerr[2]}:${inconteant[2]}</H3>
     `
     da_posttohand.innerHTML =arr_dataposthere;

    } else {
        console.log ("No such Document!")
    }
}


const da = new Date();
console.log ("今天是",da.getFullYear(),"年", da.getMonth()+1,"月",da.getDate(),"日");
export const dateNow = da.getFullYear()+"年"+ (da.getMonth()+1)+"月"+(da.getDate())+"日";
var newpo ="";
let getreflash = false;

    var da_name = document.getElementById("name").value;
    var da_address = document.getElementById("address").value;
    var da_telphone = document.getElementById("telphone").value;
    var da_postData = document.getElementById("dataposthere");

export function getHTMLdata (){
     da_name = document.getElementById("name").value;
     da_address = document.getElementById("address").value;
     da_telphone = document.getElementById("telphone").value;
     da_postData = document.getElementById("dataposthere");

    console.log (da_name);
    console.log (da_address);
    console.log (da_telphone);
    newpo = `<H3>${dateNow}</H3>
            <H2>${da_name}</H2>
            <H2>${da_address}</H2>
            <H2>${da_telphone}</H2>
            `
    da_postData.innerHTML= newpo;
    // setdata(名子，地址，電話，日期)
    
    setdata(da_name,da_address,da_telphone,dateNow);
}


export async function getIdList (){
     
    // const citiesCol = collection(d, 'users');
    // const citySnapshot = await getDocs(citiesCol);
    // const cityList = citySnapshot.docs.map(doc => doc.data());
    const docList = document.getElementById("listdataID");
    const docRef = collection(db, "users");
    const docSnap = await getDocs(docRef);
    docSnap.docs ? docList.innerHTML = '有物件' : docList.innerHTML = '空'
    // const logout =  docSnap.docs.forEach((v,i) =>{
    //     console.log(Object.keys(v.data()))
    //     console.log(Object.values(v.data()))
    // })
    // if (docSnap.exists){
    if (docSnap.docs){
        docSnap.forEach((doc) =>{
            const docData = doc.data();
            const docID = doc.id;
            const docName = docData.name;
    
            // 創建一個選項元素
            const option = document.createElement("option");
            option.value = docID;

            option.text += `ID: ${docID}, \t\n Name: ${docName}`;
    
            // 添加選項到選擇框
            docList.appendChild(option);
            
        })
        // console.log ("option!")
    } else {
        console.log ("No such Document!")
    }
 }

 async function getKeyList(d,idfound){
    const docRef = doc(d, "users", idfound);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
        const inerr = Object.keys(docSnap.data());
        const inconteant = Object.values(docSnap.data());
        let incrent = inerr.length;
        inerr.forEach((v,i)=>{
            
            console.log (inerr[i])
        })
        console.log("內容:",docSnap.data())
        console.log("數量",incrent)
    } else {
        console.log ("No such Document!","沒資料")
    }
    }

const docselet = document.getElementById("listdataID");
docselet.addEventListener ("change", function(){
    const selectedValue = docselet.value;
    getKeyList (db,selectedValue)
    console.log ("選擇ID:" + selectedValue )
})

const cardsContainer = document.getElementById("cards-container");

// // 讀取 Firestore 中的文檔
// async function get_specifyCities(d,name) {
//     const citiesCol = collection(d, 'users');
//     const cityspecify =query(citiesCol,where("姓名" ,"==", name));
//     const collation = await getDocs(cityspecify);
//     collation.forEach((doc) => {
//         doccollation.name = doc.data().姓名;
//         doccollation.telphone = doc.data().電話;
//         doccollation.address = doc.data().地址;
//         // return console.log (doc.id ," =>", doc.data());
//         return document.getElementById("boked").innerHTML +=


const dbr= collection(db,"users");
    const collatione = await getDocs(dbr);
        collatione.forEach((doc) => {
            const docData = doc.data();
            
            // 創建卡片元素
            const card = document.createElement("div");
            card.classList.add("card");
            
            // 將文檔資訊填充到卡片中
            card.innerHTML = `
                <h2>${docData.姓名}</h2>
                <p>電話: ${docData.電話}</p>
                <p>Create Date: ${docData["create-date"]}</p>
                <p>Book Date: ${docData.book_date}</p>
                <p>Content: ${docData.content}</p>
            `;
            
        // 添加卡片到容器
        cardsContainer.appendChild(card);
    });