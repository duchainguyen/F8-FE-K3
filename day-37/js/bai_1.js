const imageBanner = "./img/anh1.jpg"; // Thay đổi đường dẫn ảnh này bằng đường dẫn ảnh thực tế

const banner = document.querySelector(".banner");
const imagePromise = Delay(imageBanner, 500);

imagePromise.then((image) => {
  // Hiển thị ảnh
  banner.innerHTML = `<div class="skeleton"><img src="${image}" alt="Image"></div>`;
});
// console.log(imagePromise);
function Delay(data, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

const fakeProducts = [
  {
    id: 1,
    name: "Laptop A",
    price: 20,
    firm: "electronics",
    vote: 3.4,
    img: "./img/computer.jpg",
  },
  {
    id: 2,
    name: "Product B",
    price: 30,
    firm: "electronics",
    vote: 3.4,
    img: "./img/computer.jpg",
  },
  {
    id: 3,
    name: "Product C",
    price: 25,
    firm: "electronics",
    vote: 1.4,
    img: "./img/computer.jpg",
  },
  {
    id: 4,
    name: "Product D",
    price: 25,
    firm: "electronics",
    vote: 2.4,
    img: "./img/computer.jpg",
  },
  {
    id: 5,
    name: "Product E",
    price: 25,
    firm: "electronics",
    vote: 4.4,
    img: "./img/computer.jpg",
  },
  {
    id: 6,
    name: "Product F",
    price: 25,
    firm: "electronics",
    vote: 3.4,
    img: "./img/computer.jpg",
  },
  {
    id: 7,
    name: "Product E",
    price: 25,
    firm: "electronics",
    vote: 4.4,
    img: "./img/computer.jpg",
  },
  {
    id: 8,
    name: "Product F",
    price: 25,
    firm: "electronics",
    vote: 3.4,
    img: "./img/computer.jpg",
  },
];

const productContainer = document.querySelector(".product");
const title = document.querySelector(".title");
const productsPromise = Delay(fakeProducts, 0);

productsPromise.then((products) => {
  title.innerHTML = `<h2 class="skeleton">Featured Products</h2>`;
  products.forEach((product) => {
    productContainer.innerHTML += `
                <div class="item">
                    <div class="item-img skeleton"><img src="${product.img}" alt="Image"></div>    
                    <h3 class="item-name skeleton">${product.name}</h3>
                    <div class="item-info">
                        <span class="skeleton">${product.firm}</span>
                        <span class="vote skeleton">${product.vote}<i class="fa-solid fa-star"></i></span>
                    </div>
                    <h3 class="item-price skeleton">$${product.price}</h3>
                    <div class="item-btn skeleton">
                        <button class="btn item-add">Add to card</button>
                        <button class="btn item-buy">Buy now</button>
                    </div>
                </div>
            `;
  });
});

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const allSkeleton = document.querySelectorAll(".skeleton");
    allSkeleton.forEach((item) => {
      item.classList.remove("skeleton");
    });
    console.log(allSkeleton);
  }, 3000);
});
