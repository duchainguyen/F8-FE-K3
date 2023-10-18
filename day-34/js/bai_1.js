var box = document.querySelector(".box");
var zoom = document.querySelector(".zoom");
var zoomBox = document.querySelector(".zoom-box");
var zoomImage = document.querySelector(".zoom-image");

box.addEventListener("mousemove", function (e) {
  zoom.style.top = `${e.clientY}px`;
  zoom.style.left = `${e.clientX}px`;

  zoom.style.visibility = "visible";
  zoom.style.opacity = 0.5;

  zoomBox.style.visibility = "visible";
  zoomBox.style.opacity = 1;

  var zoomPositionTop = e.offsetY - 60;
  var zoomPositionLeft = e.offsetX - 110;

  // Giới hạn vị trí của zoom trong box
  zoomPositionTop = Math.min(
    Math.max(zoomPositionTop, 0),
    box.offsetHeight - 120 //height
  );

  zoomPositionLeft = Math.min(
    Math.max(zoomPositionLeft, 0),
    box.offsetWidth - 220 //width
  );

  zoom.style.top = zoomPositionTop + "px";
  zoom.style.left = zoomPositionLeft + "px";
  // zoom.style.transform = `translate(-50%, -50%)`;
  // tính phần trăm khi di chuột
  var topPercent = (zoomPositionTop / (box.offsetHeight - 120)) * 100;
  var leftPercent = (zoomPositionLeft / (box.offsetWidth - 220)) * 100;

  zoomImage.style.transform = `translate(-${leftPercent}%, -${topPercent}%) scale(2)`;
  // console.log(topPercent, leftPercent);
});

box.addEventListener("mouseout", function () {
  zoom.style.visibility = "hidden";
  zoom.style.opacity = 0;
  zoomBox.style.visibility = "hidden";
  zoomBox.style.opacity = 0;
});
