// Enhanced object literal
const username = "hoangan.web";
const email = "contact@gmail.com";
const age = undefined;
// tạo 1 object từ 2 biến trên với key giống tên biến
function getUsername() {
  return this.username;
}
const user = {
  username,
  email,
  age,
  //   getUsername: function () {
  //     return this.username;
  //   },
  getUsername,
  getEmail() {
    return this.email;
  },
};

console.log(user);

const getOptions = (opt) => {
  console.log(opt);
};
const rootEL = "#root";
const timeout = 1000;
const animation = true;
getOptions({ rootEL, timeout, animation });

// named arguments => truyền các đối số theo tên
/*
1 hàm có 5 tham số => 3 tham số đầu giá trị mặc định
th1: chỉ muốn thay đổi tham số thứ tư

*/

// const helloworld = (a = 1, b = 2, c = 3, d, e) => {
//   console.log(`a = ${a}`);
//   console.log(`b = ${b}`);
//   console.log(`c = ${c}`);
//   console.log(`d = ${d}`);
//   console.log(`e = ${e}`);
// };

// helloworld();

const helloworld = ({ a = 1, b = 2, c = 3, d, e }) => {
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(`c = ${c}`);
  console.log(`d = ${d}`);
  console.log(`e = ${e}`);
};

helloworld({ d: 10, e: 30 });
