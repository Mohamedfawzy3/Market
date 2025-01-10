import { products } from "./products_data.js";
export default function AddToCart(el) {
    let quantity = el.closest(".product").querySelector(".addToCart .quantity");
    let product_id = el.closest(".product").id;
    let product = products.find((product) => product.id == product_id);
    console.log(el.closest(".product"))
    quantity = parseInt(quantity.value);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.find((product) => product.id == product_id)) {
      cart.find((product) => product.id == product_id).quantity += quantity;
    }
    else{
   cart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    el.disabled = true;
    el.innerHTML = "Added";
    // handle_orders_number()
  }