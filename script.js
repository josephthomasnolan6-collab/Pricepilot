/* =========================================================
   PRICEPILOT — COMPLETE PRODUCT + INTERACTION ENGINE
   ========================================================= */

/* =========================
   PRODUCT CATALOGUE
========================= */

const products = [

    /* APPLE PHONES */

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
        emoji: "📱",
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
        history: [1499, 1499, 1459, 1429, 1429, 1399]
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
        emoji: "📱",
        images: [
            "images/iphone-17-pro-1.jpg",
            "images/iphone-17-pro-2.jpg",
            "images/iphone-17-pro-3.jpg",
            "images/iphone-17-pro-4.jpg"
        ],
        retailers: [
            ["Amazon", 1199],
            ["Currys", 1229],
            ["Apple", 1299],
            ["Very", 1249]
        ],
        history: [1299, 1299, 1249, 1229, 1199, 1199]
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
        emoji: "📱",
        images: [
            "images/iphone-17-1.jpg",
            "images/iphone-17-2.jpg",
            "images/iphone-17-3.jpg",
            "images/iphone-17-4.jpg"
        ],
        retailers: [
            ["Amazon", 899],
            ["Currys", 929],
            ["Apple", 949],
            ["Very", 919]
        ],
        history: [949, 949, 929, 929, 899, 899]
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
        emoji: "📱",
        images: [
            "images/iphone-16-1.jpg",
            "images/iphone-16-2.jpg",
            "images/iphone-16-3.jpg",
            "images/iphone-16-4.jpg"
        ],
        retailers: [
            ["Amazon", 749],
            ["Currys", 769],
            ["Apple", 799],
            ["Very", 759]
        ],
        history: [799, 799, 779, 769, 749, 749]
    },

    /* SAMSUNG PHONES */

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
        emoji: "📱",
        images: [
            "images/galaxy-s26-ultra-1.jpg",
            "images/galaxy-s26-ultra-2.jpg",
            "images/galaxy-s26-ultra-3.jpg",
            "images/galaxy-s26-ultra-4.jpg"
        ],
        retailers: [
            ["Amazon", 1199],
            ["Currys", 1249],
            ["Samsung", 1349],
            ["Very", 1219]
        ],
        history: [1349, 1299, 1299, 1249, 1219, 1199]
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
        emoji: "📱",
        images: [
            "images/galaxy-s26-plus-1.jpg",
            "images/galaxy-s26-plus-2.jpg",
            "images/galaxy-s26-plus-3.jpg",
            "images/galaxy-s26-plus-4.jpg"
        ],
        retailers: [
            ["Amazon", 999],
            ["Currys", 1029],
            ["Samsung", 1099],
            ["Very", 1049]
        ],
        history: [1099, 1099, 1049, 1029, 999, 999]
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
        emoji: "📱",
        images: [
            "images/galaxy-s26-1.jpg",
            "images/galaxy-s26-2.jpg",
            "images/galaxy-s26-3.jpg",
            "images/galaxy-s26-4.jpg"
        ],
        retailers: [
            ["Amazon", 899],
            ["Currys", 929],
            ["Samsung", 999],
            ["Very", 919]
        ],
        history: [999, 999, 969, 949, 919, 899]
    },

    /* GOOGLE PHONES */

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
        emoji: "📱",
        images: [
            "images/pixel-10-pro-xl-1.jpg",
            "images/pixel-10-pro-xl-2.jpg",
            "images/pixel-10-pro-xl-3.jpg",
            "images/pixel-10-pro-xl-4.jpg"
        ],
        retailers: [
            ["Amazon", 999],
            ["Currys", 1029],
            ["Google", 1099],
            ["Very", 1049]
        ],
        history: [1099, 1099, 1049, 1029, 999, 999]
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
        dealScore: 
