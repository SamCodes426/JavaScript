class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    
    get email(){
        return this._email.toUpperCase()
    }
    
    set email(value){
        this._email = value
    }
    
    
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const samar = new User("samar@dad.com","abc")
console.log(samar.password);


//properties ke through getter aur setter define krte h neeche

function User2(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const chai = new User2("chai@google.com","samosa")
console.log(chai.email );


//object base pr getter aur setter use krte h 

const User3 = {
    _email: 's@sm.com',
    _password: "assdddd",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User3)
console.log(tea.email);
