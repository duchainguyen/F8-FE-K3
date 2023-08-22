var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 3, 6, 7, 1];

var result = arrA.filter(function (value) {
  // includes nó sẽ trả về khi index mảng A tìm đc trong mảng B và trả về True
  return arrB.includes(value);
});

console.log(`giao của hai mảng là:  ${result}`);
