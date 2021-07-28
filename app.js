const navLinks = document.querySelector(".nav-links");
const navlink = document.querySelectorAll(".nav-link");
const burger = document.querySelector(".burger");

burger.addEventListener("click", function(){
    navLinks.classList.toggle("show");
})