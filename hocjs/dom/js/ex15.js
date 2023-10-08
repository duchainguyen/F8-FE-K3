// tác động trực tiếp vào windown
//
window.addEventListener("scroll", function () {
  console.log("Hello", window.scrollY);
});

/* 
// 1. lấy tọa độ theo trục x
// window.scrollX;

// 2. lấy tọa độ theo trục y
// window.scrollY;

3.thiết lặp tọa độ cho scroll
windown.scroll(x,y)
windown.scroll({
    top: y,
    left: x,
    behavior: smooth | instant | auto
})

*/

var scrollToBtn = document.querySelector(".scroll-to");
var scrollTop = document.querySelector(".scroll-top");
scrollToBtn.addEventListener("click", function () {
  window.scroll({
    top: 1000,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

scrollTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
