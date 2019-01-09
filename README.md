## localstorage-Api
simple javascript Api to store all type of data locally using JSON.stringify, it works for all modern browsers including mobile apps.

### Examples
store data: `store.setData("name","value");`<br>
get data: `store.getData("name");`<br>
remove data: `store.removeData("name");`<br>
#### String
store string: `store.setData("car","BMW");`<br>
get string: `store.getData("car");` output //BMW<br>
#### Number
store number: `store.setData("speed",120);`<br>
get number: `store.getData("speed");` output //120<br>
#### Boolean
store boolean: `store.setData("isStopped",true);`<br>
get boolean: `store.getData("isStopped");` output //true<br>
#### Object
store object: `store.setData("car",{name: "BMW", speed: 120, color: "black"});`<br>
get name of object: `store.getData("car").name;` output //BMW<br>
#### Array
store array: `store.setData("car",["BMW",120,"black"]);`<br>
get array: `store.getData("car")[1];` output //120<br>
#### Array inside Object
store object: `store.setData("car",{name: "BMW", speed: 120, color: ["black","white","blue"]});`<br>
get blue color of object: `store.getData("car").color[2]` output //blue

#### Note
to work with this API you must place the script source file in `<head>` section.<br>
 `<head>` <script type="text/javascript" src="storeApi.js"></script> `</head>`
 
 #### App work with this Api
 my app **Speedometer Alert** was built using this Api:<br>
 https://play.google.com/store/apps/details?id=com.spinningtop.speedalert
