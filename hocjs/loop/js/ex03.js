/*
vòng lặp do while
-giống while
-chỉ khác về thứ tự chạy

while: kiểm tra điều kiện trước==> thực hiện sau
đo while chạy trước r mới kiểm tra điều kiện

*/

// var i = 1;
// do {
//   console.log("lần lặp thứ : " + i);
//   i++;
// } while (i <= 10);

// từ khóa braek
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

// từ khóa continue
// for (var i = 1; i <= 10; i++) {
//   //   console.log(i);
//   if (i === 3 || i === 7) {
//     continue;
//   }
//   //   ảnh hưởng tới đoạn code continue
//   console.log(i);
// }

var s = 0;
for (var i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    // các số ko chia hết cho 2 nó là số lẻ thì sẽ đc loại bỏ
    continue;
  }
  console.log(i);
  s += i;
}
console.log(`tổng ${s}`);
