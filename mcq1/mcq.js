const questions = [
  {
    question: "1. Who is the Greatest Captain of India?",
    options: ["MS Dhoni", "Rohit Sharma", "Virat Kohli", "Sourav Ganguly"],
    answer: "MS Dhoni"
  },
  {
    question: "2. Who amongst the following has the highest score in an ODI Innings?",
    options: ["Rohit Sharma", "Martin Guptill", "Chris Gayle", "Virender Sehwag"],
    answer: "Rohit Sharma"
  },
  {
    question: "3. Who has the most international centuries?",
    options: ["Sachin Tendulkar", "Virat Kohli", "David Warner", "Ben Stokes"],
    answer: "Sachin Tendulkar"
  }
];

let timeLeft = 10;

function loadQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = questions.map((q, index) => `
    <div class="question">
      <p>${q.question}</p>
      <div class="options">
        ${q.options.map(option => `
          <label>
            <input type="radio" name="question${index}" value="${option}">
            ${option}
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");

  startTimer();
}

function startTimer() {
  const timerDisplay = document.getElementById("time");

  const timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      submitQuiz();
    } else {
      timerDisplay.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

function submitQuiz() {
  let score = 0;
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption && selectedOption.value === q.answer) {
      score++;
    }
  });
  document.getElementById("result").innerText = `Your score: ${score} / ${questions.length}`;
  document.getElementById("quiz-container").style.display = "none";
}
window.onload = loadQuiz;
