// ==================================================   IF  ============================================================
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");


// <, >, <=, >=, ==, !=, ===, !==


const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);







// if (balance > 500) console.log("test"),console.log("test2");     (it will work but not a good practice)



const balance = 1000

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// ========================================    SWITCH CASE    ===========================================================

month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        break;
}

// =========================================================== TRUTHY AND FALSY ==========================================================================

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}



// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN



//truthy values
// "0", 'false', " ", [], {}, function(){}



// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }



const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10           //  OUTPUT: 5
val1 = null ?? 10        //  OUTPUT: 10 val1 = undefined ?? 15   //  OUTPUT: 15
val1 = null ?? 10 ?? 20     //  OUTPUT: 10



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")