// =============================================   ARRAY   ==============================================

const arr = ["chevy", "ferrari", "toyota", "mercedes", "cadillac"]
console.log(arr[2]);

arr.push("audi")    //adds element at the last of the array 
console.log(arr);

arr.pop()           //removes the last element of the array
console.log(arr);

arr.unshift("bmw")  //adds the value at the start of the array
console.log(arr);

arr.shift()         //remove the first element of the array
console.log(arr);

arr.includes("audi")    //check if the element is in the array
console.log(arr);

arr.indexOf("ferrari")  //gives the index
console.log(arr);

const newArr = arr.join()   //turns into string with comma seperated
console.log(newArr);        

// ===================================== SLICE & SPLICE =======================================


const arr2 = arr.slice(1,3)
console.log(arr2);              //gives value from index 1 to 3 but does not include index 3 

const arr3 = arr.splice(1,3)    //deletes the value except the given 1,3 indexes in the original array
console.log(arr3);

console.log(arr);

