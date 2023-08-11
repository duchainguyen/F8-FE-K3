function tinhgiatribieuthuc(n) {
  // khai báo
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i * (i + 1);
  }
  return sum;
}
var n = 5;
console.log(
  `với giá trị n= ${n} thì tổng của biểu thức là: ` + tinhgiatribieuthuc(n)
);
