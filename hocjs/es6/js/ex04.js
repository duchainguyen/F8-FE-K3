//spread trải các phần tử qua object, array ra ngoài

// const job = {
//   jobName: "giảng viên",
//   company: "f8",
// };

// const user = {
//   name: "Hoàng An",
//   email: "abc@gmail.com",
//   ...job,
// };
// console.log(user);

// const oldArr = ["Hoàng an", "abccc@gmail.com"];
// const newArr = ["giảng viên", "f8", ...oldArr];
// console.log(newArr);

// const items = [1, 2, 3];
// const items2 = [...items];

const data = {
  status: 1,
  name: "hoàng an",
};

// tạo mảng mới có cấu trúc giống mảng cũ nhưng thay đổi thuộc tính name thành giá trị khác

/*2 bước
1. clone object data
2.thay đổi thuộc tính name--> giá trị mới

*/

const newdata = { ...data, name: "Hoàng An f8" };
// console.log(newdata);
// console.log(data);

const products = ["product 1", "product 2", "product 3"];

// tạo ra 1 mảng mới có dữ liệu và cấu trúc giống mảng cũ, add ptu mới vào mảng
const newproducts = [...products, "product 4"];
// console.log(newproducts);

// console.log(products);

const sum = (a, b) => a + b;
const value = [10, 20];
// chỉ áp dụng cho mảng
console.log(sum(...value));

//tạo 1 mảng chứa các phần tử từ 0 đến leng-1
// var arr = [];
const leng = 10;
// for (let i = 0; i <= leng - 1; i++) {
//   //   console.log(i);
//   arr[i + 1] = arr[i];
//   //   console.log(arr);
// }

// console.log(arr);

const range = [...Array(leng).keys()]; //sao chép thành 1 mảng mới
console.log(range);

const range2 = Array.from(Array(leng).keys()).map((_, index) => index + 1);
console.log(range2);
