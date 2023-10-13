var countdownElement = document.getElementById("countdown");
var getLinkButton = document.getElementById("get-link");
var count = 10;
countdownElement.innerHTML = count;
var flag = true;
var frameInterval = 1000;
var startTimestamp;
function updateCountdown(timestamp) {
  if (!startTimestamp) startTimestamp = timestamp;
  var progress = timestamp - startTimestamp;

  if (flag && count >= 0 && progress >= frameInterval) {
    countdownElement.innerText = count;
    if (count === 0) {
      getLinkButton.disabled = false;
      getLinkButton.style.background = "transparent";
      getLinkButton.style.color = "#fff";
      getLinkButton.onclick = function () {
        window.location.href = "https://fullstack.edu.vn/";
      };
    }
    count--;
    startTimestamp = timestamp;
  }
  if (count >= 0) {
    requestAnimationFrame(updateCountdown);
  }
}

window.onblur = () => (flag = false);
window.onfocus = () => (flag = true);
updateCountdown();
