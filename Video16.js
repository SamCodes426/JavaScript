// ============================================ OBJECTS ======================================

//singleton

// ======================  object literals ========================


// Object.create    talk about it later

const mysym = Symbol("key1")

const JsUser = {
    name:"samar",
    age: 19 ,
    [mysym] : "myKey1",     //  for symbol
    location: "delhi",
    email : "samar@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"],
    "full name" : "SamarpitMaurya"              //this can only be accessed through "JsUser["full name"]" this because of the space between full and name
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);


JsUser.email = "maurya@hotmail.com"
// Object.freeze(JsUser)           // now no changes will be done to JsUser object
console.log(JsUser);


JsUser.greetings = function(){
    console.log("Hello JS user");
    
}

console.log(JsUser.greetings());


JsUser.greetingsTwo = function(){
    console.log(`Hello Js User ${this.name}`);
    
}
console.log(JsUser.greetingsTwo());
