// event target
// event target khác gì với this

/*
this: element gán sự kiện

e.target: mục tiêu mà người dùng tác động(tương tác sự kiện)
*/
// var title = document.querySelector(".title");

// title.addEventListener("click", function (e) {
//   console.log(this);
//   console.log(e.target);
// });

// c1 không dùng event target
// var products = document.querySelector(".products");
// var h2 = document.querySelectorAll(".products h2");
// console.log(h2);

// h2.forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.style.color = "red";
//   });
// });

// array like object--> dùng array.from() để chuyển thành array

// c2 dùng event target

// var products = document.querySelector(".products");
// products.addEventListener("click", function (e) {
//   var item = e.target;
//   console.log(item);
//   //   chỉ khi click vào thẻ h2 thì nó mới đổi màu
//   if (item.localName === "h2") {
//     item.style.color = "red";
//   }
// });

var content = document.querySelector(".content");
var btn = document.querySelector(".btn");

// var handClick = function () {
//   var btn = document.querySelector(".btn");
//   btn.addEventListener("click", function () {
//     content.innerHTML += `<h1>F8</h1>`;
//     handClick();
//   });
// };

// handClick();

// vấn đề: chỉ bấm button đc 1 lần --> làm sao khác phục

content.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    content.innerHTML += `<h1> F8</h1>`;
  }
});
