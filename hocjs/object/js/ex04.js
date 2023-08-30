Object.prototype.getFirst = function () {
  var keys = Object.keys(this);
  var firstkey = keys[0];
  return this[firstkey];
};
var user = {
  name: "Hoàng An",
  email: "abc@gmail.com",
};
// console.log(user.getFirst());

var customer = {
  email: "contact@fullstack.edu.vn",
  age: 31,
};

// console.log(customer.getFirst());

/*prototype với thuộc tính
Object.prototype.tenthuoctinh = giatri;


2.prototype với phương thức
Object.prototype.tenphuongthuc = function();

lưu ý prototype : sẽ ảnh hưởng tới tất cả kiểu dữ liệu (trừ null, undefined) nếu 
ta gán vào hàm tạo Object
*/
// var a = null;

// Object.prototype.message = "F8";
// var fullname = "Hoàng An";
// var age = 31;
// var users = [];
// var today = new Date();
// console.log(fullname.message);
// console.log(age.message);
// console.log(user.message);
// console.log(String.prototype);

// Định nghĩa prototype
String.prototype.getLast = function () {
  //   console.log(this.toString());
  //   lastIndexOf lấy ra vị trí cuối cùng "dấu cách cuối"
  var position = this.toString().lastIndexOf(" ") + 1;
  console.log(this);
  //   cắt chuổi từ đầu đến dấu cách cuối cùng
  return this.slice(position);
  //   return "Hoàng An F8";

  //  c2
  //   return this.slice(this.lastIndexOf(" "));
};

// console.log(String.prototype);
var fullname = "Hoàng An F8";
// console.log(fullname.getLast());

// bài tập
// Viết phương thức prototype

// viết lại vòng lặp map (đặt tên là map2 )

// Array.prototype.map2 = function (callback) {
//   var newArray = [];
//   for (var i = 0; i < this.length; i++) {
//     console.log(callback(this[i], i));
//     // newArray[newArray.length] = callback(this[i], i);
//     var result = callback(this[i], i);
//     // newArray.push(result);
//     newArray[newArray.length] = result;
//   }
//   return newArray;
// };

// viết lại
// callback
Array.prototype.map2 = function (callback) {
  console.log(callback);
  //   khởi tạo mảng mới để push
  var newArray = [];
  // chạy vòng lặp duyệt qua mảng this.length là user.length
  for (var i = 0; i < user.length; i++) {
    // console.log(user[i], i);

    // console.log("---------------");
    var result = callback(user[i], i);
    console.log(result);
    // sử dụng push
    // newArray.push(result);

    newArray[newArray.length] = result;
  }
  return newArray;
};

// console.log(user.map2());
var user = ["An", "Tuấn", "Sơn"];
// index trả về giá trị giá trị còn user trả về tên
// index = 0 thì user = An
var newArr = user.map2(function (user, index) {
  return `${index} - ${user}`;
});

console.log(newArr);
