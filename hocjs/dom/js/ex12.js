//Bài tập count sử dụng dom node

var root = document.querySelector("#root");
var i = 0;
var h1 = document.createElement("h1");
h1.innerText = "Count : ";

// cách 1
// var span = document.createElement("span");
// span.innerText = `${i}`;
// h1.append(span);
// end c1
// cách 2
var textNode = document.createTextNode(0);
h1.append(textNode);
// end c2

var btnPluss = document.createElement("button");
btnPluss.innerText = `+`;

var btnSub = document.createElement("button");
btnSub.innerText = `-`;

root.append(h1);
root.append(btnSub);
root.append(btnPluss);

btnPluss.onclick = function () {
  //   span.innerText = `${++i}`; //c1
  textNode.data++;
};

btnSub.onclick = function () {
  //   span.innerText = `${--i}`; //c1
  textNode.data--;
};

//comment node
var comment = document.createComment("counter app");
console.log([comment]);

root.append(comment);
