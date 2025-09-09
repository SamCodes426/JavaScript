
// ============================ ANY INTO NUMBER ===================================

let score1 = "sam";
console.log(score1);

console.log(typeof score1); // initially is string

let valueInScore1 = Number(score1);
console.log(typeof valueInScore1);      // typecasting string into number 
console.log(valueInScore1);            // output: NaN

                
         //          "33" => 33
        //          "33abc" => NaN
       //          true => 1 ; false => 0

                
// ============================= ANY INTO BOOLEAN ==================================


let score2 = "1";
console.log(score2);

console.log(typeof score2); //initially is string

let valueInScore2 = Boolean(score2);
console.log(typeof valueInScore2);     // typecasting string into boolean 
console.log(valueInScore2);           // output: NaN


         //        1 => true ; 2 => false
         //        "" => false
        //         "samar" => true




// ============================= ANY INTO STRING ====================================


let score3 = true;
console.log(score3);

console.log(typeof score3); // initally is boolean

let valueInScore3 = String(score3); //typecasting boolean into String
console.log(typeof valueInScore3); //output: string

// ==================================================================================