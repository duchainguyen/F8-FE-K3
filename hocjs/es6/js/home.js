function getMessage() {
  console.log("Hello F8");
}

class User {
  constructor() {
    this.name = "Hoàng an";
  }
}
const customer = {
  name: "Hoàng An",
  email: "abc@gmail.com",
};

export default getMessage; //export default

//export named: có thể có nhiều , bắt buộc phải đưa vào object
export { User, customer };
