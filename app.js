const menuIcon = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", function () {
    nav.classList.toggle("active");
})