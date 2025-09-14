function calculateCartPrice(...num1){           // this ... is known as rest operator and it is used for multiple parameters with just three dots
    return num1
} 

console.log(calculateCartPrice(2,200,400));     //output: [ 2, 200, 400 ]

// =========================== PASSING AN OBJECT INSIDE A FUNCTION =======================================================


const user = {
    username: "samar",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)

// ============================== PASSING AN ARRAY INSIDE A FUNCTION ======================================================

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    console.log(`the first element of the array is ${getArray[0]}`);
    
}

returnSecondValue(myNewArray)