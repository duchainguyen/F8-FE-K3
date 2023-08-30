var number = [5, 10, 15, 20, 25];
Array.prototype.reduce2 = function (callback, value) {
  // value là giá trị khởi tạo để ktra xem nó đc truyền vào hay chưa
  // console.log(callback, prev, index)
  // console.log(this[0]);
  // xem value ban đầu đc truyền vào hay chưa
  var result = value !== undefined ? value : this[0];
  // console.log(result);
  // nếu đc truyền vào thì nó sẽ chạy từ 0 còn chưa thì sẽ chạy từ 1
  for (var i = value === undefined ? 1 : 0; i < this.length; i++) {
    // var result = callback(this[i-1], this[i], i);
    var result = callback(result, this[i], i);
    // console.log(result);
  }
  return result;
};
// console.log(number.reduce2());
var result = number.reduce2(function (prew, current, index) {
  console.log(`p= ${prew}, c = ${current}, i = ${index} `);
  return current;
}, 0);

console.log(result);

// var result = number.reduce(function (prew, current, index) {
//   console.log(`p= ${prew}, c = ${current}, i = ${index} `);
//   return current;
// },0);

// console.log(result);
