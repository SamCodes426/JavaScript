// ========================================= DATE ====================================

let myDate = new Date()

console.log("=======================================================");
console.log(myDate);    //2025-09-13T11:27:56.652Z
console.log("=======================================================");

console.log(myDate.toString());     //Sat Sep 13 2025 16:57:56 GMT+0530 (India Standard Time)
console.log("=======================================================");

console.log(myDate.toDateString());         //Sat Sep 13 2025
console.log("=======================================================");

console.log(myDate.toJSON());           //2025-09-13T11:27:56.652Z
console.log("=======================================================");

console.log(myDate.toLocaleString());   //13/9/2025, 4:57:56 pm
console.log("=======================================================");

console.log(typeof myDate);             //object




let myCreatedDate = new Date(2025, 8 , 13 , 17 , 1) 
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());


let myCreatedDate2 = new Date("2025-9-13")      //for yyyy-dd-mm  format
let myCreatedDate3 = new Date("13-9-2025")      //for dd-mm-yyyy format



let myTimeStamp = Date.now()
console.log(myTimeStamp);       //output: 1757763592931 (in miliseconds)

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday:"long"
})