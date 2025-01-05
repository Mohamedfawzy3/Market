let items_box = document.querySelector(".cart .items");
let cart;
function fillmycart() {
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

      console.log("lll");
    });
  } else {
    items_box.innerHTML = `<div  class="h-100 d-flex align-items-center justify-content-center border border-1">
            <h1 class=" ">Your Cart is Empty</h1>
          </div>`;
  }
}
function getmycartfromlocal() {
  if (localStorage.getItem("cart") == null) {
    return null;
  }
  return JSON.parse(localStorage.getItem("cart"));
}

fillmycart();
// handle quantity changes in my cart
let increase_buttons =
  document.querySelectorAll(".quantity-controls .increse") || null;
let decrease_buttons =
  document.querySelectorAll(".quantity-controls .decrese") || null;
let quantity_inputs =
  document.querySelectorAll(".quantity-controls .quantity") || null;

increase_buttons?.forEach((button, index) => {
  button.addEventListener("click", () => {
    let quantity = parseInt(quantity_inputs[index].value);
    quantity_inputs[index].value = quantity + 1;
  });
});
decrease_buttons?.forEach((button, index) => {
  button.addEventListener("click", () => {
    let quantity = parseInt(quantity_inputs[index].value);
    if (quantity > 1) {
      quantity_inputs[index].value = quantity - 1;
    }
  });
});
quantity_inputs?.forEach((input, index) => {
  // do cart=[] when it empty use getmycartfromlocal
  input.addEventListener("change", () => {
    console.log("inout", input);
    let quantity = parseInt(input.value);
    cart = getmycartfromlocal();
    cart[index].quantity = quantity;
    console.log("index", index);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
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
