// DOM HTML

var content = document.querySelector(".content");

// console.log(content.innerHTML);

// // chỉ lấy text
// console.log(content.innerText);

// // lấy cả element
// console.log(content.outerHTML);

// console.log(content.outerText);

// // giữ nguyên khoảng trắng
// console.log(content.textContent);

// cập nhật nội dung thẻ HTML

// content.innerHTML = `<h2>Hoàng An F8</h2>`;

// content.innerText = `<h2>Hoàng An F8</h2>`;

// thay đổi cả element
// content.outerHTML = `<h2>Hoàng An F8</h2>`;

// content.outerText = `<h2>Hoàng An F8</h2>`;

// content.textContent = `<h2>Hoàng An F8</h2>`;

var counter = document.querySelector(".counter");
// var count = document.querySelector(".count");
var stt = document.querySelector("span");
// console.log(stt.innerText);

var btnAdd = document.querySelector(".btn-add");
btnAdd.onclick = function () {
  stt.innerText++;
};

var btnDiminish = document.querySelector(".btn-diminish");
btnDiminish.onclick = function () {
  var Value = parseInt(stt.innerText);
  // Kiểm tra nếu giá trị hiện tại lớn hơn 0, thì mới giảm giá trị
  if (Value > 0) {
    stt.innerText = Value - 1;
  }
};
// console.log(count.innerText);

var title = document.querySelector(".title");
console.log(title.getAttribute("data-count"));
