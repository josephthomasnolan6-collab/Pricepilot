/* =========================================================
   PRICEPILOT 4.0
   PROFESSIONAL FRONTEND ENGINE

   IMPORTANT:
   Product prices are demonstration data.

   Real retailer/API credentials must NOT be placed
   inside this file.

   Future architecture:

   PricePilot frontend
          ↓
   PricePilot backend
          ↓
   Retailer APIs / feeds
          ↓
   Price database
          ↓
   Price history + alerts
========================================================= */


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [

    {
        id: "iphone-16",
        brand: "Apple",
        name: "iPhone 16",
        category: "phone",
        price: 849,
        oldPrice: 899,
        lowestEver: 829,
        rating: 4.8,
        popularity: 98,
        image:
            "https://images.unsplash.com/photo-1592286927505-2fd6e7f3c5bd?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 849 },
            { name: "Currys", price: 879 }
        ],
        specs: [
            "6.1-inch Super Retina XDR",
            "A18 chip",
            "48MP Fusion camera",
            "USB-C",
            "Face ID"
        ]
    },

    {
        id: "iphone-16-pro",
        brand: "Apple",
        name: "iPhone 16 Pro",
        category: "phone",
        price: 1099,
        oldPrice: 1199,
        lowestEver: 1049,
        rating: 4.9,
        popularity: 99,
        image:
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 1099 },
            { name: "Currys", price: 1149 }
        ],
        specs: [
            "6.3-inch Super Retina XDR",
            "A18 Pro chip",
            "48MP camera system",
            "5x Telephoto",
            "Titanium design"
        ]
    },

    {
        id: "iphone-16-pro-max",
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        category: "phone",
        price: 1199,
        oldPrice: 1299,
        lowestEver: 1149,
        rating: 4.9,
        popularity: 100,
        image:
            "https://images.unsplash.com/photo-1592286927505-2fd6e7f3c5bd?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 1199 },
            { name: "Currys", price: 1249 }
        ],
        specs: [
            "6.9-inch Super Retina XDR",
            "A18 Pro chip",
            "48MP camera system",
            "5x Telephoto",
            "USB-C"
        ]
    },

    {
        id: "iphone-15",
        brand: "Apple",
        name: "iPhone 15",
        category: "phone",
        price: 699,
        oldPrice: 799,
        lowestEver: 679,
        rating: 4.7,
        popularity: 91,
        image:
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 699 },
            { name: "Currys", price: 729 }
        ],
        specs: [
            "6.1-inch Super Retina XDR",
            "A16 Bionic",
            "48MP camera",
            "USB-C",
            "Dynamic Island"
        ]
    },

    {
        id: "ipad-air",
        brand: "Apple",
        name: "iPad Air",
        category: "tablet",
        price: 599,
        oldPrice: 649,
        lowestEver: 579,
        rating: 4.8,
        popularity: 88,
        image:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 599 },
            { name: "Currys", price: 629 }
        ],
        specs: [
            "Liquid Retina display",
            "M2 chip",
            "Apple Pencil support",
            "USB-C",
            "Touch ID"
        ]
    },

    {
        id: "ipad-pro",
        brand: "Apple",
        name: "iPad Pro",
        category: "tablet",
        price: 999,
        oldPrice: 1099,
        lowestEver: 969,
        rating: 4.9,
        popularity: 84,
        image:
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 999 },
            { name: "Currys", price: 1049 }
        ],
        specs: [
            "Ultra Retina XDR",
            "M4 chip",
            "ProMotion",
            "Thunderbolt",
            "Face ID"
        ]
    },

    {
        id: "airpods-pro-2",
        brand: "Apple",
        name: "AirPods Pro 2",
        category: "audio",
        price: 229,
        oldPrice: 249,
        lowestEver: 219,
        rating: 4.8,
        popularity: 95,
        image:
            "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 229 },
            { name: "Currys", price: 239 }
        ],
        specs: [
            "Active Noise Cancellation",
            "Adaptive Audio",
            "USB-C",
            "MagSafe",
            "IP54"
        ]
    },

    {
        id: "apple-watch-10",
        brand: "Apple",
        name: "Apple Watch Series 10",
        category: "watch",
        price: 449,
        oldPrice: 499,
        lowestEver: 429,
        rating: 4.7,
        popularity: 87,
        image:
            "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 449 },
            { name: "Currys", price: 469 }
        ],
        specs: [
            "Always-On Retina",
            "S10 SiP",
            "Sleep tracking",
            "GPS",
            "Water resistant"
        ]
    },


    /* =====================================================
       SAMSUNG
    ===================================================== */

    {
        id: "galaxy-s25",
        brand: "Samsung",
        name: "Galaxy S25",
        category: "phone",
        price: 899,
        oldPrice: 959,
        lowestEver: 879,
        rating: 4.8,
        popularity: 96,
        image:
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 899 },
            { name: "Currys", price: 929 }
        ],
        specs: [
            "6.2-inch Dynamic AMOLED 2X",
            "Snapdragon processor",
            "50MP camera",
            "Galaxy AI",
            "IP68"
        ]
    },

    {
        id: "galaxy-s25-plus",
        brand: "Samsung",
        name: "Galaxy S25+",
        category: "phone",
        price: 999,
        oldPrice: 1099,
        lowestEver: 969,
        rating: 4.8,
        popularity: 93,
        image:
            "https://images.unsplash.com/photo-1610945264803-cb5e2c7e3d72?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 999 },
            { name: "Currys", price: 1049 }
        ],
        specs: [
            "6.7-inch AMOLED",
            "Snapdragon",
            "50MP camera",
            "Galaxy AI",
            "IP68"
        ]
    },

    {
        id: "galaxy-s25-ultra",
        brand: "Samsung",
        name: "Galaxy S25 Ultra",
        category: "phone",
        price: 1249,
        oldPrice: 1349,
        lowestEver: 1199,
        rating: 4.9,
        popularity: 99,
        image:
            "https://images.unsplash.com/photo-1610945265078-3852dba0a2e1?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 1249 },
            { name: "Currys", price: 1299 }
        ],
        specs: [
            "6.9-inch AMOLED",
            "200MP camera",
            "S Pen",
            "Galaxy AI",
            "Snapdragon"
        ]
    },

    {
        id: "galaxy-a56",
        brand: "Samsung",
        name: "Galaxy A56",
        category: "phone",
        price: 479,
        oldPrice: 499,
        lowestEver: 459,
        rating: 4.6,
        popularity: 82,
        image:
            "https://images.unsplash.com/photo-1610945264803-cb5e2c7e3d72?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 479 },
            { name: "Currys", price: 499 }
        ],
        specs: [
            "6.7-inch AMOLED",
            "50MP camera",
            "5G",
            "5000mAh battery",
            "IP67"
        ]
    },

    {
        id: "galaxy-tab-s10",
        brand: "Samsung",
        name: "Galaxy Tab S10",
        category: "tablet",
        price: 799,
        oldPrice: 899,
        lowestEver: 769,
        rating: 4.7,
        popularity: 81,
        image:
            "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 799 },
            { name: "Currys", price: 829 }
        ],
        specs: [
            "Dynamic AMOLED 2X",
            "S Pen",
            "Galaxy AI",
            "Wi-Fi",
            "Large battery"
        ]
    },

    {
        id: "galaxy-watch7",
        brand: "Samsung",
        name: "Galaxy Watch7",
        category: "watch",
        price: 299,
        oldPrice: 349,
        lowestEver: 279,
        rating: 4.6,
        popularity: 79,
        image:
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 299 },
            { name: "Currys", price: 319 }
        ],
        specs: [
            "Super AMOLED",
            "Galaxy AI",
            "Sleep tracking",
            "GPS",
            "Water resistant"
        ]
    },

    {
        id: "galaxy-buds3-pro",
        brand: "Samsung",
        name: "Galaxy Buds3 Pro",
        category: "audio",
        price: 219,
        oldPrice: 249,
        lowestEver: 199,
        rating: 4.6,
        popularity: 77,
        image:
            "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 219 },
            { name: "Currys", price: 229 }
        ],
        specs: [
            "Adaptive Noise Control",
            "Galaxy AI",
            "Hi-Fi audio",
            "Wireless charging",
            "IP57"
        ]
    },


    /* =====================================================
       GOOGLE
    ===================================================== */

    {
        id: "pixel-9",
        brand: "Google",
        name: "Pixel 9",
        category: "phone",
        price: 799,
        oldPrice: 899,
        lowestEver: 749,
        rating: 4.7,
        popularity: 91,
        image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 799 },
            { name: "Currys", price: 829 }
        ],
        specs: [
            "6.3-inch OLED",
            "Google Tensor G4",
            "50MP camera",
            "Gemini AI",
            "IP68"
        ]
    },

    {
        id: "pixel-9-pro",
        brand: "Google",
        name: "Pixel 9 Pro",
        category: "phone",
        price: 999,
        oldPrice: 1099,
        lowestEver: 949,
        rating: 4.8,
        popularity: 94,
        image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 999 },
            { name: "Currys", price: 1049 }
        ],
        specs: [
            "6.3-inch LTPO OLED",
            "Tensor G4",
            "50MP triple camera",
            "Gemini AI",
            "IP68"
        ]
    },

    {
        id: "pixel-9-pro-xl",
        brand: "Google",
        name: "Pixel 9 Pro XL",
        category: "phone",
        price: 1099,
        oldPrice: 1199,
        lowestEver: 1049,
        rating: 4.8,
        popularity: 92,
        image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 1099 },
            { name: "Currys", price: 1149 }
        ],
        specs: [
            "6.8-inch LTPO OLED",
            "Tensor G4",
            "50MP triple camera",
            "Gemini AI",
            "IP68"
        ]
    },

    {
        id: "pixel-watch-3",
        brand: "Google",
        name: "Pixel Watch 3",
        category: "watch",
        price: 349,
        oldPrice: 399,
        lowestEver: 329,
        rating: 4.6,
        popularity: 76,
        image:
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 349 },
            { name: "Currys", price: 369 }
        ],
        specs: [
            "Actua display",
            "Fitbit tracking",
            "GPS",
            "Wear OS",
            "Google Assistant"
        ]
    },

    {
        id: "pixel-buds-pro-2",
        brand: "Google",
        name: "Pixel Buds Pro 2",
        category: "audio",
        price: 229,
        oldPrice: 249,
        lowestEver: 209,
        rating: 4.5,
        popularity: 74,
        image:
            "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
        retailers: [
            { name: "Amazon", price: 229 },
            { name: "Currys", price: 239 }
        ],
        specs: [
            "Active Noise Cancellation",
            "Google Tensor A1",
            "Gemini",
            "Wireless charging",
            "IP54"
        ]
    }

];


/* =========================================================
   GLOBAL STATE
========================================================= */

let favourites =
    JSON.parse(
        localStorage.getItem(
            "pricepilot-favourites"
        )
    ) || [];


let recentlyViewed =
    JSON.parse(
        localStorage.getItem(
            "pricepilot-recent"
        )
    ) || [];


let priceAlerts =
    JSON.parse(
        localStorage.getItem(
            "pricepilot-alerts"
        )
    ) || [];


let currentSearch = "";

let currentCountry =
    localStorage.getItem(
        "pricepilot-country"
    ) || "🇮🇪 Ireland";


/* =========================================================
   DOM
========================================================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );

const searchButton =
    document.getElementById(
        "searchButton"
    );

const clearSearch =
    document.getElementById(
        "clearSearch"
    );

const suggestions =
    document.getElementById(
        "suggestions"
    );

const productGrid =
    document.getElementById(
        "productGrid"
    );

const dealGrid =
    document.getElementById(
        "dealGrid"
    );

const trendingGrid =
    document.getElementById(
        "trendingGrid"
    );

const favouritesGrid =
    document.getElementById(
        "favouritesGrid"
    );

const recentGrid =
    document.getElementById(
        "recentGrid"
    );

const emptyFavourites =
    document.getElementById(
        "emptyFavourites"
    );

const emptyRecent =
    document.getElementById(
        "emptyRecent"
    );

const noResults =
    document.getElementById(
        "noResults"
    );

const productModal =
    document.getElementById(
        "productModal"
    );

const modalContent =
    document.getElementById(
        "modalContent"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const toast =
    document.getElementById(
        "toast"
    );

const favouriteCount =
    document.getElementById(
        "favouriteCount"
    );

const productCount =
    document.getElementById(
        "productCount"
    );

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const brandFilter =
    document.getElementById(
        "brandFilter"
    );

const categoryFilter =
    document.getElementById(
        "categoryFilter"
    );

const sortFilter =
    document.getElementById(
        "sortFilter"
    );


/* =========================================================
   UTILITIES
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


function saving(product) {

    return Math.max(
        0,
        product.oldPrice - product.price
    );
}


function savingPercent(product) {

    if (!product.oldPrice) {
        return 0;
    }

    return Math.round(
        (
            saving(product)
            /
            product.oldPrice
        ) * 100
    );
}


function bestRetailer(product) {

    return [...product.retailers]
        .sort(
            (a,b) =>
                a.price - b.price
        )[0];
}


function dealScore(product) {

    const discount =
        savingPercent(product);

    const rating =
        product.rating * 10;

    const historyBonus =
        product.price <= product.lowestEver
        ? 15
        : 0;

    return Math.min(
        100,
        Math.round(
            discount
            +
            rating
            +
            historyBonus
        )
    );
}


function escapeHTML(value) {

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

let toastTimeout;

function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toastTimeout
    );

    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function productCard(product) {

    const isFavourite =
        favourites.includes(
            product.id
        );

    const best =
        bestRetailer(product);

    const discount =
        savingPercent(product);

    const score =
        dealScore(product);

    const nearLowest =
        product.price <=
        product.lowestEver + 20;


    return `

        <article
            class="product-card"
            data-id="${escapeHTML(product.id)}"
        >

            <button
                class="favourite-button
                    ${isFavourite ? "active" : ""}"
                data-favourite="${escapeHTML(product.id)}"
            >
                ${isFavourite ? "♥" : "♡"}
            </button>


            ${
                discount >= 10
                ?
                `
                <div
                    style="
                        position:absolute;
                        top:12px;
                        left:12px;
                        z-index:4;
                        padding:5px 8px;
                        border-radius:6px;
                        background:#16a34a;
                        color:white;
                        font-size:9px;
                        font-weight:900;
                    "
                >
                    -${discount}%
                </div>
                `
                :
                ""
            }


            <div class="product-image">

                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <div class="product-brand">
                    ${escapeHTML(product.brand)}
                </div>


                <h3 class="product-name">
                    ${escapeHTML(product.name)}
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
                    discount > 0
                    ?
                    `
                    <span class="saving">
                        Save ${money(saving(product))}
                    </span>
                    `
                    :
                    ""
                }


                <div class="best-deal">

                    🏆
                    <strong>
                        ${escapeHTML(best.name)}
                    </strong>

                    · ${money(best.price)}

                    ${
                        nearLowest
                        ?
                        `
                        <div
                            style="
                                margin-top:4px;
                                color:var(--success);
                                font-weight:800;
                            "
                        >
                            📉 Near lowest tracked price
                        </div>
                        `
                        :
                        ""
                    }

                </div>


                <div
                    style="
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        margin-bottom:9px;
                    "
                >

                    <span
                        style="
                            color:#f59e0b;
                            font-size:10px;
                            font-weight:800;
                        "
                    >
                        ⭐ ${product.rating}
                    </span>

                    <span
                        style="
                            color:var(--muted);
                            font-size:9px;
                        "
                    >
                        Deal score ${score}/100
                    </span>

                </div>


                <button
                    class="compare-button"
                    data-product="${escapeHTML(product.id)}"
                >
                    Compare retailers
                </button>

            </div>

        </article>

    `;
}


/* =========================================================
   RENDER
========================================================= */

function renderProducts(list) {

    if (!list.length) {

        productGrid.innerHTML = "";

        noResults.classList.remove(
            "hidden"
        );

        return;
    }

    noResults.classList.add(
        "hidden"
    );

    productGrid.innerHTML =
        list.map(
            productCard
        ).join("");

    attachProductEvents(
        productGrid
    );
}


function renderDeals() {

    const deals =
        [...products]
            .sort(
                (a,b) =>
                    dealScore(b)
                    -
                    dealScore(a)
            )
            .slice(0,8);

    dealGrid.innerHTML =
        deals.map(
            productCard
        ).join("");

    attachProductEvents(
        dealGrid
    );
}


function renderTrending() {

    const trending =
        [...products]
            .sort(
                (a,b) =>
                    b.popularity
                    -
                    a.popularity
            )
            .slice(0,8);

    trendingGrid.innerHTML =
        trending.map(
            productCard
        ).join("");

    attachProductEvents(
        trendingGrid
    );
}


function renderFavourites() {

    const list =
        products.filter(
            product =>
                favourites.includes(
                    product.id
                )
        );

    if (!list.length) {

        favouritesGrid.innerHTML = "";

        emptyFavourites
            .classList
            .remove("hidden");

        return;
    }

    emptyFavourites
        .classList
        .add("hidden");

    favouritesGrid.innerHTML =
        list.map(
            productCard
        ).join("");

    attachProductEvents(
        favouritesGrid
    );
}


function renderRecentlyViewed() {

    const list =
        recentlyViewed
            .map(
                id =>
                    products.find(
                        product =>
                            product.id === id
                    )
            )
            .filter(Boolean);

    if (!list.length) {

        recentGrid.innerHTML = "";

        emptyRecent
            .classList
            .remove("hidden");

        return;
    }

    emptyRecent
        .classList
        .add("hidden");

    recentGrid.innerHTML =
        list.map(
            productCard
        ).join("");

    attachProductEvents(
        recentGrid
    );
}


/* =========================================================
   PRODUCT EVENTS
========================================================= */

function attachProductEvents(
    container
) {

    container
        .querySelectorAll(
            "[data-favourite]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        toggleFavourite(
                            button.dataset.favourite
                        );

                    }
                );

            }
        );


    container
        .querySelectorAll(
            "[data-product]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        openProduct(
                            button.dataset.product
                        );

                    }
                );

            }
        );


    container
        .querySelectorAll(
            ".product-card"
        )
        .forEach(
            card => {

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

            }
        );

}


/* =========================================================
   FAVOURITES
========================================================= */

function toggleFavourite(id) {

    if (
        favourites.includes(id)
    ) {

        favourites =
            favourites.filter(
                item =>
                    item !== id
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
        JSON.stringify(
            favourites
        )
    );


    updateFavouriteCount();

    renderFavourites();

    applyFilters();

}


function updateFavouriteCount() {

    favouriteCount.textContent =
        favourites.length;
}


/* =========================================================
   RECENT HISTORY
========================================================= */

function addRecent(id) {

    recentlyViewed =
        recentlyViewed.filter(
            item =>
                item !== id
        );

    recentlyViewed.unshift(id);

    recentlyViewed =
        recentlyViewed.slice(
            0,
            8
        );

    localStorage.setItem(
        "pricepilot-recent",
        JSON.stringify(
            recentlyViewed
        )
    );

    renderRecentlyViewed();
}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProduct(id) {

    const product =
        products.find(
            item =>
                item.id === id
        );

    if (!product) {
        return;
    }


    addRecent(id);


    const best =
        bestRetailer(product);

    const score =
        dealScore(product);


    modalContent.innerHTML = `

        <div>

            <div
                class="product-image"
                style="
                    height:280px;
                    border-radius:16px;
                    margin-bottom:22px;
                "
            >

                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                >

            </div>


            <div class="product-brand">
                ${escapeHTML(product.brand)}
            </div>


            <h2
                style="
                    font-size:32px;
                    line-height:1.1;
                    margin-bottom:8px;
                    letter-spacing:-1.2px;
                "
            >
                ${escapeHTML(product.name)}
            </h2>


            <div
                style="
                    display:flex;
                    gap:15px;
                    align-items:center;
                    margin-bottom:18px;
                    flex-wrap:wrap;
                "
            >

                <span
                    style="
                        color:#f59e0b;
                        font-size:12px;
                        font-weight:800;
                    "
                >
                    ⭐ ${product.rating}/5
                </span>

                <span
                    style="
                        padding:5px 8px;
                        background:var(--primary-light);
                        color:var(--primary);
                        border-radius:6px;
                        font-size:10px;
                        font-weight:800;
                    "
                >
                    Deal score ${score}/100
                </span>

            </div>


            <div
                style="
                    display:flex;
                    align-items:center;
                    gap:10px;
                    margin-bottom:12px;
                "
            >

                <strong
                    style="
                        font-size:32px;
                    "
                >
                    ${money(product.price)}
                </strong>

                <span class="old-price">
                    ${money(product.oldPrice)}
                </span>

            </div>


            <div
                style="
                    padding:13px;
                    border-radius:10px;
                    background:var(--surface-secondary);
                    margin-bottom:20px;
                "
            >

                <div
                    style="
                        font-size:10px;
                        color:var(--muted);
                        margin-bottom:3px;
                    "
                >
                    Lowest tracked price
                </div>

                <strong
                    style="
                        color:var(--success);
                        font-size:17px;
                    "
                >
                    ${money(product.lowestEver)}
                </strong>

            </div>


            <h3
                style="
                    font-size:16px;
                    margin-bottom:10px;
                "
            >
                Retailer comparison
            </h3>


            <div
                style="
                    display:grid;
                    gap:8px;
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
                                best.name;

                            return `

                                <div
                                    style="
                                        display:flex;
                                        justify-content:space-between;
                                        align-items:center;
                                        padding:14px;
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
                                            ${escapeHTML(retailer.name)}
                                        </strong>

                                        ${
                                            isBest
                                            ?
                                            `
                                            <div
                                                style="
                                                    color:var(--success);
                                                    font-size:9px;
                                                    font-weight:850;
                                                    margin-top:2px;
                                                "
                                            >
                                                CHEAPEST
                                            </div>
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


            <h3
                style="
                    margin-top:25px;
                    margin-bottom:10px;
                    font-size:16px;
                "
            >
                Key specifications
            </h3>


            <ul
                style="
                    padding-left:20px;
                    color:var(--text-secondary);
                    font-size:12px;
                "
            >

                ${product.specs
                    .map(
                        spec =>
                            `<li>${escapeHTML(spec)}</li>`
                    )
                    .join("")}

            </ul>


            <div
                style="
                    margin-top:25px;
                    padding:14px;
                    border-radius:10px;
                    background:var(--surface-secondary);
                    font-size:10px;
                    color:var(--muted);
                "
            >

                📊 Price history is prepared for
                the upcoming live retailer tracking
                system.

            </div>


            <button
                class="primary-button"
                style="
                    width:100%;
                    margin-top:15px;
                "
                id="modalAlertButton"
            >
                🔔 Track this price
            </button>

        </div>

    `;


    productModal.classList.remove(
        "hidden"
    );


    document
        .getElementById(
            "modalAlertButton"
        )
        .addEventListener(
            "click",
            () => {

                createAlert(
                    product.id
                );

            }
        );

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeProduct() {

    productModal
        .classList
        .add("hidden");

}


closeModal.addEventListener(
    "click",
    closeProduct
);


productModal
    .querySelector(
        ".modal-overlay"
    )
    .addEventListener(
        "click",
        closeProduct
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProduct();

            closeCountry();

        }

    }
);


/* =========================================================
   PRICE ALERTS
========================================================= */

function createAlert(id) {

    const product =
        products.find(
            item =>
                item.id === id
        );

    if (!product) {
        return;
    }


    const target =
        Math.round(
            product.price * .9
        );


    const existing =
        priceAlerts.find(
            alert =>
                alert.productId === id
        );


    if (existing) {

        showToast(
            "🔔 You're already tracking this product"
        );

        return;
    }


    priceAlerts.push(
        {
            productId: id,
            targetPrice: target,
            created:
                new Date()
                    .toISOString()
        }
    );


    localStorage.setItem(
        "pricepilot-alerts",
        JSON.stringify(
            priceAlerts
        )
    );


    showToast(
        `🔔 Alert created below ${money(target)}`
    );

}


/* =========================================================
   SEARCH
========================================================= */

function performSearch() {

    currentSearch =
        searchInput.value
            .trim()
            .toLowerCase();


    clearSearch.classList.toggle(
        "hidden",
        !currentSearch
    );


    suggestions.innerHTML = "";


    applyFilters();


    document
        .getElementById(
            "products"
        )
        .scrollIntoView(
            {
                behavior: "smooth"
            }
        );

}


searchButton.addEventListener(
    "click",
    performSearch
);


searchInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            performSearch();

        }

    }
);


searchInput.addEventListener(
    "input",
    showSuggestions
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        currentSearch = "";

        clearSearch
            .classList
            .add("hidden");

        suggestions.innerHTML = "";

        applyFilters();

    }
);


/* =========================================================
   AUTOCOMPLETE
========================================================= */

function showSuggestions() {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    if (!query) {

        suggestions.innerHTML = "";

        return;
    }


    const matches =
        products
            .filter(
                product => {

                    const text =
                        `
                        ${product.name}
                        ${product.brand}
                        ${product.category}
                        `
                        .toLowerCase();

                    return text.includes(
                        query
                    );

                }
            )
            .slice(0,6);


    suggestions.innerHTML =
        matches.map(
            product =>
                `

                <div
                    class="suggestion"
                    data-suggestion="${escapeHTML(product.id)}"
                >

                    🔎

                    <strong>
                        ${escapeHTML(product.name)}
                    </strong>

                    <span>
                        ${escapeHTML(product.brand)}
                    </span>

                </div>

                `
        ).join("");


    suggestions
        .querySelectorAll(
            "[data-suggestion]"
        )
        .forEach(
            item => {

                item.addEventListener(
                    "click",
                    () => {

                        searchInput.value =
                            products.find(
                                p =>
                                    p.id
                                    ===
                                    item.dataset.suggestion
                            ).name;

                        suggestions.innerHTML =
                            "";

                        performSearch();

                    }
                );

            }
        );

}


/* =========================================================
   QUICK SEARCH
========================================================= */

document
    .querySelectorAll(
        ".quick-search"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    searchInput.value =
                        button.dataset.search;

                    performSearch();

                }
            );

        }
    );


/* =========================================================
   FILTERING
========================================================= */

function applyFilters() {

    const brand =
        brandFilter.value;

    const category =
        categoryFilter.value;

    const sort =
        sortFilter.value;


    let results =
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
                    ${product.specs.join(" ")}
                    `
                    .toLowerCase();


                const matchesSearch =
                    !currentSearch
                    ||
                    searchable.includes(
                        currentSearch
                    );


                return (
                    matchesBrand
                    &&
                    matchesCategory
                    &&
                    matchesSearch
                );

            }
        );


    switch (sort) {

        case "price-low":

            results.sort(
                (a,b) =>
                    a.price - b.price
            );

            break;


        case "price-high":

            results.sort(
                (a,b) =>
                    b.price - a.price
            );

            break;


        case "saving":

            results.sort(
                (a,b) =>
                    saving(b)
                    -
                    saving(a)
            );

            break;


        case "rating":

            results.sort(
                (a,b) =>
                    b.rating
                    -
                    a.rating
            );

            break;


        case "name":

            results.sort(
                (a,b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

            break;


        default:

            results.sort(
                (a,b) =>
                    b.popularity
                    -
                    a.popularity
            );

    }


    renderProducts(
        results
    );


    renderActiveFilters(
        brand,
        category,
        sort
    );

}


/* =========================================================
   ACTIVE FILTERS
========================================================= */

function renderActiveFilters(
    brand,
    category,
    sort
) {

    const list = [];


    if (brand !== "all") {

        list.push(
            `Brand: ${brand}`
        );

    }


    if (category !== "all") {

        list.push(
            `Category: ${category}`
        );

    }


    if (
        sort !== "featured"
    ) {

        const names = {

            "price-low":
                "Lowest price",

            "price-high":
                "Highest price",

            saving:
                "Biggest saving",

            rating:
                "Highest rated",

            name:
                "Name"

        };

        list.push(
            `Sort: ${names[sort]}`
        );

    }


    if (currentSearch) {

        list.push(
            `Search: ${currentSearch}`
        );

    }


    document
        .getElementById(
            "activeFilters"
        )
        .innerHTML =
            list.map(
                item =>
                    `
                    <span
                        style="
                            padding:5px 9px;
                            border-radius:7px;
                            background:var(--primary-light);
                            color:var(--primary);
                            font-size:10px;
                            font-weight:800;
                        "
                    >
                        ${escapeHTML(item)}
                    </span>
                    `
            )
            .join("");

}


/* =========================================================
   FILTER EVENTS
========================================================= */

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
   RESET
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

    clearSearch
        .classList
        .add("hidden");

    suggestions.innerHTML = "";

    applyFilters();

}


document
    .getElementById(
        "resetFilters"
    )
    .addEventListener(
        "click",
        resetFilters
    );


document
    .getElementById(
        "resetSearch"
    )
    .addEventListener(
        "click",
        resetFilters
    );


document
    .getElementById(
        "showAllProducts"
    )
    .addEventListener(
        "click",
        () => {

            resetFilters();

            document
                .getElementById(
                    "products"
                )
                .scrollIntoView(
                    {
                        behavior:
                            "smooth"
                    }
                );

        }
    );


document
    .getElementById(
        "viewAllDeals"
    )
    .addEventListener(
        "click",
        () => {

            sortFilter.value =
                "saving";

            applyFilters();

            document
                .getElementById(
                    "products"
                )
                .scrollIntoView(
                    {
                        behavior:
                            "smooth"
                    }
                );

        }
    );


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

document
    .querySelectorAll(
        ".category-card"
    )
    .forEach(
        button => {

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
                        .getElementById(
                            "products"
                        )
                        .scrollIntoView(
                            {
                                behavior:
                                    "smooth"
                            }
                        );

                }
            );

        }
    );


/* =========================================================
   BRAND BUTTONS
========================================================= */

document
    .querySelectorAll(
        ".brand-card"
    )
    .forEach(
        button => {

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
                        .getElementById(
                            "products"
                        )
                        .scrollIntoView(
                            {
                                behavior:
                                    "smooth"
                            }
                        );

                }
            );

        }
    );


/* =========================================================
   DARK MODE
========================================================= */

function loadTheme() {

    const saved =
        localStorage.getItem(
            "pricepilot-theme"
        );


    if (
        saved === "dark"
    ) {

        document.body
            .classList
            .add("dark");

    }


    updateThemeButton();

}


function updateThemeButton() {

    themeToggle.textContent =
        document.body
            .classList
            .contains("dark")
        ? "☀️"
        : "🌙";

}


themeToggle.addEventListener(
    "click",
    () => {

        document.body
            .classList
            .toggle("dark");


        const dark =
            document.body
                .classList
                .contains("dark");


        localStorage.setItem(
            "pricepilot-theme",
            dark
                ? "dark"
                : "light"
        );


        updateThemeButton();


        showToast(
            dark
                ? "🌙 Dark mode enabled"
                : "☀️ Light mode enabled"
        );

    }
);


/* =========================================================
   COUNTRY SELECTOR
========================================================= */

const countryButton =
    document.getElementById(
        "countryButton"
    );

const countryModal =
    document.getElementById(
        "countryModal"
    );

const closeCountryButton =
    document.getElementById(
        "closeCountry"
    );


function openCountry() {

    countryModal
        .classList
        .remove("hidden");

}


function closeCountry() {

    countryModal
        .classList
        .add("hidden");

}


countryButton.addEventListener(
    "click",
    openCountry
);


closeCountryButton.addEventListener(
    "click",
    closeCountry
);


document
    .querySelectorAll(
        ".country-options button"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    currentCountry =
                        button.dataset.country;

                    countryButton.textContent =
                        currentCountry;

                    localStorage.setItem(
                        "pricepilot-country",
                        currentCountry
                    );

                    closeCountry();

                    showToast(
                        `🌍 Market changed to ${currentCountry}`
                    );

                }
            );

        }
);


countryButton.textContent =
    currentCountry;


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );


mobileMenuButton.addEventListener(
    "click",
    () => {

        mobileMenu
            .classList
            .toggle("open");

    }
);


mobileMenu
    .querySelectorAll("a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu
                        .classList
                        .remove("open");

                }
            );

        }
    );


/* =========================================================
   ANNOUNCEMENT
========================================================= */

document
    .getElementById(
        "announcementClose"
    )
    .addEventListener(
        "click",
        () => {

            document
                .querySelector(
                    ".announcement"
                )
                .style.display =
                    "none";

        }
    );


/* =========================================================
   ALERT BUTTON
========================================================= */

document
    .getElementById(
        "alertButton"
    )
    .addEventListener(
        "click",
        () => {

            const first =
                products[0];

            createAlert(
                first.id
            );

        }
    );


/* =========================================================
   LOGO
========================================================= */

document
    .getElementById(
        "logoButton"
    )
    .addEventListener(
        "click",
        event => {

            event.preventDefault();

            window.scrollTo(
                {
                    top: 0,
                    behavior:
                        "smooth"
                }
            );

        }
    );


/* =========================================================
   CLICK OUTSIDE SEARCH
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".search-wrapper"
            )
        ) {

            suggestions.innerHTML =
                "";

        }

    }
);


/* =========================================================
   PRODUCT COUNT
========================================================= */

productCount.textContent =
    products.length;


/* =========================================================
   INITIALISE
========================================================= */

loadTheme();

updateFavouriteCount();

renderDeals();

renderTrending();

renderFavourites();

renderRecentlyViewed();

applyFilters();


/* =========================================================
   DEVELOPMENT INFORMATION
========================================================= */

console.log(
    "PricePilot 4.0 loaded."
);

console.log(
    `Catalogue: ${products.length} products`
);

console.log(
    "Real retailer API layer: NEXT PHASE"
);

console.log(
    "Never place retailer API secrets in frontend JavaScript."
);
