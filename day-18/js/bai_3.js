var arrA = [1, 1, 2, 2, 3, 5, 5, 3, 1, 5, 6, 7, 4];

// loại bỏ các giá trị trung nhau
function discard(arr) {
  // mảng mới chứa các giá trị k trùng nhau
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      //   push thêm giá trị  vào mảng
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(`Mảng ban đầu: ${arrA}`);

console.log(`Mảng đã qua xử lý: ${discard(arrA)}`);
