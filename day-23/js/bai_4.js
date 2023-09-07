// Một mảng ví dụ
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.filter2 = function (callback) {
  // console.log(callback);
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    // kiểm tra điều kiện của filter
    if (callback(this[i])) {
      // console.log(this[i]);
      // gán vào mảng mới
      newArr[newArr.length] = this[i];
    }
  }
  return newArr;
};
// Sử dụng hàm filter để lọc ra các số chẵn
var result = numbers.filter2(function (number) {
  return number % 2 === 0;
});

console.log(result);
