// toán tử và biểu thức
/*
biểu thức = toán tử + toán hạng
S = a + b + c
1. Toán tử số học
+, -, *, /, %, **
*/

// var a = "10"; // chuỗi số
// var b = 20;
// var c = a + b;
// c = parseInt(a) + parseInt(b); //ép kiểu số nguyên
// hoặc ép kiểu này:
// c= +a + +b;
// console.log(c);
// var count = 1;
// count++;
// ++count;
// count--;
// --count;
// console.log(count);

// var total = count++; //lấy trước khi tăng
// console.log("total = ${total}");

// var total = ++count; //lấy sau khi tăng
// console.log("total = ${total}");

// console.log("${++count}");
/*
2. toán tử logic(sosanh)
==> toán tử này sẽ trả vể kiểu dữ liệu true false
>, <, >=, <=, ==, ===, !=, !==;

*/

// var a = 10; //true, flase
// var b = a == 10; //so sánh cả giá trị và kiểu dữ liệu
//  console.log(b);

/*
3.toán tử kết hợp
&& => and
|| ==> or
! ==> not
*/

// var a = 10;
// // var b = a >= 5 && a <= 10;
// var b = a < 0 || a >= 10;
// b = !!b; // phủ phủ bằng khả định
// console.log(b);

/*
4. toán  tử gán =
var a= 10;
*/

// var a = 10;
// console.log(a);

// a += 10;
// a -= 10;
// a *= 10;
// a /= 10;
// a **= 10;
// console.log(a);

// var b = "duc hai";
// b += " F8";
// console.log("" + b);

/*
5. toán tử 3 ngôi

*/
// điều kiện ? giá trị đúng : giá trị sai
// var a = 10;
// var b = a >= 10 ? "f8" : "Hoang an";
// console.log(b);

// var x = 20;
// var total = 1 + 2 + x >= 10 ? 10 : 5 + 3 + 4;
// console.log(total);

/*
6. toán tử nullish (??)
*/

// var a;
// var b = a ?? "f8";

// // bài tập viết lại toán tử nullish bằng toán tử 3 ngôi

// // var b= a ===null || a===undefined ? a:  "f8"
// var b = a === null || a === undefined ? "f8" : a;

// console.log(b);

/*
truthy, falsy
tự động chuyển vể kiểu boolean trong ngữ cảnh thích hợp cần sử dụng boolean

chuyển về false ==> Falsy
0 , "", null, undefined, false, NAN

chuyển về true ==> truthy
các trường hợp còn lại 
*/
// var a = 10;
// var b = a ? "f8" : "Hoangan";
// // kiểm tra đúng

// // var b = !a ? "f8" : "Hoangan";
// // kiểm tra sai
// console.log(b);

/*7. Toán tử &&
==> áp dụng với truthy và falsy

==> nếu trucwoc là true thì nó sẽ lấy sau && ngược lại lấy trước
*/

// var a = 10;
// var b = a && "f8";

// console.log(b);

/*8. toán tử ||

==>nếu trước là falsy thì lấy đằng sau ngược lại lấy đằng trước

*/

// var a = 10;
// var b = a || "f8";
// console.log(b);
