// Primitive datatype : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// Reference type(Non-primitive) : Array , Objects , Functions

const pets = ["sheru","sky","benjie"] //array


let myObj ={
    name:  "samar",             //object
    age : 20,
}


const myFunction = function(){
    console.log("Hello World");
    
}