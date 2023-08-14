/*
bài 1 kiểm tra 1 chuỗi có viết hoa hết hay k
*/

var fullname = "TẠ HOÀNG AN";
if (fullname === fullname.toUpperCase()) {
  console.log("đúng");
} else {
  console.log("sai");
}

// baif2 chuyển họ và tên thành dạng tên chuẩn
// var fullname = "tạ hoàng an"; Tạ Hoàng An

var fullname = "tạ hoàng an hi";
fullname = fullname.toLowerCase();

fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
// console.log(fullname);

var spacePosition = fullname.indexOf(" ");
// console.log(spacePosition);
var result = "";
while (spacePosition !== -1) {
  var index = spacePosition + 1;
  result += fullname.slice(0, index) + fullname.charAt(index).toUpperCase();
  fullname = fullname.slice(index + 1);
  spacePosition = fullname.indexOf(" ");
}
result = result + fullname;

console.log(result);
