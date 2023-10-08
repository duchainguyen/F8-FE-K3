var menu = document.querySelector(".menu");
// menu.style.display = "block";
var navMenu = document.querySelector("nav");
console.log(navMenu);
// console.log(menu);
window.addEventListener("scroll", function () {
  if (window.scrollY >= 66) {
    menu.style.display = "block";
    // menu.style.position = "fixed";
    // menu.style.margin = "10px";
    // console.log("menu");
    document.body.style.paddingTop = `${navMenu.clientHeight}px`;
    navMenu.style.display = "none";
  } else {
    document.body.style.paddingTop = "";

    menu.style.display = "none";

    navMenu.style.display = "block";
  }
});

// 66
window.addEventListener("scroll", function () {
  console.log("Hello", window.scrollY);
});
