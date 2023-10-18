// trict_mode là một chế độ nghiêm ngặt nó chỉ đc nằm trên đầu nếu nằm sau thì nó mất tác dụng
// "use strict";
// x = 10;
// console.log(x);

// var getMessage = function () {
//   "use strict";
//   x = 10;
//   console.log(x);
// };

// getMessage();

/*Hoisting
- là một kĩ thuật để nó tự động khai báo đẩy lên trc phần thực thi
đây là cơ chế mặc định của js: biến, hàm(function declaration)
-với khai báo biến nó chỉ đẩy phần khai báo lên trc phần thực thi và nó k đẩy giá trị
-


*/

x = 10;
console.log(x);
var x; //tồn tại hoiting chỉ hỗ trợ cho từ khóa var

getMessage();
// function declaration
function getMessage() {
  console.log("hello f8");
}

getTotal();
//function expression
var getTotal = function () {
  console.log("f8");
};
