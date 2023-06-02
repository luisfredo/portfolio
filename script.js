let mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", topFunction);
window.onscroll = scrollFunction;

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        mybutton.style.display  ="block";
    } else {
        mybutton.style.display  ="none";
    }

}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

/*Hamburger menu*/

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

function hideMenu() {
        console.log("hello")
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
}

menuItems.forEach(item => item.addEventListener("click", hideMenu) )
hamburger.addEventListener("click", toggleMenu);
