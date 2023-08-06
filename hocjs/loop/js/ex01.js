// vòng lặp: đoạn chương trình lặp đi lặp lại theo 1 số lần nhất định

/*
2loai
lặp với số lần xác định trước: for
for(bien chay; dieu kien dung; buocnhay){
    nội dung
}

*/
// tăng dần
// for (i = 1; i <= 10; i++) {
//   console.log(`lần lặp thứ ${i}`);
// }

// giảm dần
// for (var i = 10; i >= 1; i--) {
//   console.log(`lần lặp thứ ${i}`);
// }

// for lồng nhau
// for (i = 1; i <= 10; i++) {
//   for (var j = 1; j <= 10; j++) {
//     console.log(`i = ${i} - j = ${j}`);
//   }
// }

// bài 1
// var n = 10;
// var total = 0;
// for (i = 1; i <= n; i++) {
//   total = total + i;
//   console.log(`total = ${total}`);
// }

// console.log(total);

// bài2 tính trung bình cộng các số chẵn trong khoảng 1 đên n
var n = 20;
var count = 0,
  total = 0,
  avg;
for (var i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    total += i;
    count++;
  }
}
avg = total / count;
console.log(total);
console.log(avg);
