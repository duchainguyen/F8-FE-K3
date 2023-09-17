// DOM CSS can thiệp css inline vào thẻ html
// (thông qua thuộc tính style)
// trả về 1 object có key là các thuộc tính CSS
// update lại các key ->> CSS thay đổi
var content = document.querySelector(".content");

// cách viết 1
// content.style.color = "red";
// content.style.fontWeight = "bold";

// cách viết 2
var css = {
  color: "red",
  fontWeight: "bold",
  //   textTransform: "uppercase",
  backgroundImage: `url(https://fastly.picsum.photos/id/142/200/300.jpg?hmac=B08HyXonHhJPFpULUNgMfoCFGZqymUB3NhBxo3iWTnc)`,
  transform: `translateX(20px)`,
};

Object.assign(content.style, css);
// end 2

// bổ sung thuộc tính sau

/*
-background-image

-transform translateX


*/

// lấy giá trị thuộc tính
// console.log(content.style.fontWeight);
// console.log(content.style);

// var btntoggle = document.querySelector(".toggle");

// var cssdisplay = {
//   display: none,
// };

// btntoggle.onclick = function () {
//   if (content.style.display === "none") {
//     content.style.display = "block";
//   } else {
//     content.style.display = "none";
//   }
// };

// c2
// btntoggle.onclick = function () {
//   if (!content.style.display) {
//     content.style.display = "none";
//   } else {
//     content.style.display = "";
//   }
// };

var fadein = document.querySelector(".fadein-btn");
var fadeout = document.querySelector(".fadeout-btn");
var duration = content.dataset.duration;
fadeout.onclick = function () {
  var css = {
    transition: `opacity ${duration}ms ease`,
    opacity: 0,
  };
  Object.assign(content.style, css);
  //   chờ khi nào chạy xog thì display none
  setTimeout(function () {
    content.style.display = "none";
  }, duration);
};

fadein.onclick = function () {
  content.style.display = "block";
  var css = {
    transition: `opacity ${duration}ms ease`,

    opacity: 1,
  };
  setTimeout(function () {
    Object.assign(content.style, css);
  });
};
