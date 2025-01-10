let toggle_menu = document.querySelector(".togle-menu");
let nav_content = document.querySelector("nav .nav-content");
// let orders_number = document.querySelector(".orders-num");
// let orders_number_calc=0;
toggle_menu.addEventListener("click", () => {
    nav_content.classList.toggle("d-none");
    
});
// orders_number_calc=JSON.parse(localStorage.getItem("cart")).length
// orders_number.innerHTML=orders_number_calc