const startButton = document.getElementById("startButton");
const resultDiv = document.getElementById("result");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// recognition.lang = "vi-VN"; // Ngôn ngữ sẽ được nhận dạng
recognition.lang = "vi-VN";

startButton.addEventListener("click", () => {
  // Ghi giọng nói
  recognition.start();
  resultDiv.innerHTML = "Hãy nói nội dung bạn muốn...";
  var record = document.querySelector(".record");
  record.style.display = "block";

  // Thiết lập một biến để lưu ID của setInterval
  var intervalId;
  var scale = 1;

  function toggleScale() {
    // Chuyển đổi giữa 0.8 và 1
    scale = scale === 1 ? 0.8 : 1;
    record.style.transform = `scale(${scale})`;
  }

  // Sử dụng setInterval và lưu ID vào biến intervalId
  intervalId = setInterval(toggleScale, 100);

  // Xử lý sự kiện khi ngừng ghi giọng nói
  recognition.onend = () => {
    // Xóa interval khi ngừng ghi giọng nói
    clearInterval(intervalId);
    record.style.display = "none";
  };
});

recognition.onresult = (event) => {
  const result = event.results[0][0].transcript.toLowerCase();
  // result = result(0).toUpperCase();
  resultDiv.innerHTML = `
        <span class="spanText">Đã nói xong. Hy vọng kết quả như ý bạn</span>
        <span class="spanRun">Đang thực hiện: ${result}</span>`;
  //gọi hàm void
  handleVoice(result);
};
