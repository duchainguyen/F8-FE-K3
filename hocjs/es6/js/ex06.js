//classes => tạo ra bản mẫu của 1 đối tượng
class User {
  #age; //khai báo thuộc tính private
  constructor(name, email) {
    //phương thức khởi tạo của class
    // chạy đầu tiên khi đối tượng được tạo
    // giúp cta khai báo các thuộc tính các giá trị mặc định
    //Nhận các đối số của class
    this.name = name;
    this.email = email;
    this.#age = 30;
  }
  //   phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }

  setAge(value) {
    this.#age = value;
  }
  getAge() {
    return this.#age;
  }
}

// const user = new User("Hoàng An", "acc@gmail.com");

// console.log(user);
// console.log(user.getEmail());
// console.log(user.getName());
// console.log(user.getAge());

// class Counter {
//   constructor() {
//     this.root = document.querySelector("#root");
//     this.count = 0;
//     this.render();
//   }
//   handle = () => {
//     this.count++;
//     this.render();
//   };
//   render() {
//     this.root.innerHTML = `<h1>${this.count}</h1>
//     <button>+</button>`;
//     const btn = this.root.querySelector("button");
//     btn.addEventListener("click", this.handle);
//   }
// }

// new Counter();

class Autentication extends User {
  //kế thừa tất cả các thuộc tính, phương thức của class user
  constructor(name, email) {
    console.log("Autentication constructor");
    // gọi constructor của cha
    super(name, email);
    this.isLogin = true;
  }
  getInfo() {
    return `
        Name: ${this.getName()}
        Email: ${this.getEmail()}`;
  }
  check() {
    return this.isLogin;
  }
}

class Authorization extends Autentication {
  constructor(name, email) {
    super(name, email);
    this.role = "admin";
  }
}

const authorization = new Authorization("Hoàng an", "acc@gmail.com");
console.log(authorization);

// const auth = new Autentication("Hoàng an", "abc@gmail.com");
// console.log(auth);
// console.log(auth.getInfo());
// console.log(auth.check());

//user => authentication => authorization
