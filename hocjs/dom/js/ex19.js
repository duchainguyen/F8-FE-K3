/*
Các bước để xây dựng 1 event

1. xác định được logic của event

--> slider được 100% thì tạo ra 1 event

2. tên event là gì
--> tên event : finish

3. element sẽ lắng nghe event

--> element slider

4. tạo ra 1 object event từ hàm event hoặc custom event

5. dispatch event dựa vào object event và element event đã xác định

6. Test(gọi hàm addEventListener)
*/

var slider = document.querySelector(".slider");
// console.log(slider);

var finishEvent = new Event("finish");

slider.addEventListener("input", function () {
  var value = this.value;
  if (+value === 100) {
    this.dispatchEvent(finishEvent);
    finishEvent.abc = "xyz";
  }
});

slider.addEventListener("finish", function (e) {
  console.log(e);
  //   var offsetX = (e.offsetX * 100) / slider.clientHeight;
  console.log(offsetX);
  console.log("công việc");
});

// var handleFinish = function () {
//   console.log("Công việc");
// };
