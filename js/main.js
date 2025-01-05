// =>>>>>>>>>>slider
let sliderImages = [
  "./images/slider1.jpg",
  "./images/slider2.jpg",
  "./images/slider3.jpg",
  "./images/slider4.png",
];
let nextSliderBtn = document.querySelector(".slider .next");
let previousSliderBtn = document.querySelector(".slider .previous");
let sliderImg = document.querySelector(".slider img");
// control slides
sliderImg.src = sliderImages[0];
let index = 0;
let sliderIntervel=setInterval(()=>{
   getNext()
},5000)
nextSliderBtn.onclick = () => {
  getNext();
};
previousSliderBtn.onclick = () => {
  getPrevious();
};
function getNext() {
  index == sliderImages.length - 1 ? (index = 0) : index++;
  sliderImg.src = sliderImages[index];
}
function getPrevious() {
  index == 0 ? (index = sliderImages.length - 1) : index--;
  sliderImg.src = sliderImages[index];
}
// wish list
function wishList(el){
  el.classList.toggle("animate")
  el.classList.toggle("inactive")
  el.classList.toggle("active")
}
 const products = [
  {
    id: 1,
    name: "Carton of Elano Water 1.5L, Pack of 12",
    category: "drinks",
    price: 20,
    mutedPrice: 30, // Optional
    rating: 4.9,
    inStock: 200,
    image: './images/products/0dbc84f20c1c6673ed56eb6a46b4e869.webp'
  },
  {
    id: 2,
    name: "Bapia Premium Moisturizing Tissues, Multi-Pack, 3 Layers",
    category: "household",
    price: 15,
    mutedPrice: 20, // Optional
    rating: 4.9,
    inStock: 150,
    image: './images/products/b12ae351b4836e8644abd2c361f3d3fa.webp'
  },
  {
    id: 3,
    name: "Blanchita Single Ramses Leather",
    category: "fashion",
    price: 100,
    mutedPrice: 120, // Optional
    rating: 4.9,
    inStock: 50,
    image: './images/products/بلانشيطة-مفرد-رمسيس-جلد149.webp'
  },
  {
    id: 4,
    name: "Abdel Maaboud Yemeni Coffee with Cardamom Light Roast 200g",
    category: "drinks",
    price: 40,
    mutedPrice: 50, // Optional
    rating: 4.9,
    inStock: 100,
    image: './images/products/بن-عبد-المعبود-اليمني-محوج-فاتح-200جم361.webp'
  },
  {
    id: 5,
    name: "Colored Thumbtacks",
    category: "stationery",
    price: 10,
    mutedPrice: 15, // Optional
    rating: 4.9,
    inStock: 300,
    image: './images/products/دبوس-منظور-ملون-مادن160.webp'
  },
  {
    id: 6,
    name: "El-Dohai Sugar 1kg",
    category: "grocery",
    price: 15,
    mutedPrice: 20, // Optional
    rating: 4.9,
    inStock: 400,
    image: './images/products/سكر-الضحي-1-كحم61.webp'
  },
  {
    id: 7,
    name: "Single Pack of Nescafe 3-in-1, Pack of 24 Sachets",
    category: "drinks",
    price: 60,
    mutedPrice: 75, // Optional
    rating: 4.9,
    inStock: 250,
    image: './images/products/عبوة-واحدة-من-نسكافيه-3-في-1،-عبوة-24-كيس302.webp'
  },
  {
    id: 8,
    name: "Nescafe Gold Instant Coffee 200g Jar",
    category: "drinks",
    price: 90,
    mutedPrice: 100, // Optional
    rating: 4.9,
    inStock: 150,
    image: './images/products/قهوة-سريعة-التحضير-من-نسكافيه-جولد-200-جم،-برطمان303.webp'
  },
  {
    id: 9,
    name: "Carton of Shemex Printing Paper 5 Packs 75g",
    category: "stationery",
    price: 70,
    mutedPrice: 85, // Optional
    rating: 4.9,
    inStock: 180,
    image: './images/products/كرتونة-ورق-طباعة-شيمكس-5-عبوات-75جم323.webp'
  },
  {
    id: 10,
    name: "Carton of Maram Printing Paper 5 Packs 70g",
    category: "stationery",
    price: 65,
    mutedPrice: 80, // Optional
    rating: 4.9,
    inStock: 200,
    image: './images/products/كرتونة-ورق-طباعه-مرام-5-عبوات-70-جم322.webp'
  },
  {
    id: 11,
    name: "My Choice Dust Bucket",
    category: "household",
    price: 30,
    mutedPrice: 40, // Optional
    rating: 4.9,
    inStock: 120,
    image: './images/products/ماي-اتشويس-دلو-غبار107.webp'
  },
  {
    id: 12,
    name: "My Choice Rubber Mop 55cm",
    category: "household",
    price: 25,
    mutedPrice: 35, // Optional
    rating: 4.9,
    inStock: 140,
    image: './images/products/ماي-تشويس-ممسحة-مطاطية-55-سم108.webp'
  },
  {
    id: 13,
    name: "Bapia Toilet Paper 3 Layers",
    category: "household",
    price: 50,
    mutedPrice: 60, // Optional
    rating: 4.9,
    inStock: 220,
    image: './images/products/مناديل-بابيا-ورق-تواليت-3-طبقات-12...253.webp'
  },
  {
    id: 14,
    name: "Fine Fluffy Facial Tissue 550 Sheets, 3 Layers",
    category: "household",
    price: 35,
    mutedPrice: 45, // Optional
    rating: 4.9,
    inStock: 160,
    image: './images/products/منديل-للوجه-فلافي-من-فاين،-550-منديل--3-طبقات236.jpg.webp'
  },
  {
    id: 15,
    name: "Maxel Magic Glass and Window Cleaner with Herbs Scent 700ml",
    category: "cleaning",
    price: 20,
    mutedPrice: 25, // Optional
    rating: 4.9,
    inStock: 180,
    image: './images/products/منظف-الزجاج-والنوافذ-ماكسيل-ماجيك-برائحة-الأعشاب،-700-مل221.jpg.webp'
  },
  {
    id: 16,
    name: "Beura Toilet Bowl Cleaner 650ml",
    category: "cleaning",
    price: 22,
    mutedPrice: 28, // Optional
    rating: 4.9,
    inStock: 150,
    image: './images/products/منظف-قاعدة-الحمام-من-بيورا،-650-مل227.webp'
  },
  {
    id: 17,
    name: "Nescafe Gold 3-in-1 Pack of 12 Sachets",
    category: "drinks",
    price: 45,
    mutedPrice: 55, // Optional
    rating: 4.9,
    inStock: 190,
    image: './images/products/نسكافيه-جولد-3-في-1-عبوة-من-12-كيس306.webp'
  }
  // Continue adding products following this structure...
];


// ========= add products to the DOM==============
const productsContainer = document.querySelector(".products");
products.forEach((product) => {
 let products_container = document.querySelector(".all-products .products-container");
let product_card=`
  <div id="${product.id}" class="card col-12 col-sm-6 col-md-4 col-lg-3  border-0 shadow-sm bg-light-subtle " >
       <div class="card-img-box p-2 m-2 bg-light">
       <a href="#" onclick="go_to_product_details(this)" > <img src="${product.image}" class="card-img-top" alt="..."></a>
       </div>
        <div class="card-body pt-1 ">
         <div class="d-flex justify-content-between">
          <button class="button border-0 btn-wishlist d-flex justify-content-center align-items-center rounded shadow-sm " onclick="wishList(this)" aria-label="Add to wishlist">
            <div class="btn__effect">
                <svg class="heart-stroke icon-svg icon-svg--size-4 icon-svg--color-silver" viewBox="20 18 29 28" aria-hidden="true" focusable="false">
                    <path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z">
                    </path>
                </svg>
                <svg class="heart-full icon-svg icon-svg--size-4 icon-svg--color-blue" viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false">
                    <path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z">
                    </path>
                </svg>
                <svg class="broken-heart" xmlns="http://www.w3.org/2000/svg" width="48" height="16" viewBox="5.707 17 48 16">
                    <g fill="#A98F43">
                        <path class="broken-heart--left" d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z"></path>
                        <path class="broken-heart--right" d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z"></path>
                    </g>
                    <path class="broken-heart--crack" fill="none" stroke="#FFF" stroke-miterlimit="10" d="M29.865 18.205v14.573"></path>
                </svg>
                <div class="effect-group">
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                    <span class="effect"></span>
                </div>
            </div>
          
        </button>
        <div class="badge-rate rounded-2 bg-white shadow-sm p-1">
          <i class="fa-solid fa-star star text-warning"></i>
          
          <span class="ms-2">${product.rating}</span>
        </div>
         </div>
          
          <p class="product-name card-text my-2 lh-sm ">${product.name}</p>
          <p class="card-text mb-3"><span class="price me-2">${product.price}</span> LE ${product.mutedPrice ? `<span class="text-muted text-decoration-line-through ms-3">${product.mutedPrice}</span>` : ""}</p>
          <div class="d-flex addToCart gap-2">
            <input class="d-inline-block px-2  rounded-2 quantity" type="number" step="1" min="1" value="1">
            <button class="w-100 btn btn-outline-primary" onclick="AddToCart(this)">Add to cart</button>
          </div>
        </div>
      </div>`
      products_container.innerHTML+=product_card
});
// add to cart function

function AddToCart(el){
  let quantity=el.closest(".card").querySelector(".addToCart .quantity")
  let product_id=el.closest(".card").id
  let product=products.find((product)=>product.id==product_id)
quantity=parseInt(quantity.value)
  let cart=JSON.parse(localStorage.getItem("cart"))||[]
  if(cart.find((product)=>product.id==product_id)){
    cart.find((product)=>product.id==product_id).quantity+=quantity
    localStorage.setItem("cart",JSON.stringify(cart))
    el.disabled=true
    el.innerHTML="Added"
    return
  }
  cart.push({...product,quantity})
  localStorage.setItem("cart",JSON.stringify(cart))
  console.log("added")
  el.disabled=true
  el.innerHTML="Added"
}
// mange the click on product
 let product_id
function go_to_product_details(el){

   product_id=el.closest(".card").id
  console.log(product_id);
  localStorage.setItem("product_id",product_id)
window.location.href="product.html"
}
// exports
