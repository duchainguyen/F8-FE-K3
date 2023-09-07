Array.prototype.push2 = function (...items) {
  // Sử dụng vòng lặp để thêm từng phần tử vào cuối mảng
  for (var i = 0; i < items.length; i++) {
    this[this.length] = items[i];
  }
  return this.length;
};

// Sử dụng hàm push2()
var myArray = [1, 2, 3];
myArray.push2(4, 5, 6);

console.log(myArray);
