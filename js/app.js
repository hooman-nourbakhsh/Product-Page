const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productTitle = product.children[1].innerText.toLowerCase();
    if (productTitle.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  products.forEach((product) => {
    const productCategory = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === productCategory ? (product.style.display = "block") : (product.style.display = "none");
    }
  });
};

const change = searchInput.addEventListener("keyup", searchHandler);

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
