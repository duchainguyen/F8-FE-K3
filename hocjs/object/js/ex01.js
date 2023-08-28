// object

// chia theo cặp key value key này thường sẽ là string

/*
1. Object literal (đối tượng nguyên bàn)
2. Function Constructor (hàm tạo)
*/

// object literal (hàm tạo của object là object)

// console.log([Object]);

var user = {
  // key: value
  name: "Hoàng An",
  email: "abc@gmail.com",
  getCourse: function () {
    return "front-end";
  },
};
// key thương là chuỗi không chứa gạch ngang
// đặt tên tường minh dễ hiểu
// value chứa bất kì kiểu dữ liệu nào null , undefined, boolean, string, number, array, object, function
// lưu ý
// -nếu key có giá trị là các kiểu dữ liệu khác function gọi là thuộc tính
// -Nếu key có giá trị là function => gọi là phương thức
console.log(user);

user.name = "Duchai";
console.log(user);

// truy cập vào key của object
console.log(user.name);
console.log(user.emai);
console.log(user.getCourse()); //lời gọi hàm chủ động tường minh

// hoặc truyy cập theo mảng
console.log(user["name"]);

// thêm key mới cho object
// đưa key k tồn tại thì sẽ thêm key mới  còn nếu trùng thì nó sẽ bị ghi đè
user.age = 31;
// cách 2
user["address"] = "Hà Nội";
console.log(user);

// thay đổi giá trị key đã tồn tại
user.email = "acc.acc@gmai.com";
console.log(user);

// xóa key delete
delete user.age;
console.log(user);

// lấy danh sách các key duyệt object
// for (var key in user) {
//   console.log(key, user[key]);
// }

// cách 2 trả về các key của 1 object
// console.log(Object.keys(user));
// Object.keys(user).forEach(function (key) {
//   console.log(key, user[key]);
// });

// lấy danh sách key và value
console.log(Object.entries(user));

// lưu ý: object và array thường đi với nhau
/*
object lồng array
array lồng object
object lồng object
object đứng độc lập
*/
