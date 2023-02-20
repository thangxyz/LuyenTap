let menu =document.querySelector('#menu-bar');
let navbar =document.querySelector('.navbar');
let section =document.querySelectorAll('section');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
for (let i = 0; i < section.length; i++) {
    section[i].onclick = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');  
    }
}



// vieets theo aroud function
window.onscroll= () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');  
    if(window.scrollY>60){
        document.querySelector('#scroll-top').classList.add('active');
    } else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

window.onscroll=() =>{
    if (window.pageYOffset>50){
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');  
    }
}

// window.addEventListener('scroll',function(){
//     if (window.pageYOffset>50){

//     }
// })

// var menu=document.querySelector('.menu');
// var nut = document.querySelector('.nuttop');
// window.addEventListener('scroll', function(){
//     // console.log(window.pageYOffset);
//     if (window.pageYOffset>=150){
//         menu.classList.add('doimenu')
//         nut.classList.add('hientop')

//     }
//     else{
//         menu.classList.remove('doimenu')
//         nut.classList.remove('hientop')
//     }
// })
