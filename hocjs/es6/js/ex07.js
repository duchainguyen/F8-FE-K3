// static method property
// class User {
//   constructor() {
//     //thuộc tính non-statics
//     this.username = "Hoàng An";
//   }
//   //thuộc tính static
//   static email = "abc@gmail.com";
//   //   phương thức non
//   static getEmail() {
//     return this.email;
//   }
//   getName() {
//     return this.username;
//   }
//   static getUsername() {
//     //this là class User
//     // muốn truy cập đến phương thức, thuộc tính non static t chuyển về về object
//     // console.log(this);
//     console.log(new this().username); //cách truy cập
//     // console.log("hello f8");
//   }

//   showEmail() {
//     // console.log(this);
//     //this là object của class user
//     //cta muốn truy cập phương thức của thuộc tính static cta phải chuyển về class
//     console.log(this.constructor.email);
//   }
// }
// User.getUsername();
// const user = new User();
// user.showEmail();
// User.email = "acc@gmail.com";
// console.log(User.email);
// const user = new User();
// user.username = "Hoàng an f8";
// console.log(user);

// const user2 = new User();
// console.log(user2);

// console.log(User.email);

class Person {
  static self = null;
  constructor() {
    this.constructor.self = this;
    console.log("constructor");
    this.name = "hoàng an";
    this.email = "abc@gmail.com";
    this.age = 30;
  }
  static getEmail() {
    if (!this.self) {
      return new this().email;
    }
    return this.self.email;
  }
  static getName() {
    if (!this.self) {
      return new this().name;
    }
    return this.self.name;
  }
}
console.log(Person.getName());
console.log(Person.getEmail());
// const person = new Person();
