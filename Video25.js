// // JAVA SCRIPT EXECUTION CODE


        let val1 = 10
        let val2 = 5
        function addNum(num1, num2){
            let total = num1+num2
            return total
        }
        let result1 = addNum(val1, val2)
        let result2 = addNum(10,2)





//  1. Global Execution ---> this

// 2. Memory Creation phase 

//     val1 --> undefined
//     val2 --> undefined
//     addNum --> definiton (iske andr sara mamla set ho jaega function ke andr wala)
//     result1 --> undefined
//     result2 --> undefined

// 3. Execution Phase

//     val1 <-- 10
//     val2 <-- 5
//     addNum ----------> (new variable environment + execution thread) -----> addNum function call hone ke baad ye box delete b hota h  


//   JITNI BAAR B FUNTION AAEGA UTNI BAAR STEP 2 AUR STEP 3 FIRSE EXECUTE HOGA

//     let result1 = addNum(val1, val2)              [  Abhi inn dono ke liye firse      ]
//                                                   [  step 2 aur step 3 execute hoga   ]

//     2. Memory creation phase

//         val1 --> undefined
//         val2 --> undefined
//         total --> undefined


//     3. Execution Context

//         num1 --> 10
//         num2 --> 5
//         total --> 15    (total ko hum return kr dete h global execution context me)


//         let result2 = addNum(10,2)     ab iske liye b step 2 aur step 3 repeat hoga 



// ===================================== CALL STACK ==========================================================


ONE()
TWO()
THREE()


// MAAN LO EK BOX H AUR USME YE TEENO FUNCTION EK EK KRKE DAALE TOH JO LAST ME FUNCTION DALA H VO SBSE PEHLE BHAAR AEGA (LIFO)


            // L                       I                       F                   O
            // LAST                    IN                      FIRST               OUT

