//regex : biểu thức chính quy để xử lý chuỗi nâng cao
/*
1. so khớp
2. cắt chuỗi
3. thay thế

pattern --> Object

const pattern = /regex/modifier
chuỗi

hàm xử lý 
website test regex: https://regex101.com/

các kí hiệu cơ bản
-string --> khớp với chuỗi string
- ^ --> khớp biểu thức đầu chuỗi 
- $ --> khớp cuối chuỗi
- [A-Z] --> khớp chữ hoa 
- [a-z] --> khớp chữ thường 
- [0-9] --> khớp số 
- [charlist] --> khớp các kí tự

--> lưu ý các biểu thức  viết trong 1 cặp ngoặc vuông --> kết hợp theo điều kiện hoặc
    Các biểu thức sẽ có độ dài cố định là 1 
các kí hiệu độ dài đặt sau từng biểu thức
-{value} --> độ dài cố định = value
-{min,} --> độ dài >= min
-{min,max} --> độ dài từ min-max


các kí hiệu viết tắt cho độ dài 

+ -->{1,}
* -->{0,}
?-->{0,1}
khi gặp các kí hiệu biểu thức chính quy mà vẫn muốn khớp thì thêm kí hiệu \ ascape phia trước

[] . /

bài tập kiểm tra 1 biến hợp lệ 
*/

// const pattern = /[0-9a-z]/;
// console.log(typeof pattern);
// const str = "ahoanganwweb";
// console.log(pattern.test(str));

// const pattern = /^[-%!@#^&*()+0-9]/; // /^[a-zA-Z_$][a-zA-Z0-9_$]{0,}$/
// const str = "ahoanganwweb";

// if (!pattern.test(str)) {
//   console.log("biến hợp lệ");
// } else {
//   console.log("không hợp lệ");
// }
// bắt đầu 1 chữ cái hoặc chữ bên trong là chữ hoặc số

const url = "https://fullstack.edu.vn";
const pattern = /^https:\/\/[a-z0-9.-_]+\.[a-z]{2,}$/;
console.log(pattern.test(url));

// khớp địa chỉ email

// [a-zA-Z0-9-_.]+@[a-z0-9-_.]+\.[a-z]{2,}$
