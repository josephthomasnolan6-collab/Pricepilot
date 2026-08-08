const products = [

    // =========================
    // APPLE IPHONES
    // =========================

    {
        id: "iphone-16-pro-max",
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        category: "phone",
        price: 1199,
        oldPrice: 1299,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 1199,
            Currys: 1199
        }
    },

    {
        id: "iphone-16-pro",
        brand: "Apple",
        name: "iPhone 16 Pro",
        category: "phone",
        price: 999,
        oldPrice: 1099,
        image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 999,
            Currys: 999
        }
    },

    {
        id: "iphone-16",
        brand: "Apple",
        name: "iPhone 16",
        category: "phone",
        price: 799,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 799,
            Currys: 789
        }
    },

    {
        id: "iphone-16-plus",
        brand: "Apple",
        name: "iPhone 16 Plus",
        category: "phone",
        price: 899,
        oldPrice: 999,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 899,
            Currys: 879
        }
    },

    {
        id: "iphone-15-pro-max",
        brand: "Apple",
        name: "iPhone 15 Pro Max",
        category: "phone",
        price: 999,
        oldPrice: 1199,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 999,
            Currys: 979
        }
    },

    {
        id: "iphone-15-pro",
        brand: "Apple",
        name: "iPhone 15 Pro",
        category: "phone",
        price: 899,
        oldPrice: 1099,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 899,
            Currys: 899
        }
    },

    {
        id: "iphone-15",
        brand: "Apple",
        name: "iPhone 15",
        category: "phone",
        price: 699,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 699,
            Currys: 679
        }
    },

    {
        id: "iphone-15-plus",
        brand: "Apple",
        name: "iPhone 15 Plus",
        category: "phone",
        price: 799,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 799,
            Currys: 789
        }
    },

    {
        id: "iphone-se",
        brand: "Apple",
        name: "iPhone SE",
        category: "phone",
        price: 449,
        oldPrice: 499,
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 449,
            Currys: 439
        }
    },


    // =========================
    // APPLE IPADS
    // =========================

    {
        id: "ipad-pro-13",
        brand: "Apple",
        name: "iPad Pro 13-inch",
        category: "tablet",
        price: 1299,
        oldPrice: 1399,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 1299,
            Currys: 1299
        }
    },

    {
        id: "ipad-air",
        brand: "Apple",
        name: "iPad Air",
        category: "tablet",
        price: 699,
        oldPrice: 749,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 699,
            Currys: 679
        }
    },

    {
        id: "ipad-10",
        brand: "Apple",
        name: "iPad 10th Generation",
        category: "tablet",
        price: 449,
        oldPrice: 499,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 449,
            Currys: 439
        }
    },


    // =========================
    // APPLE WATCH
    // =========================

    {
        id: "apple-watch-ultra-2",
        brand: "Apple",
        name: "Apple Watch Ultra 2",
        category: "watch",
        price: 799,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 799,
            Currys: 779
        }
    },

    {
        id: "apple-watch-series-10",
        brand: "Apple",
        name: "Apple Watch Series 10",
        category: "watch",
        price: 449,
        oldPrice: 499,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 449,
            Currys: 439
        }
    },


    // =========================
    // AIRPODS
    // =========================

    {
        id: "airpods-pro-2",
        brand: "Apple",
        name: "AirPods Pro 2",
        category: "audio",
        price: 249,
        oldPrice: 279,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 249,
            Currys: 239
        }
    },

    {
        id: "airpods-4",
        brand: "Apple",
        name: "AirPods 4",
        category: "audio",
        price: 179,
        oldPrice: 199,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 179,
            Currys: 169
        }
    },


    // =========================
    // SAMSUNG GALAXY S
    // =========================

    {
        id: "galaxy-s25-ultra",
        brand: "Samsung",
        name: "Samsung Galaxy S25 Ultra",
        category: "phone",
        price: 1249,
        oldPrice: 1349,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 1249,
            Currys: 1199
        }
    },

    {
        id: "galaxy-s25-plus",
        brand: "Samsung",
        name: "Samsung Galaxy S25+",
        category: "phone",
        price: 999,
        oldPrice: 1099,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 999,
            Currys: 979
        }
    },

    {
        id: "galaxy-s25",
        brand: "Samsung",
        name: "Samsung Galaxy S25",
        category: "phone",
        price: 799,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 799,
            Currys: 769
        }
    },

    {
        id: "galaxy-s24-ultra",
        brand: "Samsung",
        name: "Samsung Galaxy S24 Ultra",
        category: "phone",
        price: 999,
        oldPrice: 1249,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 999,
            Currys: 949
        }
    },

    {
        id: "galaxy-s24",
        brand: "Samsung",
        name: "Samsung Galaxy S24",
        category: "phone",
        price: 649,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 649,
            Currys: 629
        }
    },


    // =========================
    // SAMSUNG FOLDABLES
    // =========================

    {
        id: "galaxy-z-fold-6",
        brand: "Samsung",
        name: "Samsung Galaxy Z Fold6",
        category: "phone",
        price: 1799,
        oldPrice: 1999,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 1799,
            Currys: 1699
        }
    },

    {
        id: "galaxy-z-flip-6",
        brand: "Samsung",
        name: "Samsung Galaxy Z Flip6",
        category: "phone",
        price: 999,
        oldPrice: 1099,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 999,
            Currys: 949
        }
    },


    // =========================
    // SAMSUNG TABLETS
    // =========================

    {
        id: "galaxy-tab-s10-ultra",
        brand: "Samsung",
        name: "Samsung Galaxy Tab S10 Ultra",
        category: "tablet",
        price: 1199,
        oldPrice: 1349,
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 1199,
            Currys: 1149
        }
    },

    {
        id: "galaxy-tab-s9",
        brand: "Samsung",
        name: "Samsung Galaxy Tab S9",
        category: "tablet",
        price: 699,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 699,
            Currys: 649
        }
    },


    // =========================
    // SAMSUNG WATCHES
    // =========================

    {
        id: "galaxy-watch-ultra",
        brand: "Samsung",
        name: "Samsung Galaxy Watch Ultra",
        category: "watch",
        price: 649,
        oldPrice: 699,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 649,
            Currys: 599
        }
    },

    {
        id: "galaxy-watch-7",
        brand: "Samsung",
        name: "Samsung Galaxy Watch7",
        category: "watch",
        price: 349,
        oldPrice: 399,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 349,
            Currys: 329
        }
    },


    // =========================
    // SAMSUNG BUDS
    // =========================

    {
        id: "galaxy-buds-3-pro",
        brand: "Samsung",
        name: "Samsung Galaxy Buds3 Pro",
        category: "audio",
        price: 249,
        oldPrice: 279,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 249,
            Currys: 229
        }
    },

    {
        id: "galaxy-buds-3",
        brand: "Samsung",
        name: "Samsung Galaxy Buds3",
        category: "audio",
        price: 179,
        oldPrice: 199,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 179,
            Currys: 169
        }
    },


    // =========================
    // GOOGLE PIXEL
    // =========================

    {
        id: "pixel-9-pro-xl",
        brand: "Google",
        name: "Google Pixel 9 Pro XL",
        category: "phone",
        price: 1199,
        oldPrice: 1299,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 1199,
            Currys: 1149
        }
    },

    {
        id: "pixel-9-pro",
        brand: "Google",
        name: "Google Pixel 9 Pro",
        category: "phone",
        price: 999,
        oldPrice: 1099,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 999,
            Currys: 949
        }
    },

    {
        id: "pixel-9",
        brand: "Google",
        name: "Google Pixel 9",
        category: "phone",
        price: 799,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 799,
            Currys: 749
        }
    },

    {
        id: "pixel-8-pro",
        brand: "Google",
        name: "Google Pixel 8 Pro",
        category: "phone",
        price: 699,
        oldPrice: 999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 699,
            Currys: 649
        }
    },

    {
        id: "pixel-8",
        brand: "Google",
        name: "Google Pixel 8",
        category: "phone",
        price: 499,
        oldPrice: 699,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 499,
            Currys: 479
        }
    },


    // =========================
    // GOOGLE TABLETS
    // =========================

    {
        id: "pixel-tablet",
        brand: "Google",
        name: "Google Pixel Tablet",
        category: "tablet",
        price: 499,
        oldPrice: 599,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 499,
            Currys: 479
        }
    },


    // =========================
    // GOOGLE WATCH
    // =========================

    {
        id: "pixel-watch-3",
        brand: "Google",
        name: "Google Pixel Watch 3",
        category: "watch",
        price: 399,
        oldPrice: 449,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 399,
            Currys: 379
        }
    },


    // =========================
    // GOOGLE EARBUDS
    // =========================

    {
        id: "pixel-buds-pro-2",
        brand: "Google",
        name: "Google Pixel Buds Pro 2",
        category: "audio",
        price: 229,
        oldPrice: 249,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80",
        retailers: {
            Amazon: 229,
            Currys: 219
        }
    }

];


// ======================================
// DOM ELEMENTS
// ======================================

const productGrid = document.getElementById("productGrid");
const dealGrid = document.getElementById("dealGrid");
const favouritesGrid = document.getElementById("favouritesGrid");

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const suggestions = document.getElementById("suggestions");

const brandFilter = document.getElementById("brandFilter");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

const noResults = document.getElementById("noResults");

const themeToggle = document.getElementById("themeToggle");

const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

const emptyFavourites = document.getElementById("emptyFavourites");


// ======================================
// FAVOURITES
// ======================================

let favourites = JSON.parse(
    localStorage.getItem("pricepilot-favourites") || "[]"
);

function saveFavourites() {
    localStorage.setItem(
        "pricepilot-favourites",
        JSON.stringify(favourites)
    );
}

function toggleFavourite(id) {

    if (favourites.includes(id)) {

        favourites = favourites.filter(
            favouriteId => favouriteId !== id
        );

    } else {

        favourites.push(id);
    }

    saveFavourites();

    renderProducts();
    renderFavourites();
}


// ======================================
// LOWEST PRICE
// ======================================

function getLowestPrice(product) {

    return Math.min(
        ...Object.values(product.retailers)
    );
}

function getBestRetailer(product) {

    const entries = Object.entries(product.retailers);

    entries.sort((a, b) => a[1] - b[1]);

    return entries[0][0];
}


// ======================================
// PRODUCT CARD
// ======================================

function createProductCard(product) {

    const lowestPrice = getLowestPrice(product);
    const bestRetailer = getBestRetailer(product);

    const saving =
        product.oldPrice > lowestPrice
            ? product.oldPrice - lowestPrice
            : 0;

    const isFavourite =
        favourites.includes(product.id);

    return `
        <article class="product-card">

            <button
                class="favourite-button ${isFavourite ? "active" : ""}"
                onclick="toggleFavourite('${product.id}')"
                aria-label="Favourite ${product.name}"
            >
                ${isFavourite ? "♥" : "♡"}
            </button>

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

            </div>

            <div class="product-info">

                <div class="product-brand">
                    ${product.brand}
                </div>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="price-row">

                    <span class="current-price">
                        €${lowestPrice.toLocaleString()}
                    </span>

                    ${
                        product.oldPrice
                            ? `<span class="old-price">
                                €${product.oldPrice.toLocaleString()}
                               </span>`
                            : ""
                    }

                </div>

                ${
                    saving > 0
                        ? `<div class="saving">
                            Save €${saving}
                           </div>`
                        : ""
                }

                <div class="best-deal">
                    Best price at ${bestRetailer}
                </div>

                <button
                    class="compare-button"
                    onclick="openProduct('${product.id}')"
                >
                    Compare prices
                </button>

            </div>

        </article>
    `;
}


// ======================================
// RENDER PRODUCTS
// ======================================

function renderProducts(customProducts = null) {

    let list = customProducts || [...products];

    const brand =
        brandFilter.value;

    const category =
        categoryFilter.value;

    const sort =
        sortFilter.value;

    if (brand !== "all") {

        list = list.filter(
            product => product.brand === brand
        );
    }

    if (category !== "all") {

        list = list.filter(
            product => product.category === category
        );
    }

    if (sort === "price-low") {

        list.sort(
            (a, b) =>
                getLowestPrice(a) -
                getLowestPrice(b)
        );

    } else if (sort === "price-high") {

        list.sort(
            (a, b) =>
                getLowestPrice(b) -
                getLowestPrice(a)
        );

    } else if (sort === "name") {

        list.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );
    }

    productGrid.innerHTML =
        list.map(createProductCard).join("");

    noResults.classList.toggle(
        "hidden",
        list.length !== 0
    );
}


// ======================================
// DEALS
// ======================================

function renderDeals() {

    const deals = [...products]
        .filter(
            product =>
                product.oldPrice &&
                product.oldPrice >
                getLowestPrice(product)
        )
        .sort(
            (a, b) => {

                const savingA =
                    a.oldPrice -
                    getLowestPrice(a);

                const savingB =
                    b.oldPrice -
                    getLowestPrice(b);

                return savingB - savingA;
            }
        )
        .slice(0, 8);

    dealGrid.innerHTML =
        deals.map(createProductCard).join("");
}


// ======================================
// FAVOURITES
// ======================================

function renderFavourites() {

    const favouriteProducts =
        products.filter(
            product =>
                favourites.includes(product.id)
        );

    favouritesGrid.innerHTML =
        favouriteProducts
            .map(createProductCard)
            .join("");

    emptyFavourites.classList.toggle(
        "hidden",
        favouriteProducts.length > 0
    );
}


// ======================================
// SEARCH
// ======================================

function performSearch() {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();

    if (!query) {

        renderProducts();

        return;
    }

    const results =
        products.filter(product =>
            `${product.brand} ${product.name} ${product.category}`
                .toLowerCase()
                .includes(query)
        );

    renderProducts(results);

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ======================================
// SEARCH SUGGESTIONS
// ======================================

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
            .filter(product =>
                product.name
                    .toLowerCase()
                    .includes(query)
            )
            .slice(0, 6);

    suggestions.innerHTML =
        results
            .map(product => `
                <div
                    class="suggestion"
                    data-id="${product.id}"
                >
                    <strong>
                        ${product.name}
                    </strong>

                    <span>
                        — from €${getLowestPrice(product)}
                    </span>
                </div>
            `)
            .join("");

    document
        .querySelectorAll(".suggestion")
        .forEach(element => {

            element.addEventListener(
                "click",
                () => {

                    const product =
                        products.find(
                            item =>
                                item.id ===
                                element.dataset.id
                        );

                    searchInput.value =
                        product.name;

                    suggestions.innerHTML = "";

                    openProduct(product.id);
                }
            );
        });
}


// ======================================
// PRODUCT MODAL
// ======================================

function openProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    const lowestPrice =
        getLowestPrice(product);

    const bestRetailer =
        getBestRetailer(product);

    const retailers =
        Object.entries(product.retailers);

    modalContent.innerHTML = `

        <div class="product-brand">
            ${product.brand}
        </div>

        <h2 style="font-size:32px;margin:8px 0 20px;">
            ${product.name}
        </h2>

        <p style="color:var(--muted);margin-bottom:25px;">
            Compare available retailer prices below.
        </p>

        <div style="
            padding:20px;
            border-radius:15px;
            background:var(--bg);
            margin-bottom:25px;
        ">

            <strong>
                Best price
            </strong>

            <div style="
                font-size:36px;
                font-weight:800;
                margin-top:5px;
            ">
                €${lowestPrice.toLocaleString()}
            </div>

            <div style="
                color:var(--success);
                font-weight:700;
                margin-top:5px;
            ">
                ${bestRetailer}
            </div>

        </div>

        <h3 style="margin-bottom:15px;">
            Retailer comparison
        </h3>

        ${retailers.map(([retailer, price]) => `

            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:17px 0;
                border-bottom:1px solid var(--border);
            ">

                <strong>
                    ${retailer}
                </strong>

                <div>
                    <strong style="font-size:20px;">
                        €${price.toLocaleString()}
                    </strong>

                    ${
                        price === lowestPrice
                            ? `
                                <span style="
                                    color:var(--success);
                                    margin-left:8px;
                                    font-size:12px;
                                    font-weight:bold;
                                ">
                                    BEST PRICE
                                </span>
                              `
                            : ""
                    }

                </div>

            </div>

        `).join("")}

        <p style="
            margin-top:20px;
            font-size:12px;
            color:var(--muted);
        ">
            Demo prices are currently displayed.
            Live retailer API connections can be added later.
        </p>

    `;

    productModal.classList.remove("hidden");
}


// ======================================
// CLOSE MODAL
// ======================================

closeModal.addEventListener(
    "click",
    () => {
        productModal.classList.add("hidden");
    }
);

productModal.addEventListener(
    "click",
    event => {

        if (event.target === productModal) {

            productModal.classList.add("hidden");
        }
    }
);


// ======================================
// SEARCH EVENTS
// ======================================

searchButton.addEventListener(
    "click",
    performSearch
);

searchInput.addEventListener(
    "input",
    showSuggestions
);

searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            suggestions.innerHTML = "";

            performSearch();
        }
    }
);


// ======================================
// QUICK SEARCH
// ======================================

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


// ======================================
// FILTERS
// ======================================

brandFilter.addEventListener(
    "change",
    renderProducts
);

categoryFilter.addEventListener(
    "change",
    renderProducts
);

sortFilter.addEventListener(
    "change",
    renderProducts
);


// ======================================
// CATEGORY BUTTONS
// ======================================

document
    .querySelectorAll(".category-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                categoryFilter.value =
                    button.dataset.category;

                renderProducts();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });
            }
        );
    });


// ======================================
// BRAND BUTTONS
// ======================================

document
    .querySelectorAll(".brand-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                brandFilter.value =
                    button.dataset.brand;

                renderProducts();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });
            }
        );
    });


// ======================================
// DARK MODE
// ======================================

const savedTheme =
    localStorage.getItem(
        "pricepilot-theme"
    );

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        themeToggle.textContent =
            dark ? "☀️" : "🌙";

        localStorage.setItem(
            "pricepilot-theme",
            dark ? "dark" : "light"
        );
    }
);


// ======================================
// INITIAL LOAD
// ======================================

renderProducts();
renderDeals();
renderFavourites();

console.log(
    `PricePilot loaded ${products.length} products.`
);
