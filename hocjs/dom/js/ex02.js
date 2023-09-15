/*
sự kiện là gì? 
-hành động từ phía người dùng tác động lên các thẻ HTML
-JS có cung cấp sẵn các sự kiện có các thẻ HTML
-mõi thẻ HTML sẽ có những sự kiện khác nhau

-làm sao để gán sự kiện cho thẻ HTML
1. Event Handler: chỉ chạy đc 1

2. Event Listener: chạy đc nhiều sự kiện trong cùng 1 thẻ
*/

// 1.Handler
var title = document.querySelector(".title");
// title.onclick = function () {
//   console.log("Hello F8");
// };
var HandlerClick = function (e) {
  // event object
  // Trả về 1 đối tượng mô tả rõ thông tin về sự kiện

  console.log("F8");
  console.log(this);
  console.log(e);
};
title.onclick = HandlerClick;

console.log([title]);

var input = document.querySelector(".name");
// input.onkeyup = function (e) {
//   console.log("Hello", e);
// };

// thay đổi thì nó mới chạy
input.onchange = function () {
  console.log("Thay đổi");
};
// end

// focus vào là chạy
input.onfocus = function () {
  console.log("Focus vào");
};
// end

// click chuột ra ngoài thì chạy
input.onblur = function () {
  console.log("focus ra");
};
// end

var btn = document.querySelector(".btn");
//  sử dụng hàm
//addEventListener(type, callback)
//removeEventListener(type, callback)
// Listener
// btn.addEventListener("click", function () {
//   console.log("Hello btn");
// });

var handleClickBtn = function () {
  console.log("Hello F8");
  // chạy xog 1 lần rồi xóa sự kiện
  btn.removeEventListener("click", handleClickBtn);
};

btn.addEventListener("click", handleClickBtn);
// btn.addEventListener("click", function () {
//   console.log("Hello a btn");
// });
// end

var handleClickH2 = function () {
  console.log("item h2");
};

// gán sự kiện thông qua thuộc tính của thẻ HTML
