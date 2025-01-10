import AddToCart from "./addToCart.js";
import { products } from "./products_data.js";

// wish list
function wishList(el) {
  el.classList.toggle("animate");
  el.classList.toggle("inactive");
  el.classList.toggle("active");
}
//   Handling product details
let product_id = localStorage.getItem("product_id");
let product = products.find((product) => product.id == product_id);
function get_product_details() {
  document.querySelector(".product").id = product.id;
  document.querySelector(".product-in-details .product-name").textContent =
    product.name;
  document.querySelector(".product-in-details .price").textContent =
    product.price;
  document.querySelector(".product-in-details .muted-price").textContent =
    product.mutedPrice ? product.mutedPrice : "";
  document.querySelector(".product-in-details .rate").textContent =
    product.rating;
  document.querySelector(".product-in-details .main-image img").src =
    product.image;
}
get_product_details();
document.querySelector(".product .add_btn").addEventListener("click", (el) => {
  AddToCart(el.target);
});
