var users = [];

function handleRegister(name, email, password) {
  if (!name || !email || !password) {
    console.log("Vui lòng điền đầy đủ thông tin.");
    return;
  }
  var newUser = {
    name: name,
    email: email,
    password: password,
    role: "user",
  };

  users.push(newUser);

  console.log(`Đăng kí thành công`);
}

function login(name, password) {
  var user = users.find(function (user) {
    return user.name === name && user.password === password;
  });

  if (user) {
    console.log("Thông tin người dùng:");
    console.log(user);
  } else {
    console.log("Thông tin đăng nhập không hợp lệ.");
  }
}
var dataRegister = handleRegister(
  "Nguyen Van A",
  "nguyenvana@email.com",
  "1234567"
);
var dataRegister = handleRegister(
  "Nguyen Van B",
  "nguyenvanb@email.com",
  "1234567"
);

var dataLogin = login("Nguyen Van B", "1234567");

console.log("Tài khoản đã đăng kí", users);
// console.log(dataLogin);
