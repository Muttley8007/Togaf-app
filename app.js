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

  let html = "";
  html += '<div class="card">';
  html += '<div class="meta">Card ' + (currentCard + 1) + ' of ' + activeLesson.cards.length + '</div>';

  html += '<h2>' + card.title + '</h2>';
  html += '<p><b>' + (card.summary || '') + '</b></p>';

  html += '<div class="section">';
  html += '<h3>Concept</h3>';
  html += '<p>' + (card.concept || '') + '</p>';
  html += '</div>';

  html += '<div class="section">';
  html += '<h3>Why it matters</h3>';
  html += '<p>' + (card.why || '') + '</p>';
  html += '</div>';

  html += '<div class="section box">';
  html += '<h3>Analogy</h3>';
  html += '<p>' + (card.analogy || '') + '</p>';
  html += '</div>';

  if (card.textbook) {
    html += '<div class="section">';
    html += '<button class="secondary" onclick="toggle(\'textbook\')">Read Textbook Explanation</button>';
    html += '<div id="textbook" class="hidden">';
    html += '<div class="card" style="margin-top:12px; background:#fafafa;">';
    html += '<p>' + (card.textbook.intro || '') + '</p>';

    if (card.textbook.sections && card.textbook.sections.length) {
      card.textbook.sections.forEach(function(section) {
        html += '<div class="section">';
        html += '<h3>' + section.heading + '</h3>';
        html += '<p>' + section.body + '</p>';
        html += '</div>';
      });
    }

    html += '</div>';
    html += '</div>';
    html += '</div>';
  }

  if (card.references && card.references.length) {
    html += '<div class="section">';
    html += '<h3>References</h3>';
    html += '<div class="button-row">';

    card.references.forEach(function(ref) {
      html += '<a href="' + ref.url + '" target="_blank" rel="noopener noreferrer">';
      html += '<button class="secondary" type="button">' + ref.label + '</button>';
      html += '</a>';
    });

    html += '</div>';
    html += '</div>';
  }

  if (card.detail) {
    html += '<div class="section">';
    html += '<button class="secondary" onclick="toggle(\'detail\')">Show Detailed Explanation</button>';
    html += '<div id="detail" class="hidden">';
    html += '<p>' + card.detail + '</p>';
    html += '</div>';
    html += '</div>';
  }

  if (card.example) {
    html += '<div class="section">';
    html += '<button class="secondary" onclick="toggle(\'example\')">Show Example</button>';
    html += '<div id="example" class="hidden">';
    html += '<p>' + card.example + '</p>';
    html += '</div>';
    html += '</div>';
  }

  if (card.exam && card.exam.length) {
    html += '<div class="section">';
    html += '<button class="secondary" onclick="toggle(\'exam\')">Show Exam Notes</button>';
    html += '<div id="exam" class="hidden">';
    card.exam.forEach(function(note) {
      html += '<p>' + note + '</p>';
    });
    html += '</div>';
    html += '</div>';
  }

  html += '<div class="section takeaway">';
  html += '<h3>Key Takeaway</h3>';
  html += '<p>' + (card.takeaway || '') + '</p>';
  html += '</div>';

  html += '<div class="section button-row">';
  html += '<button class="secondary" onclick="showOverview()">Back</button>';
  html += '<button class="secondary" onclick="prevCard()" ' + (currentCard === 0 ? 'disabled' : '') + '>Previous</button>';
  html += '<button class="primary" onclick="nextCard()">' + (currentCard === activeLesson.cards.length - 1 ? 'Start Quiz' : 'Next') + '</button>';
  html += '</div>';

  html += '</div>';

  lesson.innerHTML = html;
}
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
