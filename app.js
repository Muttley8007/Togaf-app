// TOGAF TOOL v0.8.4
// app.js

const activeLesson = lesson1;

let currentCard = 0;
let qIndex = 0;
let score = 0;

const home = document.getElementById("home");
const overview = document.getElementById("overview");
const lesson = document.getElementById("lesson");
const quiz = document.getElementById("quiz");
const summary = document.getElementById("summary");

function hideAll() {
  home.classList.add("hidden");
  overview.classList.add("hidden");
  lesson.classList.add("hidden");
  quiz.classList.add("hidden");
  summary.classList.add("hidden");
}

function goHome() {
  hideAll();
  home.classList.remove("hidden");
}

function showOverview() {
  hideAll();
  overview.classList.remove("hidden");

  let html = "";
  html += '<div class="card">';
  html += "<h2>" + activeLesson.title + "</h2>";
  html += "<p>" + activeLesson.description + "</p>";
  html += "</div>";

  html += "<h3>Lesson Cards</h3>";

  activeLesson.cards.forEach(function(card, i) {
    html += '<div class="card">';
    html += '<h4 class="preview-title">' + card.title + "</h4>";
    html += '<p class="preview-summary">' + (card.summary || "") + "</p>";
    html += '<div class="button-row">';
    html += '<button class="primary" onclick="openCard(' + i + ')">Open</button>';
    html += "</div>";
    html += "</div>";
  });

  html += '<div class="card">';
  html += '<div class="button-row">';
  html += '<button class="secondary" onclick="goHome()">Back Home</button>';
  html += '<button class="primary" onclick="startQuiz()">Quiz</button>';
  html += '<button class="secondary" onclick="showSummary()">Summary</button>';
  html += "</div>";
  html += "</div>";

  overview.innerHTML = html;
}

function openCard(index) {
  currentCard = index;
  hideAll();
  lesson.classList.remove("hidden");
  renderCard();
}

function prevCard() {
  if (currentCard > 0) {
    currentCard--;
    renderCard();
  }
}

function nextCard() {
  if (currentCard < activeLesson.cards.length - 1) {
    currentCard++;
    renderCard();
  } else {
    startQuiz();
  }
}

function renderCard() {
  const card = activeLesson.cards[currentCard];
  let html = "";

  html += '<div class="card">';
  html += '<div class="meta">Card ' + (currentCard + 1) + " of " + activeLesson.cards.length + "</div>";

  html += "<h2>" + card.title + "</h2>";
  html += "<p><b>" + (card.summary || "") + "</b></p>";

  html += '<div class="section">';
  html += "<h3>Concept</h3>";
  html += "<p>" + (card.concept || "") + "</p>";
  html += "</div>";

  html += '<div class="section">';
  html += "<h3>Why it matters</h3>";
  html += "<p>" + (card.why || "") + "</p>";
  html += "</div>";

  html += '<div class="section box">';
  html += "<h3>Analogy</h3>";
  html += "<p>" + (card.analogy || "") + "</p>";
  html += "</div>";

  if (card.textbook) {
    html += '<div class="section">';
    html += '<button class="secondary" onclick="toggle(\'textbook\')">Read Textbook Explanation</button>';
    html += '<div id="textbook" class="hidden">';
    html += '<div class="card" style="margin-top:12px; background:#fafafa;">';
    html += "<p>" + (card.textbook.intro || "") + "</p>";

    if (card.textbook.sections && card.textbook.sections.length) {
      card.textbook.sections.forEach(function(section) {
        html += '<div class="section">';
        html += "<h3>" + section.heading + "</h3>";
        html += "<p>" + section.body + "</p>";
        html += "</div>";
      });
    }

    html += "</div>";
    html += "</div>";
    html += "</div>";
  }

  if (card.references && card.references.length) {
    html += '<div class="section">';
    html += "<h3>References</h3>";
    html += '<div class="button-row">';

    card.references.forEach(function(ref) {
      html += '<a href="' + ref.url + '" target="_blank" rel="noopener noreferrer">';
      html += '<button class="secondary" type="button">' + ref.label + "</button>";
      html += "</a>";
    });

    html += "</div>";
    html += "</div>";
  }

  if (card.detail) {
    html += '<div class="section">';
    html += '<button class="secondary" onclick="toggle(\'detail\')">Show Detailed Explanation</button>';
    html += '<div id="detail" class="hidden">';
    html += "<p>" + card.detail + "</p>";
    html += "</div>";
    html += "</div>";
  }

  if (card.example) {
    html += '<div class="section">';
    html += '<button class="secondary" onclick="toggle(\'example\')">Show Example</button>';
    html += '<div id="example" class="hidden">';
    html += "<p>" + card.example + "</p>";
    html += "</div>";
    html += "</div>";
  }

  if (card.exam && card.exam.length) {
    html += '<div class="section">';
    html += '<button class="secondary" onclick="toggle(\'exam\')">Show Exam Notes</button>';
    html += '<div id="exam" class="hidden">';
    card.exam.forEach(function(note) {
      html += "<p>" + note + "</p>";
    });
    html += "</div>";
    html += "</div>";
  }

  html += '<div class="section takeaway">';
  html += "<h3>Key Takeaway</h3>";
  html += "<p>" + (card.takeaway || "") + "</p>";
  html += "</div>";

  html += '<div class="section button-row">';
  html += '<button class="secondary" onclick="showOverview()">Back</button>';
  html += '<button class="secondary" onclick="prevCard()" ' + (currentCard === 0 ? "disabled" : "") + ">Previous</button>";
  html += '<button class="primary" onclick="nextCard()">' + (currentCard === activeLesson.cards.length - 1 ? "Start Quiz" : "Next") + "</button>";
  html += "</div>";

  html += "</div>";

  lesson.innerHTML = html;
}

function startQuiz() {
  qIndex = 0;
  score = 0;
  hideAll();
  quiz.classList.remove("hidden");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = activeLesson.quiz[qIndex];
  let html = "";

  html += '<div class="card">';
  html += '<div class="meta">Question ' + (qIndex + 1) + " of " + activeLesson.quiz.length + "</div>";
  html += "<h2>" + q.q + "</h2>";
  html += '<div class="answer-list">';

  q.a.forEach(function(option, i) {
    html += '<button class="secondary" onclick="answerQuestion(' + i + ')">' + option + "</button>";
  });

  html += "</div>";
  html += '<div class="section button-row">';
  html += '<button class="secondary" onclick="showOverview()">Back to Lesson</button>';
  html += "</div>";
  html += "</div>";

  quiz.innerHTML = html;
}

function answerQuestion(index) {
  const q = activeLesson.quiz[qIndex];

  if (index === q.c) {
    score++;
  }

  qIndex++;

  if (qIndex < activeLesson.quiz.length) {
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  let html = "";

  html += '<div class="card">';
  html += "<h2>Quiz Complete</h2>";
  html += "<p>You scored <b>" + score + "</b> out of <b>" + activeLesson.quiz.length + "</b>.</p>";
  html += '<div class="section button-row">';
  html += '<button class="primary" onclick="showSummary()">View Summary</button>';
  html += '<button class="secondary" onclick="showOverview()">Back to Lesson</button>';
  html += "</div>";
  html += "</div>";

  quiz.innerHTML = html;
}

function showSummary() {
  hideAll();
  summary.classList.remove("hidden");

  let html = "";
  html += '<div class="card">';
  html += "<h2>What You Should Know Now</h2>";
  html += '<div class="summary-list">';

  activeLesson.summary.forEach(function(item) {
    html += "<p>" + item + "</p>";
  });

  html += "</div>";
  html += '<div class="section button-row">';
  html += '<button class="secondary" onclick="showOverview()">Back to Lesson</button>';
  html += "</div>";
  html += "</div>";

  summary.innerHTML = html;
}

function toggle(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle("hidden");
  }
}

goHome();
