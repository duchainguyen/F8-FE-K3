// xử lý tăng giảm counter
var counter = document.querySelector(".counter");
var h1 = document.querySelector("h1");
var sub = document.querySelector(".sub");
// var span = document.querySelector("span");
var addd = document.querySelector(".add");
var button = document.querySelector(".btn");

// console.log(h1.value);
//tạo ra event
var validEvent = new Event("valid");
var invalidEvent = new Event("invalid");

sub.addEventListener("click", function () {
  if (h1.innerText < 1) {
    return "";
  }
  h1.innerText--;
  if (h1.innerText < 10) {
    counter.dispatchEvent(invalidEvent);
  } else {
    counter.dispatchEvent(validEvent);
  }
  //   span.dispatchEvent(counterEvent);
});

addd.addEventListener("click", function () {
  h1.innerText++;
  if (h1.innerText >= 10) {
    counter.dispatchEvent(validEvent);
  } else {
    counter.dispatchEvent(invalidEvent);
  }
  //   span.dispatchEvent(counterEvent);
});
