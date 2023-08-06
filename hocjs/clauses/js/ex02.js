/* switch
chỉ chấp nhận so sánh bằng ===
thường áp dụng khi có nhiều nhánh
và nhiều trường hợp khác
*/

var action = "add";
// switch (action) {
//   case "create":
//   case "add":
//   case "insert":
//     console.log("Thêm");
//     break;
//   case "edit":
//     console.log("sửa");
//     break;
//   case "delete":
//     console.log("xóa");
//     break;
//   default:
//     console.log("danh sach");
//     break;
// }

if (action === "create" || action === "add" || action === "insert") {
  console.log("thêm");
} else if (action === "edit" || action === "update") {
  console.log("sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("xóa");
} else {
  console.log("danh sách");
}

// trong thực tế switch case có thể sẽ nằm trong if else hoặc if else nằm trong 1 case
