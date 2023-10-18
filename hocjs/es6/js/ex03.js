/*
Destructuring: kĩ thuật để truy cập vào các phần tử trong object 
array và gán vào các biến riêng biệt

*/

// const user = {
//   username: "Hoang An",
//   email: "abc@gmail.com",
//   age: 31,
//   address: "Hà Nội",
//   "shipping-address": "Hồ Chí Minh",
//   address2: "Đà Nẵng",
// };
// const key = "address2";
// const {
//   username,
//   email: useremail,
//   age = 30,
//   "shipping-address": shippingAddress, //bắt buộc phải đổi
//   [key]: address, //computed property
// } = user;
// const { username, email, ...rest } = user;
// console.log(username, email);
// console.log(age);
// console.log(shippingAddress);
// console.log(address);

// console.log(rest);

// const user = ["Hoàng An", "acc@gmail.com", undefined, "Hà Nội"];
// // const [username, email, , address] = user;
// const [username, ...rest] = user;

// console.log(username, email, address);
// console.log(username);
// console.log(rest);

// hoán vị 2 biến
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

/*Destructuring trong Destructuring

}


*/
// const profile = {
//   displayName: "Hoàng An",
//   emails: {
//     value: "abc@gmail.com",
//   },
// };

// const {
//   displayName,
//   emails: [{ value: email }],
// } = profile;
// console.log(displayName);
// console.log(displayName, email);

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

const getUser = (userId) => users.find(({ id }) => id === userId);
console.log(getUser(1));

const getMessage = ({ msg, type = "success" }) => {
  console.log(msg, type);
};
getMessage({ msg: "hello f8" });
