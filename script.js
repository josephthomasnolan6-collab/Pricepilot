/* =========================================================
   PRICEPILOT — COMPLETE PRODUCT + INTERACTION ENGINE
   ========================================================= */

/* =========================
   PRODUCT CATALOGUE
   ========================= */

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
        dealScore: 91,
        emoji: "📱",
        images: [
            "images/pixel-10-pro-1.jpg",
            "images/pixel-10-pro-2.jpg",
            "images/pixel-10-pro-3.jpg",
            "images/pixel-10-pro-4.jpg"
        ],
        retailers: [
            ["Amazon", 899],
            ["Currys", 929],
            ["Google", 999],
            ["Very", 949]
        ],
        history: [999, 999, 969, 949, 919, 899]
    },

    {
        id: 10,
        brand: "Google",
        name: "Pixel 10",
        category: "Phones",
        price: 699,
        oldPrice: 799,
        rating: 4.6,
        reviews: 318,
        dealScore: 89,
        emoji: "📱",
        images: [
            "images/pixel-10-1.jpg",
            "images/pixel-10-2.jpg",
            "images/pixel-10-3.jpg",
            "images/pixel-10-4.jpg"
        ],
        retailers: [
            ["Amazon", 699],
            ["Currys", 729],
            ["Google", 799],
            ["Very", 749]
        ],
        history: [799, 799, 769, 749, 729, 699]
    },

    /* =========================
       APPLE LAPTOPS
       ========================= */

    {
        id: 11,
        brand: "Apple",
        name: "MacBook Pro 16-inch",
        category: "Laptops",
        price: 2499,
        oldPrice: 2699,
        rating: 4.9,
        reviews: 642,
        dealScore: 94,
        emoji: "💻",
        images: [
            "images/macbook-pro-16-1.jpg",
            "images/macbook-pro-16-2.jpg",
            "images/macbook-pro-16-3.jpg",
            "images/macbook-pro-16-4.jpg"
        ],
        retailers: [
            ["Amazon", 2499],
            ["Currys", 2549],
            ["Apple", 2699],
            ["Very", 2599]
        ],
        history: [2699, 2699, 2599, 2549, 2499, 2499]
    },

    {
        id: 12,
        brand: "Apple",
        name: "MacBook Air 15-inch",
        category: "Laptops",
        price: 1299,
        oldPrice: 1499,
        rating: 4.8,
        reviews: 824,
        dealScore: 95,
        emoji: "💻",
        images: [
            "images/macbook-air-15-1.jpg",
            "images/macbook-air-15-2.jpg",
            "images/macbook-air-15-3.jpg",
            "images/macbook-air-15-4.jpg"
        ],
        retailers: [
            ["Amazon", 1299],
            ["Currys", 1349],
            ["Apple", 1499],
            ["Very", 1399]
        ],
        history: [1499, 1499, 1399, 1349, 1299, 1299]
    },

    {
        id: 13,
        brand: "Apple",
        name: "MacBook Air 13-inch",
        category: "Laptops",
        price: 999,
        oldPrice: 1099,
        rating: 4.8,
        reviews: 1102,
        dealScore: 93,
        emoji: "💻",
        images: [
            "images/macbook-air-13-1.jpg",
            "images/macbook-air-13-2.jpg",
            "images/macbook-air-13-3.jpg",
            "images/macbook-air-13-4.jpg"
        ],
        retailers: [
            ["Amazon", 999],
            ["Currys", 1029],
            ["Apple", 1099],
            ["Very", 1049]
        ],
        history: [1099, 1099, 1049, 1029, 999, 999]
    },

    /* =========================
       SAMSUNG TABLETS
       ========================= */

    {
        id: 14,
        brand: "Samsung",
        name: "Galaxy Tab S10 Ultra",
        category: "Tablets",
        price: 1099,
        oldPrice: 1199,
        rating: 4.8,
        reviews: 384,
        dealScore: 92,
        emoji: "📲",
        images: [
            "images/galaxy-tab-s10-ultra-1.jpg",
            "images/galaxy-tab-s10-ultra-2.jpg",
            "images/galaxy-tab-s10-ultra-3.jpg",
            "images/galaxy-tab-s10-ultra-4.jpg"
        ],
        retailers: [
            ["Amazon", 1099],
            ["Currys", 1149],
            ["Samsung", 1199],
            ["Very", 1129]
        ],
        history: [1199, 1199, 1149, 1129, 1099, 1099]
    },

    {
        id: 15,
        brand: "Samsung",
        name: "Galaxy Tab S10+",
        category: "Tablets",
        price: 899,
        oldPrice: 999,
        rating: 4.7,
        reviews: 271,
        dealScore: 90,
        emoji: "📲",
        images: [
            "images/galaxy-tab-s10-plus-1.jpg",
            "images/galaxy-tab-s10-plus-2.jpg",
            "images/galaxy-tab-s10-plus-3.jpg",
            "images/galaxy-tab-s10-plus-4.jpg"
        ],
        retailers: [
            ["Amazon", 899],
            ["Currys", 929],
            ["Samsung", 999],
            ["Very", 949]
        ],
        history: [999, 999, 969, 949, 929, 899]
    },

    /* =========================
       APPLE AUDIO
       ========================= */

    {
        id: 16,
        brand: "Apple",
        name: "AirPods Pro",
        category: "Audio",
        price: 229,
        oldPrice: 249,
        rating: 4.8,
        reviews: 3412,
        dealScore: 94,
        emoji: "🎧",
        images: [
            "images/airpods-pro-1.jpg",
            "images/airpods-pro-2.jpg",
            "images/airpods-pro-3.jpg",
            "images/airpods-pro-4.jpg"
        ],
        retailers: [
            ["Amazon", 229],
            ["Currys", 239],
            ["Apple", 249],
            ["Very", 239]
        ],
        history: [249, 249, 239, 239, 229, 229]
    },

    {
        id: 17,
        brand: "Apple",
        name: "AirPods 4",
        category: "Audio",
        price: 129,
        oldPrice: 139,
        rating: 4.7,
        reviews: 1832,
        dealScore: 91,
        emoji: "🎧",
        images: [
            "images/airpods-4-1.jpg",
            "images/airpods-4-2.jpg",
            "images/airpods-4-3.jpg",
            "images/airpods-4-4.jpg"
        ],
        retailers: [
            ["Amazon", 129],
            ["Currys", 134],
            ["Apple", 139],
            ["Very", 135]
        ],
        history: [139, 139, 135, 134, 129, 129]
    },

    /* =========================
       SAMSUNG AUDIO
       ========================= */

    {
        id: 18,
        brand: "Samsung",
        name: "Galaxy Buds 4 Pro",
        category: "Audio",
        price: 219,
        oldPrice: 249,
        rating: 4.6,
        reviews: 623,
        dealScore: 90,
        emoji: "🎧",
        images: [
            "images/galaxy-buds-4-pro-1.jpg",
            "images/galaxy-buds-4-pro-2.jpg",
            "images/galaxy-buds-4-pro-3.jpg",
            "images/galaxy-buds-4-pro-4.jpg"
        ],
        retailers: [
            ["Amazon", 219],
            ["Currys", 229],
            ["Samsung", 249],
            ["Very", 229]
        ],
        history: [249, 249, 239, 229, 219, 219]
    },

    /* =========================
       APPLE WATCH
       ========================= */

    {
        id: 19,
        brand: "Apple",
        name: "Apple Watch Series 11",
        category: "Watches",
        price: 399,
        oldPrice: 429,
        rating: 4.8,
        reviews: 912,
        dealScore: 92,
        emoji: "⌚",
        images: [
            "images/apple-watch-series-11-1.jpg",
            "images/apple-watch-series-11-2.jpg",
            "images/apple-watch-series-11-3.jpg",
            "images/apple-watch-series-11-4.jpg"
        ],
        retailers: [
            ["Amazon", 399],
            ["Currys", 409],
            ["Apple", 429],
            ["Very", 419]
        ],
        history: [429, 429, 419, 409, 399, 399]
    },

    /* =========================
       SAMSUNG WATCH
       ========================= */

    {
        id: 20,
        brand: "Samsung",
        name: "Galaxy Watch 8",
        category: "Watches",
        price: 349,
        oldPrice: 399,
        rating: 4.7,
        reviews: 486,
        dealScore: 91,
        emoji: "⌚",
        images: [
            "images/galaxy-watch-8-1.jpg",
            "images/galaxy-watch-8-2.jpg",
            "images/galaxy-watch-8-3.jpg",
            "images/galaxy-watch-8-4.jpg"
        ],
        retailers: [
            ["Amazon", 349],
            ["Currys", 369],
            ["Samsung", 399],
            ["Very", 359]
        ],
        history: [399, 399, 379, 369, 359, 349]
    },

    /* =========================
       GAMING
       ========================= */

    {
        id: 21,
        brand: "Microsoft",
        name: "Xbox Series X",
        category: "Gaming",
        price: 499,
        oldPrice: 549,
        rating: 4.8,
        reviews: 4210,
        dealScore: 90,
        emoji: "🎮",
        images: [
            "images/xbox-series-x-1.jpg",
            "images/xbox-series-x-2.jpg",
            "images/xbox-series-x-3.jpg",
            "images/xbox-series-x-4.jpg"
        ],
        retailers: [
            ["Amazon", 499],
            ["Currys", 509],
            ["Very", 519]
        ],
        history: [549, 549, 529, 519, 509, 499]
    },

    {
        id: 22,
        brand: "Sony",
        name: "PlayStation 5",
        category: "Gaming",
        price: 499,
        oldPrice: 549,
        rating: 4.9,
        reviews: 5230,
        dealScore: 92,
        emoji: "🎮",
        images: [
            "images/ps5-1.jpg",
            "images/ps5-2.jpg",
            "images/ps5-3.jpg",
            "images/ps5-4.jpg"
        ],
        retailers: [
            ["Amazon", 499],
            ["Currys", 509],
            ["Very", 519]
        ],
        history: [549, 549, 529, 519, 509, 499]
    }
];


/* =========================
   STATE
   ========================= */

let watchlist = JSON.parse(localStorage.getItem("pricepilotWatchlist") || "[]");

let currentSearch = "";

let currentProductId = null;


/* =========================
   START PRICEPILOT
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

    updateWatchCount();

    renderProducts();

    renderDeals();

    applySavedTheme();

});


/* =========================
   RENDER PRODUCTS
   ========================= */

function renderProducts() {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    const searchInput = document.getElementById("productSearch");

    const categoryFilter = document.getElementById("categoryFilter");

    const brandFilter = document.getElementById("brandFilter");

    const sortFilter = document.getElementById("sortFilter");


    const search = (
        searchInput?.value ||
        currentSearch ||
        ""
    ).toLowerCase().trim();


    const category = categoryFilter?.value || "all";

    const brand = brandFilter?.value || "all";

    const sort = sortFilter?.value || "deal";


    let filtered = products.filter(product => {

        const matchesSearch =
            !search ||
            product.name.toLowerCase().includes(search) ||
            product.brand.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search);

        const matchesCategory =
            category === "all" ||
            product.category === category;

        const matchesBrand =
            brand === "all" ||
            product.brand === brand;

        return matchesSearch && matchesCategory && matchesBrand;

    });


    if (sort === "priceLow") {

        filtered.sort((a, b) => a.price - b.price);

    }

    else if (sort === "priceHigh") {

        filtered.sort((a, b) => b.price - a.price);

    }

    else if (sort === "rating") {

        filtered.sort((a, b) => b.rating - a.rating);

    }

    else {

        filtered.sort((a, b) => b.dealScore - a.dealScore);

    }


    grid.innerHTML = filtered.length
        ? filtered.map(createProductCard).join("")
        : createEmptyState();


    const resultCount = document.getElementById("resultCount");

    if (resultCount) {

        resultCount.textContent =
            `${filtered.length} product${filtered.length === 1 ? "" : "s"}`;

    }


    const statProducts = document.getElementById("statProducts");

    if (statProducts) {

        statProducts.textContent = products.length;

    }

}


/* =========================
   PRODUCT CARD
   ========================= */

function createProductCard(product) {

    const isWatched = watchlist.includes(product.id);

    const savings = Math.max(
        0,
        product.oldPrice - product.price
    );


    const image = product.images?.[0];


    return `

        <article class="product-card">

            <div class="deal-score">
                ${product.dealScore}% deal
            </div>


            <button
                class="favourite ${isWatched ? "active" : ""}"
                onclick="toggleWatchlist(${product.id})"
                aria-label="Add to watchlist"
            >
                ${isWatched ? "♥" : "♡"}
            </button>


            <div class="product-image">

                ${
                    image
                    ? `
                        <img
                            src="${image}"
                            alt="${product.name}"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                        >
                    `
                    : ""
                }

                <span
                    class="product-emoji"
                    style="${image ? "display:none;" : ""}"
                >
                    ${product.emoji}
                </span>

            </div>


            <div class="product-body">

                <div class="product-brand">
                    ${product.brand}
                </div>


                <div class="product-name">
                    ${product.name}
                </div>


                <div class="rating">
                    ★ ${product.rating}
                    <span>(${product.reviews.toLocaleString()})</span>
                </div>


                <div class="price-row">

                    <div>

                        <div class="price">
                            €${product.price.toLocaleString()}
                        </div>

                        <span class="old-price">
                            €${product.oldPrice.toLocaleString()}
                        </span>

                    </div>


                    <div class="savings">
                        Save €${savings.toLocaleString()}
                    </div>

                </div>


                <div class="product-actions">

                    <button
                        class="compare-button"
                        onclick="showDetails(${product.id})"
                    >
                        Compare
                    </button>

                    <button
                        class="details-button"
                        onclick="showDetails(${product.id})"
                    >
                        Details
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================
   DEALS
   ========================= */

function renderDeals() {

    const grid = document.getElementById("dealGrid");

    if (!grid) return;


    const deals = [...products]
        .sort((a, b) => b.dealScore - a.dealScore)
        .slice(0, 8);


    grid.innerHTML =
        deals.map(createProductCard).join("");

}


/* =========================
   SEARCH
   ========================= */

function syncSearch(value) {

    currentSearch = value;

    const productSearch =
        document.getElementById("productSearch");

    if (productSearch) {

        productSearch.value = value;

    }

}


function performSearch() {

    const search =
        document.getElementById("heroSearch")?.value || "";

    currentSearch = search;

    const productSearch =
        document.getElementById("productSearch");

    if (productSearch) {

        productSearch.value = search;

    }


    renderProducts();

    document
        .getElementById("products")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


function quickSearch(search) {

    currentSearch = search;

    const hero =
        document.getElementById("heroSearch");

    const product =
        document.getElementById("productSearch");

    if (hero) hero.value = search;

    if (product) product.value = search;

    renderProducts();

    document
        .getElementById("products")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   CATEGORY FILTER
   ========================= */

function filterCategory(category) {

    const categoryFilter =
        document.getElementById("categoryFilter");

    if (categoryFilter) {

        categoryFilter.value = category;

    }


    renderProducts();


    document
        .getElementById("products")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   SHOW ALL PRODUCTS
   ========================= */

function showAllProducts() {

    currentSearch = "";

    const search =
        document.getElementById("productSearch");

    const category =
        document.getElementById("categoryFilter");

    const brand =
        document.getElementById("brandFilter");

    if (search) search.value = "";

    if (category) category.value = "all";

    if (brand) brand.value = "all";


    renderProducts();


    document
        .getElementById("products")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   CLEAR FILTERS
   ========================= */

function clearFilters() {

    currentSearch = "";

    const search =
        document.getElementById("productSearch");

    const category =
        document.getElementById("categoryFilter");

    const brand =
        document.getElementById("brandFilter");

    const sort =
        document.getElementById("sortFilter");

    if (search) search.value = "";

    if (category) category.value = "all";

    if (brand) brand.value = "all";

    if (sort) sort.value = "deal";


    renderProducts();

}


/* =========================
   WATCHLIST
   ========================= */

function toggleWatchlist(id) {

    if (watchlist.includes(id)) {

        watchlist =
            watchlist.filter(item => item !== id);

    }

    else {

        watchlist.push(id);

    }


    localStorage.setItem(
        "pricepilotWatchlist",
        JSON.stringify(watchlist)
    );


    updateWatchCount();

    renderProducts();

    renderDeals();

    renderWatchlist();

}


function updateWatchCount() {

    const counter =
        document.getElementById("watchCount");

    if (!counter) return;


    counter.textContent = watchlist.length;

    counter.style.display =
        watchlist.length > 0
            ? "flex"
            : "none";

}


/* =========================
   WATCHLIST PAGE
   ========================= */

function showWatchlist() {

    const section =
        document.getElementById("watchlistSection");

    if (!section) return;


    section.classList.remove("hidden");

    renderWatchlist();


    section.scrollIntoView({
        behavior: "smooth"
    });

}


function renderWatchlist() {

    const container =
        document.getElementById("watchlist");

    if (!container) return;


    const watchedProducts =
        products.filter(product =>
            watchlist.includes(product.id)
        );


    if (!watchedProducts.length) {

        container.innerHTML = `

            <div class="empty">

                <div class="empty-icon">
                    ♡
                </div>

                <h3>
                    Your watchlist is empty
                </h3>

                <p>
                    Tap the heart on a product to start tracking it.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        watchedProducts
            .map(createProductCard)
            .join("");

}


/* =========================
   PRODUCT DETAILS
   ========================= */

function showDetails(id) {

    const product =
        products.find(item => item.id === id);

    if (!product) return;


    currentProductId = id;


    let modal =
        document.getElementById("productModal");


    if (!modal) {

        modal = document.createElement("div");

        modal.id = "productModal";

        modal.className = "modal";

        document.body.appendChild(modal);

    }


    modal.innerHTML = `

        <div
            class="modal-content"
            onclick="event.stopPropagation()"
        >

            <button
                class="modal-close"
                onclick="closeModal()"
            >
                ×
            </button>


            <div class="modal-product">

                <div>

                    <div class="modal-image">

                        <img
                            id="modalMainImage"
                            src="${product.images?.[0] || ""}"
                            alt="${product.name}"
                            onerror="this.style.display='none'; document.getElementById('modalEmoji').style.display='block';"
                        >

                        <span
                            id="modalEmoji"
                            class="product-emoji"
                            style="display:none;"
                        >
                            ${product.emoji}
                        </span>

                    </div>


                    <div
                        id="modalGallery"
                        style="
                            display:flex;
                            gap:8px;
                            margin-top:10px;
                            overflow-x:auto;
                        "
                    >

                        ${
                            (product.images || [])
                                .map(
                                    (image, index) => `
                                        <button
                                            onclick="changeModalImage('${image}')"
                                            style="
                                                min-width:70px;
                                                height:70px;
                                                border:1px solid var(--border);
                                                border-radius:10px;
                                                background:var(--surface);
                                                padding:5px;
                                                cursor:pointer;
                                            "
                                        >
                                            <img
                                                src="${image}"
                                                alt=""
                                                style="
                                                    width:100%;
                                                    height:100%;
                                                    object-fit:contain;
                                                "
                                                onerror="this.style.display='none'"
                                            >
                                        </button>
                                    `
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div class="modal-info">

                    <div class="product-brand">
                        ${product.brand}
                    </div>

                    <h2>
                        ${product.name}
                    </h2>


                    <div class="rating">
                        ★ ${product.rating}
                        <span>
                            (${product.reviews.toLocaleString()} reviews)
                        </span>
                    </div>


                    <div class="modal-price">
                        €${product.price.toLocaleString()}
                    </div>


                    <div class="savings">
                        Save €${(
                            product.oldPrice - product.price
                        ).toLocaleString()}
                    </div>


                    <h3 style="margin-top:25px;">
                        Compare retailers
                    </h3>


                    <div class="retailer-list">

                        ${
                            product.retailers
                                .map(
                                    retailer => `
                                        <div class="retailer-row">

                                            <strong>
                                                ${retailer[0]}
                                            </strong>

                                            <span>
                                                €${retailer[1].toLocaleString()}
                                            </span>

                                            <button
                                                onclick="retailerClick('${retailer[0]}', '${product.name}')"
                                            >
                                                Visit
                                            </button>

                                        </div>
                                    `
                                )
                                .join("")
                        }

                    </div>


                    <button
                        class="details-button"
                        style="
                            width:100%;
                            margin-top:15px;
                            padding:13px;
                            border-radius:10px;
                        "
                        onclick="toggleWatchlist(${product.id})"
                    >
                        ${
                            watchlist.includes(product.id)
                                ? "♥ Remove from watchlist"
                                : "♡ Add to watchlist"
                        }
                    </button>

                </div>

            </div>

        </div>

    `;


    modal.classList.add("show");


    modal.onclick = event => {

        if (event.target === modal) {

            closeModal();

        }

    };

}


function changeModalImage(image) {

    const main =
        document.getElementById("modalMainImage");

    if (!main) return;

    main.style.display = "block";

    main.src = image;

}


/* =========================
   MODAL CLOSE
   ========================= */

function closeModal() {

    const modal =
        document.getElementById("productModal");

    if (modal) {

        modal.classList.remove("show");

    }

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* =========================
   RETAILER BUTTON
   ========================= */

function retailerClick(retailer, productName) {

    alert(
        `${retailer} link for ${productName} will be connected when PricePilot's retailer APIs are live.`
    );

}


/* =========================
   HOME
   ========================= */

function showHome() {

    document
        .getElementById("watchlistSection")
        ?.classList.add("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   DARK MODE
   ========================= */

function toggleTheme() {

    document.body.classList.toggle("dark");


    localStorage.setItem(
        "pricepilotTheme",
        document.body.classList.contains("dark")
            ? "dark"
            : "light"
    );

}


function applySavedTheme() {

    const theme =
        localStorage.getItem("pricepilotTheme");

    if (theme === "dark") {

        document.body.classList.add("dark");

    }

}


/* =========================
   SAFETY: IMAGE FALLBACK
   ========================= */

document.addEventListener(
    "error",
    event => {

        if (
            event.target &&
            event.target.tagName === "IMG"
        ) {

            event.target.style.display = "none";

            const fallback =
                event.target.nextElementSibling;

            if (
                fallback &&
                fallback.classList.contains("product-emoji")
            ) {

                fallback.style.display = "block";

            }

        }

    },
    true
);
