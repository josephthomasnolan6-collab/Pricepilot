```javascript
/* =========================================================
   PRICEPILOT — CATALOGUE + PRODUCT GALLERY ENGINE
   ========================================================= */

const products = [

/* =========================
   APPLE PHONES
========================= */

{
    id: 1,
    brand: "Apple",
    name: "iPhone 17 Pro Max",
    category: "Phones",
    price: 1399,
    oldPrice: 1499,
    rating: 4.9,
    reviews: 842,
    dealScore: 96,
    images: [
        "images/iphone-17-pro-max-1.jpg",
        "images/iphone-17-pro-max-2.jpg",
        "images/iphone-17-pro-max-3.jpg",
        "images/iphone-17-pro-max-4.jpg"
    ],
    retailers: [
        ["Amazon", 1399],
        ["Currys", 1429],
        ["Apple", 1499],
        ["Very", 1449]
    ],
    history: [1499,1499,1459,1429,1429,1399]
},

{
    id: 2,
    brand: "Apple",
    name: "iPhone 17 Pro",
    category: "Phones",
    price: 1199,
    oldPrice: 1299,
    rating: 4.9,
    reviews: 731,
    dealScore: 95,
    images: [
        "images/iphone-17-pro-1.jpg",
        "images/iphone-17-pro-2.jpg",
        "images/iphone-17-pro-3.jpg",
        "images/iphone-17-pro-4.jpg"
    ],
    retailers: [
        ["Amazon",1199],
        ["Currys",1229],
        ["Apple",1299],
        ["Very",1249]
    ],
    history: [1299,1299,1249,1229,1199,1199]
},

{
    id: 3,
    brand: "Apple",
    name: "iPhone 17",
    category: "Phones",
    price: 899,
    oldPrice: 949,
    rating: 4.8,
    reviews: 1204,
    dealScore: 91,
    images: [
        "images/iphone-17-1.jpg",
        "images/iphone-17-2.jpg",
        "images/iphone-17-3.jpg",
        "images/iphone-17-4.jpg"
    ],
    retailers: [
        ["Amazon",899],
        ["Currys",929],
        ["Apple",949],
        ["Very",919]
    ],
    history: [949,949,929,929,899,899]
},

{
    id: 4,
    brand: "Apple",
    name: "iPhone 16",
    category: "Phones",
    price: 749,
    oldPrice: 799,
    rating: 4.8,
    reviews: 2118,
    dealScore: 90,
    images: [
        "images/iphone-16-1.jpg",
        "images/iphone-16-2.jpg",
        "images/iphone-16-3.jpg",
        "images/iphone-16-4.jpg"
    ],
    retailers: [
        ["Amazon",749],
        ["Currys",769],
        ["Apple",799],
        ["Very",759]
    ],
    history: [799,799,779,769,749,749]
},

/* =========================
   SAMSUNG PHONES
========================= */

{
    id: 5,
    brand: "Samsung",
    name: "Galaxy S26 Ultra",
    category: "Phones",
    price: 1199,
    oldPrice: 1349,
    rating: 4.9,
    reviews: 731,
    dealScore: 95,
    images: [
        "images/galaxy-s26-ultra-1.jpg",
        "images/galaxy-s26-ultra-2.jpg",
        "images/galaxy-s26-ultra-3.jpg",
        "images/galaxy-s26-ultra-4.jpg"
    ],
    retailers: [
        ["Amazon",1199],
        ["Currys",1249],
        ["Samsung",1349],
        ["Very",1219]
    ],
    history: [1349,1299,1299,1249,1219,1199]
},

{
    id: 6,
    brand: "Samsung",
    name: "Galaxy S26+",
    category: "Phones",
    price: 999,
    oldPrice: 1099,
    rating: 4.8,
    reviews: 512,
    dealScore: 92,
    images: [
        "images/galaxy-s26-plus-1.jpg",
        "images/galaxy-s26-plus-2.jpg",
        "images/galaxy-s26-plus-3.jpg",
        "images/galaxy-s26-plus-4.jpg"
    ],
    retailers: [
        ["Amazon",999],
        ["Currys",1029],
        ["Samsung",1099],
        ["Very",1049]
    ],
    history: [1099,1099,1049,1029,999,999]
},

{
    id: 7,
    brand: "Samsung",
    name: "Galaxy S26",
    category: "Phones",
    price: 899,
    oldPrice: 999,
    rating: 4.8,
    reviews: 621,
    dealScore: 93,
    images: [
        "images/galaxy-s26-1.jpg",
        "images/galaxy-s26-2.jpg",
        "images/galaxy-s26-3.jpg",
        "images/galaxy-s26-4.jpg"
    ],
    retailers: [
        ["Amazon",899],
        ["Currys",929],
        ["Samsung",999],
        ["Very",919]
    ],
    history: [999,999,969,949,919,899]
},

/* =========================
   GOOGLE PHONES
========================= */

{
    id: 8,
    brand: "Google",
    name: "Pixel 10 Pro XL",
    category: "Phones",
    price: 999,
    oldPrice: 1099,
    rating: 4.7,
    reviews: 512,
    dealScore: 93,
    images: [
        "images/pixel-10-pro-xl-1.jpg",
        "images/pixel-10-pro-xl-2.jpg",
        "images/pixel-10-pro-xl-3.jpg",
        "images/pixel-10-pro-xl-4.jpg"
    ],
    retailers: [
        ["Amazon",999],
        ["Currys",1029],
        ["Google",1099],
        ["Very",1049]
    ],
    history: [1099,1099,1049,1029,999,999]
},

{
    id: 9,
    brand: "Google",
    name: "Pixel 10 Pro",
    category: "Phones",
    price: 899,
    oldPrice: 999,
    rating: 4.7,
    reviews: 431,
    dealScore: 91,
    images: [
        "images/pixel-10-pro-1.jpg",
        "images/pixel-10-pro-2.jpg",
        "images/pixel-10-pro-3.jpg",
        "images/pixel-10-pro-4.jpg"
    ],
    retailers: [
        ["Amazon",899],
        ["Currys",929],
        ["Google",999],
        ["Very",949]
    ],
    history: [999,979,949,929,899,899]
},

/* =========================
   MACBOOKS
========================= */

{
    id: 10,
    brand: "Apple",
    name: "MacBook Air M4",
    category: "Laptops",
    price: 999,
    oldPrice: 1099,
    rating: 4.9,
    reviews: 923,
    dealScore: 94,
    images: [
        "images/macbook-air-m4-1.jpg",
        "images/macbook-air-m4-2.jpg",
        "images/macbook-air-m4-3.jpg",
        "images/macbook-air-m4-4.jpg"
    ],
    retailers: [
        ["Amazon",999],
        ["Currys",1049],
        ["Apple",1099],
        ["Very",1029]
    ],
    history: [1099,1099,1049,1049,999,999]
},

{
    id: 11,
    brand: "Apple",
    name: "MacBook Pro 14 M4 Pro",
    category: "Laptops",
    price: 1849,
    oldPrice: 1999,
    rating: 4.9,
    reviews: 481,
    dealScore: 92,
    images: [
        "images/macbook-pro-14-m4-1.jpg",
        "images/macbook-pro-14-m4-2.jpg",
        "images/macbook-pro-14-m4-3.jpg",
        "images/macbook-pro-14-m4-4.jpg"
    ],
    retailers: [
        ["Amazon",1849],
        ["Currys",1899],
        ["Apple",1999],
        ["Very",1949]
    ],
    history: [1999,1949,1949,1899,1899,1849]
},

/* =========================
   DELL
========================= */

{
    id: 12,
    brand: "Dell",
    name: "Dell XPS 14",
    category: "Laptops",
    price: 1499,
    oldPrice: 1699,
    rating: 4.6,
    reviews: 318,
    dealScore: 89,
    images: [
        "images/dell-xps-14-1.jpg",
        "images/dell-xps-14-2.jpg",
        "images/dell-xps-14-3.jpg",
        "images/dell-xps-14-4.jpg"
    ],
    retailers: [
        ["Amazon",1499],
        ["Dell",1599],
        ["Currys",1549],
        ["Very",1599]
    ],
    history: [1699,1649,1599,1549,1499,1499]
},

{
    id: 13,
    brand: "Dell",
    name: "Dell Inspiron 16",
    category: "Laptops",
    price: 799,
    oldPrice: 899,
    rating: 4.5,
    reviews: 412,
    dealScore: 88,
    images: [
        "images/dell-inspiron-16-1.jpg",
        "images/dell-inspiron-16-2.jpg",
        "images/dell-inspiron-16-3.jpg",
        "images/dell-inspiron-16-4.jpg"
    ],
    retailers: [
        ["Amazon",799],
        ["Dell",849],
        ["Currys",829],
        ["Very",849]
    ],
    history: [899,899,849,829,799,799]
},

/* =========================
   AIRPODS
========================= */

{
    id: 14,
    brand: "Apple",
    name: "AirPods Pro 3",
    category: "Audio",
    price: 229,
    oldPrice: 249,
    rating: 4.8,
    reviews: 1842,
    dealScore: 95,
    images: [
        "images/airpods-pro-3-1.jpg",
        "images/airpods-pro-3-2.jpg",
        "images/airpods-pro-3-3.jpg",
        "images/airpods-pro-3-4.jpg"
    ],
    retailers: [
        ["Amazon",229],
        ["Currys",239],
        ["Apple",249],
        ["Very",235]
    ],
    history: [249,249,239,239,229,229]
},

{
    id: 15,
    brand: "Apple",
    name: "AirPods 4",
    category: "Audio",
    price: 129,
    oldPrice: 149,
    rating: 4.7,
    reviews: 1231,
    dealScore: 90,
    images: [
        "images/airpods-4-1.jpg",
        "images/airpods-4-2.jpg",
        "images/airpods-4-3.jpg",
        "images/airpods-4-4.jpg"
    ],
    retailers: [
        ["Amazon",129],
        ["Currys",139],
        ["Apple",149],
        ["Very",135]
    ],
    history: [149,149,139,139,129,129]
},

/* =========================
   SAMSUNG AUDIO
========================= */

{
    id: 16,
    brand: "Samsung",
    name: "Galaxy Buds 4 Pro",
    category: "Audio",
    price: 179,
    oldPrice: 229,
    rating: 4.6,
    reviews: 631,
    dealScore: 94,
    images: [
        "images/galaxy-buds-4-pro-1.jpg",
        "images/galaxy-buds-4-pro-2.jpg",
        "images/galaxy-buds-4-pro-3.jpg",
        "images/galaxy-buds-4-pro-4.jpg"
    ],
    retailers: [
        ["Amazon",179],
        ["Currys",189],
        ["Samsung",229],
        ["Very",199]
    ],
    history: [229,219,199,189,179,179]
},

/* =========================
   SONY AUDIO
========================= */

{
    id: 17,
    brand: "Sony",
    name: "Sony WH-1000XM6",
    category: "Audio",
    price: 349,
    oldPrice: 399,
    rating: 4.8,
    reviews: 921,
    dealScore: 90,
    images: [
        "images/sony-wh1000xm6-1.jpg",
        "images/sony-wh1000xm6-2.jpg",
        "images/sony-wh1000xm6-3.jpg",
        "images/sony-wh1000xm6-4.jpg"
    ],
    retailers: [
        ["Amazon",349],
        ["Currys",369],
        ["Sony",399],
        ["Very",359]
    ],
    history: [399,399,379,369,359,349]
},

/* =========================
   IPADS
========================= */

{
    id: 18,
    brand: "Apple",
    name: "iPad Air M3",
    category: "Tablets",
    price: 649,
    oldPrice: 699,
    rating: 4.8,
    reviews: 723,
    dealScore: 91,
    images: [
        "images/ipad-air-m3-1.jpg",
        "images/ipad-air-m3-2.jpg",
        "images/ipad-air-m3-3.jpg",
        "images/ipad-air-m3-4.jpg"
    ],
    retailers: [
        ["Amazon",649],
        ["Currys",669],
        ["Apple",699],
        ["Very",679]
    ],
    history: [699,699,679,679,649,649]
},

{
    id: 19,
    brand: "Apple",
    name: "iPad Pro M4",
    category: "Tablets",
    price: 999,
    oldPrice: 1099,
    rating: 4.9,
    reviews: 521,
    dealScore: 92,
    images: [
        "images/ipad-pro-m4-1.jpg",
        "images/ipad-pro-m4-2.jpg",
        "images/ipad-pro-m4-3.jpg",
        "images/ipad-pro-m4-4.jpg"
    ],
    retailers: [
        ["Amazon
```
