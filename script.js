
const questions = [
  {
    text: "What's your ideal weekend activity?",
    options: [
      { text: "Painting or crafting", career: "Artist" },
      { text: "Volunteering", career: "Social Worker" },
      { text: "Coding a fun project", career: "Developer" },
      { text: "Taking aesthetic photos", career: "Photographer" }
    ]
  },
  {
    text: "Pick a favorite snack:",
    options: [
      { text: "Macarons", career: "Baker" },
      { text: "Popcorn", career: "Movie Director" },
      { text: "Bubble Tea", career: "Cafe Owner" },
      { text: "Energy Bar", career: "Athlete" }
    ]
  },
  {
    text: "Your friends describe you as...",
    options: [
      { text: "Creative", career: "Designer" },
      { text: "Helpful", career: "Nurse" },
      { text: "Logical", career: "Engineer" },
      { text: "Playful", career: "Animator" }
    ]
  },
  {
    text: "Which color feels most 'you'?",
    options: [
      { text: "Lavender", career: "Florist" },
      { text: "Sky Blue", career: "Pilot" },
      { text: "Sunshine Yellow", career: "Teacher" },
      { text: "Peach", career: "Influencer" }
    ]
  },
  {
    text: "Choose a pet companion:",
    options: [
      { text: "Cat", career: "Writer" },
      { text: "Dog", career: "Therapist" },
      { text: "Hamster", career: "Scientist" },
      { text: "Parrot", career: "Performer" }
    ]
  },
  {
    text: "What inspires you most?",
    options: [
      { text: "Nature", career: "Environmentalist" },
      { text: "Stories", career: "Author" },
      { text: "Tech", career: "Developer" },
      { text: "Fashion", career: "Stylist" }
    ]
  },
  {
    text: "Pick a dream location to work from:",
    options: [
      { text: "A cozy studio", career: "Illustrator" },
      { text: "A bustling cafe", career: "Barista" },
      { text: "A quiet library", career: "Archivist" },
      { text: "A big stage", career: "Performer" }
    ]
  },
  {
    text: "Your go-to music genre:",
    options: [
      { text: "Indie", career: "Musician" },
      { text: "Classical", career: "Conductor" },
      { text: "Pop", career: "Entertainer" },
      { text: "Lo-fi", career: "Editor" }
    ]
  },
  {
    text: "Pick a favorite emoji:",
    options: [
      { text: "Sparkles", career: "Content Creator" },
      { text: "Books", career: "Librarian" },
      { text: "Camera", career: "Filmmaker" },
      { text: "Laptop", career: "Developer" }
    ]
  },
  {
    text: "Which word speaks to your soul?",
    options: [
      { text: "Dream", career: "Visionary" },
      { text: "Care", career: "Nurse" },
      { text: "Create", career: "Designer" },
      { text: "Lead", career: "Entrepreneur" }
    ]
  }
];

let currentQuestion = 0;
let score = {};

function showQuestion() {
  const box = document.getElementById("question-box");
  if (currentQuestion >= questions.length) return showResult();

  const q = questions[currentQuestion];
  box.innerHTML = "<h2>" + q.text + "</h2>" + q.options.map((o, i) =>
    `<button onclick="selectOption('${o.career}')">${o.text}</button>`
  ).join("");
}

function selectOption(career) {
  score[career] = (score[career] || 0) + 1;
  localStorage.setItem("careerScore", JSON.stringify(score));
  currentQuestion++;
  showQuestion();
}

function showResult() {
  const resultScreen = document.getElementById("result-screen");
  const quizBox = document.getElementById("quiz-container");
  const resultText = document.getElementById("result-text");
  const debug = document.getElementById("debug-message");
  quizBox.style.display = "none";
  resultScreen.style.display = "block";

  let topCareer = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
  resultText.textContent = "You're best suited to be a: " + topCareer + "!";
  debug.textContent = "Quiz Complete!";
}

function restartQuiz() {
  currentQuestion = 0;
  score = {};
  localStorage.removeItem("careerScore");
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

window.onload = function () {
  document.getElementById("debug-message").textContent = "JS Loaded!";
  showQuestion();
};
