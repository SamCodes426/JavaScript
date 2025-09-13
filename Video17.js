// const tinderUser = new Object()      singleton
    
// const tinderUser = {}                non singleton


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samie"
tinderUser.isLoggedIn = true

console.log(tinderUser);



const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "samar",
            lastname: "maurya"
        }
    }
}

console.log(regularUser.fullname);

console.log(regularUser.fullname.userfullname);

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1,obj2}        //output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3);

// const obj4 = Object.assign( {} , obj1 , obj2 )      //output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj4);


const obj3 = {...obj1,...obj2}      //output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);


const user = [ {name: "suraj"} , {id: 1,email: "s@gmail.com"} ]     // user is a array in which 1st element and 2nd element are both objects

console.log(user[1].email);     //user[1].email is used to fetch the data inside the first element which is an object which holds email

console.log(Object.keys(tinderUser));       //output: [ 'id', 'name', 'isLoggedIn' ]  
console.log(Object.values(tinderUser));     //output: [ '123abc', 'samie', true ]
console.log(Object.entries(tinderUser));    //output: [ [ 'id', '123abc' ], [ 'name', 'samie' ], [ 'isLoggedIn', true ] ]


