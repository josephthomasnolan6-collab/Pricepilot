```javascript
/* =========================================================
   PRICEPILOT — COMPLETE PRODUCT + INTERACTION ENGINE
   ========================================================= */

/* =========================
   PRODUCT CATALOGUE
========================= */

const products = [

    /* APPLE */

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
        ]
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
        ]
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
        ]
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
        ]
    },

    {
        id: 5,
        brand: "Apple",
        name: "iPhone 15",
        category: "Phones",
        price: 599,
        oldPrice: 699,
        rating: 4.7,
        reviews: 3100,
        dealScore: 88,
        emoji: "📱",
        images: [
            "images/iphone-15-1.jpg",
            "images/iphone-15-2.jpg",
            "images/iphone-15-3.jpg"
        ],
        retailers: [
            ["Amazon", 599],
            ["Currys", 619],
            ["Very", 629],
            ["Apple", 699]
        ]
    },

    {
        id: 6,
        brand: "Apple",
        name: "MacBook Air M4",
        category: "Laptops",
        price: 999,
        oldPrice: 1099,
        rating: 4.9,
        reviews: 923,
        dealScore: 94,
        emoji: "💻",
        images: [
            "images/macbook-air-m4-1.jpg",
            "images/macbook-air-m4-2.jpg",
            "images/macbook-air-m4-3.jpg",
            "images/macbook-air-m4-4.jpg"
        ],
        retailers: [
            ["Amazon", 999],
            ["Currys", 1049],
            ["Apple", 1099],
            ["Very", 1029]
        ]
    },

    {
        id: 7,
        brand: "Apple",
        name: "MacBook Pro 14 M4 Pro",
        category: "Laptops",
        price: 1849,
        oldPrice: 1999,
        rating: 4.9,
        reviews: 481,
        dealScore: 92,
        emoji: "💻",
        images: [
            "images/macbook-pro-14-m4-1.jpg",
            "images/macbook-pro-14-m4-2.jpg",
            "images/macbook-pro-14-m4-3.jpg",
            "images/macbook-pro-14-m4-4.jpg"
        ],
        retailers: [
            ["Amazon", 1849],
            ["Currys", 1899],
            ["Apple", 1999],
            ["Very", 1949]
        ]
    },

    {
        id: 8,
        brand: "Apple",
        name: "iPad Air M3",
        category: "Tablets",
        price: 649,
        oldPrice: 699,
        rating: 4.8,
        reviews: 723,
        dealScore: 91,
        emoji: "📲",
        images: [
            "images/ipad-air-m3-1.jpg",
            "images/ipad-air-m3-2.jpg",
            "images/ipad-air-m3-3.jpg",
            "images/ipad-air-m3-4.jpg"
        ],
        retailers: [
            ["Amazon", 649],
            ["Currys", 669],
            ["Apple", 699],
            ["Very", 679]
        ]
    },

    {
        id: 9,
        brand: "Apple",
        name: "iPad Pro M4",
        category: "Tablets",
        price: 999,
        oldPrice: 1099,
        rating: 4.9,
        reviews: 521,
        dealScore: 92,
        emoji: "📲",
        images: [
            "images/ipad-pro-m4-1.jpg",
            "images/ipad-pro-m4-2.jpg",
            "images/ipad-pro-m4-3.jpg",
            "images/ipad-pro-m4-4.jpg"
        ],
        retailers: [
            ["Amazon", 999],
            ["Currys", 1049],
            ["Apple", 1099],
            ["Very", 1029]
        ]
    },

    {
        id: 10,
        brand: "Apple",
        name: "AirPods Pro",
        category: "Audio",
        price: 229,
        oldPrice: 249,
        rating: 4.8,
        reviews: 1842,
        dealScore: 95,
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
            ["Very", 235]
        ]
    },

    {
        id: 11,
        brand: "Apple",
        name: "AirPods 4",
        category: "Audio",
        price: 129,
        oldPrice: 149,
        rating: 4.7,
        reviews: 1231,
        dealScore: 90,
        emoji: "🎧",
        images: [
            "images/airpods-4-1.jpg",
            "images/airpods-4-2.jpg",
            "images/airpods-4-3.jpg",
            "images/airpods-4-4.jpg"
        ],
        retailers: [
            ["Amazon", 129],
            ["Currys", 139],
            ["Apple", 149],
            ["Very", 135]
        ]
    },

    /* SAMSUNG */

    {
        id: 12,
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
        ]
    },

    {
        id: 13,
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
        ]
    },

    {
        id: 14,
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
        ]
    },

    {
        id: 15,
        brand: "Samsung",
        name: "Galaxy Z Fold 7",
        category: "Phones",
        price: 1799,
        oldPrice: 1999,
        rating: 4.7,
        reviews: 381,
        dealScore: 89,
        emoji: "📱",
        images: [
            "images/galaxy-z-fold-7-1.jpg",
            "images/galaxy-z-fold-7-2.jpg",
            "images/galaxy-z-fold-7-3.jpg"
        ],
        retailers: [
            ["Amazon", 1799],
            ["Currys", 1849],
            ["Samsung", 1999],
            ["Very", 1899]
        ]
    },

    {
        id: 16,
        brand: "Samsung",
        name: "Galaxy Buds Pro",
        category: "Audio",
        price: 179,
        oldPrice: 229,
        rating: 4.6,
        reviews: 631,
        dealScore: 94,
        emoji: "🎧",
        images: [
            "images/galaxy-buds-pro-1.jpg",
            "images/galaxy-buds-pro-2.jpg",
            "images/galaxy-buds-pro-3.jpg"
        ],
        retailers: [
            ["Amazon", 179],
            ["Currys", 189],
            ["Samsung", 229],
            ["Very", 199]
        ]
    },

    {
        id: 17,
        brand: "Samsung",
        name: "Galaxy Watch",
        category: "Watches",
        price: 299,
        oldPrice: 349,
        rating: 4.7,
        reviews: 721,
        dealScore: 90,
        emoji: "⌚",
        images: [
            "images/galaxy-watch-1.jpg",
            "images/galaxy-watch-2.jpg",
            "images/galaxy-watch-3.jpg"
        ],
        retailers: [
            ["Amazon", 299],
            ["Currys", 319],
            ["Samsung", 349],
            ["Very", 329]
        ]
    },

    /* GOOGLE */

    {
        id: 18,
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
        ]
    },

    {
        id: 19,
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
        ]
    },

    /* DELL */

    {
        id: 20,
        brand: "Dell",
        name: "Dell XPS 14",
        category: "Laptops",
        price: 1499,
        oldPrice: 1699,
        rating: 4.6,
        reviews: 318,
        dealScore: 89,
        emoji: "💻",
        images: [
            "images/dell-xps-14-1.jpg",
            "images/dell-xps-14-2.jpg",
            "images/dell-xps-14-3.jpg",
            "images/dell-xps-14-4.jpg"
        ],
        retailers: [
            ["Amazon", 1499],
            ["Dell", 1599],
            ["Currys", 1549],
            ["Very", 1599]
        ]
    },

    {
        id: 21,
        brand: "Dell",
        name: "Dell Inspiron 16",
        category: "Laptops",
        price: 799,
        oldPrice: 899,
        rating: 4.5,
        reviews: 412,
        dealScore: 88,
        emoji: "💻",
        images: [
            "images/dell-inspiron-16-1.jpg",
            "images/dell-inspiron-16-2.jpg",
            "images/dell-inspiron-16-3.jpg",
            "images/dell-inspiron-16-4.jpg"
        ],
        retailers: [
            ["Amazon", 799],
            ["Dell", 849],
            ["Currys", 829],
            ["Very", 849]
        ]
    },

    /* SONY */

    {
        id: 22,
        brand: "Sony",
        name: "Sony WH-1000XM6",
        category: "Audio",
        price: 349,
        oldPrice: 399,
        rating: 4.8,
        reviews: 921,
        dealScore: 90,
        emoji: "🎧",
        images: [
            "images/sony-wh1000xm6-1.jpg",
            "images/sony-wh1000xm6-2.jpg",
            "images/sony-wh1000xm6-3.jpg",
            "images/sony-wh1000xm6-4.jpg"
        ],
        retailers: [
            ["Amazon", 349],
            ["Currys", 369],
            ["Sony", 399],
            ["Very", 359]
        ]
    },

    /* MICROSOFT */

    {
        id: 23,
        brand: "Microsoft",
        name: "Xbox Series X",
        category: "Gaming",
        price: 499,
        oldPrice: 549,
        rating: 4.8,
        reviews: 2100,
        dealScore: 89,
        emoji: "🎮",
        images: [
            "images/xbox-series-x-1.jpg",
            "images/xbox-series-x-2.jpg",
            "images/xbox-series-x-3.jpg"
        ],
        retailers: [
            ["Amazon", 499],
            ["Currys", 509],
            ["Microsoft", 549],
            ["Very", 519]
        ]
    },

    /* PLAYSTATION */

    {
        id: 24,
        brand: "Sony",
        name: "PlayStation 5",
        category: "Gaming",
        price: 499,
        oldPrice: 549,
        rating: 4.9,
        reviews: 4200,
        dealScore: 90,
        emoji: "🎮",
        images: [
            "images/ps5-1.jpg",
            "images/ps5-2.jpg",
            "images/ps5-3.jpg"
        ],
        retailers: [
            ["Amazon", 499],
            ["Currys", 509],
            ["Very", 519],
            ["Sony", 549]
        ]
    }
];


/* =========================
   STATE
========================= */

let watchlist = JSON.parse(
    localStorage.getItem("pricepilot_watchlist") || "[]"
);

let currentProducts = [...products];


/* =========================
   SAFE IMAGE HANDLING
========================= */

function imageFallback(img, emoji) {

    img.onerror = function () {

        this.onerror = null;

        this.style.display = "none";

        const parent = this.parentElement;

        if (parent && !parent.querySelector(".product-emoji")) {

            const fallback = document.createElement("div");

            fallback.className = "product-emoji";

            fallback.textContent = emoji || "📦";

            parent.appendChild(fallback);
        }
    };
}


/* =========================
   PRODUCT IMAGE
========================= */

function getMainImage(product) {

    if (
        product.images &&
        product.images.length &&
        product.images[0]
    ) {
        return product.images[0];
    }

    return "";
}


/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts() {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    const searchInput = document.getElementById("productSearch");
    const categoryInput = document.getElementById("categoryFilter");
    const brandInput = document.getElementById("brandFilter");
    const sortInput = document.getElementById("sortFilter");

    const search = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const category = categoryInput
        ? categoryInput.value
        : "all";

    const brand = brandInput
        ? brandInput.value
        : "all";

    const sort = sortInput
        ? sortInput.value
        : "deal";


    currentProducts = products.filter(product => {

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

        return (
            matchesSearch &&
            matchesCategory &&
            matchesBrand
        );
    });


    currentProducts.sort((a, b) => {

        if (sort === "priceLow") {
            return a.price - b.price;
        }

        if (sort === "priceHigh") {
            return b.price - a.price;
        }

        if (sort === "rating") {
            return b.rating - a.rating;
        }

        return b.dealScore - a.dealScore;
    });


    grid.innerHTML = "";


    if (!currentProducts.length) {

        grid.innerHTML = `
            <div class="empty">
                <div class="empty-icon">🔎</div>
                <h3>No products found</h3>
                <p>Try changing your search or filters.</p>
            </div>
        `;

    } else {

        currentProducts.forEach(product => {

            grid.appendChild(
                createProductCard(product)
            );

        });
    }


    const resultCount =
        document.getElementById("resultCount");

    if (resultCount) {

        resultCount.textContent =
            `${currentProducts.length} product${currentProducts.length === 1 ? "" : "s"}`;
    }


    const statProducts =
        document.getElementById("statProducts");

    if (statProducts) {

        statProducts.textContent =
            products.length;
    }
}


/* =========================
   PRODUCT CARD
========================= */

function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card";

    const isFavourite =
        watchlist.includes(product.id);

    const savings =
        Math.max(
            0,
            product.oldPrice - product.price
        );


    card.innerHTML = `

        <div class="product-image">

            ${
                getMainImage(product)
                ? `
                    <img
                        src="${getMainImage(product)}"
                        alt="${product.name}"
                        loading="lazy"
                    >
                `
                : `
                    <div class="product-emoji">
                        ${product.emoji || "📦"}
                    </div>
                `
            }

        </div>


        <div class="deal-score">
            ${product.dealScore}% deal
        </div>


        <button
            class="favourite ${isFavourite ? "active" : ""}"
            onclick="toggleWatchlist(${product.id})"
            aria-label="Add to watchlist"
        >
            ${isFavourite ? "♥" : "♡"}
        </button>


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

                ${
                    savings > 0
                    ? `
                        <div class="savings">
                            Save €${savings}
                        </div>
                    `
                    : ""
                }

            </div>


            <div class="product-actions">

                <button
                    class="compare-button"
                    onclick="showProduct(${product.id})"
                >
                    Compare
                </button>

                <button
                    class="details-button"
                    onclick="showProduct(${product.id})"
                >
                    Details
                </button>

            </div>

        </div>
    `;


    const image =
        card.querySelector("img");

    if (image) {

        imageFallback(
            image,
            product.emoji
        );
    }


    return card;
}


/* =========================
   DEALS
========================= */

function renderDeals() {

    const grid =
        document.getElementById("dealGrid");

    if (!grid) return;

    const deals =
        [...products]
        .sort(
            (a, b) =>
                b.dealScore - a.dealScore
        )
        .slice(0, 8);

    grid.innerHTML = "";

    deals.forEach(product => {

        grid.appendChild(
            createProductCard(product)
        );

    });
}


/* =========================
   SEARCH
========================= */

function syncSearch(value) {

    const productSearch =
        document.getElementById("productSearch");

    if (productSearch) {

        productSearch.value = value;
    }
}


function performSearch() {

    renderProducts();

    const productsSection =
        document.getElementById("products");

    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function quickSearch(term) {

    const heroSearch =
        document.getElementById("heroSearch");

    const productSearch =
        document.getElementById("productSearch");

    if (heroSearch) {
        heroSearch.value = term;
    }

    if (productSearch) {
        productSearch.value = term;
    }

    renderProducts();

    const productsSection =
        document.getElementById("products");

    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================
   CATEGORY FILTER
========================= */

function filterCategory(category) {

    const categoryFilter =
        document.getElementById("categoryFilter");

    if (categoryFilter) {

        categoryFilter.value =
            category;
    }

    renderProducts();

    const productsSection =
        document.getElementById("products");

    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================
   CLEAR FILTERS
========================= */

function clearFilters() {

    const productSearch =
        document.getElementById("productSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const brandFilter =
        document.getElementById("brandFilter");

    const sortFilter =
        document.getElementById("sortFilter");

    if (productSearch)
        productSearch.value = "";

    if (categoryFilter)
        categoryFilter.value = "all";

    if (brandFilter)
        brandFilter.value = "all";

    if (sortFilter)
        sortFilter.value = "deal";

    const heroSearch =
        document.getElementById("heroSearch");

    if (heroSearch)
        heroSearch.value = "";

    renderProducts();
}


/* =========================
   WATCHLIST
========================= */

function saveWatchlist() {

    localStorage.setItem(
        "pricepilot_watchlist",
        JSON.stringify(watchlist)
    );
}


function toggleWatchlist(id) {

    if (watchlist.includes(id)) {

        watchlist =
            watchlist.filter(
                productId =>
                    productId !== id
            );

    } else {

        watchlist.push(id);
    }

    saveWatchlist();

    updateWatchCount();

    renderProducts();

    renderDeals();

    renderWatchlist();
}


function updateWatchCount() {

    const count =
        document.getElementById("watchCount");

    if (!count) return;

    count.textContent =
        watchlist.length;

    count.style.display =
        watchlist.length
            ? "flex"
            : "none";
}


/* =========================
   WATCHLIST SECTION
========================= */

function showWatchlist() {

    const section =
        document.getElementById(
            "watchlistSection"
        );

    if (!section) return;

    section.classList.remove("hidden");

    renderWatchlist();

    section.scrollIntoView({
        behavior: "smooth"
    });
}


function renderWatchlist() {

    const grid =
        document.getElementById(
            "watchlistGrid"
        );

    if (!grid) return;

    const saved =
        products.filter(
            product =>
                watchlist.includes(product.id)
        );

    grid.innerHTML = "";

    if (!saved.length) {

        grid.innerHTML = `
            <div class="empty">
                <div class="empty-icon">♡</div>
                <h3>Your watchlist is empty</h3>
                <p>Press the heart on a product to save it here.</p>
            </div>
        `;

        return;
    }

    saved.forEach(product => {

        grid.appendChild(
            createProductCard(product)
        );

    });
}


/* =========================
   SHOW ALL PRODUCTS
========================= */

function showAllProducts() {

    clearFilters();

    const section =
        document.getElementById("products");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================
   PRODUCT DETAILS MODAL
========================= */

function showProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;


    let modal =
        document.getElementById(
            "productModal"
        );


    if (!modal) {

        modal =
            document.createElement("div");

        modal.id =
            "productModal";

        modal.className =
            "modal";

        document.body.appendChild(modal);
    }


    const gallery =
        product.images && product.images.length
            ? product.images
            : [];


    modal.innerHTML = `

        <div class="modal-content">

            <button
                class="modal-close"
                onclick="closeProductModal()"
            >
                ×
            </button>


            <div class="modal-product">

                <div>

                    <div
                        class="modal-image"
                        id="modalMainImage"
                    >

                        ${
                            gallery[0]
                            ? `
                                <img
                                    src="${gallery[0]}"
                                    alt="${product.name}"
                                    style="
                                        width:100%;
                                        height:300px;
                                        object-fit:contain;
                                    "
                                >
                            `
                            : `
                                <div class="product-emoji">
                                    ${product.emoji || "📦"}
                                </div>
                            `
                        }

                    </div>


                    ${
                        gallery.length > 1
                        ? `
                            <div
                                style="
                                    display:flex;
                                    gap:8px;
                                    margin-top:10px;
                                    overflow-x:auto;
                                "
                            >

                                ${gallery.map(
                                    (image, index) => `
                                        <button
                                            onclick="changeModalImage('${image.replace(/'/g, "\\'")}', '${product.emoji || "📦"}')"
                                            style="
                                                width:70px;
                                                height:70px;
                                                flex:0 0 auto;
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
                                ).join("")}

                            </div>
                        `
                        : ""
                    }

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

                    <p style="color:var(--muted);">
                        Best current listed price:
                        <strong>
                            €${product.price.toLocaleString()}
                        </strong>
                    </p>

                    <div class="retailer-list">

                        <h3>Compare retailers</h3>

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
                                            onclick="alert('Retailer links will be connected when live retailer APIs are added.')"
                                        >
                                            View
                                        </button>

                                    </div>
                                `
                            )
                            .join("")
                        }

                    </div>

                </div>

            </div>

        </div>
    `;


    modal.classList.add("show");


    const mainImage =
        modal.querySelector(
            "#modalMainImage img"
        );

    if (mainImage) {

        imageFallback(
            mainImage,
            product.emoji
        );
    }
}


function changeModalImage(image, emoji) {

    const container =
        document.getElementById(
            "modalMainImage"
        );

    if (!container) return;

    container.innerHTML = `
        <img
            src="${image}"
            alt=""
            style="
                width:100%;
                height:300px;
                object-fit:contain;
            "
        >
    `;

    const img =
        container.querySelector("img");

    if (img) {

        imageFallback(
            img,
            emoji
        );
    }
}


function closeProductModal() {

    const modal =
        document.getElementById(
            "productModal"
        );

    if (modal) {

        modal.classList.remove("show");
    }
}


/* =========================
   DARK MODE
========================= */

function toggleTheme() {

    document.body.classList.toggle(
        "dark"
    );

    localStorage.setItem(
        "pricepilot_theme",
        document.body.classList.contains("dark")
            ? "dark"
            : "light"
    );
}


function loadTheme() {

    const saved =
        localStorage.getItem(
            "pricepilot_theme"
        );

    if (saved === "dark") {

        document.body.classList.add(
            "dark"
        );
    }
}


/* =========================
   HOME
========================= */

function showHome() {

    const watchlistSection =
        document.getElementById(
            "watchlistSection"
        );

    if (watchlistSection) {

        watchlistSection.classList.add(
            "hidden"
        );
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   MODAL CLICK OUTSIDE
========================= */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "productModal"
            );

        if (
            modal &&
            event.target === modal
        ) {

            closeProductModal();
        }
    }
);


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProductModal();
        }
    }
);


/* =========================
   INITIALISE PRICEPILOT
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadTheme();

        renderProducts();

        renderDeals();

        updateWatchCount();

        renderWatchlist();

    }
);
```
