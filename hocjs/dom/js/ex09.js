// tạo các element

var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".carousel-nav .next");
var prevBtn = document.querySelector(".carousel-nav .prev");

// lấy ra dánh sách các item

var carouselItems = carouselInner.children;

// tính chiều rộng của 1 item
var itemWidth = carousel.clientWidth; //
console.log(itemWidth);

// tính tổng chiều rộng các item
var totalWidth = itemWidth * carouselItems.length;
console.log(totalWidth);

// cập nhật css
carouselInner.style.width = `${totalWidth}px`;
carouselInner.style.transition = "transform 0.4s ease";

var position = 0;
var currentSlide = 0; // Thêm biến để theo dõi slide hiện tại

nextBtn.addEventListener("click", function () {
  // chặn nếu chạy hết slide
  if (currentSlide >= carouselItems.length - 1) {
    return;
  }
  currentSlide++;
  position = -currentSlide * itemWidth; // Cập nhật vị trí dựa trên slide hiện tại
  carouselInner.style.transform = `translateX(${position}px)`;

  updateDots(); // Cập nhật trạng thái của dots
});

prevBtn.addEventListener("click", function () {
  // chặn nếu chạy hết slide
  if (currentSlide <= 0) {
    return;
  }
  currentSlide--;
  position = -currentSlide * itemWidth; // Cập nhật vị trí dựa trên slide hiện tại
  carouselInner.style.transform = `translateX(${position}px)`;

  updateDots(); // Cập nhật trạng thái của dots
});

// Tạo các dots
var dotsContainer = document.querySelector(".carousel-dots");

for (var i = 0; i < carouselItems.length; i++) {
  var dot = document.createElement("span");
  dot.classList.add("dot");
  dot.setAttribute("data-slide-index", i);
  dotsContainer.appendChild(dot);
}

// Bắt sự kiện khi người dùng nhấp vào dot
var dots = document.querySelectorAll(".dot");

dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    var slideIndex = parseInt(dot.getAttribute("data-slide-index"));
    currentSlide = slideIndex; // Cập nhật slide hiện tại
    position = -currentSlide * itemWidth; // Cập nhật vị trí dựa trên slide hiện tại
    carouselInner.style.transform = `translateX(${position}px)`;

    updateDots(); // Cập nhật trạng thái của dots
  });
});

// Hàm cập nhật trạng thái của dots
function updateDots() {
  dots.forEach(function (dot, index) {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}
var isDragging = false; // Biến để theo dõi trạng thái kéo thả chuột
var startPosition = 0; // Vị trí ban đầu khi bắt đầu kéo chuột
var currentTranslate = 0; // Vị trí dịch chuyển hiện tại của các slide
var mouseX = 0; // Vị trí X của chuột khi kéo

carouselInner.addEventListener("mousedown", function (e) {
  isDragging = true;
  startPosition = e.pageX - carousel.offsetLeft;
  currentTranslate = position;

  // Loại bỏ transition để tránh hiệu ứng chuyển động khi kéo
  carouselInner.style.transition = "none";
});

carouselInner.addEventListener("mousemove", function (e) {
  if (!isDragging) return;

  mouseX = e.pageX - carousel.offsetLeft;
  var offsetX = mouseX - startPosition;
  position = currentTranslate + offsetX;
  carouselInner.style.transform = `translateX(${position}px)`;
});

carouselInner.addEventListener("mouseup", function () {
  isDragging = false;

  // Bật lại transition sau khi kết thúc kéo chuột
  carouselInner.style.transition = "transform 0.4s ease";
});

carouselInner.addEventListener("mouseleave", function () {
  isDragging = false;

  // Bật lại transition sau khi kết thúc kéo chuột
  carouselInner.style.transition = "transform 0.4s ease";
});

// Vô hiệu hóa chức năng kéo trượt mặc định của trình duyệt
carouselInner.addEventListener("dragstart", function (e) {
  e.preventDefault();
});

// Tính toán và cập nhật slide khi kết thúc kéo chuột
carouselInner.addEventListener("mouseup", function () {
  var slideIndex = Math.round(-position / itemWidth);
  if (slideIndex < 0) slideIndex = 0;
  if (slideIndex >= carouselItems.length) slideIndex = carouselItems.length - 1;

  position = -slideIndex * itemWidth;
  currentSlide = slideIndex;

  // Cập nhật vị trí hiện tại và thay đổi slide
  carouselInner.style.transform = `translateX(${position}px)`;

  // Cập nhật dots
  updateDots();
});
