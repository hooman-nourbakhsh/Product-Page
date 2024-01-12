const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");

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

const change = searchInput.addEventListener("keyup", searchHandler);
