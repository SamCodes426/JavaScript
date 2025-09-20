// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function User3(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User3.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User3.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User3("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


// ====================================== INHERITANCE ================================================


class User2 {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User2{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const samosa = new Teacher("chai", "chai@teacher.com", "123")

samosa.logMe()
const masalaChai = new User2("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User2);


// ============================================= STATIC ================================================

class User4 {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){                  
        return `123`
    }
}

const hitesh = new User4("hitesh")
// console.log(hitesh.createId())

class Teacher2 extends User4 {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher2("iphone", "i@phone.com")
console.log(iphone.createId());