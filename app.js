// TOGAF TOOL v0.6.1

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

function showOverview() {
  hideAll();
  overview.classList.remove("hidden");

  let html = `<div class="card">
    <h2>${activeLesson.title}</h2>
    <p>${activeLesson.description}</p>
  </div>`;

  html += `<h3>Cards</h3>`;

  activeLesson.cards.forEach((c, i) => {
    html += `
      <div class="card">
        <h4>${c.title}</h4>
        <p>${c.summary}</p>
        <button class="primary" onclick="openCard(${i})">Open</button>
      </div>
    `;
  });

  html += `
    <div class="card">
      <button class="secondary" onclick="goHome()">Back Home</button>
      <button class="primary" onclick="startQuiz()">Quiz</button>
      <button class="secondary" onclick="showSummary()">Summary</button>
    </div>
  `;

  overview.innerHTML = html;
}

function goHome() {
  hideAll();
  home.classList.remove("hidden");
}

function openCard(index) {
  currentCard = index;
  hideAll();
  lesson.classList.remove("hidden");
  renderCard();
}

function nextCard() {
  if (currentCard < activeLesson.cards.length - 1) {
    currentCard++;
    renderCard();
  } else {
    startQuiz();
  }
}

function prevCard() {
  if (currentCard > 0) {
    currentCard--;
    renderCard();
  }
}

function renderCard() {
  const card = activeLesson.cards[currentCard];

  lesson.innerHTML = `
    <div class="card">
      <div class="meta">Card ${currentCard + 1} of ${activeLesson.cards.length}</div>

      <h2>${card.title}</h2>
      <p><b>${card.summary || ""}</b></p>

      <div class="section">
        <h3>Concept</h3>
        <p>${card.concept || ""}</p>
      </div>

      <div class="section">
        <h3>Why it matters</h3>
        <p>${card.why || ""}</p>
      </div>

      <div class="section box">
        <h3>Analogy</h3>
        <p>${card.analogy || ""}</p>
      </div>

      ${
        card.detail
          ? `
      <div class="section">
        <button class="secondary" onclick="toggle('detail')">Show Detailed Explanation</button>
        <div id="detail" class="hidden">
          <p>${card.detail}</p>
        </div>
      </div>
      `
          : ""
      }

      ${
        card.example
          ? `
      <div class="section">
        <button class="secondary" onclick="toggle('example')">Show Example</button>
        <div id="example" class="hidden">
          <p>${card.example}</p>
        </div>
      </div>
      `
          : ""
      }

      ${
        card.exam
          ? `
      <div class="section">
        <button class="secondary" onclick="toggle('exam')">Show Exam Notes</button>
        <div id="exam" class="hidden">
          ${card.exam.map(note => `<p>${note}</p>`).join("")}
        </div>
      </div>
      `
          : ""
      }

      <div class="section takeaway">
        <h3>Key Takeaway</h3>
        <p>${card.takeaway || ""}</p>
      </div>

      <div class="section">
        <button class="secondary" onclick="showOverview()">Back</button>
        <button class="secondary" onclick="prevCard()" ${currentCard === 0 ? "disabled" : ""}>Previous</button>
        <button class="primary" onclick="nextCard()">
          ${currentCard === activeLesson.cards.length - 1 ? "Start Quiz" : "Next"}
        </button>
      </div>
    </div>
  `;
}

function startQuiz() {
  currentCard = 0;
  qIndex = 0;
  score = 0;
  hideAll();
  quiz.classList.remove("hidden");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = activeLesson.quiz[qIndex];

  quiz.innerHTML = `
    <div class="card">
      <div class="meta">Question ${qIndex + 1} of ${activeLesson.quiz.length}</div>
      <h2>${q.q}</h2>
      ${q.a.map((option, i) => `
        <div>
          <button class="secondary" onclick="answerQuestion(${i})">${option}</button>
        </div>
      `).join("")}
      <div class="section">
        <button class="secondary" onclick="showOverview()">Back to Lesson</button>
      </div>
    </div>
  `;
}

function answerQuestion(index) {
  const q = activeLesson.quiz[qIndex];
  if (index === q.c) score++;

  qIndex++;

  if (qIndex < activeLesson.quiz.length) {
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  quiz.innerHTML = `
    <div class="card">
      <h2>Quiz Complete</h2>
      <p>You scored <b>${score}</b> out of <b>${activeLesson.quiz.length}</b>.</p>
      <button class="primary" onclick="showSummary()">View Summary</button>
      <button class="secondary" onclick="showOverview()">Back to Lesson</button>
    </div>
  `;
}

function showSummary() {
  hideAll();
  summary.classList.remove("hidden");

  summary.innerHTML = `
    <div class="card">
      <h2>What You Should Know Now</h2>
      ${activeLesson.summary.map(item => `<p>${item}</p>`).join("")}
      <div class="section">
        <button class="secondary" onclick="showOverview()">Back to Lesson</button>
      </div>
    </div>
  `;
}

function toggle(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle("hidden");
}

goHome();
