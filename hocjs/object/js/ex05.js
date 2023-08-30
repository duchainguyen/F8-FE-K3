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

console.log(`
  Cộng: ${result.add()},
  Trừ:  ${result.sub()},
  Nhân: ${result.mul()},
  chia: ${result.divi()} `);
