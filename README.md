npx># firebase
練習Firebase

連結方式
https://hackernoon.com/nodejs-setup-firebase-in-4-step-tutorial-example-easy-beginner-service-account-key-json-node-server-d61e803d6cc8

<br>

>安裝 登入管理
```
[C:\隨意]>npm install firebase-admin --save
```
<br>

>安裝 CLI (也同時更新版本)
```
[C:\隨意]>npm install -g firebase-tools
```
<br>

>有的話 有顯示版本
```
[C:\隨意]>firebase -V 
```
<br>

> 看看  Firebase CLI 有沒有登入
```
[C:\隨意]>firebase login
```
成功的話，會顯示登入的EMAIL

<br>

> 看看有無登入Firebase 專案
```
[C:\隨意]>firebase projects:list
```
<br>

>如果出現 Error: Failed to list Firebase projects. See firebase-debug.log for more info.
>HTTP Error: 401

>解決方案> [C:\隨意]>firebase login --reauth  
>也可以登出，再登入



```
┌──────────────────────┬────────────────────┬────────────────┬──────────────────────┐
│ Project Display Name │ Project ID         │ Project Number │ Resource Location ID │
├──────────────────────┼────────────────────┼────────────────┼──────────────────────┤
│ polor-ar             │ polor-ar (current) │ xxxxxxxxxxx    │ xxxxxxxxxx           │
└──────────────────────┴────────────────────┴────────────────┴──────────────────────┘
```
<br>

> 把 Firebase 初始化
```
[C:\隨意]>firebase init
```
<br>

> hosting(託管網站)
安裝方式:
```
firebase init hosting
```

<br>

> firebase deploy  << ↓↓↓會失敗，Package.json永遠搞不定，要改成↓↓↓↓
```
firebase deploy --only hosting
```
理論上就能通關了

<br>

> 部屬網站 測試，不是真的上傳，會給一個臨時網址
```
firebase hosting:channel:deploy polor-ar
```
<br>

>部屬網站方式(測試完畢再上傳)
```
firebase deploy --only hosting
```
<br>

>顯示使用中的專案
```
firebase use
```
<br>

>查看所有服務項目
```
firebase serve
```
<BR>

> 使用web CDN  
>在基礎知識  > 平台與框架 > WEB SDK 設置替代方案
```
https://firebase.google.com/docs/web/alt-setup?authuser=0&hl=zh-tw#from-the-cdn
```



### 安裝不成功
<img src="2021-11-07.png" width="508" height="158">
<img src="2021-11-09.png" width="508" height="158">

要把node更新到最新版，很多問題就解決了




### 參考筆記:
[很詳細I](https://www.letswrite.tw/cloud-functions-init/)

(很詳細II)[https://www.letswrite.tw/gas-firestore/]

