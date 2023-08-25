var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 3, 6, 7, 1];

var result = arrA.reduce(function (prev, current) {
  if (arrB.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(`giao của mảng A B là: ${result}`);

// var results = arrB.reduce(function (prev, current) {
//   if (arrA.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);

// console.log(results);
