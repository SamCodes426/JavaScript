// ================================= IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ================================================


// IIFE is used to reduce the crowding in the global scope


(function chai(){
    //named IIFE
    console.log("db connected");
    
})();





(() => {
    console.log(`DB 2 CONNECTED`);
    
})();






((name) => {
    console.log(`DB 2 CONNECTED ${ name}`);
    
})("samar");