const buttons = document.querySelectorAll('.button')

const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);

button.addEventListener('click',function(e){
    console.log(e.target);      //isse pta lgta h ki ye event aa khn se rha h
    if(e.target.id==='grey'){
        body.style.backgroundColor = e.target.id
    }

    if(e.target.id==='red'){
        body.style.backgroundColor=e.target.id
    }

    if (e.target.id==='blue') {
        body.style.backgroundColor=e.target.id
    }
    
    if (e.target.id==='green') {
        body.style.backgroundColor=e.target.id
    }
    


})

});