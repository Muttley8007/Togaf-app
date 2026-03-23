// TOGAF TOOL v0.6

const activeLesson = lesson1;

let currentCard = 0;
let qIndex = 0;
let score = 0;

const home = document.getElementById("home");
const overview = document.getElementById("overview");
const lesson = document.getElementById("lesson");
const quiz = document.getElementById("quiz");
const summary = document.getElementById("summary");

document.getElementById("lesson-title").innerText = activeLesson.title;
document.getElementById("lesson-description").innerText = activeLesson.description;

function hideAll(){
  home.classList.add("hidden");
  overview.classList.add("hidden");
  lesson.classList.add("hidden");
  quiz.classList.add("hidden");
  summary.classList.add("hidden");
}

function showOverview(){
  hideAll();
  overview.classList.remove("hidden");

  let html = "<h3>Cards</h3>";

  activeLesson.cards.forEach((c,i)=>{
    html += `
      <div class="card">
        <h4>${c.title}</h4>
        <button onclick="openCard(${i})">Open</button>
      </div>
    `;
  });

  html += `
    <button onclick="startQuiz()">Quiz</button>
    <button onclick="showSummary()">Summary</button>
  `;

  overview.innerHTML = html;
}

function openCard(i){
  currentCard = i;
  hideAll();
  lesson.classList.remove("hidden");
  renderCard();
}

function renderCard(){
  let c = activeLesson.cards[currentCard];

  lesson.innerHTML = `
    <div class="card">
      <div class="meta">${currentCard+1}/${activeLesson.cards.length}</div>
      <h2>${c.title}</h2>

      <div>${c.concept}</div>
      <div class="box">${c.analogy}</div>
      <div class="takeaway">${c.takeaway}</div>

      <button onclick="showOverview()">Back</button>
      <button onclick="prev()" ${currentCard==0?"disabled":""}>Prev</button>
      <button onclick="next()">${currentCard==activeLesson.cards.length-1?"Quiz":"Next"}</button>
    </div>
  `;
}

function next(){
  if(currentCard < activeLesson.cards.length-1){
    currentCard++;
    renderCard();
  } else {
    startQuiz();
  }
}

function prev(){
  currentCard--;
  renderCard();
}

function startQuiz(){
  qIndex = 0;
  score = 0;
  hideAll();
  quiz.classList.remove("hidden");
  renderQuiz();
}

function renderQuiz(){
  let q = activeLesson.quiz[qIndex];

  quiz.innerHTML = `
    <div class="card">
      <h3>${q.q}</h3>
      ${q.a.map((a,i)=>`<button onclick="answer(${i})">${a}</button>`).join("")}
    </div>
  `;
}

function answer(i){
  if(i == activeLesson.quiz[qIndex].c) score++;
  qIndex++;

  if(qIndex < activeLesson.quiz.length){
    renderQuiz();
  } else {
    quiz.innerHTML = `
      <div class="card">
        <h2>Score ${score}</h2>
        <button onclick="showOverview()">Back</button>
      </div>
    `;
  }
}

function showSummary(){
  hideAll();
  summary.classList.remove("hidden");

  summary.innerHTML = `
    <div class="card">
      ${activeLesson.summary.map(s=>`<p>${s}</p>`).join("")}
      <button onclick="showOverview()">Back</button>
    </div>
  `;
}
