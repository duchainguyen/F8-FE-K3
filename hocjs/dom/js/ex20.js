// xử lý enable hoặc disable

/*
enable thì counter >= 10

*/
var actionBtn = document.querySelector(".action button");
counter.addEventListener("valid", function () {
  console.log("hợp lệ");
  actionBtn.disabled = false;
});
counter.addEventListener("invalid", function () {
  console.log("ko hợp lệ");
  actionBtn.disabled = true;
});
