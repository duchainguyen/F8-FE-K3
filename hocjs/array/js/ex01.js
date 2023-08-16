// khai báo mảng
var users = ["an", "duong"];
console.log(users);
// Hàm tạo của mảng là Array
var users = new Array("An", "Dương", "Vương", "Hải");

console.log(typeof users);

console.log(Array.prototype);

// Kiểm tra 1 biến có phải là mảng hay k
// if (Array.isArray(users)) {
//   console.log("đây là mảng");
// } else {
//   console.log("đây k phải là mảng");
// }
// end

// thêm phần tử vào cuối mảng tự động thêm vào cuối mảng
// teenbienmang[index] = giatri;
// users[users.length] = "Hai";
// users[users.length] = "Hai";

// sửa phần tử trong mảng
// users[1] = "Duchai";
// truy cập phần tử trong mảng
// console.log(users[1]);

// duyệt mảng
// for (var index = 0; index < users.length; index++) {
//   console.log(users[index], index);
// }

// c2: tìm index trong mảng đó
// for (var index in users) {
//   console.log(users[index], index);
// }

// c3 chỉ trả về value
// for (var value of users) {
//   console.log(value);
// }

// xóa phần tử trong mảng
// var indexCel = 1;
// var newArr = [];
// for (var index in users) {
//   // dấu cộng phía trước trả về giá trị number
//   if (+indexCel === +index) {
//     continue;
//   }
//   newArr[newArr.length] = users[index];
// }

console.log(users);
// console.log(newArr);

// bài tập
console.log(users);
var value = "thắng";
var newUser = [value];
for (var index in users) {
  newUser[newUser.length] = users[index];
}
console.log(newUser);

// bài tập
var customers = ["A", "B", "C"];
console.log(customers);
// nối mảng customers vả mảng users thành 1 mảng mới
var newArr = [];
// for (var index in users) {
//   newArr[newArr.length] = users[index];
// }
// for (var index in customers) {
//   newArr[newArr.length] = customers[index];
// }
// console.log(newArr);

for (var i = 0; i < customers.length + users.length; i++) {
  if (i < users.length) {
    newArr[newArr.length] = users[i];
  } else {
    var indexCustomer = i - users.length;
    newArr[newArr.length] = customers[indexCustomer];
  }
}

console.log(newArr);
