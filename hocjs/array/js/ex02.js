console.log(Array.prototype);

/*
1. at lấy phần tử mảng theo index
2. concat(): nối mảng và trả về 1 mảng mới
3. indexOf(value): tìm vị trí xuất hiện đầu tiên của phần tử trong mảng nếu k tìm thấy sẽ trả về -1
4. lastIndexOf(value): trả về vị trí cuối tìm được
5. includes(value): tìm phần tử trong mảng và trả về true flase
6. slice(start, end): cắt mảng từ start đến end và trả về một mảng mới
7. join(seps): nối các phần tử mảng thành 1 chuỗi
8. push(...args): thêm phần tử vào cuối mảng và trả về số lượng phần tử đã thêm
hàm này thay đổi mảng ban đầu
9. unshift(...args): thêm phần tử vào đầu mảng và trả về số lượng phần tử đã thêm
hàm này thay đổi ban đầu
10. pop(): xóa phần tử cuối mảng và trả về giá trị đã xóa. thay đổi mảng ban đầu
11. shift(): xóa phần tử đầu mảng và trả về giá trị đã xóa. thay đổi mảng ban đầu
12. reverse(): đảo ngược mảng và trả về mảng sau khi đảo ngược. và thay đổi mảng ban đầu
13. sort(): sắp xếp mảng theo giá trị tăng dần và trả về true flase. hàm này thay đổi mảng ban đầu
14. splice(start, number): xóa number phần tử từ vị trí start. trả về mảng các phần tử đã xóa
15. fill(value): thay đổi tất cả các phần tử thành một giá trị
*/

var users = ["an", "dương", "vương"];
// console.log(users.at(2));

// bien.ham1().ham(2).ham3() ==> chaining
// bien.ham1()[0]

// console.log(users.concat([1, 2, 3], ["a", "b", "c"]));

// concat
// console.log(users.concat("Hoang An"));

// indexof
// console.log(users.indexOf("an"));

// lastindexof
// console.log(users.lastIndexOf("vương"));

// includes
// console.log(users.includes("vương"));

// slice
// console.log(users.slice(1));

// join
// console.log(users.join("-"));

// bài tập
// lấy tên từ 1 tên đầy đủ
// var fullname = "Tạ Hoàng An ";
// var firstname = fullname.trim().split(" ");
// console.log(firstname);
// console.log(`Tên của họ là: ${firstname.slice(-1).join()}`);
// end

// push
// var count = users.push("A", "B", "C");
// console.log(users);
// console.log(count);

// unshift
// var count = users.unshift("A", "B", "C");
// console.log(users);
// console.log(count);

// pop xóa cuối
// var users = ["an", "dương", "vương"];

// console.log(users.pop());

// shift xóa đầu
// console.log(users.shift());
// console.log(users);

// reverse()
// console.log(users.reverse());
// console.log(users);

// sort
// console.log(users.sort());

// var numbers = [4, 2, 1, 23];
// numbers.sort(function (a, b) {
//   if (a < b) {
//     return -1;
//   }
// });

// console.log(numbers);

// bài tập sắp xếp theo thứ tự tăng dần
// var customer = [
//   "Tạ Hoàng An",
//   "Đặng Ngọc Sơn",
//   "Trần Công Lực",
//   "Vũ Thành Khang",
// ];
// console.log(customer);
// function getName(n) {
//   return n.split(" ").slice(-1).join();
// }
// // sắp xếp tăng dần
// customer.sort(function (a, b) {
//   if (getName(a) < getName(b)) {
//     return -1;
//   }
// });

// console.log(customer);

// splice()
console.log(users);
// var spl = users.splice(1, 2, "a", "b");
// console.log(spl);

// var results = users.fill("F8");
// console.log(results);

/*
VÒNG LẶP: ĐỊnh nghĩa với dạng hàm
16. forEach(callback)
-duyệt qua từng phần tử trong mảng
-trả về value và index ==> gửi và callback
17. map(callback)
-duyệt qua các phần tử và gửi dữ liệu về callback(giống foreach)
-trả về một mảng mới với số lượng phần tử bẳng số lượng phần tử mảng ban đầu
-giá trị phần tử của mảng mới phụ thuộc vào giá trị trả về của callback(return callback)
18. filter(callback): 
-duyệt qua các phần tử và gửi dữ liệu về callback(giống foreach)
-trả về một mảng mới 
-giá trị các phần tử của mảng mới phụ thuộc vào phần tử được return true vào callback
*/

// users.forEach(function (value, index) {
//   console.log(value, index);
// });

// vidu bai tinh tong

// var number = [1, 2, 3, 4, 6];
// var total = 0;
// number.forEach(function (value) {
//   total += value;
//   //   console.log(total);
// });
// console.log(total);

// map()
// var result = users.map(function (value, index) {
//   console.log(value, index);
//   return index + " - " + value;
// });
// console.log(result);

// bài tập
// var query = [
//   ["name", "font-end"],
//   ["teacher", "Hoàng An"],
//   ["education", "F8"],
// ];

// // console.log(query);
// var result = query
//   .map(function (item) {
//     var items = item.join("=");
//     console.log(items);
//     return items;
//   })
//   .join("&");
// console.log(result.replaceAll(" ", "+"));

// ý tưởng
/*
lặp qua từng phần tử  bằng map ==> mỗi phần tử là 1 mảng ==> nối các phần tử của mảng con thành 1 chuỗi có dấu  = 
-return: về chuỗi sau khi đã nối ==> lưu vào 1 mảng mới
*/

// var number = [1, 2, 3, 4, 5, 2, 7];

// var result = number.filter(function (value, index) {
//   if (value >= 3) {
//     return true;
//   }
// });
// console.log(result);

// bài tập

var number = [1, 2, 6, 8, 5, 10, 20, 7];
var result = number
  .filter(function (n) {
    if (n % 2 === 0) {
      return true;
    }
  })
  .fill(function (value) {
    var index = number.indexOf(value);
    if (index !== -1) {
      number.splice(1, 1);
    }
    return true;
  });
// console.log(number.splice(result));

console.log(result);
console.log(number);
