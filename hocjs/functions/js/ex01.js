/*
hàm là một kĩ thuật trong lập trình, cho phép gom nhóm các đoạn ct con để
thuận tiện trong quá trình tái sử dụng 

hàm thể hiện một chức năng

cú pháp 
hàm k có tham số và hàm có tham số
function tenham(){
    nội dung hàm
}

function tenHam(thamso1, thamso2){
    nội dung hàm
}

//goi hàm
tenHam();
tenHam(doiso1, doiso2)

2. hàm có giá trị trả về 
-hàm có return là hàm có giá trị trả về
==> khi return được gọi ==> thoát hàm(các đoạn code dưới return k hoạt động)
-hàm k có giá trị trả về là hàm k có return hàm void

3.biến cục bộ và biến toàn cục
-biến cục bộ : local varlable chỉ sử dụng trong phạm vi 1 hàm
-biến toàn cục: global variable => sử dụng trong phạm vi ngoài hàm


*/

// function getMessage() {
//   console.log(`hello`);
// }

// getMessage(); //lời gọi hàm chủ động

// function getMsg(msg, type = "success") {
//   console.log(msg, type);
// }

// getMsg("f8", "error");

// function sum(a, b) {
//   var c = a + b;
//   //   console.log(`tổng của a + b= ${c}`);
//   return c;
// }

// console.log(sum(4, 5) + 10);

// function division(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return "ko tính được";
// }

// console.log(division(10, 3));

// biến cục bộ
// function getMessage(value) {
//   var value = `xin chào: ${value}`;
//   console.log(value);
// }

// getMessage("f8");

// biến toàn cục

var msg = "Duc Hai";
function getMessage() {
  return msg;
}
// biến toàn cục cần khai báo trước khi gọi hàm
console.log(getMessage());
