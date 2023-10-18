/*
Arrow function --> hàm mũi tên

*/

//1. không tham số
// const getMessage = () => {
//   console.log("hello");
// };

//2. có 1 tham số
// const getMessage = (msg) => {
//   console.log(msg);
// };
// getMessage("f8");

//3. có nhiều tham số

// const getMessage = (msg, type = `success`) => {
//   console.log(msg, type);
// };
// getMessage("f8");

// const sum = (a, b) => a + b;

// console.log(sum(10, 20));
// const getUser = () => ({
//   email: "duchai1242@gmail.com",
// });
// console.log(getUser());

// 5. closure arrow function

// const sum = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };
// c2

// const sum = (a) => (b) => a + b;
// const adder = sum(10);
// console.log(adder(20));
// console.log(adder(30));

// 6.IIFE Arrow function
// (() => {
//   console.log("f8");
// })();

const users = [
  {
    id: 1,
    name: "user 1",
  },
  {
    id: 2,
    name: "user 2",
  },
  {
    id: 3,
    name: "user 3",
  },
];

// lấy user theo id
// const getUser = (userId) => users.find((user) => user.id === userId);
// console.log(getUser(1));

document.body.innerHTML = `<h2>Danh sách user</h2>
${users.map((user) => `<h3>${user.name}</h3>`).join("")}
`;

/*
lưu ý khi dùng arrow
Arrow không thay thế function truyền thống
Arrow không binding được từ khóa this
Arrow không binding được argument
Arrow không được hoisting
Arrow không có thuộc tính prototype
Arrow không nên sử dụng làm method trong object(ko dùng được this)
Arrow không được dùng làm function constructor
*/

// const user = {
//   email: "Hoangan@gmail.com",
//   getEmail: function () {
//     return {
//       number: 10,
//       getNumber: () => {
//         console.log(this);
//       },
//     };
//   },
// };

// user.getEmail().getNumber();

// const getMax = function () {
//   console.log(arguments);
// };

// cách này arrow lỗi

//rest parametetr --> tham số còn lại
// const getMax = (...args) => {
//   console.log(args);
// };
// getMax(45, 5, 2);

// const User = function () {
//   this.email = "Hoàng an";
// };
// const user = new User();
// console.log(user);

// ko có thuộc tính prototypes
const getUser = () => {
  return "Hoàng an";
};
console.log([getUser]);
