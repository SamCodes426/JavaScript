// ================================ STACK AND HEAP ===================================

//  stack (primitive)                      heap (non - primitive)

// ===================================================================================

                                        //stack

let myName = "samar"
let anotherName = myName

anotherName = "bhaijaan"

console.log(myName);            //changing the name of anotherName does not affect the original myName value because stack make another duplicate value for it 
console.log(anotherName);

// ==================================================================================

                                        //heap

let userOne = {
     email : "samar@gmail.com",
     upi : "sam@okicici"

}

let userTwo = userOne

userTwo.email = "maurya@redmail.com"    //here heap is used so it takes reference from the userOne so all the changes are applied to the userOne also

console.log(userTwo.email);
console.log(userOne.email);







