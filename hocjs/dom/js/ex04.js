var img = document.querySelector("img");

// lấy giá trị từng thuộc tính
// element.tenthuoctinh

console.log(img.src);
// console.log(img.alt);
console.log(img.title);
console.log(img.width);
console.log(img.height);

// thay đổi giá trị thuộc tính
img.src =
  "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";

img.width = `200`;
img.height = `200`;
img.style = `border-radius: 50%`;

// xóa thuộc tinhs
img.removeAttribute("alt");
console.log(img.alt);

console.log([img]);

// lấy giá trị của thuộc tính class
console.log(img.className);

/*
khi làm việc với js nhiều tình huống cta cần tạo ra những thuộc tính riêng, những thuộc tính k có sẵn trong thẻ HTML
--> đồng nghĩa ko đc w3c cho sẵn
W3C cho phép tạo các thuộc tính bắt đầu bằng tiền tố data-
-->data Attribute

quy tắc đặt tên của data Attribute
data-word1
data-count, data-animation-duration

*/

var title = document.querySelector(".title");
// console.log(title.getAttribute("data-count"));
// console.log(title.getAttribute("class"));

// console.log(title.dataset.count); //data-count
// console.log(title.dataset.indexNumber); //data-index-number

// cập nhật lại
// title.setAttribute("data-count", 10);
// title.dataset.indexNumber = "ahihi";
// title.dataset.animationDuration = "is";
// console.log(title.getAttribute("data-count"));

//xóa thuộc tính
// delete title.dataset.animationDuration; //xóa đc
// delete title.dataset.id; //k xóa đc

// title.removeAttribute("data-count"); //xóa đc

// làm việc với class
console.log(title.classList);

// thêm class mới
title.classList.add("title-2", "title-3");

// xóa class
title.classList.remove("sub-title");

// kiểm tra class tồn tai
console.log(title.classList.contains("title-2"));

//toggle class
title.classList.toggle("show");
title.classList.toggle("show");
