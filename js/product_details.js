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
  // wish list
function wishList(el){
    el.classList.toggle("animate")
    el.classList.toggle("inactive")
    el.classList.toggle("active")
  }
//   Handling product details
let product_id = localStorage.getItem("product_id");
let product = products.find((product) => product.id == product_id);
function get_product_details() {

    document.querySelector(".product-in-details .product-name").textContent = product.name;
    document.querySelector(".product-in-details .price").textContent = product.price;
    document.querySelector(".product-in-details .muted-price").textContent = product.mutedPrice?product.mutedPrice:"";
    document.querySelector(".product-in-details .rate").textContent = product.rating;
    
    document.querySelector(".product-in-details .main-image img").src = product.image;
}
get_product_details()