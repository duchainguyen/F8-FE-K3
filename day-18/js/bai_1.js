// cho trc 1 mang so nguyen
var arrA = [2, 1, 4, 3, 5, 8, 10, 0];
console.log(arrA);
var max = arrA[0];
var maxvtri = 0;
var min = arrA[0];
var minvtri = 0;
// console.log(max);

for (var i = 1; i <= arrA.length; i++) {
  if (max < arrA[i]) {
    max = arrA[i];
    maxvtri = i;
  }
  if (min > arrA[i]) {
    min = arrA[i];
    minvtri = i;
  }
}
console.log(`số lớn nhất trong mảng là: ${max} và nó ở vị trí thứ ${maxvtri}`);
console.log(`số nhỏ nhất trong mảng là: ${min} và nó ở vị trí thứ ${minvtri}`);
