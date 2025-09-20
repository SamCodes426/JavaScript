// ================================== javascript and classes =====================================================

//OOP

//OBJECT

// -collection of properties and methods

// why use OOP ?



// parts of OOP

// object literal
// constructor function
// prototype
// classes
// instances(new,this)


// 4 Pillars

// - Abstraction
// - Encapsulation
// - Inheritance
// - Polymorphism

//========================================== object literal ==============================================

const user = {                  
    username : "Samar",         
    loginCount : 8,
    signedIn : true,
    getUserDetails: function(){
                    console.log("got user details from database");
                    console.log(`username: ${this.username}`);
                        
                } 
}

console.log(user.username);
console.log(user.getUserDetails());

// =========================================== constructor function =======================================

// const promiseOne = new Promise()  //here new keyword is a constructor function
// const date = new Date()


function User (username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    // return this
}

const userOne  = new User("samarpit",14,true)      // yhn NEW keyword bohot important h isi se constructor function call hota h         
const userTwo  = new User("suraj",28,false)       

console.log(userOne);
console.log(userTwo);

// ===================================================================================
