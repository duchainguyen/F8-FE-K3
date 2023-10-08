var header = document.querySelector("header");
var h1 = document.querySelector("h1");
var nav = document.querySelector("nav");
var home = document.getElementById("home");
var register = document.getElementById("register");

var h1Height = h1.clientHeight;

window.addEventListener("scroll", function () {
  var y = window.scrollY;
  if (y >= h1Height) {
    nav.classList.add("fixed");
    document.body.style.paddingTop = `${nav.clientHeight}px`;
  } else {
    nav.classList.remove("fixed");
    document.body.style.paddingTop = "";
  }
});

var navItem = nav.children;
console.log(navItem);
Array.from(navItem).forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    // lấy nội dung thuộc tính href
    var hash = this.getAttribute("href");
    // hash lúc này là selector của các thẻ section
    var section = document.querySelector(hash);
    // lấy tọa độ tại thẻ section tương ứng so với Top
    var offsetTop = section.offsetTop - nav.clientHeight - 15;
    // console.log(section.offsetTop);
    // console.log(nav.clientHeight);
    // console.log(offsetTop);
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
