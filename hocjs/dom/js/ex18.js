// load ==> khi tất cả các tài nguyên được tải xog

// DOMContentLoaded khi cây đom đc hình thành

var loading = document.querySelector(".loading");
window.addEventListener("load", function () {
  console.log("web tải xog");
  setTimeout(function () {
    loading.remove();
  }, 400);
});

document.addEventListener("DOMContentLoaded", function () {
  //   console.log("hình thành cây dom");
  //   var img = document.querySelector("img");
  loading.style.opacity = 1;
  loading.style.visibility = "visible";
});
