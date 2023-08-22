/*
-Some(callback): vòng lặp kiểm tra: trả về true false
-trả về true nếu có ít nhất 1 lần lặp của callback trả về true

*/

var number = [1, 2, 3, 4, 5, 6];
var check = number.some(function (number) {
  return number % 2 === 0;
});

console.log(check);

/*
every(callback)
-vòng lặp kiểm tra: 
-trả về true nếu tất cả lần lặp trả về true
-trả về false khi không có lần lặp nào trả về true
*/
var check = number.every(function (number) {
  return number % 2 !== 0;
});

console.log(check);

/*find
-cách hoạt động giống filter
-trả về 1 phần tử đầu tiên tìm đc
*/
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.find(function (numbers) {
  return numbers > 3;
});
console.log(result);

/*findLast
-cách hoạt động giống filter
-trả về phần tử cuối cùng tim được
*/

/*findIndex()
-trả về index đầu tiên tìm được

findLastIndex()
-trả về index phần tử cuối cùng tìm được
*/

var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.findLastIndex(function (number) {
  return number > 3;
});
console.log(result);

// bài tập
var users = [
  ["Hoàng An", "Hoangan.web@gmail.com"],
  ["Nguyễn Dương", "duong.web@gmail.com"],
  ["Anh Quân", "Hoangan.web@gmail.com"],
];
var email = "duong.web@gmail.com";

var result = users.filter(function (user) {
  return email !== user[1];
});

console.log(result);
// xóa user có email trên

// sử dụng findindex
var index = users.findIndex(function (user) {
  return user[1] === email;
});
if (index !== -1) {
  users.splice(index, 1);
}

console.log(users);

// bài tập lọc trùng

var users = [
  ["Hoàng An", "Hoangan.web@gmail.com"],
  ["Nguyễn Dương", "duong.web@gmail.com"],
  ["Anh Quân", "Hoanga.web@gmail.com"],
  ["Nguyễn Dương", "duong.web@gmail.com"],
];

// function discard(users) {
//   var newArr = [];
//   for (var i = 0; i < users.length; i++) {
//     // console.log(users);
//     if (newArr.indexOf(users[i]) === -1) {
//       //   push thêm giá trị  vào mảng
//       newArr.push(users[i]);
//     }
//   }
//   return newArr;
// }

// console.log(discard(users));

var newArr = [];
users.forEach(function (user) {
  var index = newArr.findIndex(function (item) {
    return user[1] === item[1];
  });
  if (index === -1) {
    newArr.push(user);
  }
});
console.log(newArr);
console.log(`loc trung ${newArr}`);

// bai tập
var users = [
  ["Hoàng An", "Hoangan.web@gmail.com", 20],
  ["Nguyễn Dương", "duong.web@gmail.com", 21],
  ["Anh Quân", "Hoanga.web@gmail.com", 23],
];

var email = "duong.web@gmail.com";

var index = users.findIndex(function (user) {
  return email === user[1];
});

users[1][2] += 2;

console.table(users);

// console.log(index);
// console.log(`${index}`);

// c2 dùng map

var newArr = users.map(function (user) {
  if (user[1] === email) {
    user[2] += 2;
  }
  return user;
});

console.log(newArr);
