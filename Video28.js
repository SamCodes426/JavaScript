// =========================== WHILE AND DO WHILE LOOP ========================================


let index = 0;
while (index<=10) {
    console.log(`value of index is ${index}`);
    index = index+1
}




myArray = ['samar' , 'suraj' , 'nakul' , 'tanu' , 'ishank']

let arr = 0
while (arr<myArray.length) {
    console.log(myArray[arr]);
    arr++
}



//  DO WHILE LOOP ME KAAM PEHLE HOTA H BAAD ME CONDITION CHECK HOTI H 


let score = 1

do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);




let score2 = 11

do {
    console.log(`score is ${score}`);           // YHN PR PEHELE HE 11 PRINT HO GYA FIR BAAD ME ISE PTA CHLA KI 10 TK HE CHLANE KO BOLA THA 
    score++
} while (score<=10);