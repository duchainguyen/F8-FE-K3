var btn = document.querySelector(".btn");
// btn.addEventListener("mousedown", function (e) {
//   console.log(e);
// });
// Vị trí mà nút đã được kéo tới
var initialxOffset;
var initialyOffset;
var hand = function (e) {
  //   console.log("kéo");
  var clientX = e.clientX;
  var clientY = e.clientY;
  btn.style.translate = `${clientX - initialxOffset}px ${
    clientY - initialyOffset
  }px`;
};

btn.addEventListener("mousedown", function (e) {
  //   console.log(e);
  document.addEventListener("mousemove", hand);
  initialxOffset = e.offsetX;
  initialyOffset = e.offsetY;
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", hand);
});

/*

var btn = document.querySelector(".btn");

// Vị trí mà nút được kéo bắt đầu
var initialX;
var initialY;

// Vị trí mà nút đã được kéo tới
var xOffset = 0;
var yOffset = 0;

var hand = function (e) {
  var clientX = e.clientX;
  var clientY = e.clientY;

  // Tính toán vị trí mới của nút dựa trên vị trí bắt đầu và khoảng cách di chuyển
  var newX = clientX - initialX - xOffset;
  var newY = clientY - initialY - yOffset;

  // Đặt vị trí mới cho nút
  btn.style.transform = `translate(${newX}px, ${newY}px`;
};

btn.addEventListener("mousedown", function (e) {
  // Lưu vị trí chuột khi bắt đầu kéo
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  // Thêm sự kiện "mousemove" để theo dõi di chuyển
  document.addEventListener("mousemove", hand);
});

document.addEventListener("mouseup", function () {
  // Khi kết thúc kéo, loại bỏ sự kiện "mousemove"
  document.removeEventListener("mousemove", hand);
});
*/

// phương thức trong event object

// 1.preventDefault(): ngăn các hành động mặc định của trình duyệt

var a = document.querySelector("a");
a.addEventListener("click", function (e) {
  // lấy giá trị của href
  e.preventDefault();
  console.log(this.href);
});

var content = document.querySelector(".content");

var button = document.querySelector(".content button");

content.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("content");
  document.body.style.background = "red";
});

button.addEventListener("click", function (e) {
  e.stopPropagation(); //ngăn hành động nổi bọt của thẻ html con
  console.log("Button");
});

document.addEventListener("click", function () {
  document.body.style.background = "initial";
});
