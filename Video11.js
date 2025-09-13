const name = "samarpit"
const repoCount = 5

// console.log(name + repoCount);  very immature method of concatenation

console.log(`hello my name is ${name} and i have ${repoCount} repos`);

const gameName = new String ('mauryasam')   //another  method of assigning variable

console.log(gameName[0]);               //keyvalue pair
console.log(gameName.__proto__);        //prototype


console.log(gameName.length);       //gives length of the string 
console.log(gameName.toUpperCase());  //converts the string to uppercase
console.log(gameName.charAt(2));        //tells the character at index 0
console.log(gameName.indexOf('a'));   //gives the index of a 


const newVar = gameName.substring(0,4)
const anotherString = gameName.slice(-8,4)  //negative value are only accepted by slice not substring
console.log(newVar);
console.log(anotherString);



const newStringOne = "    samarpit@gmail.com               "
console.log(newStringOne);

console.log(newStringOne.trim());   //removes unwanted spaces in the string 


const url = "https://samarpit.com/samar%20maurya"
console.log(url.replace('%20','-'));    //replaces something with something 


console.log(url.includes('samar'));


let garage = "i have a car collection of 20 cars"
console.log(garage.split(' '));










