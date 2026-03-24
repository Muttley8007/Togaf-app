// TOGAF TOOL v1.1.0
// app.js (with progress tracking)

const home = document.getElementById("home");
const overview = document.getElementById("overview");
const lesson = document.getElementById("lesson");
const quiz = document.getElementById("quiz");
const summary = document.getElementById("summary");

let activeLesson = null;
let currentCard = 0;
let qIndex = 0;
let score = 0;

// REGISTER LESSONS
const lessons = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10
];

// PROGRESS STORAGE
let progress = JSON.parse(localStorage.getItem("togafProgress")) || {};

function saveProgress() {
  localStorage.setItem("togafProgress", JSON.stringify(progress));
}

function ensureLessonProgress() {
  if (!activeLesson) return;

  if (!progress[activeLesson.title]) {
    progress[activeLesson.title] = {
      viewed: false,
      cardsViewed: [],
      quizScore: null
    };
  }
}

// NAVIGATION
function hideAll() {
  home.classList.add("hidden");
  overview.classList.add("hidden");
  lesson.classList.add("hidden");
  quiz.classList.add("hidden");
  summary.classList.add("hidden");
}

// HOME SCREEN
function showHome() {
  hideAll();
  home.classList.remove("hidden");

  let html = "<h2>TOGAF Lessons</h2>";

  lessons.forEach(function(lessonObj, i) {
    const p = progress[lessonObj.title] || {
      viewed: false,
      cardsViewed: [],
      quizScore: null
    };

    const viewedCount = p.cardsViewed.length;
    const totalCards = lessonObj.cards.length;

    let status = "Not started";
    if (viewedCount > 0) status = "In progress";
    if (viewedCount === totalCards && p.quizScore !== null) status = "Completed";

    const scoreText = p.quizScore !== null
      ? "Quiz: " + p.quizScore + "/" + lessonObj.quiz.length
      : "Quiz not done";

    html += `
      <div class="card">
        <h3>${lessonObj.title}</h3>
        <p>${lessonObj.description}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p>Cards: ${viewedCount}/${totalCards}</p>
        <p>${scoreText}</p>
        <button class="primary" onclick="selectLesson(${i})">Open Lesson</button>
      </div>
    `;
  });

  home.innerHTML = html;
}

// SELECT LESSON
function selectLesson(index) {
  activeLesson = lessons[index];
  currentCard = 0;
  qIndex = 0;
  score = 0;

  ensureLessonProgress();
  progress[activeLesson.title].viewed = true;
  saveProgress();

  showOverview();
}

// OVERVIEW
function showOverview() {
  hideAll();
  overview.classList.remove("hidden");

  let html = `<h2>${activeLesson.title}</h2>`;
  html += "<h3>Cards</h3>";

  activeLesson.cards.forEach((card, i) => {
    html += `<div class="card">
      <h4>${card.title}</h4>
      <p>${card.summary}</p>
      <button onclick="openCard(${i})">Open</button>
    </div>`;
  });

  html += `<button class="primary" onclick="startQuiz()">Start Quiz</button>`;
  html += `<button onclick="showHome()">Back</button>`;

  overview.innerHTML = html;
}

// OPEN CARD
function openCard(index) {
  currentCard = index;

  ensureLessonProgress();
  if (!progress[activeLesson.title].cardsViewed.includes(index)) {
    progress[activeLesson.title].cardsViewed.push(index);
    saveProgress();
  }

  hideAll();
  lesson.classList.remove("hidden");
  renderCard();
}

// RENDER CARD
function renderCard() {
  const card = activeLesson.cards[currentCard];

  let html = `<h2>${card.title}</h2>
    <p><strong>Concept:</strong> ${card.concept}</p>
    <p><strong>Why:</strong> ${card.why}</p>
    <p><strong>Analogy:</strong> ${card.analogy}</p>
    <p><strong>Detail:</strong> ${card.detail}</p>
    <p><strong>Example:</strong> ${card.example}</p>
    <p><strong>Takeaway:</strong> ${card.takeaway}</p>
  `;

  html += `<button onclick="showOverview()">Back</button>`;

  lesson.innerHTML = html;
}

// QUIZ
function startQuiz() {
  qIndex = 0;
  score = 0;
  hideAll();
  quiz.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = activeLesson.quiz[qIndex];

  let html = `<h3>${q.q}</h3>`;

  q.a.forEach((option, i) => {
    html += `<button onclick="answer(${i})">${option}</button><br>`;
  });

  quiz.innerHTML = html;
}

function answer(i) {
  if (i === activeLesson.quiz[qIndex].c) score++;
  qIndex++;

  if (qIndex < activeLesson.quiz.length) {
    showQuestion();
  } else {
    showQuizResults();
  }
}

// QUIZ RESULTS
function showQuizResults() {
  ensureLessonProgress();
  progress[activeLesson.title].quizScore = score;
  saveProgress();

  hideAll();
  summary.classList.remove("hidden");

  let html = `<h2>Score: ${score}/${activeLesson.quiz.length}</h2>`;

  html += "<ul>";
  activeLesson.summary.forEach(item => {
    html += `<li>${item}</li>`;
  });
  html += "</ul>";

  html += `<button onclick="showHome()">Home</button>`;

  summary.innerHTML = html;
}

// INIT
showHome();
