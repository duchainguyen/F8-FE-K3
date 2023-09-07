// var a = {
//   name: "Hoàng An",
//   email: "abc@gmail.com",
// };
// var b = a;

// coppy Object
// var b = Object.assign({}, a); //shallow copy

// var b = { ...a }; //shallow ES6

// var b = JSON.parse(JSON.stringify(a)); //deep
// b.name = "Hoàng An F8";
// console.log(a);
// console.log(b);

// Optional Chaining (?.)
//1. Optional Chaining (?.) với thuộc tính
//thêm dấu ? trước dấu . gọi tên thuộc tính
// Nếu k có thuộc tính  ==> trả về undefined
// var a = undefined;
// console.log(a?.name);

var a;
console.log(`độ dài của chuỗi: ${a?.length ?? "không xác đinh"}`);

// 2.  Optional Chaining (?.) với phương thức
/*
hàm 
apply()
bind()
call()

ES6 Object: spread, Destructuring, Object literal Enhancement
*/
var a = null;
console.log(a?.getName?.());
