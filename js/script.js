const api = "https://fakestoreapi.com/products";
const isLoading = document.querySelector(".load");
const cards = document.querySelector(".cards");
const filterButtons = document.querySelectorAll(".card_btn button");
let products = [];
const getData = async () => {
  isLoading.style.display = "flex";
  try {
    const request = await fetch(api);
    const response = await request.json();
    products = response;
    uiCard(products);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.style.display = "none";
  }
};
getData();
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    isLoading.style.display = "flex";
    const category = this.textContent.trim();
    filterProducts(category);
    isLoading.style.display = "none";
  });
});
function uiCard(data) {
  cards.innerHTML = "";
  for (let value of data) {
    cards.innerHTML += `
      <div class="card">
          <img
            src="${value.image}"
            alt=""
          />
          <h2>${value.title.slice(0, 10) + "..."}</h2>
          <p>
            ${value.description.slice(0, 40) + "..."}
          </p>
          <div>
            <h3>Price</h3>
            <b>-10%</b>
            <p>${value.price}$</p>
          </div>
          <div>
          <button class="btn1">Add to cart</button>
          <button class="btn2">Buy Now</button>
          </div>
        </div>
    `;
  }
}
function filterProducts(category) {
  let filteredProducts = [];
  if (category.toLowerCase() === "all") {
    filteredProducts = products;
  } else if (category.toLowerCase() === "mens") {
    filteredProducts = products.filter(
      (product) => product.category.toLowerCase() === "men's clothing"
    );
  } else if (category.toLowerCase() === "womens") {
    filteredProducts = products.filter(
      (product) => product.category.toLowerCase() === "women's clothing"
    );
  } else if (category.toLowerCase() === "jewelrys") {
    filteredProducts = products.filter(
      (product) => product.category.toLowerCase() === "jewelery"
    );
  } else if (category.toLowerCase() === "electroncas") {
    filteredProducts = products.filter(
      (product) => product.category.toLowerCase() === "electronics"
    );
  }
  uiCard(filteredProducts);
}
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => {
      btn.style.backgroundColor = "goldenrod";
    });
    this.style.backgroundColor = "white";
  });
});
window.onload = function () {
  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname");
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  if (name && surname && email && password) {
    alert(
      `Name: ${name}\nSurname: ${surname}\nEmail: ${email} \nPassword:${password}`
    );
  }
};
