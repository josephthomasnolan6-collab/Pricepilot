const products = [

    {
        id: 1,
        name: "iPhone 17",
        category: "Smartphone",
        emoji: "📱",
        description: "Apple's latest flagship smartphone.",
        rating: 4.8,

        prices: [
            {
                store: "Amazon",
                price: 999,
                url: "https://www.amazon.com"
            },
            {
                store: "Currys",
                price: 1029,
                url: "https://www.currys.ie"
            },
            {
                store: "DID Electrical",
                price: 1049,
                url: "https://www.did.ie"
            }
        ]
    },


    {
        id: 2,
        name: "Samsung Galaxy S26",
        category: "Smartphone",
        emoji: "📱",
        description: "Premium Samsung Galaxy smartphone.",
        rating: 4.7,

        prices: [
            {
                store: "Amazon",
                price: 899,
                url: "https://www.amazon.com"
            },
            {
                store: "Currys",
                price: 949,
                url: "https://www.currys.ie"
            },
            {
                store: "DID Electrical",
                price: 979,
                url: "https://www.did.ie"
            }
        ]
    },


    {
        id: 3,
        name: "Google Pixel 10",
        category: "Smartphone",
        emoji: "📱",
        description: "Google's smart Android flagship.",
        rating: 4.6,

        prices: [
            {
                store: "Amazon",
                price: 799,
                url: "https://www.amazon.com"
            },
            {
                store: "Currys",
                price: 829,
                url: "https://www.currys.ie"
            },
            {
                store: "DID Electrical",
                price: 849,
                url: "https://www.did.ie"
            }
        ]
    },


    {
        id: 4,
        name: "MacBook Air M4",
        category: "Laptop",
        emoji: "💻",
        description: "Lightweight Apple laptop powered by M4.",
        rating: 4.9,

        prices: [
            {
                store: "Amazon",
                price: 1099,
                url: "https://www.amazon.com"
            },
            {
                store: "Currys",
                price: 1149,
                url: "https://www.currys.ie"
            },
            {
                store: "DID Electrical",
                price: 1199,
                url: "https://www.did.ie"
            }
        ]
    },


    {
        id: 5,
        name: "Dell XPS 15",
        category: "Laptop",
        emoji: "💻",
        description: "Premium Windows laptop for work and study.",
        rating: 4.5,

        prices: [
            {
                store: "Amazon",
                price: 1299,
                url: "https://www.amazon.com"
            },
            {
                store: "Currys",
                price: 1349,
                url: "https://www.currys.ie"
            },
            {
                store: "DID Electrical",
                price: 1399,
                url: "https://www.did.ie"
            }
        ]
    },


    {
        id: 6,
        name: "RTX 5090 Graphics Card",
        category: "Graphics Card",
        emoji: "🎮",
        description: "High-end graphics card for extreme gaming.",
        rating: 4.9,

        prices: [
            {
                store: "Amazon",
                price: 1999,
                url: "https://www.amazon.com"
            },
            {
                store: "Currys",
                price: 2099,
                url: "https://www.currys.ie"
            },
            {
                store: "DID Electrical",
                price: 2150,
                url: "https://www.did.ie"
            }
        ]
    },


    {
        id: 7,
        name: "RTX 5070",
        category: "Graphics Card",
        emoji: "🎮",
        description: "Powerful graphics card for high-performance gaming.",
        rating: 4.7,

        prices: [
            {
                store: "Amazon",
                price: 649,
                url: "https://www.amazon.com"
            },
            {
                store: "Currys",
                price: 699,
                url: "https://www.currys.ie"
            },
            {
                store: "DID Electrical",
                price: 729,
                url: "https://www.did.ie"
            }
        ]
    },


    {
        id: 8,
        name: "PlayStation 5",
        category: "Gaming Console",
        emoji: "🎮",
        description: "Sony's current-generation gaming console.",
        rating: 4.8,

        prices: [
            {
                store: "Amazon",
                price: 499,
                url: "https://www.amazon.com"
            },
            {
                store: "Currys",
                price: 529,
                url: "https://www.currys.ie"
            },
            {
                store: "DID Electrical",
                price: 549,
                url: "https://www.did.ie"
            }
        ]
    },


    {
        id: 9,
        name: "Xbox Series X",
        category: "Gaming Console",
        emoji: "🎮",
        description: "Microsoft's powerful 4K gaming console.",
        rating: 4.7,

        prices: [
            {
                store: "Amazon",
                price: 479,
                url: "https://www.amazon.com"
            },
            {
                store: "Currys",
                price: 499,
                url: "https://www.currys.ie"
            },
            {
                store: "DID Electrical",
                price: 529,
                url: "https://www.did.ie"
            }
        ]
    }

];



let currentResults = [...products];



/* -----------------------------
   BASIC PRODUCT CALCULATIONS
----------------------------- */


function cheapestPrice(product) {

    return Math.min(
        ...product.prices.map(store => store.price)
    );

}


function highestPrice(product) {

    return Math.max(
        ...product.prices.map(store => store.price)
    );

}


function productSavings(product) {

    return highestPrice(product) - cheapestPrice(product);

}



/* -----------------------------
   SEARCH
----------------------------- */


function searchProduct() {

    const input = document
        .getElementById("productSearch")
        .value
        .toLowerCase()
        .replace(/\s+/g, "");


    if (input === "") {

        currentResults = [...products];

        document.getElementById("liveSuggestions").innerHTML = "";

        applyFilters();

        return;

    }


    const results = products.filter(product => {

        const productName = product.name
            .toLowerCase()
            .replace(/\s+/g, "");

        const category = product.category
            .toLowerCase()
            .replace(/\s+/g, "");


        return productName.includes(input) ||
               category.includes(input);

    });


    showLiveSuggestions(results);

    currentResults = results;

    applyFilters();

}



/* -----------------------------
   QUICK SEARCH
----------------------------- */


function quickSearch(term) {

    document.getElementById("productSearch").value = term;

    searchProduct();

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* -----------------------------
   LIVE SUGGESTIONS
----------------------------- */


function showLiveSuggestions(results) {

    const box =
        document.getElementById("liveSuggestions");


    if (results.length === 0) {

        box.innerHTML = "";

        return;

    }


    box.innerHTML = results
        .slice(0, 5)
        .map(product => `

            <button
                class="suggestion"
                onclick="quickSearch('${product.name}')"
            >

                ${product.emoji}

                <span>
                    ${product.name}
                </span>

                <small>
                    from €${cheapestPrice(product)}
                </small>

            </button>

        `)
        .join("");

}



/* -----------------------------
   FILTERS
----------------------------- */


function applyFilters() {

    let results = [...currentResults];


    const category =
        document.getElementById("categoryFilter").value;


    const maxPrice =
        Number(
            document.getElementById("priceFilter").value
        );


    const sort =
        document.getElementById("sortFilter").value;



    if (category !== "All") {

        results = results.filter(product =>
            product.category === category
        );

    }



    results = results.filter(product =>
        cheapestPrice(product) <= maxPrice
    );



    if (sort === "cheapest") {

        results.sort(
            (a, b) =>
                cheapestPrice(a) - cheapestPrice(b)
        );

    }


    if (sort === "expensive") {

        results.sort(
            (a, b) =>
                cheapestPrice(b) - cheapestPrice(a)
        );

    }


    if (sort === "rating") {

        results.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }


    if (sort === "savings") {

        results.sort(
            (a, b) =>
                productSavings(b) -
                productSavings(a)
        );

    }



    currentResults = results;

    displayProducts(results);

    updateResultCount(results);

}



/* -----------------------------
   PRODUCT DISPLAY
----------------------------- */


function displayProducts(results) {

    const container =
        document.getElementById("results");


    if (results.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div>🔍</div>

                <h2>No products found</h2>

                <p>
                    Try changing your search or filters.
                </p>

                <button onclick="resetFilters()">
                    Reset filters
                </button>

            </div>

        `;

        return;

    }



    container.innerHTML = results
        .map(product => createProductCard(product))
        .join("");

}



/* -----------------------------
   PRODUCT CARD
----------------------------- */


function createProductCard(product) {

    const cheapest =
        cheapestPrice(product);


    const highest =
        highestPrice(product);


    const savings =
        productSavings(product);


    const saved =
        isFavourite(product.id);


    const maxBar =
        highest;



    const storeRows =
        product.prices.map(store => {

            const width =
                (store.price / maxBar) * 100;


            const isBest =
                store.price === cheapest;


            return `

                <div class="store-row">

                    <div class="store-info">

                        <span>
                            ${store.store}
                        </span>

                        ${
                            isBest
                            ?
                            `<b class="best-tag">BEST</b>`
                            :
                            ""
                        }

                    </div>


                    <div class="price-info">

                        <strong>
                            €${store.price}
                        </strong>

                        <div class="price-bar">

                            <div
                                style="width:${width}%"
                            ></div>

                        </div>

                    </div>

                </div>

            `;

        }).join("");



    return `

        <article class="product-card">

            <div class="card-top">

                <span class="category-badge">
                    ${product.emoji}
                    ${product.category}
                </span>


                <button
                    class="heart-button ${saved ? "saved" : ""}"
                    onclick="toggleFavourite(${product.id})"
                >
                    ${saved ? "❤️" : "♡"}
                </button>

            </div>



            <div
                class="product-image"
                onclick="openProduct(${product.id})"
            >
                ${product.emoji}
            </div>



            <div class="rating">

                ⭐ ${product.rating}

                <span>
                    Highly rated
                </span>

            </div>



            <h3>
                ${product.name}
            </h3>


            <p class="description">
                ${product.description}
            </p>



            <div class="best-price">

                <span>
                    Best price
                </span>

                <strong>
                    €${cheapest}
                </strong>

            </div>



            ${
                savings > 0
                ?
                `
                <div class="saving">

                    🔥 Save up to €${savings}

                </div>
                `
                :
                ""
            }



            <div class="stores">

                ${storeRows}

            </div>



            <div class="card-actions">

                <button
                    class="primary-button"
                    onclick="openProduct(${product.id})"
                >
                    Compare prices
                </button>


                <button
                    class="secondary-button"
                    onclick="setPriceAlert(${product.id})"
                >
                    🔔 Alert me
                </button>

            </div>

        </article>

    `;

}



/* -----------------------------
   BEST VALUE
----------------------------- */


function showBestValue() {

    const sorted =
        [...products].sort((a, b) => {

            const scoreA =
                cheapestPrice(a) -
                productSavings(a) -
                a.rating * 20;


            const scoreB =
                cheapestPrice(b) -
                productSavings(b) -
                b.rating * 20;


            return scoreA - scoreB;

        });


    const product = sorted[0];


    document.getElementById("bestValue").innerHTML = `

        <div class="best-value-card">

            <div class="best-value-icon">
                ${product.emoji}
            </div>


            <div class="best-value-info">

                <span class="winner-label">
                    🏆 PRICEPILOT RECOMMENDS
                </span>

                <h2>
                    ${product.name}
                </h2>

                <p>
                    ${product.description}
                </p>


                <div class="recommendation-stats">

                    <span>
                        ⭐ ${product.rating}
                    </span>

                    <span>
                        💰 From €${cheapestPrice(product)}
                    </span>

                    <span>
                        🔥 Save €${productSavings(product)}
                    </span>

                </div>

            </div>


            <button
                class="primary-button"
                onclick="openProduct(${product.id})"
            >
                View deal
            </button>

        </div>

    `;

}



/* -----------------------------
   RESULT COUNT
----------------------------- */


function updateResultCount(results) {

    document.getElementById("resultCount").textContent =

        results.length === products.length

        ? "Showing all products"

        : `Showing ${results.length} product${
            results.length === 1 ? "" : "s"
        }`;

}



/* -----------------------------
   FAVOURITES
----------------------------- */


function getFavourites() {

    return JSON.parse(
        localStorage.getItem("pricePilotFavourites") || "[]"
    );

}


function isFavourite(id) {

    return getFavourites().includes(id);

}


function toggleFavourite(id) {

    let favourites = getFavourites();


    if (favourites.includes(id)) {

        favourites =
            favourites.filter(item => item !== id);

    } else {

        favourites.push(id);

    }


    localStorage.setItem(
        "pricePilotFavourites",
        JSON.stringify(favourites)
    );


    displayProducts(currentResults);

}



/* -----------------------------
   PRODUCT MODAL
----------------------------- */


function openProduct(id) {

    const product =
        products.find(item => item.id === id);


    if (!product) return;


    const cheapest =
        product.prices.reduce(
            (best, current) =>
                current.price < best.price
                    ? current
                    : best
        );


    const modal =
        document.getElementById("productModal");


    document.getElementById("modalContent").innerHTML = `

        <div class="modal-product">

            <div class="modal-icon">
                ${product.emoji}
            </div>

            <span class="category-badge">
                ${product.category}
            </span>

            <h2>
                ${product.name}
            </h2>

            <div class="rating">
                ⭐ ${product.rating}
            </div>

            <p>
                ${product.description}
            </p>


            <h3>
                Price comparison
            </h3>


            <div class="modal-stores">

                ${product.prices.map(store => `

                    <div class="modal-store">

                        <span>
                            ${store.store}
                        </span>

                        <strong>
                            €${store.price}
                        </strong>

                        <a
                            href="${store.url}"
                            target="_blank"
                        >
                            Visit store
                        </a>

                    </div>

                `).join("")}

            </div>


            <div class="modal-best">

                🏆 Best price:

                <strong>
                    €${cheapest.price}
                </strong>

                at ${cheapest.store}

            </div>

        </div>

    `;


    modal.classList.add("show");

}



function closeModal() {

    document
        .getElementById("productModal")
        .classList.remove("show");

}



window.onclick = function(event) {

    const modal =
        document.getElementById("productModal");


    if (event.target === modal) {

        closeModal();

    }

};



/* -----------------------------
   PRICE ALERT
----------------------------- */


function setPriceAlert(id) {

    const product =
        products.find(item => item.id === id);


    if (!product) return;


    const target =
        prompt(
            `Set your target price for ${product.name} (€):`
        );


    if (target === null) return;


    const price =
        Number(target);


    if (
        Number.isNaN(price) ||
        price <= 0
    ) {

        alert("Please enter a valid price.");

        return;

    }


    const alerts =
        JSON.parse(
            localStorage.getItem("pricePilotAlerts") || "[]"
        );


    alerts.push({

        product: product.name,
        targetPrice: price

    });


    localStorage.setItem(
        "pricePilotAlerts",
        JSON.stringify(alerts)
    );


    alert(
        `Price alert set!\n\nWe'll watch for ${product.name} to reach €${price}.`
    );

}



/* -----------------------------
   RESET
----------------------------- */


function resetFilters() {

    document.getElementById("productSearch").value = "";

    document.getElementById("categoryFilter").value = "All";

    document.getElementById("priceFilter").value = "999999";

    document.getElementById("sortFilter").value = "recommended";


    currentResults = [...products];


    document.getElementById("liveSuggestions").innerHTML = "";


    displayProducts(products);

    updateResultCount(products);

}



/* -----------------------------
   DARK MODE
----------------------------- */


function toggleDarkMode() {

    document.body.classList.toggle("dark");


    const dark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "pricePilotDarkMode",
        dark
    );

}



function loadDarkMode() {

    const dark =
        localStorage.getItem("pricePilotDarkMode");


    if (dark === "true") {

        document.body.classList.add("dark");

    }

}



/* -----------------------------
   START WEBSITE
----------------------------- */


function initialise() {

    document.getElementById("productCount").textContent =
        products.length;


    displayProducts(products);

    updateResultCount(products);

    showBestValue();

    loadDarkMode();

}


initialise();