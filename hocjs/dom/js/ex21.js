// trigger event: tự kích hoạt một sự kiện
/*có 2 cách để trigger event
1. các hàm có sẵn của element: click, focus(), blur(), submit()... chỉ áp dụng với 1 số sự kiện phổ biến

2.dùng dispatchEvent()--> áp dụng với tất cả các sự kiện

*/

var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("hello");
});

// setInterval(function () {
//   btn.click();
// }, 1000);
var inputEl = document.querySelector(".name");
inputEl.focus();

var quantity = document.querySelector(".quantity input");
var minusBtn = quantity.previousElementSibling;
var plusBtn = quantity.nextElementSibling;
var amountEl = document.querySelector(".amount");
var price = 12000;

var changeEvent = new Event("change");
quantity.addEventListener("change", function () {
  var value = this.value;
  console.log(value);
  amountEl.innerText = (value * price).toLocaleString();
});

minusBtn.addEventListener("click", function () {
  if (quantity.value <= 1) {
    return 1;
  }
  quantity.value--;
  quantity.dispatchEvent(changeEvent);
});

plusBtn.addEventListener("click", function () {
  quantity.value++;
  quantity.dispatchEvent(changeEvent);
});
