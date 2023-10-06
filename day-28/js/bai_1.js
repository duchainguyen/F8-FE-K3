var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    timePreview.classList.remove("show");
    timePreview.innerText = 0;
    timePreview.style.left = 0;
  }
});

document.addEventListener("mouseup", function () {
  if (isDrag) {
    isDrag = false;
    initialValue = value;

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var timePreview = progressBar.querySelector(".time-preview");

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;

  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);

    handleUpdateValue(value);
  }
});

progressBar.addEventListener("mousemove", function (e) {
  timePreview.classList.add("show");
  var rate = (e.offsetX * 100) / progressBarWidth;
  var currentTime = (rate / 100) * audio.duration;
  timePreview.innerText = getTime(currentTime);
  timePreview.style.left = `${e.offsetX}px`;
});

progressBar.addEventListener("mouseout", function () {
  timePreview.classList.remove("show");
  timePreview.innerText = 0;
  timePreview.style.left = 0;
});

audio.addEventListener("ended", function () {
  playBtn.innerHTML = playBtnIcon;
  handleUpdateValue(0);
  audio.currentTime = 0;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseBtnIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playBtnIcon;
});
// xử lý chức năng karaokke
lyric = lyric.data.sentences;
// console.log(lyric);
var requestId, currentIndex;
var karaokeContent = document.querySelector(".karaoke-content");

var handleKaraoke = function () {
  var currentTime = audio.currentTime * 1000;
  handleColor(currentTime); //xử lý từng từ karraoke
  // console.log(currentTime);
  var index = lyric.findIndex(function (sentence) {
    var words = sentence.words;
    return (
      currentTime >= words[0].startTime &&
      currentTime <= words[words.length - 1].endTime
    );
  });
  // console.log(words);

  if (index !== -1 && index !== currentIndex) {
    if (index === 0) {
      var sentenceHtml = `<p>${getSentence(0)}</p> <p>${getSentence(1)}</p>`;
      karaokeContent.innerHTML = sentenceHtml;
    } else {
      // Thực hiện next câu dạng so le
      setTimeout(function () {
        nextSentence(index);
      }, 500);
    }
  } else {
    // karaokeContent.innerText = `Tên Bài Hát: 3107 3
    // Tên Ca Sĩ: `;
  }
  // console.log(getSentence());
  requestId = requestAnimationFrame(handleKaraoke);
  currentIndex = index;
};

var getSentence = function (index) {
  return lyric[index].words
    .map(function (word) {
      return `<span class ="word" data-start-time="${word.startTime}" data-end-time ="${word.endTime}">${word.data}<span>${word.data}</span></span>`;
    })
    .join(" ");
};

var nextSentence = function (index) {
  var sentenceEl = karaokeContent.children;

  if (index % 2 !== 0) {
    sentenceEl[0].style.transition = `opacity 0.4s ease-in-out`;
    sentenceEl[0].style.opacity = 0;
    setTimeout(function () {
      sentenceEl[0].innerHTML = getSentence(index + 1);
      sentenceEl[0].style.opacity = 1;
    }, 400);
  } else {
    sentenceEl[1].style.transition = `opacity 0.4s ease-in-out`;
    sentenceEl[1].style.opacity = 0;
    setTimeout(function () {
      sentenceEl[1].innerHTML = getSentence(index + 1);
      sentenceEl[1].style.opacity = 1;
    }, 400);
  }
};

// requestAnimationFrame(handleKaraoke);

audio.addEventListener("play", function () {
  // c1
  // requestId = requestAnimationFrame(handleKaraoke);

  // c2
  handleKaraoke();
});

audio.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});

var handleColor = function (currentTime) {
  var wordList = karaokeContent.querySelectorAll(".word");
  // var startTime = wordItem.dataset.startTime;
  // var endTime = wordItem.dataset.endTime;
  if (wordList.length) {
    wordList.forEach(function (wordItem) {
      // lấy startTime và endTime trên giao diện
      var startTime = wordItem.dataset.startTime;
      var endTime = wordItem.dataset.endTime;
      if (currentTime > startTime && currentTime < endTime) {
        // tính tỷ lệ phần trăm từ currentTime so với toàn bộ thời gian của 1 từ
        var rate = ((currentTime - startTime) / (endTime - startTime)) * 100;
        wordItem.children[0].style.width = `${rate}%`;
      }
      if (currentTime >= endTime) {
        wordItem.children[0].style.width = `100%`;
      }
    });
  }
};
