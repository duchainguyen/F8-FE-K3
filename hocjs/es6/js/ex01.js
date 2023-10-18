// một phiên bản nâng cao hơn của js
/*
scope: phạm vi

1.global scope: phạm vi toàn cục

2.local scope: phạm vi cục bộ -->sử dụng trong phạm vi mà biến hàm được khai báo

2.1: function scope: phạm vi trong hàm
2.2: Block scope: phạm vi trong 1 khối: if else, for, while
típ: dựa vào dấu {}--> block code
*/

// var a = 10;
// if (a) {
//   //local scope (Block)
// }

// function getMessage(){
//     //local scope(function)
// }

/*từ khóa khai báo biến let và const
let, const: chỉ hoạt động trong scope mà nó được khai báo
-trong cùng scope chỉ được phép khai báo 1 lần

let: được thay đổi
const: không được thay đổi, gán luôn khi khai báo
*/

function getMessage() {
  let a = 10;
  let b = 20;
  if (a >= 10) {
    let b = 30;
    console.log(b);
  }
  console.log(b);
}
getMessage();

const user = "hoàng an";
/*thường được sử dụng để lưu trữ object,  array, function
phạm vi như let

*/
const customer = {
  email: "Hoàng an",
  age: 31,
};
customer.age = 22;

console.log(customer);

const sum = function () {
  return 1 + 2;
};

//hoisting
// let x;
// x = 10;
// console.log(x);
// let x;

const auth = {
  start: function () {
    this.showForm();
    this.eventLogin;
  },
  showForm: function () {},
  handleSubmit: function () {},
  eventLogin: function () {},
};

auth.start();
