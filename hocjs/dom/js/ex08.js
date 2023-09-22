/*DOM Navigation

1.parentElement
+Chon thành phần cha gần nhất
2.children
+Chọn tất cả con cấp 1 
-Luôn trả về 1 danh sách --> cần phải chọn đúng element cần xử lý

3.NextElementSibling
Chọn thành phần ngang hàng đứng sau

4.previousElementSibling
-chọn thành phần ngang hàng đứng trc

*/

// case 1: click vào nút xóa thì xóa sản phẩm tương ứng
// case 2: click vào nút --> đổi màu tên sản phẩm
// case 3: click vào nút đổi màu tên sản phẩm đứng sau
// case 4: click vào nút đổi màu tên sản phẩm đứng trước

// case 1
var products = document.querySelector(".products");

// products.addEventListener("click", function (e) {
//   if (e.target.classList.contains("remove")) {
//     console.log(e.target);
//     e.target.parentElement.remove();
//   }
// });

// case 2
var products = document.querySelector(".products");
// products.addEventListener("click", function (e) {
//   if (e.target.classList.contains("remove")) {
//     console.log(e.target.parentElement.children);
//     // console.log(e.target);
//     e.target.parentElement.children[0].style.color = "red";
//     // e.target.parentElement.remove();
//   }
// });

// case 3
// products.addEventListener("click", function (e) {
//   if (e.target.classList.contains("remove")) {
//     // console.log(e.target.parentElement.children[0]);
//     // e.target.parentElement.nextElementSibling.children[0].style.color = "red";
//     var nextElement = e.target.parentElement.nextElementSibling;
//     console.log(nextElement);
//     if (nextElement === null) {
//       //   nextElement = products.children[0];
//       nextElement = products.firstElementChild;
//     }
//     nextElement.children[0].style.color = "red";
//   }
// });

// case 4
products.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    // console.log(e.target.parentElement.children[0]);
    // e.target.parentElement.nextElementSibling.children[0].style.color = "red";
    var prevElement = e.target.parentElement.previousElementSibling;
    console.log(prevElement);
    if (prevElement === null) {
      //   prevElement = products.children[0];
      prevElement = products.lastElementChild;
    }
    prevElement.children[0].style.color = "red";
  }
});
