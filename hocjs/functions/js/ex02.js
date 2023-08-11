/*
function declar

function tenHam(){

}

function expression
var tenHam = function(){
    
}
*/

// var getMessage = function () {
//   console.log(`xin chào F8`);
// };
// getMessage();

// IIFE hàm dùng 1 lần viee===================
// (function (name) {
//   console.log("xiiiiiiiiin chào F8", name);
// })("Duc hai");

// var a = function (name) {
//   console.log(name);
// };
// var b = a;
// b("duc hai");

// var a = function () {
//   console.log("Xin chào f8");
// };
// // typeof kiểm tra kiểu dữ liệu ở biến
// if (typeof a === "function") {
//   a();
// }

// var sum = function (a, b) {
//   console.log(arguments);
// };
// sum(10, 29, 12, 23);

/*tách thành mảng*/

// var concat = function (str, ...args) {
//   console.log(str);
//   console.log(args);
//   /*
//   tach du liệu thành 2 phần
//   phần 1: đối số 1
//   phần 2: đối số còn lại
//   */
// };

// concat("F8", "duchai", "f10");

// hàm setTimeout delay 1 function
/*
tham số 1: 1 hàm
tham số 2: thời gian muốn delay
tham số 3: reset param
*/
// định nghĩa ra 1 function rồi sủ dụng setTimeout
// var handleShow = function () {
//   console.log("xin chào f8");
// };
// setTimeout(handleShow, 2000);
// gọi hàm theo kiểu Callback

// cách 2 gọi hàm ở trong settimeout luôn
// setTimeout(
//   function (name) {
//     console.log("xin chào HN", name);
//   },
//   2000,
//   "đẹp"
// );
// có () thì nó là gọi làm chủ động
// k có thì nó là gọi hàm Callback

// setInterval => lặp đi lặp lại nội dung trong function

// var count = 0;
// var id = setInterval(function () {
//   console.log("xin chào", ++count);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);

// định nghĩa hàm callback

// var getA = function (fn, ...args) {
//   setTimeout(function () {
//     console.log("getA");
//     if (typeof fn === "function") {
//       fn(...args);
//     }
//   }, 1000);
// };

// var getB = function (name, email) {
//   console.log("getB", name, email);
// };

// getA(getB, "duchai", "abc@gmail.com");

/*
định nghĩa 3 hàm: 
one() ==> 3s hiện kết quả : thứ nhất
two() ==> 1s hiện kết quả : thứ hai
three() ==> 2s hiện kết quả : thứ ba

thực hiện gọi hàm làm sao để chạy theo thứ tự one two three
*/

var getOne = function (fn) {
  setTimeout(function () {
    console.log("thứ nhất");
    if (typeof fn === "function") {
      fn();
    }
  }, 3000);
};
var getTwo = function (fn) {
  setTimeout(function () {
    console.log("thứ hai");
    if (typeof fn === "function") {
      fn();
    }
  }, 1000);
};
var getThree = function (fn) {
  setTimeout(function () {
    console.log("thứ ba");
    if (typeof fn === "function") {
      fn();
    }
  }, 2000);
};
getOne(function () {
  getTwo(getThree);
});

// callback hell khó bảo trì

// tìm hiểu trước
// hàm con
// closure
// giải thuật đệ quy
