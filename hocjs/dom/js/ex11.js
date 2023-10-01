// Dom node
/*
Element
Comment
Text
Attribute

Để làm việc với Dom node --> cần phải có 1 html trên trang web để chứa nó

*/

var root = document.querySelector("#root");
// root.innerHTML = `<h1>F8 - Học lập trình</h1>`;

// cách mới
// Tạo element
var h1 = document.createElement("h1");
h1.innerText = `Hoc lâp trình để đi làm`;
// h1.id = "title";
// h1.className = "title";
root.append(h1);

// var button = document.createElement("button");
// button.innerText = "Click me";
// button.className = "btn";
// console.log(h1);

// show Node lên UI
// root.append(h1); //Thêm xuống dưới
// root.prepend(button); //thêm lên trên
// root.append(button);
// var button = document.createElement("button");
// button.innerText = "Click me";
// button.className = "btn";
// root.append(button);

// bài tập
/*
Tạo cặp thẻ ul li
<ul class= "menu">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
<ul>

sau đó show len UI <id root> nằm dưới cùng
*/

var ul = document.createElement("ul");
ul.className = "menu";
ul.dataset.type = "navigation";

for (var i = 1; i < 5; i++) {
  var li = document.createElement("li");
  li.className = `li-${i}`;
  li.innerText = `item ${i}`;
  ul.append(li);
}

console.log(li);

root.append(ul);

console.log(ul);

// click vào nut pluss thêm item mới
var plusBtn = document.createElement("button");
plusBtn.innerText = `+`;

plusBtn.onclick = function () {
  var li = document.createElement("li");
  li.innerText = `item ${i++}`;
  ul.append(li);
};
// console.log(li);
root.append(plusBtn);

// Thêm 1 node mới vào trước node con khác

var h2 = document.createElement("h2");
h2.innerText = "Học lập trình không khó";
// root.append(h2);
root.insertBefore(h2, h1);

// thay thế 1 node con bằng 1 node khác

var h3 = document.createElement("h3");
h3.innerText = "Lương 1K$";
root.replaceChild(h3, h1); //thay thế root h3 với h1

root.append(h1);

// xóa 1 node con

// root.removeChild(plusBtn);

// console.log("hello");
