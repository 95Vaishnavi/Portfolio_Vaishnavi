'use strict';

/* navbar toggle */
const header=document.querySelector("[data-header]");
const navToogleBtn=document.querySelector("[data-nav-toggle-btn]");

navToogleBtn.addEventListener("click",function(){
    header.classList.toggle("nav-active");
    this.classList.toggle("active");
})

/* toogle the navbar when click any navbar link */

const navbarLinks=document.querySelectorAll('[data-nav-link]');
for(let i=0; i<navbarLinks.length; i++){
    navbarLinks[i].addEventListener("click",function(){
        header.classList.toggle("nav-active");
        navToogleBtn.classList.toggle("active");
    });
}