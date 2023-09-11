// DOM là document Object model
/*
Mô hình hóa đối tượng tài liệu HTML


*/

console.log(document);

// Node là một object thể hiện 1 element(thẻ HTML)
/*
-Element node
+Attribute
+Text nội dung của thẻ HTML

-Text node

-Comment node


Dựa vào node để thực hiện các thao tác liên quan đến thẻ HTML

-thay đổi các thẻ HTML
-thay đổi thuộc tính các thẻ HTML
-Thay đổi css (css inline)
-xóa thẻ HTML
-Tạo mới các thẻ HTML và thuôc tính
-gán sự kiện cho các thẻ HTML
-Tạo ra các sự kiện mới


Các loại DOM
-DOM element: truy xuất vào các thẻ html để trả về Node
-DOM  HTML: thay đổi nội dung, thuộc tính của thẻ HTML
-DOM CSS: thay đổi css inline(làm việc dưới dạng Object)
-DOM event : gán sự kiện cho các thẻ HTML
-DOM event Listener: lắng nghe các sự kiện
-DOM Navigation: truy xuất tới các thẻ HTML thông qua phân cấp cha con, ngang hàng
-DOM Node/NodeList : thao tác với các thẻ html thông qua Object(tự tạo ra các thẻ HTML thông qua Object)

*/

// DOM element: truy xuất vào các thẻ HTML

//1. truy xuất thông qua ID trả về 1 element đầu tiên
// var title = document.getElementById("title");
// console.log([title]);

//2. truy xuất thông qua class trả về một danh sách (Array-like Object)
// cần phải lặp qua từng phần tử để xác đinh phần tử cần làm việc
// var titleList = document.getElementsByClassName("title");

// console.log(titleList);

// 3, truy xuất thông qua Tagname --> trả về 1 danh sách
// var titleList = document.getElementsByTagName("h1");
// console.log(titleList);

// 4. truy xuất thông qua CSS selector ( chỉ lấy element đầu tiên
// áp dụng tất cả kiến thức liên quan đến CSS selector
// var title = document.querySelector(".title");
// console.log(title);

// 5. truy xuất thông qua CSS selector (lấy tất cả)

// var titleList = document.querySelectorAll(".title");
// console.log(titleList);

// 6. truy cập trực tiếp vào body, head
console.log(document.body);
console.log(document.head);

// 7. truy cập vào form thông qua thuộc tính name
console.log(document.form_login.email);
