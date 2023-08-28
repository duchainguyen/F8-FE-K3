var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  var newCustomer = customers;
  // sắp xếp theo tuổi
  newCustomer.sort(function (a, b) {
    return a.age - b.age;
  });
  // console.log(newCustomer);
  // thêm một thuộc tính mới là shortName
  newCustomer.forEach(function (customer) {
    var names = customer.name.split(" ");

    var shortName = names[0] + " " + names[names.length - 1]; // Lấy tên cuối cùng
    customer.shortName = shortName;
  });
  return newCustomer;
}

console.log(createCustomers(customers));
