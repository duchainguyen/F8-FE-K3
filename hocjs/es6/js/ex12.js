/*
file chạy chính
nối các file khác lại

*/

// import getMessage, { User, customer } from "../js/home.js";
// getMessage();
// const user = new User();
// console.log(user);
// console.log(customer);

import * as home from "../js/home.js";
const { default: getMessage } = home;
console.log(home);
console.log(home.User);
getMessage();

// index.js -> app.js --> a.js -> b.js -> c.js (import từ thư viện bên ngoài)
/*
trong 1 folder -> có rất nhiều file cần import nếu import hêt các file này 
thủ công-> rất nhiều
->giải pháp tạo ra file index.js trong 1 folder thực hiện import các file
-> khi nào cần import thì import file index.js
*/
