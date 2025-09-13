const marvelHeros = ["ironman", "spiderman","thor"]
const dcHeros = ["superman", "batman", "flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);         // treats the array as a single element and puts it into the another 



// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);                            // adds the elements of the array into the another



const newHeros = [...marvelHeros,...dcHeros]
console.log(newHeros);



const anotherArr = [1,2,3,[4,5,6],7,[6,7,],[4,5]]       // andar wale saare brackets hta dega bs ek he array aaegi andr ka mamla sara mil jaega 
const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr);




console.log(Array.isArray("samarpit"));
console.log(Array.from("samarpit"));


console.log(Array.from({name:"samar"}));    //intresting case  output: []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

