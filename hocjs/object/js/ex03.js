var users = {
  name: "Hoàng An",
  email: "abc@gmail.com",
  getInfo: function () {
    // this đại diện cho object hiện tại
    return `
        - Name: ${this.name}
        - Email: ${this.email}
    `;
  },

  children: {
    address: "Hà Nội",
    getChildren: function () {
      return this.address;
    },
    getName: function (a) {
      return a.name;
    },
  },
};

console.log(users);
// console.log(this);
console.log(users.getInfo());
// console.log(users);
// console.log(users.children);
console.log(users.children.getChildren());
console.log(users.children.getName(users));

var customer = {
  name: "Hoàng An",
  email: "abc@gmail.com",
  teacher: {
    name: "Hoàng An F8",
    salary: 5000000,
    histories: [
      {
        year: 2020,
        name: "Công việc 1",
      },
      {
        year: 2021,
        name: "Công việc 2",
      },
      {
        year: 2022,
        name: "Công việc 3",
      },
    ],
  },
};

console.log(customer.teacher.histories[0].name);
