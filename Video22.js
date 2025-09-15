function one (){
    const username = "samar"
    
    
    function two(){
        const website = "youtube"               //(child function can access the parent function variables)
        console.log(username);
        
    }
    // console.log(website);        ERROR
    //  two()                       ERROR
}

// one()                        


if(true){
    const username = "samar"
    if(username=="samar"){
        const website = " youtube"
        console.log(username+website);
        
    }
    // console.log(website);    ERROR
    
}

// console.log(username);       ERROR


//++++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++

addOne(7)               //output: 8 (idhar error nhi aaega kyunki function ke sath scene kuch aur h)

function addOne(num){
    return num+1    
}

addOne(5)


addTwo(7)               //output: error (function variable me h aur variable to declare hone se pehele call kiya h toh error aaya)

const addTwo = function(num){               //variabls can hold anything
    return num+2
}

addTwo(5)