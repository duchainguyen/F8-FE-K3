var showMessage = function (msg) {
  console.log(`xin chao f8`);
  var display = function () {
    console.log("hoang an" + msg);
  };
  display();
};
showMessage(" F8");

// ứng dụng vào các js framework
/* component
-render
-event
call api

*/

var Home = function (mgs) {
  console.log("Home js");
  var render = function (fs) {
    console.log("Xin chào F8" + mgs + fs);
  };
  render(" HIhi");
};
Home(" cfs");

console.log("======Closure========");
var sum = function (a, b) {
  return a + b;
};
console.log(sum(10, 20));

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

// giai đoạn 1 nhận tham số a
var add = sum(10);
console.log(sum(10));

// giai đoạn 2  nhận đối số b
var result1 = add(20);
console.log(`result 1 ${result1}`);

var result2 = add(40);
console.log(`result 2 ${result2}`);

var counter = function () {
  var count = 0;
  return function () {
    return ++count;
  };
};

var count = counter();
console.log(count());
console.log(count());

/*
Giải thuật đệ quy
gọi lại chính hàm mà bạn đang đinh nghĩa

*/
console.log("===========Đệ quy=======");
var showNumber = function (n) {
  console.log(n);
  if (n > 1) {
    showNumber(n - 1);
  }
};
showNumber(10);

console.log("===========Bài tập=======");

var getTotal = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + getTotal(n - 1);
};

console.log(getTotal(10));

console.log("=====Fibonacci=====");

var fibonacci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));

// hàm arrow function
// gennertor function
