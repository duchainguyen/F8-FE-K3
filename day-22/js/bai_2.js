var number = [5, 10, 15, 20, 25];
Array.prototype.reduce2 = function (callback, value) {
  // value là giá trị khởi tạo để ktra xem nó đc truyền vào hay chưa
  // console.log(callback, prev, index)
  // console.log(this[0]);
  // xem value ban đầu đc truyền vào hay chưa dùng toán tử 3 ngôi
  var result = value !== undefined ? value : this[0];

  // sử dụng if else
  // var result = value;
  // if (value === undefined) {
  //   result === this[0];
  // } else {
  //   result === 0;
  // }
  // end

  // console.log(result);
  // nếu đc truyền vào thì nó sẽ chạy từ 0 còn chưa thì sẽ chạy từ 1
  for (var i = value === undefined ? 1 : 0; i < this.length; i++) {
    // var result = callback(this[i-1], this[i], i);
    var result = callback(result, this[i], i);
    // console.log(add);
    // console.log(result);
  }
  return result;
};
// console.log(number.reduce2());
var result = number.reduce2(function (prew, current, index) {
  console.log(`p= ${prew}, c = ${current}, i = ${index} `);
  // return prew + current;
  return current;
}, 0);

console.log(result);

// var result = number.reduce(function (prew, current, index) {
//   console.log(`p= ${prew}, c = ${current}, i = ${index} `);
//   return current;
// },0);

// console.log(result);
// bài tập
var students = ["An", "Dương", "Vương", "Hải", "Khang"];

var studentsActive = ["Dương", "Hải", "Vương"];

// An Khang

Array.prototype.reduce2 = function (callback, value) {
  var result = value !== undefined ? value : this[0];
  for (var i = value === undefined ? 1 : 0; i < this.length; i++) {
    var result = callback(result, this[i], i);
  }
  return result;
};
var result = students.reduce2(function (prev, current) {
  // var newArr = [];
  // console.log(prev, current);
  if (!studentsActive.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(result);
