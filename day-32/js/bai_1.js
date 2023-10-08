var boldButton = document.getElementById("bold-btn");
var underlineButton = document.getElementById("underline-btn");
var italicButton = document.getElementById("italic-btn");
var color = document.getElementById("color");
var contentDiv = document.querySelector(".content");
var btnFile = document.querySelector(".file");
var dropdownMenu = document.querySelector(".dropdown-menu");

// ẩn hiện khi click vào file
window.onload = function () {
  focusContent();
};
function focusContent() {
  contentDiv.focus();
}

btnFile.addEventListener("click", function (e) {
  e.stopPropagation();
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else dropdownMenu.style.display = "none";
});
document.addEventListener("click", function (event) {
  dropdownMenu.style.display = "none";
});

boldButton.addEventListener("click", function () {
  document.execCommand("bold", false, null);
  focusContent();
});

underlineButton.addEventListener("click", function () {
  document.execCommand("underline", false, null);
  focusContent();
});

italicButton.addEventListener("click", function () {
  document.execCommand("italic", false, null);
  focusContent();
});

var colorInput = document.getElementById("color");
var contentDiv = document.querySelector(".content");

colorInput.addEventListener("input", function () {
  focusContent();
  var chooseColor = colorInput.value;
  document.execCommand("styleWithCSS", false, true);
  document.execCommand("foreColor", false, chooseColor);
});
// Thêm một sự kiện để cập nhật số ký tự và số từ khi người dùng thay đổi nội dung
contentDiv.addEventListener("input", function () {
  updateCount();
});

// đếm kí tự số từ
function updateCount() {
  var content = contentDiv.innerText;
  var charCount = content.length;
  var wordCount = content.split(/\s+/).filter(function (word) {
    return word.length > 0;
  }).length;

  document.querySelector(".character span").textContent = charCount;
  document.querySelector(".number span").textContent = wordCount;
}

// new btn
var newButton = document.getElementById("new-btn");
var nameInput = document.getElementById("name-input");
newButton.addEventListener("click", function () {
  // var nameInput = document.getElementById("name-input");
  // console.log("new");
  contentDiv.innerText = "";
  nameInput.value = "";
  updateCount();
});
// end

// xuất file pdf
var pdfBtn = document.getElementById("pdf-btn");
pdfBtn.addEventListener("click", saveAsPDF);

function saveAsPDF() {
  var fileName = (nameInput.value || "document") + ".pdf";
  html2pdf(contentDiv, {
    margin: 10,
    filename: fileName,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  });
}
// end

// save as text
var textBtn = document.getElementById("text-btn");
textBtn.addEventListener("click", saveAsText);
function saveAsText() {
  var fileName = (nameInput.value || "document") + ".txt";
  var blob = new Blob([contentDiv.innerHTML], {
    type: "text/plain;charset=utf-8",
  });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}
