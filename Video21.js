//  ======================================= SCOPES =========================================

let a = 300

if(true){   
    let a = 10                      //  {} this used in if else statement is knwon as block scope  
    const b = 20
    var c = 30
}


// console.log(a);          //this will not execute (error)
// console.log(b);          // this will not execute (error)    
console.log(c);             //this will execute without error


// anything outside the if else or for or etc is known as global scope




