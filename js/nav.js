let toggleMenu = document.querySelector(".togle-menu");
let nav_content = document.querySelector("nav .nav-content");
toggleMenu.addEventListener("click", () => {
    nav_content.classList.toggle("d-none");
    
});