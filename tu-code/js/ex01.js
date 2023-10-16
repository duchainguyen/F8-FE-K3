// HTML element
var title = document.querySelector(".title");
// console.log(title);

var p = document.querySelector("p");

console.log(HTMLElement.prototype);

// var css = {
//   border: "1px solid red",
//   background: "yellow",
// };

// var changeCss = function (element, style) {
//   Object.assign(element.style, style);
// };
// changeCss(title, css);

HTMLElement.prototype.changeCss = function (style) {
  //   console.log(this);
  Object.assign(this.style, style);
};
title.changeCss({
  border: "1px solid red",
  background: "yellow",
});

p.changeCss({
  border: "1px solid red",
  background: "yellow",
  fontSize: "2rem",
});
