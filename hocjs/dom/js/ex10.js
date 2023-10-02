var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progessSpan = progress.querySelector("span");
var lyricContent = document.querySelector(".lyricDisplay");
console.log(lyricContent);
// Giá trị khởi tạo
var initialClientX;
var percent;
var currentPercent = 0;

var isPlaying = false;
var isDragging = false;
var isSeeking = false;

var checkDrag = false;

progressBar.addEventListener("mousedown", function (e) {
  // Lấy offsetX của progress-bar
  var offsetX = e.offsetX;
  // Tính giá trị phần trăm giữa offsetX và chiều rộng của progress-bar
  percent = (offsetX * 100) / progressBar.clientWidth;
  // Làm tròn 2 chữ số phần thập phân
  percent = percent.toFixed(2);

  progress.style.width = `${percent}%`;

  // Kích hoạt hành động bấm chuột và kéo
  initialClientX = e.clientX;
  currentPercent = percent;
  var timeUpdate = (percent * audio.duration) / 100;
  audio.currentTime = timeUpdate;
  document.addEventListener("mousemove", handleDrag);
});

progessSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);

  // Cập nhật clientX khi bấm chuột vào button màu tím
  initialClientX = e.clientX;
});

// Hủy sự kiện mousemove nếu mouseup vào document
document.addEventListener("mouseup", function () {
  isSeeking = false;
  document.removeEventListener("mousemove", handleDrag);

  // Lấy phần trăm cuối cùng và cập nhật vào biến currentPercent
  currentPercent = percent;

  //tua xog mới update nhạc
  if (checkDrag) {
    var newTime = (percent * audio.duration) / 100;
    audio.currentTime = newTime;
  }
  checkDrag = false;
});

// Kéo thả thay đổi vị trí
var handleDrag = function (e) {
  isSeeking = true;
  // Lấy giá trị clientX mới nhất tại vị trí chuột

  // Khoảng cách kéo = clientX mới nhất - clientX ban đầu
  var moveWidth = e.clientX - initialClientX;

  // Tính phần trăm giữa khoảng cách kéo và chiều rộng của progress-bar
  percent = (moveWidth * 100) / progressBar.clientWidth;

  percent = +percent.toFixed(2) + +currentPercent;

  // Cập nhật width cho progress

  if (percent < 0) {
    percent = 0;
  }

  if (percent > 100) {
    percent = 100;
  }

  progress.style.width = `${percent}%`;

  // Tính thời gian mới dựa trên phần trăm
  var newTime = (percent * audio.duration) / 100;

  // Đặt thời gian mới cho audio

  // audio.currentTime = newTime;
  // khi tua thì k update nhạc chỉ update time chạy
  currentTimeEl.innerText = getTime(newTime);
  checkDrag = true;
};

// Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");
var playBtn = document.querySelector(".player .play-btn");
var playInner = document.querySelector(".player .play-inner");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;

// Viết hàm chuyển đổi từ giây sang phút
var getTime = function (seconds) {
  // Tính ra số phút
  var mins = Math.floor(seconds / 60);

  // Tính số giây còn lại
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

// Lấy thời lượng của audio
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

// Phát nhạc và dừng nhạc khi bấm nút play
playBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  // Lấy trạng thái audio (paused)
  if (audio.paused) {
    audio.play(); // Phát nhạc
  } else {
    audio.pause();
  }
});

// Lắng nghe sự kiện play
audio.addEventListener("play", function () {
  playBtn.children[0].classList.remove("fa-play");
  playBtn.children[0].classList.add("fa-pause");
});

// Lắng nghe sự kiện pause
audio.addEventListener("pause", function () {
  playBtn.children[0].classList.remove("fa-pause");
  playBtn.children[0].classList.add("fa-play");
});

// Lắng nghe sự kiện timeUpdate
var sentences = lyric.data.sentences;
console.log(sentences);
audio.addEventListener("timeupdate", function () {
  var currentTime = audio.currentTime;
  var percent = (currentTime / audio.duration) * 100;

  if (!isSeeking) {
    currentTimeEl.innerText = getTime(currentTime);
    progress.style.width = `${percent}%`;

    var currentSentence = getCurrentSentence(currentTime);
    // console.log("Current Sentence:", currentSentence);

    if (currentSentence && !audio.paused) {
      displayLyrics(lyricContent, currentSentence.words, currentTime);
    } else {
      lyricContent.innerHTML = "";
    }
  }
});
function getCurrentSentence(currentTime) {
  var currentSentence = sentences.find((sentence) => {
    var startTime = sentence.words[0].startTime / 1000;
    var endTime = sentence.words[sentence.words.length - 1].endTime / 1000;
    var isCurrent = currentTime >= startTime && currentTime <= endTime;
    return isCurrent;
  });

  // console.log("Current Sentence:", currentSentence);
  return currentSentence;
}
function displayLyrics(lyricContent, words, currentTime) {
  // console.log(" lyrics:", words);
  var html = words
    .map((word) => {
      var isActive =
        currentTime >= word.startTime && currentTime <= word.endTime;
      return `
              <span
                data-start="${word.startTime}" 
                data-end="${word.endTime}" 
                class="${isActive ? "active" : ""}">
                 ${word.data}
              </span>`;
    })
    .join(``);
  lyricContent.innerHTML = html;
}

// Bài tập về nhà

progressBar.addEventListener("mousedown", function (e) {
  isDragging = false;
  // Bài hát vẫn chạy khi kéo thanh tua
  audio.play();
});

// Case 3
var timeTooltips = document.querySelector(".tooltips-time");

var tooltipsTime = function (e) {
  // Vị trí của chuột
  var position = e.clientX - progressBar.offsetLeft;
  var hoverPosition =
    (e.clientX - progressBar.offsetLeft) / progressBar.clientWidth;
  var previewTime = hoverPosition * audio.duration;

  // Hiển thị thời gian xem trước
  timeTooltips.textContent = getTime(previewTime);
  timeTooltips.style.display = "block";
  timeTooltips.style.left = `${position}px`;
};

progressBar.addEventListener("mousemove", tooltipsTime);

progressBar.addEventListener("mouseout", function () {
  // Ẩn thời gian xem trước khi hover ra khỏi thanh tua
  timeTooltips.style.display = "none";
});

// Case 4
audio.addEventListener("ended", function () {
  // Thiết lập lại thời gian và trạng thái âm thanh về ban đầu
  audio.currentTime = 0;
});

// sự kiện click vào button karaok
var btnKaraoke = document.querySelector(".btn-karaoke");
var karaok = document.querySelector(".karaoke");
btnKaraoke.onclick = function () {
  // karaok.style.transform === "translateY(100%)";
  karaok.style.transform =
    karaok.style.transform === "translateY(0%)"
      ? "translateY(100%)"
      : "translateY(0%)";
};

var cloSe = document.querySelector(".close");
cloSe.onclick = function () {
  karaok.style.transform =
    karaok.style.transform === "translateY(100%)"
      ? "translateY(0%)"
      : "translateY(100%)";
};
