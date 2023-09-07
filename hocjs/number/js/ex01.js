// number là kiểu dữ liệu nguyên thủy
// hàm taoh của number là number

// console.log(Number);

// var a = 21;
// // kiểm tra 1 biến có phải là number hay k?
// if (typeof a === "Number") {
//   console.log("đây là số");
// }

// console.log(a);

// kiểm tra 1 số nguyên
if (Number.isInteger(a)) {
  console.log("đây là 1 số nguyên");
}

// NAN (not a Number) giá trị k tính toán đc
/*
ghép kiểu thất bại
biểu thức số học có 1 toán hạng là NaN

*/
var a = NaN;
// kiểm tra giá trị của NaN;
if (Number.isNaN(a)) {
  console.log("đây là số NaM");
}
console.log(a, typeof a);

// infinity vượt quá mức lưu trữ cho phép
console.log(1000 ** 2000);
console.log(10 / 0);

a = Infinity;
// if (a !== Infinity && a !== -Infinity) {
//   console.log("ko phải");
// }

if (Math.abs(a) !== Infinity) {
  console.log("k phải");
}

// buổi sau
// các loại ép kiểu
// parseInt
// parsefloat
