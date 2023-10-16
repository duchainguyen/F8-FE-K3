// Custom Element
/*Tạo ra thẻ HTML riêng
-Thẻ  HTML này phải có 2 từ trở lên và có gạch nối
-kỹ thuật để phân chia các thành phần trong trang web-> hay còn gọi Component



sử dụng:
CustomElement
Kế thừa từ HTMLElement
lifecycle callbacks: vòng đời từ lúc 1 component đc tạo ra cho đến lúc xóa nó

*/
// tạo component: 1 hàm hoặc 1 class

var HelloWorld = function () {
  return Reflect.construct(HTMLElement, [], this.constructor);
};

HelloWorld.prototype = Object.create(HTMLElement.prototype);
HelloWorld.prototype.constructor = HelloWorld;
HelloWorld.prototype.connectedCallback = function () {
  console.log("connected");
  this.innerText = "Hello world";
};

// console.log(HelloWorld);
// đăng kí element
customElements.define("hello-world", HelloWorld);

// console.log("hello");
