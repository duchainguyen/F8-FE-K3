/*vòng lặp reduce(callback, initialValue)

callback có 3 tham số
-prew
-TH1: k có initalValue
lần lặp thứ nhất prew chính là phần tử mảng đầu tiên
từ lần lặp thứ 2 trở đi: prew là return của lần lặp trước
-bớt đi một lần lặp

-TH2 có initalValue
lần lặp thứ nhất prew chính là giá trị initalValue

từ lần lặp thứ 2 trở đi prew là return của lần lặp trước

current: giá trị các phần tử mảng
index: index của từng phần tử

=> giá trị trả về  của reduce là lần return cuối cùng của callback



*/

// var number = [5, 10, 15, 20, 25];
// var result = number.reduce(function (prew, current, index) {
//   console.log(`p= ${prew}, c = ${current}, i = ${index} `);
//   return current;
// }, 0);

// console.log(result);

// var result = number.reduce(function (prew, current) {
//   console.log(prew, current);
//   return prew + current;
// }, 0);
// console.log(result);

// tìm phần tử lớn nhất trong mảng

var numbers = [2, 9, -1, 6, 8];
var result = numbers.reduce(function (prev, current) {
  // console.log(a);
  console.log(prev, current);
  if (prev < current) {
    return current;
  }
  return prev;
});

console.log(result);

// bài tập
var students = ["An", "Dương", "Vương", "Hải", "Khang"];

var studentsActive = ["Dương", "Hải", "Vương"];

// An Khang

var result = students.reduce(function (prev, current) {
  // var newArr = [];
  console.log(prev, current);
  if (!studentsActive.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(result);

// tham chiếu
// copy array deep và shallow
// array.like Object
// array.from()
// tìm hiếu về Object: literal Object , function Object
