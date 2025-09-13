const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());    //converted into string

console.log(balance.toFixed(2));    // give output upto 2 decimal value(100.00)

const otherNumber = 33.1427
console.log(otherNumber.toPrecision(3));        //priority starts from before the decimal 

const hundreds = 1000000
console.log(hundreds.toLocaleString());         // puts commas between the digits(10,00,000)

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);   //safest integer we can take


// =================================== MATHS =====================================

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));        //rounds off to the next integer no matter of the decimal
console.log(Math.floor(4.6));       //round off to the previous integer no matter of the decimal
console.log(Math.min(2,6,9,4,67,9,1));  //finds the min value in a array    

console.log(Math.random());
console.log((Math.random()*10)+1);      //so that the random value is not between 0-1
console.log(Math.floor(Math.random()*10)+1);    //converts into previous integer value


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);         //returs random value between 10 and 20 













