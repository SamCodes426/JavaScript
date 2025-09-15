// ========================================    ARROW FUNCTIONS AND THIS KEYWORD ========================================


const user = {
    username: "samar",
    price: 99,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

user.welcomeMessage()                   //      samar , welcome to website
                                        //      {
                                        //         username: 'samar',
                                        //         price: 99,
                                        //         welcomeMessage: [Function: welcomeMessage]
                                        //      }
user.username = "yash"                     
                                        //      yash , welcome to website
                                        //      {
                                        //         username: 'yash',
                                        //         price: 99,
                                        //         welcomeMessage: [Function: welcomeMessage]
user.welcomeMessage()                   //       }


function chai(){
    let username = "samarpit"
    console.log(this.username);         //we are not able to use this keyword inside function where as we were able to use it in objects
    
}

chai()           //output: undefined


const chai2 = () => {               // this is arrow function    
    let username = "tinku"
    console.log(this.username);
    
}


chai2()         // output: undefined





const addThree = (num1 , num2 , num3) => {
    return num1+num2+num3
}

console.log(addThree(3,6,8));


const addFour = (num1 , num2) => (num1+num2)        //arrow function can also be written like this 

console.log();



