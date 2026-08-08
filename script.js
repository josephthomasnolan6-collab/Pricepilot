/* =========================================================
   PRICEPILOT 3.0
   COMPLETE JAVASCRIPT
   ========================================================= */

/*
   IMPORTANT:
   The retailer prices in this version are DEMO DATA.
   They are not live Amazon/Currys prices.
*/


/* =========================================================
   PRODUCT DATABASE
   ========================================================= */

const products = [

    /* ================= APPLE ================= */

    {
        id: "apple-iphone-16",
        brand: "Apple",
        name: "iPhone 16",
        category: "phone",
        price: 849,
        oldPrice: 899,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1592286927505-2fd6e7f3c5bd?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB", "512GB"],
        colours: ["Black", "White", "Pink", "Teal", "Ultramarine"],
        specs: [
            "6.1-inch Super Retina XDR",
            "A18 chip",
            "48MP Fusion camera",
            "USB-C",
            "Face ID"
        ],
        retailers: [
            { name: "Amazon", price: 849 },
            { name: "Currys", price: 879 }
        ]
    },

    {
        id: "apple-iphone-16-pro",
        brand: "Apple",
        name: "iPhone 16 Pro",
        category: "phone",
        price: 1099,
        oldPrice: 1199,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB", "512GB", "1TB"],
        colours: ["Black Titanium", "White Titanium", "Natural Titanium"],
        specs: [
            "6.3-inch Super Retina XDR",
            "A18 Pro chip",
            "48MP camera system",
            "5x Telephoto",
            "USB-C"
        ],
        retailers: [
            { name: "Amazon", price: 1099 },
            { name: "Currys", price: 1149 }
        ]
    },

    {
        id: "apple-iphone-16-pro-max",
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        category: "phone",
        price: 1199,
        oldPrice: 1299,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1592286927505-2fd6e7f3c5bd?auto=format&fit=crop&w=700&q=80",
        storage: ["256GB", "512GB", "1TB"],
        colours: ["Black Titanium", "White Titanium", "Natural Titanium"],
        specs: [
            "6.9-inch Super Retina XDR",
            "A18 Pro chip",
            "48MP camera system",
            "5x Telephoto",
            "USB-C"
        ],
        retailers: [
            { name: "Amazon", price: 1199 },
            { name: "Currys", price: 1249 }
        ]
    },

    {
        id: "apple-iphone-15",
        brand: "Apple",
        name: "iPhone 15",
        category: "phone",
        price: 699,
        oldPrice: 799,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB", "512GB"],
        colours: ["Black", "Blue", "Green", "Yellow", "Pink"],
        specs: [
            "6.1-inch Super Retina XDR",
            "A16 Bionic chip",
            "48MP Main camera",
            "USB-C",
            "Dynamic Island"
        ],
        retailers: [
            { name: "Amazon", price: 699 },
            { name: "Currys", price: 729 }
        ]
    },

    {
        id: "apple-iphone-15-pro",
        brand: "Apple",
        name: "iPhone 15 Pro",
        category: "phone",
        price: 899,
        oldPrice: 999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB", "512GB", "1TB"],
        colours: ["Black Titanium", "Blue Titanium", "Natural Titanium"],
        specs: [
            "6.1-inch Super Retina XDR",
            "A17 Pro chip",
            "48MP camera",
            "Titanium design",
            "USB-C"
        ],
        retailers: [
            { name: "Amazon", price: 899 },
            { name: "Currys", price: 929 }
        ]
    },

    {
        id: "apple-ipad-air",
        brand: "Apple",
        name: "iPad Air",
        category: "tablet",
        price: 599,
        oldPrice: 649,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB", "512GB", "1TB"],
        colours: ["Blue", "Purple", "Starlight", "Space Grey"],
        specs: [
            "Liquid Retina display",
            "M2 chip",
            "Apple Pencil support",
            "USB-C",
            "Touch ID"
        ],
        retailers: [
            { name: "Amazon", price: 599 },
            { name: "Currys", price: 629 }
        ]
    },

    {
        id: "apple-ipad-pro",
        brand: "Apple",
        name: "iPad Pro",
        category: "tablet",
        price: 999,
        oldPrice: 1099,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=700&q=80",
        storage: ["256GB", "512GB", "1TB", "2TB"],
        colours: ["Silver", "Space Black"],
        specs: [
            "Ultra Retina XDR",
            "M4 chip",
            "ProMotion",
            "Thunderbolt / USB 4",
            "Face ID"
        ],
        retailers: [
            { name: "Amazon", price: 999 },
            { name: "Currys", price: 1049 }
        ]
    },

    {
        id: "apple-watch-series-10",
        brand: "Apple",
        name: "Apple Watch Series 10",
        category: "watch",
        price: 449,
        oldPrice: 499,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=700&q=80",
        storage: ["42mm", "46mm"],
        colours: ["Jet Black", "Rose Gold", "Silver"],
        specs: [
            "Always-On Retina display",
            "S10 SiP",
            "Sleep tracking",
            "Water resistant",
            "GPS"
        ],
        retailers: [
            { name: "Amazon", price: 449 },
            { name: "Currys", price: 469 }
        ]
    },

    {
        id: "apple-airpods-pro-2",
        brand: "Apple",
        name: "AirPods Pro 2",
        category: "audio",
        price: 229,
        oldPrice: 249,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80",
        storage: ["Standard"],
        colours: ["White"],
        specs: [
            "Active Noise Cancellation",
            "Adaptive Audio",
            "USB-C charging",
            "MagSafe charging case",
            "IP54"
        ],
        retailers: [
            { name: "Amazon", price: 229 },
            { name: "Currys", price: 239 }
        ]
    },


    /* ================= SAMSUNG ================= */

    {
        id: "samsung-s25",
        brand: "Samsung",
        name: "Galaxy S25",
        category: "phone",
        price: 899,
        oldPrice: 959,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB", "512GB"],
        colours: ["Navy", "Silver", "Blue", "Mint"],
        specs: [
            "6.2-inch Dynamic AMOLED 2X",
            "Snapdragon processor",
            "50MP camera",
            "Galaxy AI",
            "IP68"
        ],
        retailers: [
            { name: "Amazon", price: 899 },
            { name: "Currys", price: 929 }
        ]
    },

    {
        id: "samsung-s25-plus",
        brand: "Samsung",
        name: "Galaxy S25+",
        category: "phone",
        price: 999,
        oldPrice: 1099,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1610945264803-cb5e2c7e3d72?auto=format&fit=crop&w=700&q=80",
        storage: ["256GB", "512GB"],
        colours: ["Navy", "Silver", "Blue", "Mint"],
        specs: [
            "6.7-inch Dynamic AMOLED 2X",
            "Snapdragon processor",
            "50MP camera",
            "Galaxy AI",
            "IP68"
        ],
        retailers: [
            { name: "Amazon", price: 999 },
            { name: "Currys", price: 1049 }
        ]
    },

    {
        id: "samsung-s25-ultra",
        brand: "Samsung",
        name: "Galaxy S25 Ultra",
        category: "phone",
        price: 1249,
        oldPrice: 1349,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1610945265078-3852dba0a2e1?auto=format&fit=crop&w=700&q=80",
        storage: ["256GB", "512GB", "1TB"],
        colours: ["Titanium Black", "Titanium Silver", "Titanium Blue"],
        specs: [
            "6.9-inch Dynamic AMOLED 2X",
            "200MP camera",
            "S Pen",
            "Galaxy AI",
            "Snapdragon processor"
        ],
        retailers: [
            { name: "Amazon", price: 1249 },
            { name: "Currys", price: 1299 }
        ]
    },

    {
        id: "samsung-a56",
        brand: "Samsung",
        name: "Galaxy A56",
        category: "phone",
        price: 479,
        oldPrice: 499,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1610945264803-cb5e2c7e3d72?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB"],
        colours: ["Awesome Graphite", "Awesome Lightgrey"],
        specs: [
            "6.7-inch AMOLED display",
            "50MP camera",
            "5G",
            "5000mAh battery",
            "IP67"
        ],
        retailers: [
            { name: "Amazon", price: 479 },
            { name: "Currys", price: 499 }
        ]
    },

    {
        id: "samsung-tab-s10",
        brand: "Samsung",
        name: "Galaxy Tab S10",
        category: "tablet",
        price: 799,
        oldPrice: 899,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB", "512GB"],
        colours: ["Moonstone Grey", "Platinum Silver"],
        specs: [
            "Dynamic AMOLED 2X",
            "S Pen included",
            "Galaxy AI",
            "Wi-Fi",
            "Large battery"
        ],
        retailers: [
            { name: "Amazon", price: 799 },
            { name: "Currys", price: 829 }
        ]
    },

    {
        id: "samsung-watch7",
        brand: "Samsung",
        name: "Galaxy Watch7",
        category: "watch",
        price: 299,
        oldPrice: 349,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=700&q=80",
        storage: ["40mm", "44mm"],
        colours: ["Green", "Cream", "Silver"],
        specs: [
            "Super AMOLED display",
            "Galaxy AI",
            "Sleep tracking",
            "GPS",
            "Water resistant"
        ],
        retailers: [
            { name: "Amazon", price: 299 },
            { name: "Currys", price: 319 }
        ]
    },

    {
        id: "samsung-buds3-pro",
        brand: "Samsung",
        name: "Galaxy Buds3 Pro",
        category: "audio",
        price: 219,
        oldPrice: 249,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80",
        storage: ["Standard"],
        colours: ["Silver", "White"],
        specs: [
            "Adaptive Noise Control",
            "Galaxy AI",
            "Hi-Fi audio",
            "Wireless charging",
            "IP57"
        ],
        retailers: [
            { name: "Amazon", price: 219 },
            { name: "Currys", price: 229 }
        ]
    },


    /* ================= GOOGLE ================= */

    {
        id: "google-pixel-9",
        brand: "Google",
        name: "Pixel 9",
        category: "phone",
        price: 799,
        oldPrice: 899,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB"],
        colours: ["Obsidian", "Porcelain", "Wintergreen", "Peony"],
        specs: [
            "6.3-inch OLED display",
            "Google Tensor G4",
            "50MP camera",
            "Gemini AI",
            "IP68"
        ],
        retailers: [
            { name: "Amazon", price: 799 },
            { name: "Currys", price: 829 }
        ]
    },

    {
        id: "google-pixel-9-pro",
        brand: "Google",
        name: "Pixel 9 Pro",
        category: "phone",
        price: 999,
        oldPrice: 1099,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB", "512GB", "1TB"],
        colours: ["Obsidian", "Porcelain", "Hazel", "Rose Quartz"],
        specs: [
            "6.3-inch LTPO OLED",
            "Google Tensor G4",
            "50MP triple camera",
            "Gemini AI",
            "IP68"
        ],
        retailers: [
            { name: "Amazon", price: 999 },
            { name: "Currys", price: 1049 }
        ]
    },

    {
        id: "google-pixel-9-pro-xl",
        brand: "Google",
        name: "Pixel 9 Pro XL",
        category: "phone",
        price: 1099,
        oldPrice: 1199,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
        storage: ["128GB", "256GB", "512GB", "1TB"],
        colours: ["Obsidian", "Porcelain", "Hazel", "Rose Quartz"],
        specs: [
            "6.8-inch LTPO OLED",
            "Google Tensor G4",
            "50MP triple camera",
            "Gemini AI",
            "IP68"
        ],
        retailers: [
            { name: "Amazon", price: 1099 },
            { name: "Currys", price: 1149 }
        ]
    },

    {
        id: "google-pixel-watch-3",
        brand: "Google",
        name: "Pixel Watch 3",
        category: "watch",
        price: 349,
        oldPrice: 399,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
        storage: ["41mm", "45mm"],
        colours: ["Obsidian", "Silver", "Champagne Gold"],
        specs: [
            "Actua display",
            "Google Assistant",
            "Fitbit health tracking",
            "GPS",
            "Wear OS"
        ],
        retailers: [
            { name: "Amazon", price: 349 },
            { name: "Currys", price: 369 }
        ]
    },

    {
        id: "google-pixel-buds-pro",
        brand: "Google",
        name: "Pixel Buds Pro 2",
        category: "audio",
        price: 229,
        oldPrice: 249,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80",
        storage: ["Standard"],
        colours: ["Hazel", "Porcelain", "Wintergreen"],
        specs: [
            "Active Noise Cancellation",
            "Google Tensor A1",
            "Gemini integration",
            "Wireless charging",
            "IP54"
        ],
        retailers: [
            { name: "Amazon", price: 229 },
            { name: "Currys", price: 239 }
        ]
    }

];


/* =========================================================
   STATE
   ========================================================= */

let favourites =
    JSON.parse(
        localStorage.getItem("pricepilot-favourites")
    ) || [];

let recentlyViewed =
    JSON.parse(
        localStorage.getItem("pricepilot-recent")
    ) || [];

let currentSearch = "";

let currentProducts = [...products];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const clearSearch =
    document.getElementById("clearSearch");

const suggestions =
    document.getElementById("suggestions");

const productGrid =
    document.getElementById("productGrid");

const trendingGrid =
    document.getElementById("trendingGrid");

const dealGrid =
    document.getElementById("dealGrid");

const favouritesGrid =
    document.getElementById("favouritesGrid");

const recentGrid =
    document.getElementById("recentGrid");

const noResults =
    document.getElementById("noResults");

const emptyFavourites =
    document.getElementById("emptyFavourites");

const emptyRecent =
    document.getElementById("emptyRecent");

const productModal =
    document.getElementById("productModal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");

const toast =
    document.getElementById("toast");

const brandFilter =
    document.getElementById("brandFilter");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortFilter =
    document.getElementById("sortFilter");

const favouriteCount =
    document.getElementById("favouriteCount");

const productCount =
    document.getElementById("productCount");

const themeToggle =
    document.getElementById("themeToggle");


/* =========================================================
   HELPERS
   ========================================================= */

function money(value) {

    return new Intl.NumberFormat(
        "en-IE",
        {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0
        }
    ).format(value);
}


function getSaving(product) {

    if (!product.oldPrice) {
        return 0;
    }

    return Math.max(
        0,
        product.oldPrice - product.price
    );
}


function getSavingPercent(product) {

    if (!product.oldPrice) {
        return 0;
    }

    return Math.round(
        (getSaving(product) / product.oldPrice) * 100
    );
}


function getBestRetailer(product) {

    return [...product.retailers]
        .sort((a, b) => a.price - b.price)[0];
}


function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product) {

    const favourite =
        favourites.includes(product.id);

    const bestRetailer =
        getBestRetailer(product);

    const saving =
        getSaving(product);

    const savingPercent =
        getSavingPercent(product);

    return `

        <article
            class="product-card"
            data-id="${escapeHtml(product.id)}"
        >

            <button
                class="favourite-button ${favourite ? "active" : ""}"
                data-favourite="${escapeHtml(product.id)}"
                aria-label="Favourite ${escapeHtml(product.name)}"
            >
                ${favourite ? "♥" : "♡"}
            </button>

            <div class="product-image">

                <img
                    src="${escapeHtml(product.image)}"
                    alt="${escapeHtml(product.name)}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

            </div>

            <div class="product-info">

                <div class="product-brand">
                    ${escapeHtml(product.brand)}
                </div>

                <h3 class="product-name">
                    ${escapeHtml(product.name)}
                </h3>

                <div class="price-row">

                    <span class="current-price">
                        ${money(product.price)}
                    </span>

                    ${
                        product.oldPrice
                        ?
                        `
                        <span class="old-price">
                            ${money(product.oldPrice)}
                        </span>
                        `
                        :
                        ""
                    }

                </div>

                ${
                    saving > 0
                    ?
                    `
                    <span class="saving">
                        Save ${money(saving)}
                        (${savingPercent}%)
                    </span>
                    `
                    :
                    ""
                }

                <div class="best-deal">

                    🏆 Best demo price:
                    <strong>
                        ${escapeHtml(bestRetailer.name)}
                    </strong>

                </div>

                <button
                    class="compare-button"
                    data-product="${escapeHtml(product.id)}"
                >
                    Compare prices
                </button>

            </div>

        </article>

    `;
}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts(list) {

    currentProducts = list;

    if (!list.length) {

        productGrid.innerHTML = "";

        noResults.classList.remove("hidden");

        return;
    }

    noResults.classList.add("hidden");

    productGrid.innerHTML =
        list.map(createProductCard).join("");

    attachCardEvents();
}


function renderTrending() {

    const trending =
        products.slice(0, 8);

    trendingGrid.innerHTML =
        trending.map(createProductCard).join("");

    attachCardEvents(trendingGrid);
}


function renderDeals() {

    const deals =
        [...products]
            .sort(
                (a, b) =>
                    getSavingPercent(b)
                    -
                    getSavingPercent(a)
            )
            .slice(0, 8);

    dealGrid.innerHTML =
        deals.map(createProductCard).join("");

    attachCardEvents(dealGrid);
}


function renderFavourites() {

    const favouriteProducts =
        products.filter(
            product =>
                favourites.includes(product.id)
        );

    if (!favouriteProducts.length) {

        favouritesGrid.innerHTML = "";

        emptyFavourites.classList.remove(
            "hidden"
        );

        return;
    }

    emptyFavourites.classList.add(
        "hidden"
    );

    favouritesGrid.innerHTML =
        favouriteProducts
            .map(createProductCard)
            .join("");

    attachCardEvents(favouritesGrid);
}


function renderRecentlyViewed() {

    const recentProducts =
        recentlyViewed
            .map(
                id =>
                    products.find(
                        product =>
                            product.id === id
                    )
            )
            .filter(Boolean);

    if (!recentProducts.length) {

        recentGrid.innerHTML = "";

        emptyRecent.classList.remove(
            "hidden"
        );

        return;
    }

    emptyRecent.classList.add(
        "hidden"
    );

    recentGrid.innerHTML =
        recentProducts
            .map(createProductCard)
            .join("");

    attachCardEvents(recentGrid);
}


/* =========================================================
   CARD EVENTS
   ========================================================= */

function attachCardEvents(
    container = productGrid
) {

    container
        .querySelectorAll("[data-favourite]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavourite(
                        button.dataset.favourite
                    );

                }
            );

        });


    container
        .querySelectorAll("[data-product]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openProduct(
                        button.dataset.product
                    );

                }
            );

        });


    container
        .querySelectorAll(".product-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            "button"
                        )
                    ) {
                        return;
                    }

                    openProduct(
                        card.dataset.id
                    );

                }
            );

        });

}


/* =========================================================
   FAVOURITES
   ========================================================= */

function toggleFavourite(id) {

    if (favourites.includes(id)) {

        favourites =
            favourites.filter(
                item => item !== id
            );

        showToast(
            "Removed from favourites"
        );

    } else {

        favourites.push(id);

        showToast(
            "❤️ Added to favourites"
        );
    }

    localStorage.setItem(
        "pricepilot-favourites",
        JSON.stringify(favourites)
    );

    updateFavouriteCount();

    renderAll();
}


function updateFavouriteCount() {

    favouriteCount.textContent =
        favourites.length;
}


/* =========================================================
   RECENTLY VIEWED
   ========================================================= */

function addRecentlyViewed(id) {

    recentlyViewed =
        recentlyViewed.filter(
            item => item !== id
        );

    recentlyViewed.unshift(id);

    recentlyViewed =
        recentlyViewed.slice(0, 8);

    localStorage.setItem(
        "pricepilot-recent",
        JSON.stringify(recentlyViewed)
    );

    renderRecentlyViewed();
}


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function openProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) {
        return;
    }

    addRecentlyViewed(id);

    const bestRetailer =
        getBestRetailer(product);

    const saving =
        getSaving(product);

    modalContent.innerHTML = `

        <div class="modal-product">

            <div
                style="
                    display:grid;
                    place-items:center;
                    background:var(--surface-secondary);
                    border-radius:15px;
                    overflow:hidden;
                    margin-bottom:25px;
                    height:250px;
                "
            >

                <img
                    src="${escapeHtml(product.image)}"
                    alt="${escapeHtml(product.name)}"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    "
                >

            </div>

            <div class="product-brand">
                ${escapeHtml(product.brand)}
            </div>

            <h2
                style="
                    font-size:32px;
                    margin-bottom:8px;
                "
            >
                ${escapeHtml(product.name)}
            </h2>

            <div
                style="
                    color:#f59e0b;
                    margin-bottom:15px;
                "
            >
                ⭐ ${product.rating}/5
            </div>

            <div
                style="
                    display:flex;
                    align-items:center;
                    gap:10px;
                    margin-bottom:20px;
                "
            >

                <strong
                    style="
                        font-size:30px;
                    "
                >
                    ${money(product.price)}
                </strong>

                ${
                    product.oldPrice
                    ?
                    `
                    <span class="old-price">
                        ${money(product.oldPrice)}
                    </span>
                    `
                    :
                    ""
                }

            </div>

            ${
                saving > 0
                ?
                `
                <div
                    class="saving"
                    style="margin-bottom:20px;"
                >
                    Save ${money(saving)}
                    (${getSavingPercent(product)}%)
                </div>
                `
                :
                ""
            }

            <h3
                style="
                    margin-bottom:10px;
                "
            >
                Storage
            </h3>

            <div
                style="
                    display:flex;
                    flex-wrap:wrap;
                    gap:7px;
                    margin-bottom:20px;
                "
            >

                ${product.storage.map(
                    storage =>
                        `
                        <span
                            style="
                                padding:7px 11px;
                                border:1px solid var(--border);
                                border-radius:8px;
                                font-size:12px;
                            "
                        >
                            ${escapeHtml(storage)}
                        </span>
                        `
                ).join("")}

            </div>

            <h3
                style="
                    margin-bottom:10px;
                "
            >
                Colours
            </h3>

            <div
                style="
                    display:flex;
                    flex-wrap:wrap;
                    gap:7px;
                    margin-bottom:25px;
                "
            >

                ${product.colours.map(
                    colour =>
                        `
                        <span
                            style="
                                padding:7px 11px;
                                border:1px solid var(--border);
                                border-radius:8px;
                                font-size:12px;
                            "
                        >
                            ${escapeHtml(colour)}
                        </span>
                        `
                ).join("")}

            </div>

            <h3
                style="
                    margin-bottom:10px;
                "
            >
                Key specifications
            </h3>

            <ul
                style="
                    padding-left:20px;
                    margin-bottom:25px;
                    color:var(--text-secondary);
                "
            >

                ${product.specs.map(
                    spec =>
                        `<li>${escapeHtml(spec)}</li>`
                ).join("")}

            </ul>

            <h3
                style="
                    margin-bottom:12px;
                "
            >
                Compare retailers
            </h3>

            <div
                style="
                    display:flex;
                    flex-direction:column;
                    gap:9px;
                "
            >

                ${product.retailers
                    .slice()
                    .sort(
                        (a,b) =>
                            a.price - b.price
                    )
                    .map(
                        retailer => {

                            const isBest =
                                retailer.name
                                ===
                                bestRetailer.name;

                            return `
                                <div
                                    style="
                                        display:flex;
                                        align-items:center;
                                        justify-content:space-between;
                                        gap:10px;
                                        padding:13px;
                                        border:1px solid
                                            ${isBest
                                                ? "var(--primary)"
                                                : "var(--border)"};
                                        border-radius:10px;
                                        background:
                                            ${isBest
                                                ? "var(--primary-light)"
                                                : "var(--surface)"};
                                    "
                                >

                                    <div>

                                        <strong>
                                            ${escapeHtml(retailer.name)}
                                        </strong>

                                        ${
                                            isBest
                                            ?
                                            `
                                            <span
                                                style="
                                                    color:var(--success);
                                                    font-size:11px;
                                                    display:block;
                                                    font-weight:700;
                                                "
                                            >
                                                BEST DEMO PRICE
                                            </span>
                                            `
                                            :
                                            ""
                                        }

                                    </div>

                                    <strong>
                                        ${money(retailer.price)}
                                    </strong>

                                </div>
                            `;

                        }
                    )
                    .join("")}

            </div>

            <div
                style="
                    margin-top:20px;
                    padding:12px;
                    border-radius:9px;
                    background:var(--surface-secondary);
                    color:var(--muted);
                    font-size:11px;
                "
            >
                ℹ️ Retailer prices shown here are demo
                data until live retailer/API connections
                are added.
            </div>

        </div>

    `;

    productModal.classList.remove(
        "hidden"
    );
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeProductModal() {

    productModal.classList.add(
        "hidden"
    );
}

closeModal.addEventListener(
    "click",
    closeProductModal
);

productModal
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeProductModal
    );

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {
            closeProductModal();
        }

    }
);


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch() {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();

    currentSearch = query;

    clearSearch.classList.toggle(
        "hidden",
        !query
    );

    suggestions.innerHTML = "";

    if (!query) {

        applyFilters();

        return;
    }

    const results =
        products.filter(
            product =>
                product.name
                    .toLowerCase()
                    .includes(query)
                ||
                product.brand
                    .toLowerCase()
                    .includes(query)
                ||
                product.category
                    .toLowerCase()
                    .includes(query)
        );

    currentProducts = results;

    renderProducts(results);

    document
        .getElementById("products")
        ?.scrollIntoView({
            behavior: "smooth"
        });
}


function showSuggestions() {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();

    if (!query) {

        suggestions.innerHTML = "";

        return;
    }

    const results =
        products
            .filter(
                product =>
                    product.name
                        .toLowerCase()
                        .includes(query)
                    ||
                    product.brand
                        .toLowerCase()
                        .includes(query)
            )
            .slice(0, 6);

    suggestions.innerHTML =
        results.map(
            product =>
                `
                <div
                    class="suggestion"
                    data-suggestion="${escapeHtml(product.id)}"
                >
                    🔎
                    <strong>
                        ${escapeHtml(product.name)}
                    </strong>
                    <span>
                        ${escapeHtml(product.brand)}
                    </span>
                </div>
                `
        ).join("");

    suggestions
        .querySelectorAll("[data-suggestion]")
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    const product =
                        products.find(
                            p =>
                                p.id
                                ===
                                item.dataset.suggestion
                        );

                    if (!product) {
                        return;
                    }

                    searchInput.value =
                        product.name;

                    suggestions.innerHTML = "";

                    performSearch();

                    openProduct(
                        product.id
                    );

                }
            );

        });
}


searchInput.addEventListener(
    "input",
    showSuggestions
);

searchInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            suggestions.innerHTML = "";

            performSearch();

        }

    }
);

searchButton.addEventListener(
    "click",
    performSearch
);

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        currentSearch = "";

        clearSearch.classList.add(
            "hidden"
        );

        suggestions.innerHTML = "";

        applyFilters();

    }
);


/* =========================================================
   QUICK SEARCH
   ========================================================= */

document
    .querySelectorAll(".quick-search")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                searchInput.value =
                    button.dataset.search;

                performSearch();

            }
        );

    });


/* =========================================================
   FILTERS
   ========================================================= */

function applyFilters() {

    const brand =
        brandFilter.value;

    const category =
        categoryFilter.value;

    const sort =
        sortFilter.value;

    const query =
        currentSearch;

    let filtered =
        products.filter(
            product => {

                const matchesBrand =
                    brand === "all"
                    ||
                    product.brand === brand;

                const matchesCategory =
                    category === "all"
                    ||
                    product.category === category;

                const searchable =
                    `
                    ${product.name}
                    ${product.brand}
                    ${product.category}
                    `
                    .toLowerCase();

                const matchesSearch =
                    !query
                    ||
                    searchable.includes(query);

                return (
                    matchesBrand
                    &&
                    matchesCategory
                    &&
                    matchesSearch
                );

            }
        );


    if (sort === "price-low") {

        filtered.sort(
            (a,b) =>
                a.price - b.price
        );

    } else if (sort === "price-high") {

        filtered.sort(
            (a,b) =>
                b.price - a.price
        );

    } else if (sort === "saving") {

        filtered.sort(
            (a,b) =>
                getSaving(b)
                -
                getSaving(a)
        );

    } else if (sort === "rating") {

        filtered.sort(
            (a,b) =>
                b.rating - a.rating
        );

    } else if (sort === "name") {

        filtered.sort(
            (a,b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    }

    renderProducts(filtered);

    updateActiveFilters(
        brand,
        category,
        sort
    );
}


brandFilter.addEventListener(
    "change",
    applyFilters
);

categoryFilter.addEventListener(
    "change",
    applyFilters
);

sortFilter.addEventListener(
    "change",
    applyFilters
);


/* =========================================================
   ACTIVE FILTER DISPLAY
   ========================================================= */

function updateActiveFilters(
    brand,
    category,
    sort
) {

    const active =
        [];

    if (brand !== "all") {
        active.push(
            `Brand: ${brand}`
        );
    }

    if (category !== "all") {

        const categoryName =
            category.charAt(0)
                .toUpperCase()
            +
            category.slice(1);

        active.push(
            `Category: ${categoryName}`
        );

    }

    if (sort !== "featured") {

        const names = {
            "price-low":
                "Price: Low → High",

            "price-high":
                "Price: High → Low",

            "saving":
                "Biggest saving",

            "rating":
                "Highest rated",

            "name":
                "Name"
        };

        active.push(
            `Sort: ${names[sort]}`
        );
    }

    if (currentSearch) {

        active.push(
            `Search: ${currentSearch}`
        );

    }

    document.getElementById(
        "activeFilters"
    ).innerHTML =
        active.map(
            item =>
                `
                <span
                    style="
                        padding:5px 9px;
                        background:var(--primary-light);
                        color:var(--primary);
                        border-radius:7px;
                        font-size:11px;
                        font-weight:700;
                    "
                >
                    ${escapeHtml(item)}
                </span>
                `
        ).join("");
}


/* =========================================================
   RESET FILTERS
   ========================================================= */

function resetFilters() {

    brandFilter.value =
        "all";

    categoryFilter.value =
        "all";

    sortFilter.value =
        "featured";

    searchInput.value = "";

    currentSearch = "";

    clearSearch.classList.add(
        "hidden"
    );

    suggestions.innerHTML = "";

    applyFilters();

}


document
    .getElementById("resetFilters")
    .addEventListener(
        "click",
        resetFilters
    );

document
    .getElementById("resetSearch")
    .addEventListener(
        "click",
        resetFilters
    );


/* =========================================================
   CATEGORY BUTTONS
   ========================================================= */

document
    .querySelectorAll(".category-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                categoryFilter.value =
                    button.dataset.category;

                brandFilter.value =
                    "all";

                sortFilter.value =
                    "featured";

                currentSearch = "";

                searchInput.value = "";

                applyFilters();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* =========================================================
   BRAND BUTTONS
   ========================================================= */

document
    .querySelectorAll(".brand-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                brandFilter.value =
                    button.dataset.brand;

                categoryFilter.value =
                    "all";

                sortFilter.value =
                    "featured";

                currentSearch = "";

                searchInput.value = "";

                applyFilters();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* =========================================================
   SHOW ALL
   ========================================================= */

document
    .getElementById("showAllProducts")
    .addEventListener(
        "click",
        () => {

            resetFilters();

            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================================
   DARK MODE
   ========================================================= */

function updateThemeIcon() {

    const dark =
        document.body.classList.contains(
            "dark"
        );

    themeToggle.textContent =
        dark ? "☀️" : "🌙";
}


function loadTheme() {

    const saved =
        localStorage.getItem(
            "pricepilot-theme"
        );

    if (saved === "dark") {

        document.body.classList.add(
            "dark"
        );

    }

    updateThemeIcon();
}


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        const dark =
            document.body.classList.contains(
                "dark"
            );

        localStorage.setItem(
            "pricepilot-theme",
            dark ? "dark" : "light"
        );

        updateThemeIcon();

        showToast(
            dark
            ? "🌙 Dark mode enabled"
            : "☀️ Light mode enabled"
        );

    }
);


/* =========================================================
   DEAL ALERT BUTTON
   ========================================================= */

document
    .getElementById("alertButton")
    .addEventListener(
        "click",
        () => {

            showToast(
                "🔔 Price alerts are coming soon!"
            );

        }
    );


/* =========================================================
   CLOSE SUGGESTIONS
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".search-wrapper"
            )
        ) {

            suggestions.innerHTML = "";

        }

    }
);


/* =========================================================
   UPDATE PRODUCT COUNT
   ========================================================= */

function updateProductCount() {

    productCount.textContent =
        products.length;
}


/* =========================================================
   RENDER EVERYTHING
   ========================================================= */

function renderAll() {

    applyFilters();

    renderTrending();

    renderDeals();

    renderFavourites();

    renderRecentlyViewed();

    updateFavouriteCount();

    updateProductCount();

}


/* =========================================================
   INITIALISE
   ========================================================= */

loadTheme();

renderAll();


/* =========================================================
   CONSOLE INFORMATION
   ========================================================= */

console.log(
    "PricePilot 3.0 loaded successfully."
);

console.log(
    `${products.length} products loaded.`
);
