
let cart;
let invoiceSubTotalElement = document.querySelector(".sub-total");
let invoiceDiscountElement = document.querySelector(".discount");
let shippingElment=document.querySelector(".shipping");
let totalElement = document.querySelector(".total");
let subTotal = 0,shipping,discount,total;
function fillmycart() {
  let items_box = document.querySelector(".cart .items");
  cart = getmycartfromlocal();
  if (cart) {
    cart.forEach((element) => {
      items_box.innerHTML += `   
      <div class="item d-flex justify-content-between align-items-center p-3 mb-3 shadow-sm">
       <div class="d-flex gap-3">
         <div class="image">
           <img class="w-100 h-100" src="${element.image}" alt="product-img">
         </div>
         <div class="info">
           <div class="name fw-bold mb-2">${element.name}</div>
           <div class="price fs-5">
             <span class="me-2">${element.price}</span>LE
           </div>
         </div>
       </div>
       <div class="quantity-controls d-flex rounded-2 overflow-hidden">
         <button class="decrese p-1 px-4 border-0 fw-bold text-white fs-5">-</button>
         <input class="quantity text-center p-2 border border-1" type="number" value="${element.quantity}">
         <button class="increse p-1 px-4 border-0 fw-bold text-white fs-5">+</button>
       </div>
     </div>
     `;
     handleInvoice()
    });
  } else {
    items_box.innerHTML = `<div  class="h-100 d-flex align-items-center justify-content-center border border-1">
            <h1 class=" ">Your Cart is Empty</h1>
          </div>`;
  }
}
fillmycart();
// handle quantity changes in my cart
let increase_buttons =
  document.querySelectorAll(".quantity-controls .increse") ;
let decrease_buttons =
  document.querySelectorAll(".quantity-controls .decrese") ;
let quantity_inputs =
  document.querySelectorAll(".quantity-controls .quantity") ;
  // increase quantity button
increase_buttons?.forEach((button, index) => {
  controlQuantityButtonclick(button, index,"click", "++");
});
// decrease quantity button
decrease_buttons?.forEach((button, index) => {
  controlQuantityButtonclick(button, index,"click", "--");
});
// quantity input
quantity_inputs?.forEach((input, index) => {
  // do cart=[] when it empty use getmycartfromlocal
 controlQuantityButtonclick(input, index,"input", null);
});
// remove item from my cart
let remove_buttons = document.querySelectorAll(".remove");
remove_buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    cart = getmycartfromlocal();
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});
function getmycartfromlocal() {
  if (localStorage.getItem("cart") == null) {
    return null;
  }
  return JSON.parse(localStorage.getItem("cart"));
}
function updateQuantity(element_index, updated_quantity) {
  cart = getmycartfromlocal();
  cart[element_index].quantity = updated_quantity;
  localStorage.setItem("cart", JSON.stringify(cart));
  handleInvoice()
}
// control quantity buttons
function controlQuantityButtonclick(element, index,event, opertion) {
  element.addEventListener(event, () => {
    let quantity = parseInt(quantity_inputs[index].value);
    if (opertion == "--" && quantity > 1) {
      quantity_inputs[index].value = --quantity;
    } else if (opertion == "++") {
      quantity_inputs[index].value = ++quantity;
    }
    // handle quantity input value must be greater than 0
    if(parseInt(element.value)<1){
   quantity= element.value=1
    }
    updateQuantity(index, quantity);

  });
}
// calc total price
function handleInvoice() {
subTotal=0
  cart?.forEach((product) => {
    subTotal += product.price * (product.quantity||1);
   
  });
  discount = subTotal * 0.05;
  shipping = Math.max( subTotal * 0.2,30);
  total = subTotal - discount + shipping

  invoiceSubTotalElement.innerHTML = subTotal.toFixed(2)
  invoiceDiscountElement.innerHTML = discount.toFixed(2)
  shippingElment.innerHTML = shipping.toFixed(2)
  totalElement.innerHTML = total.toFixed(2)
}