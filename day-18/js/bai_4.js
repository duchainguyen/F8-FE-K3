var arrA = [1, 5, 3, 2];
console.log(` mảng A: ${arrA}`);
var arrB = [6, 4];
console.log(` mảng B: ${arrB}`);
var newArray = [];
for (var i = 0; i < arrA.length + arrB.length; i++) {
  if (i < arrA.length) {
    newArray[newArray.length] = arrA[i];
  } else {
    var indexCustomer = i - arrA.length;
    newArray[newArray.length] = arrB[indexCustomer];
  }
}
console.log(` mảng mới: ${newArray} `);

// sử dụng hàm sort để sắp xếp
var newArr = newArray.sort();

console.log(` mảng sắp xếp: ${newArr}`);
