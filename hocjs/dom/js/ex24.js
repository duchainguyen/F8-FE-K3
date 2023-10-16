// tạo shadow: root --> đi từ host
// var content = document.querySelector(".content");
// var shadowRoot = content.attachShadow({
//   mode: "open",
// });
// // thêm content vào root
// shadowRoot.innerHTML = `
// <style>
//     h1{
//         color: red
//     }
// </style>
// <h1>Học lập trình</h1>`;
// console.log(shadowRoot);

Component.create("todo-item", function () {
  var doName = this.innerText;
  var shadow = this.attachShadow({
    mode: "closed",
  });
  shadow.innerHTML = `
  <style>
    .todo-item{
        color: red;
        border: 1px solid green;
        margin: 10px 0
    }
  </style>
  <div class="todo-item">
  <input type="checkbox"/>${doName}
  </div>
  `;
  //   this.attachShadow({ mode: "closed" });
});
