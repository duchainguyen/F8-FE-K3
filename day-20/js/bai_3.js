// var arr = [
//   ["a", 1, true],
//   ["b", 2, false],
//   ["b", 2],
// ];

// var result = [[], [], []];

// var results = arr.forEach(function (subArray) {
//   subArray.forEach(function (item) {
//     // kiểm tra điều kiện
//     if (typeof item === "string") {
//       // khi đúng thêm phần tử vào cuối mảng
//       result[0].push(item);
//     } else if (typeof item === "number") {
//       result[1].push(item);
//     } else if (typeof item === "boolean") {
//       result[2].push(item);
//     }
//   });
//   return result;
// });
// // cach 1
// result[0] = `["${result[0]}"]`;
// result[1] = `[${result[1]}]`;
// result[2] = `[${result[2]}]`;
// console.log(`phần tử đã được tách trong mảng: [${result}]`);
// end

var arr = [
  ["a", 1, true],
  ["b", 2, false],
  [null, undefined, function () {}],
  [false, undefined, NaN, 10],
];

//[["a", "b"], [1, 2], [true, false]]

//Kiểm tra xem có phải là mảng hay không?
if (Array.isArray(arr)) {
  arr = arr.flat(Infinity);
  var array = arr.reduce(function (prev, current) {
    var type = typeof current;
    if (!prev[type]) {
      prev[type] = [];
    }

    prev[type].push(current);

    return prev;
  }, []);

  var result = [];
  for (var index in array) {
    result.push(array[index]);
  }

  console.log(result);
}
