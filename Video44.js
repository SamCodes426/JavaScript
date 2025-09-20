function setUserName (username){
    this.username = username
    console.log("called");
    
}

function createUser (username,email,password){
    setUserName.call(this,username);
    this.email = email
    this.password = password

} 

const chai = new createUser("samar","samosa@fb.com,","1234")
console.log(chai);
