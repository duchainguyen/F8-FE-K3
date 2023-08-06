/* while (điều kiện){
nội dung
}
Bước 1: kiểm tra điều kiện
bước 2: 
-nếu sai: ko chạy vòng lặp
-nếu đúng chuyển đến bước 3

bước 3: chạy nội dung trong vòng lặp
bước 4: quay lại kiểm tra điều kiện
-sai thoát
đúng ==> lặp lại bước 3
*/

// var i = 1;
// var total = 0;
// while (i <= 10) {
//   //   console.log(`i = ${i}`);
//   total += i;
//   i++;
// }

// console.log(total);

var n = 100;
var count = 0;
// kiểm tra xem biến n chia cho 2 hết bn lần
while (n % 2 === 0) {
  n /= 2;
  count++;
}

console.log(count);
