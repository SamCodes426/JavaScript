// ================================= DOM selectors ===========================================

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>DOM learning</title>
// </head>
// <body class="bg-black">
    
//     <style>
//         .bg-black{
//             background-color: #212121;
//             color: #ffffff;
//         }
//     </style>
    
//     <div >
//         <h1 id="title" class="heading">DOM learning on  chai aur code <span style="display: none" > test text </span></h1>
//         <p>Hey i am learning javascript</p>
//         <ul>
//             <li class="list-item"> one </li>
//             <li class="list-item"> two </li>
//             <li class="list-item"> three </li>
//         </ul>
//     </div>
// </body>
// </html>



document.getElementsByClassName('heading')

document.getElementById('title')        //gives the tag in which id="title"

document.getElementById('title').id     //gives the value in id attribute

document.getElementById('title').class  //undefined

document.getElementById('title').className  //gives the class name

document.getElementById('title').getAttribute('id')     //gives the value of the attribute

document.getElementById('title').setAttribute('class','test')     //this overwrite the class attribute value as test

const title = document.getElementById('title')  //we can also put this value in some variable and print it out

title.style.backgroundColor = 'blue'

title.style.padding = "15px"

title.style.borderRadius = "15px"

// =============================================================================

title.textContent       //output: 'DOM learning on chai aur code text text                                                      (TEXTCONTENT shows everthing realted to the id title ,irrespective of the styling)

title.innerHTML         //output: 'DOM learning on chai aur code <span style="display: none" > test text </span>'

title.innerText         //output: 'DOM learning on chai aur code'                                                                (INNERTEXT only shows the code which will be displayed on the webpage,it is affected by styling easily)

// ===================================================================================


document.querySelector('h1')        //gives the first h1 tag in the html document 

const myul =  document.querySelector('ul')

myul.querySelector('li')

const turnBlue =myul.querySelector('li')

turnBlue.style.backgroundColor = "blue"

turnBlue.style.padding = "10px"

// NOTE :- QUERYSELECTOR GIVES ONLY THE FIRST REQUIRED ATTRIBUTE OR TAG

const tempLiList = Document.querySelectorAll('li')         //output: gives node list (it is not like array) (WE CAN PERFORM OPERATIONS ON NODE BY USING FOREACH LOOP)

tempLiList.style.color = 'green'    //this will not work

tempLiList[0].style.color = 'green'    //this will work and color the first element of the list to green

// ======================================================================================

const tempClassList =document.getElementsByClassName('list-item')        //this returns HTMLCollection

//CONVERTING HTMLCollectionn into Array

const myConvertedArr = Array.from(tempClassList)        //now the HTMLCollection is converted into an array and stored





