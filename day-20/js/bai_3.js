var arr = [
  ["a", 1, true],
  ["b", 2, false],
  ["b", 2],
];

var result = [[], [], []];

var results = arr.forEach(function (subArray) {
  subArray.forEach(function (item) {
    // kiểm tra điều kiện
    if (typeof item === "string") {
      // khi đúng thêm phần tử vào cuối mảng
      result[0].push(item);
    } else if (typeof item === "number") {
      result[1].push(item);
    } else if (typeof item === "boolean") {
      result[2].push(item);
    }
  });
  return result;
});
// cach 1
result[0] = `["${result[0]}"]`;
result[1] = `[${result[1]}]`;
result[2] = `[${result[2]}]`;
console.log(`phần tử đã được tách trong mảng: [${result}]`);
// end

// cach 2 dung map

// muốn dùng cách 2 thì phải cmt c1

// var arrA = result.map(function (value) {
//   var array = `[${value.join(", ")}]`;
//   return array;
// });
// console.log(`phần tử đã được tách trong mảng: [${arrA}]`);

// console.log(result);
