// setter, getter
class User {
  #email = "abc@gmail.com"; //private
  constructor() {
    this.data = ["user 1", "user 2", "user 3"];
  }
  //   getter
  get latest() {
    return this.data[this.data.length - 1];
  }
  get first() {
    return this.data[0];
  }
  get email() {
    return this.#email;
  }
  //setter
  set email(value) {
    this.#email = value;
  }
}
const user = new User();
console.log(user.latest);
console.log(user.first);
console.log(user.email);
user.email = "accas@gmail.com";
console.log(user.email);

Array.prototype.__defineGetter__("length2", function () {
  console.log("hello f8");
});
const users = ["user 1", "user 2", "user 3"];

users.length2;
