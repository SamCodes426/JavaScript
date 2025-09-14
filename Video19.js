function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("R");
} 

sayMyName()     // compulsory to use ()

function addTwoNum(num1, num2){         // num1 and num2 here are parameters
    console.log(num1 + num2);    
}

addTwoNum(5,7)      // here 5,7 are arguments

addTwoNum(5,"7")    //output: 57

// the output of (5,7) can also be stored in a variable as shown below


function addTwoNum2  (num1, num2){
    let result = num1+num2
    console.log("samar");       // here it will work
    return result
    //console.log("samar");       //after return statement is passed nothing will work after return statement
    
}

const sum = addTwoNum2(2,2)
console.log(sum);



function loginUserMessage(username){
    return `${username} just logged in`
}



// console.log(loginUserMessage());    //output: undefined just logged in

function loginUserMessage2(username){        //to solve the indefined problem we can use this code
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    else{
        return `${username} just logged in`
    }
}

console.log(loginUserMessage2());


//another way to solve this problem is given below


function loginUserMessage3(username = "suraj gandu"){      // we can give a default value to the username incase the user doesnt provide any argument to the function
    return `${username} just logged in`
}

console.log(loginUserMessage3());       //output: suraj gandu just logged in
console.log(loginUserMessage3("samar"));
