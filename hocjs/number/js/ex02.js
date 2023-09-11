// Các loại ép kiểu
// 1. ép kiểu theo số nguyên
/*
sử dụng hàm parseInt()
->Number.parseInt()
2. ép theo kiểu số thực
sử dụng hàm parseFloat()
->Number.parseFloat()
*/

// đọc câu lệnh từ trái qua phải
// var a = "12.1abc123";
// a = parseInt(a);
// console.log(a);

// float lấy sau dấu chấm
// var b = "123.32acc";
// b = parseFloat(b);
// console.log(b);

// các kiểu dữ liệu khác chuyển sang Number
// true flase ra NaN
// mảng, Object -> NaN
// null, undefined -> NaN

/*
3. ép kiểu bằng Number()
--> chuyển thành kiểu số thực
Dùng hàm Number() hoặc dấu cộng (+)

*/

// var a = "12.5667";
// a = Number(a);
// console.log(a);

// Các ngoại lệ
/*
true --> 1
false --> 0
[] --> 0
[5] --> 5
[1,2,3] --> NaN
["F8"] --> NaN
["5"] -->5
{} --> NaN (các Object nói chung)
Null --> 0
undefined --> NaN
new Date() --> trả về timestamp (dòng thời gian tính ms từ 1/1/1970 đến thời điểm hiện tại)

*/
var a = false;
// console.log(Number(a));

// bài tập
var arr = [
  5,
  10,
  1,
  true,
  false,
  undefined,
  null,
  NaN,
  Infinity,
  -Infinity,
  "F8",
];

// tính tổng các số lẻ

// console.log(Number(arr[0]));
// var total = 0;
// for (var i = 0; i < arr.length; i++) {
//   //   console.log(arr[i]);
//   if (Number(arr[i])) {
//     // console.log(arr[i]);
//     if (arr[i] % 2 !== 0) {
//       console.log(arr[i]);
//     }
//   }
// }

var total = arr.reduce(function (prev, current) {
  //   console.log(current);

  if (current !== true) {
    current = Number(current);
    // console.log(current);
    if (
      current % 2 !== 0 &&
      !isNaN(current) &&
      current !== Infinity &&
      current !== -Infinity
    ) {
      console.log(prev, current);
      return prev + current;
    }
  }
  return prev;
}, 0);

console.log(total);

// Điều kiện kiểm tra một biến có phải là số hay không
/*
typeof = number
không phải NaN
ko phải infinity và -infinity
*/

// chuyển đổi hệ cơ số
// toString() => chuyển số thành chuỗi
// (2): hệ nhị phân
var a = 50;
// var a = a.toString(8); //hệ bát phân
var a = a.toString(16); //hệ thập lục phân
console.log(a);

// lấy số chữ số phần thập phân
/*
toFixed(number) ==> number là số chứ số phần thập phân muốn lấy (lấy sau dấu chấm)
tự động làm tròn
chuyển về chuỗi

toPrecision(number): lấy số các chữ số từ đầu(áp dụng nguyên tác làm tròn)
*/
// var a = 12.5678;
// a = a.toFixed(2);
// console.log(a);
// console.log([Number]);

// chuyển đổi định dạng số

var price = 120000000000000;
price = price.toLocaleString("vi", {
  style: "currency",
  currency: "VND",
});
console.log(price);

console.log(Math);

var seconds = 295;
var p = seconds / 60;
p = Math.floor(p);

var s = seconds - p * 60;
console.log(`${p}:${s}`);

var getTime = function (value) {
  var mins = Math.floor(value / 60);
  value -= mins * 60;
  value = Math.floor(value);
  return `${mins < 10 ? "0" + mins : mins} : ${
    value < 10 ? "0" + value : value
  }`;
};
console.log(getTime(seconds));
