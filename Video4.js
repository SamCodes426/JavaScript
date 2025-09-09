// ================================= LET CONST VAR ============================================

const accId = 1537;                   // const value can never be changed

let accEmail = "samar@google.com";   // let does the same task as var without any issue 

var accPass = "sing000";            // prefer not to use var beacause of issue in block scope and functional scope 

accCity = "Patna";                 // this is also correct but prefer not to use this 

// accId = 4204                   // constant value cannot be changed at any cost 

let accState;                    // this creates a memory block with no value and when we run this we get undefined as the value in it

accEmail = "maurya@google.com";

accPass = "dance111";

// ================================= METHODS TO PRINT ====================================

console.log(accId);                                                     // prints only single element 

console.table([accId, accEmail, accPass, accCity, accState]);           // prints in the form of table 

// ========================================================================================