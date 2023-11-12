import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

let currentQuestion = 0;
let score = 0;
let correct = 0;
let streak = 0;
let quizData;
let timer;

const root = document.querySelector("#quiz-container");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const total = document.querySelector(".total");
const correcttb = document.querySelector(".correcttb");
const wrong = document.querySelector(".wrong");
const showResult = document.querySelector(".showResult");
const correctAudio = new Audio("./audio/rightAnswer.mp3");
const wrongAudio = new Audio("./audio/wrongAnswer.mp3");
const countdownElement = document.getElementById("countdown");
const startButton = document.querySelector(".btn-start");
const start = document.querySelector(".start");

console.log(countdownElement);

let countStart = 5;
countdownElement.innerHTML = `${countStart}`;
console.log(countStart);
startButton.addEventListener("click", () => {
  const startDiv = document.querySelector(".btn-start");
  startDiv.style.display = "none"; // Hide the start button
  countdownElement.style.display = "block";

  const countdownInterval = setInterval(() => {
    countdownElement.innerHTML = `${countStart}`;
    countStart--;
    // console.log(countStart);

    if (countStart < 0) {
      clearInterval(countdownInterval);
      start.style.display = "none"; // Hide the start button
    }
  }, 1000);
});
// Play the audio when the answer is correct
const app = {
  query: {},
  seconds: 10,
  timer: null,

  render: function ({ question, options }) {
    const totalQuestions = quizData.length;
    const currentQuestionNumber = currentQuestion + 1;
    total.innerHTML = `${currentQuestionNumber} / ${totalQuestions}`;
    clearTimeout(this.timer);
    const html = `<h2 id="question">${question}</h2>
      <div id="options">
        ${options
          .map((option) => `<button class="btns">${option}</button>`)
          .join("")}
      </div>`;
    root.innerHTML = html;
    this.startTimer();
  },

  addEvent: function () {
    root.addEventListener("click", function (e) {
      if (e.target.classList.contains("btns")) {
        e.preventDefault();
        const selectedOption = e.target.innerText;

        // Check if the button has already been clicked
        if (!e.target.classList.contains("clicked")) {
          // Add a class to indicate that the button has been clicked
          e.target.classList.add("clicked");

          app.checkAnswer(selectedOption);
        }
      }
    });

    showResult.addEventListener("click", function (e) {
      if (e.target.classList.contains("btnPlay")) {
        e.preventDefault();

        // Remove the "clicked" class from all buttons
        const buttons = root.querySelectorAll(".btns");
        buttons.forEach((button) => {
          button.classList.remove("clicked");
        });
        score = 0;
        scoreElement.innerHTML = `Score: ${score}`;

        app.resetQuiz();
        root.style.display = "block";
        showResult.style.display = "none";
      }
    });
  },

  checkAnswer: function (selectedOption) {
    const currentQuizData = quizData[currentQuestion];

    if (currentQuizData && "result" in currentQuizData) {
      if (selectedOption === currentQuizData.result) {
        score += 300;
        correct++;
        correctAudio.play();
        scoreElement.innerHTML = `Score: ${score}`;
        console.log(correcttb);
        correcttb.style.display = "block";
      } else {
        wrongAudio.play();
        streak++;
        wrong.style.display = "block";

        console.log(wrong.style.color);
      }
    } else {
      streak++;
    }

    setTimeout(() => {
      currentQuestion++;
      correctAudio.pause();
      correctAudio.currentTime = 0;
      wrongAudio.pause();
      wrongAudio.currentTime = 0;

      if (currentQuestion < quizData.length) {
        app.render(quizData[currentQuestion]);
        app.startTimer();
      } else {
        app.showResult();
      }
    }, 2000);
  },

  resetQuiz: function () {
    currentQuestion = 0;
    score = 0;
    correct = 0;
    streak = 0;

    this.getquizData(this.query);
    scoreElement.style.display = "block";
    timerElement.style.display = "block";
    total.style.display = "block";

    // Remove the "clicked" class from all buttons
    const buttons = root.querySelectorAll(".btns");
    buttons.forEach((button) => {
      button.classList.remove("clicked");
    });
  },

  startTimer: function () {
    let remainingTime = this.seconds;

    function updateTimer() {
      timerElement.textContent = `Thời gian còn lại: ${remainingTime}s`;
      remainingTime--;

      if (remainingTime < 0) {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          app.render(quizData[currentQuestion]);
          app.startTimer();
        } else {
          app.showResult();
        }
      } else {
        app.timer = setTimeout(updateTimer, 1000);
      }
    }
    clearTimeout(app.timer);

    updateTimer();
  },
  showResult: function () {
    const totalCauchon = streak + correct;
    root.style.display = "none";
    scoreElement.style.display = "none";
    timerElement.style.display = "none";
    total.style.display = "none";

    const showResult = document.querySelector(".showResult");
    const html = `<h2>Kết quả trắc nghiệm</h2>
      <div class="container">
        <div class="result"> 
          <div class="Score-result">Score: ${score}</div>  
          <div class="totalquiz">Incorrect: ${totalCauchon}</div>
          <div class="streak">Streak: ${streak}</div>
          <div class="correct">Correct: ${correct}</div>
        </div>
        <div class="btn-play"><button class="btnPlay">Play</button></div>
      </div>`;
    showResult.innerHTML = html;
    showResult.style.display = "block";
    // console.log("qui", score, quizData.length);
  },

  getquizData: async function (query = {}) {
    try {
      let queryString = new URLSearchParams(query).toString();
      if (queryString) {
        queryString = "?" + queryString;
      }
      const { data } = await client.get("/quizData" + queryString);
      console.log("API Response:", data);
      quizData = data;
      this.render(quizData[currentQuestion]);
    } catch (error) {
      console.error("Error fetching quizDatas:", error);
    }
  },

  start: function () {
    const startButton = document.querySelector(".btn-start");
    const box = document.querySelector(".box");
    const start = document.querySelector(".start");
    // this.addEventBtn();
    startButton.addEventListener("click", () => {
      startButton.style.display = "none";
      setTimeout(() => {
        Object.assign(this.query, {
          _sort: "id",
          _order: "desc",
          _limit: PAGE_LIMIT,
          _page: this.currentPage,
        });
        this.addEvent();
        this.getquizData(this.query);

        box.style.display = "block";
      }, 5000);
    });
  },
};
app.start();
