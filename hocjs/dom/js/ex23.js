//
/*
web components --> chia trang web thành các thành phần khác nhau dễ bảo trì và nâng cấp
tái sử dụng

-khi làm việc với conponent --> quan tâm tới vòng đời của 
Component -->lifecycle callback
*/

// var HelloWorld = function () {
//   //kế thừa từ thằng HTMLElement
//   return Reflect.construct(HTMLElement, [], HelloWorld);
// };

// // tạo prototype cho helloworld từ prototype của HTMLElement
// // có các đặc điểm của 1 element
// HelloWorld.prototype = Object.create(HTMLElement.prototype);

// HelloWorld.prototype.connectedCallback = function () {
//   // nội dung của component
//   this.innerHTML = `<h1>Hello-F8</h1>`;
//   this.id = "title";
//   this.style.color = "red";
// };
// // console.log([HelloWorld]);
// customElements.define("hello-world", HelloWorld);

Component.create("hello-world", function () {
  //   this.innerHTML = `
  //   <div class="box">
  //       <h1>Hello-world</h1>
  //   </div>
  //   `;

  var div = document.createElement("div");
  div.classList.add("box");
  var h2 = document.createElement("h2");
  h2.innerText = "xin chào F8";
  div.append(h2);
  this.append(div);

  //   internal css
  var borderColor = this.getAttribute("border-color");
  var style = document.createElement("style");
  style.textContent = `
  .box {
    border: 1px solid ${borderColor ?? "#0000"};
    padding: 15px;
    border-radius: 15px
  }
  `;
  this.prepend(style);
});
