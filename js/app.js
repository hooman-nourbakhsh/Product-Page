const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const searchButton = document.querySelector("#search-price button");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchNameHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productTitle = product.children[1].innerText.toLowerCase();
    productTitle.includes(searchValue) ? (product.style.display = "block") : (product.style.display = "none");
  });
};

const searchPriceHandler = () => {
  const searchValue = +searchButton.previousElementSibling.value;
  products.forEach((product) => {
    const productPrice = product.children[2].innerText.split(" ")[1];
    if (!searchValue) {
      product.style.display = "block";
    } else {
      searchValue === +productPrice ? (product.style.display = "block") : (product.style.display = "none");
    }
    // product.style.display = !searchValue || searchValue === +productPrice ? "block" : "none";
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);

  products.forEach((product) => {
    const productCategory = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === productCategory ? (product.style.display = "block") : (product.style.display = "none");
    }
    // product.style.display = filter === "all" || filter === productCategory ? "block" : "none";
  });
};

const start = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", filterHandler);
  });
  searchInput.addEventListener("keyup", searchNameHandler);
  searchButton.addEventListener("click", searchPriceHandler);
};

window.addEventListener("load", start);
