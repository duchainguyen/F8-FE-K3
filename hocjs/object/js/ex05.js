// function Constructor = Hàm tạo
// sử dụng nguyên tắc đặt tên PascalCase
// vidu Person, Customer
function Person(name, email) {
  // sử dụng từ khóa this để định nghĩa các thuộc tính và phương thưcs
  this.name = name;
  this.email = email;
  this.getName = function () {
    return this.name;
  };
}

Person.prototype.gender = "male";

// tạo đối tượng
var person = new Person("Hoàng An", "abc@gmail.com");
// console.log(person);

var boy = new Person("Hai", "acc@gmail.com");
// console.log(boy);

// bài tập thêm thuộc tính gender để thể hiện giới tính ko sửa hàm tạo Person
// đảm bảo các đối tượng tạo từ Person đều có

// person.gender = "giới tính";

//

var result = person.gender;
result = new Person("Hoàng An", "abc@gmail.com");
console.log(result);

// bài tập 2
/*
Tạo một hàm tạo có tên sẽ nhận vào 2 tham số và viết các phương thức sau

+add()
+sub()
+mul()
+divi()


*/

function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.add = function () {
    return this.a + this.b;
  };
  this.sub = function () {
    return this.a - this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
  this.divi = function () {
    if (b === 0) {
      return "Không chia đc ";
    }
    return this.a / this.b;
  };
}

var result = new Calculator(1, 0);
// console.log(result.divi());

// console.log(`
//   Cộng: ${result.add()},
//   Trừ:  ${result.sub()},
//   Nhân: ${result.mul()},
//   chia: ${result.divi()} `);

var getMessage = function () {
  console.log("Hello");
};
// console.log(window);
// window.getMessage();

Calculator.getMessage2 = function () {
  console.log("Hello F8S");
};

// Calculator.getMessage2();

// cú pháp
// tenhamtao.tenham = function(){}
// tenhamtao.tenbien = giatri

// vd array.isArray(), Number.isInteger()

// Kiểm tra biến xem nó đc tạo từ hàm tạo nào
var a = [];
var b = "Hoàng An";
var c = new Calculator(5, 10);
var d = true;
// console.log(a.constructor.name);
// console.log(b.constructor.name);
// console.log(c.constructor.name);
// console.log(d.constructor.name);

// khong áp dụng cho null và undefined

var User = function () {
  this.name = "Hoàng An";
  this.email = "abc.@gmail.com";
  return "Hello F8";
};

var user = new User();
// console.log(user);
// console.log(user.name);
// console.log(User());

// nối 2 Object
var a = {
  name: "An",
  age: 31,
};

var b = {
  email: "abc@gmail.com",
  title: "Giảng viên",
};

// Object.prototype.getFirst = function () {
//   var keys = Object.keys(b);
//   return keys;
// };

// cách nối 2 object
// Object.keys(b).forEach(function (key) {
//   a[key] = b[key];
// });
// end
// console.log(a.getFirst());

// c2 Object.assign(target, source)
// nối object source vào target và trả về object mới

// var result = Object.assign(a, b);
// console.log(result);
//  end c2

// console.log(a);
// console.log(b);

// bài tập
// sử dụng assign để nối object a và b lại với nhau nhưng k làm thay đổi Object a và
// b ban đầu

// c1
// var aClone = Object.assign({}, a); //copy a vao object moi
// var result = Object.assign(aClone, b);
// // end

// // c2
// var result = Object.assign(Object.assign({}, a), b);
// console.log(result);
// // end

// bài tập
var query = {
  name: "Hoàng An F8",
  status: 1,
  category: 1,
  keyword: "fullstack Offline",
};

var querys = Object.entries(query);
console.log(querys);

var result = querys
  .map(function (s) {
    return s.join("=");
  })
  .join("&");

// console.log(result.replaceAll(" ", "+"));

// end

var url = `https://fullstack.edu.vn/search?_type=course&q=Javascript+cơ+bản&status=`;
// var index = url.indexOf("?") + 1;
// var s = url.slice(index);
// console.log(s);

var queryString = url.split("?").splice(-1).join();
console.log(queryString);

var result = {};
var query = queryString
  .split("&")
  .map(function (item) {
    return item.split("=");
  })
  .forEach(function (item) {
    if (item[1].length > 0) {
      result[item[0]] = item[1].replaceAll("+", " ");
    }
  });
console.log(result);
