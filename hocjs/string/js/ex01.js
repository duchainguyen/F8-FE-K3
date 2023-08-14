/*
chuỗi trong js
String(): hàm tạo (function constuctor)

*/

var fullname = "Nguyễn Đức Hải";

console.log(fullname, typeof fullname);

var fullname2 = String("Nguyễn Đức Hải");
console.log(fullname2, typeof fullname2);

// Khai báo như object
var fullname3 = new String("Nguyễn Đức Hải");
console.log(fullname3, typeof fullname3);
console.log(fullname3.length);
// truy cập vapf các phương thức thuộc tính xử lý chuỗi (được xây dựng từ hàm tạo string)
/*
tendoituong.tenThuocTinh
tendoituong.tenPhuongThuc()
*/
/* tự động tạo ra 1 object tạm thời để có thể truy cập vào các phương thức thuộc tính
của hàm tạo string

*/

console.log(String.prototype);
/*
1. length:  lấy độ dài của chuỗi
2. charAt(): lấy kí tự theo index( index bắt nguồn từ 0)
3. charCodeAt(): lấy mã ASCII  của kí tự theo index
4. concat():  nối chuỗi
5. indexOf(value): tìm vị trí xuất hiện đầu tiên của chuỗi
con trong chuỗi cha, nếu không tìm thấy trả về âm -1;
6. lastindexOf(value): tìm vị trí cuối
7. includes(value): tìm chuỗi và trả về true false
8. slice(start, end): cắt chuỗi từ start đến end
9. replace(search, with): tìm kiếm và thay thế chuỗi đầu tiên
*/
var str = "xin chào F8";
// for (var i = 0; i < str.length; i++) {
//   console.log(str.charAt(i));
// }

// console.log(str.charCodeAt(0));

// bài tập lấy username của email
var email = "hoangan.web@gmail.com";
// console.log(email.indexOf("@"));
var index = email.indexOf("@");
console.log(email.slice(0, index));

console.log(str.replace("F8", "F888"));
/*
lưu ý hàm replace hỗ trợ thay thế dựa vào biểu thức chính quy 
10. replaceALL(search, with) : tìm kiếm và thay thế tất cả
11. hàm split(): tách chuỗi thành mảng
12. toLowerCase(): chuyển thành chữ thường
13. toUpperCase(): chuyển thành chữ hoa
14. trim(): loại bỏ khoảng trắng đầu và cuối chuỗi
15. trimStart(): loại bỏ khoảng trắng đầu chuỗi 
16. trimEnd(): loại bỏ khoảng trắng cuối chuỗi
17. match(): cắt chuỗi dựa vào biểu thức chính quy (regex)
*/

var content = `Lorem ipsum, or lipsum as 0123456789 it +84000000000 is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:`;
var pattern = /(0|\+84)\d{9}/g;
var phones = content.match(pattern);
console.log(phones);

// cắt các số điện thoại thành 1 chuỗi
