/* =====================================================
   PRICEPILOT 3.0 — WORKING JAVASCRIPT
   ===================================================== */

const products = [
    {
        id: 1,
        brand: "Apple",
        name: "iPhone 17 Pro Max",
        category: "Phones",
        emoji: "📱",
        price: 1399,
        oldPrice: 1499,
        rating: 4.9,
        reviews: 842,
        dealScore: 96,
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
        name: "iPhone 17",
        category: "Phones",
        emoji: "📱",
        price: 899,
        oldPrice: 949,
        rating: 4.8,
        reviews: 1204,
        dealScore: 91,
        retailers: [
            ["Amazon", 899],
            ["Currys", 929],
            ["Apple", 949],
            ["Very", 919]
        ],
        history: [949, 949, 929, 929, 899, 899]
    },

    {
        id: 3,
        brand: "Samsung",
        name: "Galaxy S26 Ultra",
        category: "Phones",
        emoji: "📱",
        price: 1199,
        oldPrice: 1349,
        rating: 4.9,
        reviews: 731,
        dealScore: 95,
        retailers: [
            ["Amazon", 1199],
            ["Currys", 1249],
            ["Samsung", 1349],
            ["Very", 1219]
        ],
        history: [1349, 1299, 1299, 1249, 1219, 1199]
    },

    {
        id: 4,
        brand: "Google",
        name: "Pixel 10 Pro XL",
        category: "Phones",
        emoji: "📱",
        price: 999,
        oldPrice: 1099,
        rating: 4.7,
        reviews: 512,
        dealScore: 93,
        retailers: [
            ["Amazon", 999],
            ["Currys", 1029],
            ["Google", 1099],
            ["Very", 1049]
        ],
        history: [1099, 1099, 1049, 1029, 999, 999]
    },

    {
        id: 5,
        brand: "Apple",
        name: "MacBook Air M4",
        category: "Laptops",
        emoji: "💻",
        price: 999,
        oldPrice: 1099,
        rating: 4.9,
        reviews: 923,
        dealScore: 94,
        retailers: [
            ["Amazon", 999],
            ["Currys", 1049],
            ["Apple", 1099],
            ["Very", 1029]
        ],
        history: [1099, 1099, 1049, 1049, 999, 999]
    },

    {
        id: 6,
        brand: "Apple",
        name: "MacBook Pro 14 M4 Pro",
        category: "Laptops",
        emoji: "💻",
        price: 1849,
        oldPrice: 1999,
        rating: 4.9,
        reviews: 481,
        dealScore: 92,
        retailers: [
            ["Amazon", 1849],
            ["Currys", 1899],
            ["Apple", 1999],
            ["Very", 1949]
        ],
        history: [1999, 1949, 1949, 1899, 1899, 1849]
    },

    {
        id: 7,
        brand: "Dell",
        name: "Dell XPS 14",
        category: "Laptops",
        emoji: "💻",
        price: 1499,
        oldPrice: 1699,
        rating: 4.6,
        reviews: 318,
        dealScore: 89,
        retailers: [
            ["Amazon", 1499],
            ["Dell", 1599],
            ["Currys", 1549],
            ["Very", 1599]
        ],
        history: [1699, 1649, 1599, 1549, 1499, 1499]
    },

    {
        id: 8,
        brand: "Apple",
        name: "AirPods Pro 3",
        category: "Audio",
        emoji: "🎧",
        price: 229,
        oldPrice: 249,
        rating: 4.8,
        reviews: 1842,
        dealScore: 95,
        retailers: [
            ["Amazon", 229],
            ["Currys", 239],
            ["Apple", 249],
            ["Very", 235]
        ],
        history: [249, 249, 239, 239, 229, 229]
    },

    {
        id: 9,
        brand: "Samsung",
        name: "Galaxy Buds 4 Pro",
        category: "Audio",
        emoji: "🎧",
        price: 179,
        oldPrice: 229,
        rating: 4.6,
        reviews: 631,
        dealScore: 94,
        retailers: [
            ["Amazon", 179],
            ["Currys", 189],
            ["Samsung", 229],
            ["Very", 199]
        ],
        history: [229, 219, 199, 189, 179, 179]
    },

    {
        id: 10,
        brand: "Sony",
        name: "Sony WH-1000XM6",
        category: "Audio",
        emoji: "🎧",
        price: 349,
        oldPrice: 399,
        rating: 4.8,
        reviews: 921,
        dealScore: 90,
        retailers: [
            ["Amazon", 349],
            ["Currys", 369],
            ["Sony", 399],
            ["Very", 359]
        ],
        history: [399, 399, 379, 369, 359, 349]
    },

    {
        id: 11,
        brand: "Apple",
        name: "iPad Air M3",
        category: "Tablets",
        emoji: "📲",
        price: 649,
        oldPrice: 699,
        rating: 4.8,
        reviews: 723,
        dealScore: 91,
        retailers: [
            ["Amazon", 649],
            ["Currys", 669],
            ["Apple", 699],
            ["Very", 679]
        ],
        history: [699, 699, 679, 679, 649, 649]
    },

    {
        id: 12,
        brand: "Samsung",
        name: "Galaxy Tab S11 Ultra",
        category: "Tablets",
        emoji: "📲",
        price: 999,
        oldPrice: 1199,
        rating: 4.7,
        reviews: 381,
        dealScore: 93,
        retailers: [
            ["Amazon", 999],
            ["Currys", 1049],
            ["Samsung", 1199],
            ["Very", 1079]
        ],
        history: [1199, 1149, 1099, 1049, 999, 999]
    },

    {
        id: 13,
        brand: "Apple",
        name: "Apple Watch Series 11",
        category: "Watches",
        emoji: "⌚",
        price: 429,
        oldPrice: 479,
        rating: 4.8,
        reviews: 641,
        dealScore: 89,
        retailers: [
            ["Amazon", 429],
            ["Currys", 449],
            ["Apple", 479],
            ["Very", 439]
        ],
        history: [479, 469, 459, 449, 429, 429]
    },

    {
        id: 14,
        brand: "Samsung",
        name: "Galaxy Watch 8 Classic",
        category: "Watches",
        emoji: "⌚",
        price: 399,
        oldPrice: 449,
        rating: 4.6,
        reviews: 292,
        dealScore: 88,
        retailers: [
            ["Amazon", 399],
            ["Currys", 419],
            ["Samsung", 449],
            ["Very", 409]
        ],
        history: [449, 449, 429, 419, 409, 399]
    },

    {
        id: 15,
        brand: "Microsoft",
        name: "Xbox Series X",
        category: "Gaming",
        emoji: "🎮",
        price: 499,
        oldPrice: 549,
        rating: 4.8,
        reviews: 1642,
        dealScore: 87,
        retailers: [
            ["Amazon", 499],
            ["Currys", 509],
            ["Microsoft", 549],
            ["Very", 519]
        ],
        history: [549, 529, 519, 509, 499, 499]
    },

    {
        id: 16,
        brand: "Sony",
        name: "PlayStation 5 Pro",
        category: "Gaming",
        emoji: "🎮",
        price: 699,
        oldPrice: 799,
        rating: 4.7,
        reviews: 834,
        dealScore: 90,
        retailers: [
            ["Amazon", 699],
            ["Currys", 719],
            ["Sony", 799],
            ["Very", 729]
        ],
        history: [799, 779, 749, 729, 699, 699]
    }
];


/* =====================================================
   STATE
   ===================================================== */

let favourites = [];

try {
    favourites =
        JSON.parse(
            localStorage.getItem("pricepilotFavourites")
        ) || [];
} catch {
    favourites = [];
}


/* =====================================================
   START WEBSITE
   ===================================================== */

function startPricePilot() {

    renderDeals();
    renderProducts();
    updateWatchCount();

    const counter =
        document.getElementById("statProducts");

    if (counter) {
        counter.textContent = products.length;
    }

}


/* =====================================================
   DEALS
   ===================================================== */

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
            .slice(0, 4);

    grid.innerHTML =
        deals
            .map(product => createProductCard(product))
            .join("");

}


/* =====================================================
   PRODUCTS
   ===================================================== */

function renderProducts() {

    const grid =
        document.getElementById("productGrid");

    if (!grid) return;


    const searchInput =
        document.getElementById("productSearch");

    const categoryInput =
        document.getElementById("categoryFilter");

    const brandInput =
        document.getElementById("brandFilter");

    const sortInput =
        document.getElementById("sortFilter");


    const search =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

    const category =
        categoryInput
            ? categoryInput.value
            : "all";

    const brand =
        brandInput
            ? brandInput.value
            : "all";

    const sort =
        sortInput
            ? sortInput.value
            : "deal";


    let results =
        products.filter(product => {

            const searchMatch =
                search === "" ||
                product.name
                    .toLowerCase()
                    .includes(search) ||
                product.brand
                    .toLowerCase()
                    .includes(search) ||
                product.category
                    .toLowerCase()
                    .includes(search);

            const categoryMatch =
                category === "all" ||
                product.category === category;

            const brandMatch =
                brand === "all" ||
                product.brand === brand;

            return (
                searchMatch &&
                categoryMatch &&
                brandMatch
            );

        });


    if (sort === "priceLow") {

        results.sort(
            (a, b) => a.price - b.price
        );

    }

    else if (sort === "priceHigh") {

        results.sort(
            (a, b) => b.price - a.price
        );

    }

    else if (sort === "rating") {

        results.sort(
            (a, b) => b.rating - a.rating
        );

    }

    else {

        results.sort(
            (a, b) =>
                b.dealScore - a.dealScore
        );

    }


    const resultCounter =
        document.getElementById("resultCount");

    if (resultCounter) {

        resultCounter.textContent =
            `${results.length} product${results.length === 1 ? "" : "s"}`;

    }


    if (results.length === 0) {

        grid.innerHTML = `
            <div class="empty">
                <div class="empty-icon">🔎</div>
                <h3>No products found</h3>
                <p>Try another search or clear your filters.</p>
            </div>
        `;

        return;

    }


    grid.innerHTML =
        results
            .map(product => createProductCard(product))
            .join("");

}


/* =====================================================
   PRODUCT CARD
   ===================================================== */

function createProductCard(product) {

    const isFavourite =
        favourites.includes(product.id);

    const saving =
        product.oldPrice - product.price;


    return `
        <article class="product-card">

            <div class="deal-score">
                ${product.dealScore}/100 Deal
            </div>

            <button
                class="favourite ${isFavourite ? "active" : ""}"
                onclick="toggleFavourite(${product.id})"
            >
                ${isFavourite ? "♥" : "♡"}
            </button>

            <div class="product-image">

                <div class="product-emoji">
                    ${product.emoji}
                </div>

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
                    <span>
                        (${product.reviews.toLocaleString()})
                    </span>
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
                        Save €${saving}
                    </div>

                </div>

                <div class="product-actions">

                    <button
                        class="compare-button"
                        onclick="openProduct(${product.id})"
                    >
                        Compare
                    </button>

                    <button
                        class="details-button"
                        onclick="openProduct(${product.id})"
                    >
                        View deal
                    </button>

                </div>

            </div>

        </article>
    `;

}


/* =====================================================
   PRODUCT DETAILS
   ===================================================== */

function openProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;


    const modal =
        document.getElementById("productModal");

    const content =
        document.getElementById("modalContent");

    if (!modal || !content) return;


    const retailers =
        [...product.retailers]
            .sort(
                (a, b) => a[1] - b[1]
            );


    content.innerHTML = `

        <div class="modal-product">

            <div class="modal-image">

                <div class="product-emoji">
                    ${product.emoji}
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
                        ${product.reviews.toLocaleString()} reviews
                    </span>
                </div>

                <div class="modal-price">
                    €${product.price.toLocaleString()}
                </div>

                <p>
                    PricePilot Deal Score:
                    <strong>
                        ${product.dealScore}/100
                    </strong>
                </p>

                <div class="retailer-list">

                    <h3>
                        Compare retailers
                    </h3>

                    <br>

                    ${retailers.map(
                        (retailer, index) => `

                        <div class="retailer-row">

                            <strong>
                                ${index === 0 ? "🏆 " : ""}
                                ${retailer[0]}
                            </strong>

                            <span>
                                €${retailer[1].toLocaleString()}
                            </span>

                            <button
                                onclick="retailerClick('${retailer[0]}')"
                            >
                                Visit
                            </button>

                        </div>

                    `).join("")}

                </div>

            </div>

        </div>

        <div style="margin-top:30px">

            <h3>
                Price history
            </h3>

            <p style="color:var(--muted)">
                Recent price movement
            </p>

            <div class="history-chart">

                ${product.history.map(price => `

                    <span
                        title="€${price}"
                        style="
                            height:${Math.max(
                                25,
                                170 -
                                (
                                    price /
                                    product.oldPrice
                                ) * 120
                            )}px
                        "
                    ></span>

                `).join("")}

            </div>

        </div>
    `;


    modal.classList.add("show");

}


/* =====================================================
   CLOSE MODAL
   ===================================================== */

function closeModal() {

    const modal =
        document.getElementById("productModal");

    if (modal) {
        modal.classList.remove("show");
    }

}


/* =====================================================
   FAVOURITES
   ===================================================== */

function toggleFavourite(id) {

    if (favourites.includes(id)) {

        favourites =
            favourites.filter(
                favouriteId =>
                    favouriteId !== id
            );

    } else {

        favourites.push(id);

    }


    localStorage.setItem(
        "pricepilotFavourites",
        JSON.stringify(favourites)
    );


    updateWatchCount();

    renderProducts();

    renderDeals();

}


/* =====================================================
   WATCH COUNT
   ===================================================== */

function updateWatchCount() {

    const counter =
        document.getElementById("watchCount");

    if (!counter) return;


    if (favourites.length > 0) {

        counter.style.display = "flex";

        counter.textContent =
            favourites.length;

    } else {

        counter.style.display = "none";

    }

}


/* =====================================================
   WATCHLIST
   ===================================================== */

function showWatchlist() {

    const section =
        document.getElementById(
            "watchlistSection"
        );

    const grid =
        document.getElementById(
            "watchlistGrid"
        );

    if (!section || !grid) return;


    section.classList.remove("hidden");


    const saved =
        products.filter(
            product =>
                favourites.includes(product.id)
        );


    if (saved.length === 0) {

        grid.innerHTML = `
            <div class="empty">

                <div class="empty-icon">
                    ♡
                </div>

                <h3>
                    Your watchlist is empty
                </h3>

                <p>
                    Click the heart on a product
                    to add it.
                </p>

            </div>
        `;

    } else {

        grid.innerHTML =
            saved
                .map(createProductCard)
                .join("");

    }


    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   CATEGORY
   ===================================================== */

function filterCategory(category) {

    const categoryFilter =
        document.getElementById(
            "categoryFilter"
        );

    const search =
        document.getElementById(
            "productSearch"
        );


    if (categoryFilter) {
        categoryFilter.value = category;
    }

    if (search) {
        search.value = "";
    }


    renderProducts();


    const productsSection =
        document.getElementById(
            "products"
        );

    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   SEARCH
   ===================================================== */

function syncSearch(value) {

    const search =
        document.getElementById(
            "productSearch"
        );

    if (search) {
        search.value = value;
    }

    renderProducts();

}


function performSearch() {

    const productsSection =
        document.getElementById(
            "products"
        );

    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

    renderProducts();

}


function quickSearch(term) {

    const hero =
        document.getElementById(
            "heroSearch"
        );

    const search =
        document.getElementById(
            "productSearch"
        );


    if (hero) {
        hero.value = term;
    }

    if (search) {
        search.value = term;
    }


    performSearch();

}


/* =====================================================
   CLEAR FILTERS
   ===================================================== */

function clearFilters() {

    const search =
        document.getElementById(
            "productSearch"
        );

    const hero =
        document.getElementById(
            "heroSearch"
        );

    const category =
        document.getElementById(
            "categoryFilter"
        );

    const brand =
        document.getElementById(
            "brandFilter"
        );

    const sort =
        document.getElementById(
            "sortFilter"
        );


    if (search) search.value = "";

    if (hero) hero.value = "";

    if (category) category.value = "all";

    if (brand) brand.value = "all";

    if (sort) sort.value = "deal";


    renderProducts();

}


/* =====================================================
   SHOW ALL PRODUCTS
   ===================================================== */

function showAllProducts() {

    clearFilters();

    const section =
        document.getElementById(
            "products"
        );

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   HOME
   ===================================================== */

function showHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   DARK MODE
   ===================================================== */

function toggleTheme() {

    document.body.classList.toggle(
        "dark"
    );


    const enabled =
        document.body.classList.contains(
            "dark"
        );


    localStorage.setItem(
        "pricepilotDark",
        enabled
    );

}


/* =====================================================
   RETAILER
   ===================================================== */

function retailerClick(retailer) {

    alert(
        retailer +
        " will be connected to PricePilot when its permitted retailer/API integration is added."
    );

}


/* =====================================================
   KEYBOARD
   ===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeModal();
        }

    }
);


/* =====================================================
   MODAL CLICK
   ===================================================== */

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

            closeModal();

        }

    }
);


/* =====================================================
   START
   ===================================================== */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        startPricePilot
    );

} else {

    startPricePilot();

}
