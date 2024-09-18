let questions = [
  {
    question: "Wofür steht CSS?",
    answer_1: "Cascading Style Sheets",
    answer_2: "Computer Style Sheets",
    answer_3: "Creative Style System",
    answer_4: "Cascading System Sheets",
    correctAnswer: 1,
  },
  {
    question: "Welche CSS-Eigenschaft steuert die Textgröße?",
    answer_1: "font-style",
    answer_2: "text-size",
    answer_3: "font-size",
    answer_4: "text-style",
    correctAnswer: 3,
  },
  {
    question: "Welche ist die richtige CSS-Syntax?",
    answer_1: "body {color: black;}",
    answer_2: "{body:color=black;}",
    answer_3: "body:color=black;",
    answer_4: "{body;color:black;}",
    correctAnswer: 1,
  },
  {
    question: "Wie fügt man einen Kommentar in eine CSS-Datei ein?",
    answer_1: "// das ist ein Kommentar",
    answer_2: "/* das ist ein Kommentar */",
    answer_3: "' das ist ein Kommentar",
    answer_4: "<!-- das ist ein Kommentar -->",
    correctAnswer: 2,
  },
  {
    question:
      "Welche Eigenschaft wird verwendet, um die Hintergrundfarbe zu ändern?",
    answer_1: "color",
    answer_2: "bgcolor",
    answer_3: "background-color",
    answer_4: "background",
    correctAnswer: 3,
  },
  {
    question:
      "Welche Eigenschaft wird verwendet, um die Schriftart eines Elements zu ändern?",
    answer_1: "font-style",
    answer_2: "font-weight",
    answer_3: "font-family",
    answer_4: "font-variant",
    correctAnswer: 3,
  },
  {
    question:
      "Wie lässt man jedes Wort in einem Text mit einem Großbuchstaben beginnen?",
    answer_1: "text-transform: capitalize",
    answer_2: "text-transform: uppercase",
    answer_3: "text-transform: lowercase",
    answer_4: "transform: capitalize",
    correctAnswer: 1,
  },
  {
    question:
      "Welche Eigenschaft wird verwendet, um den Abstand zwischen Textzeilen zu steuern?",
    answer_1: "letter-spacing",
    answer_2: "line-height",
    answer_3: "word-spacing",
    answer_4: "text-spacing",
    correctAnswer: 2,
  },
  {
    question:
      "Welche CSS-Eigenschaft wird verwendet, um ein Element auszublenden?",
    answer_1: "visibility: none",
    answer_2: "display: none",
    answer_3: "visibility: hidden",
    answer_4: "display: hidden",
    correctAnswer: 2,
  },
  {
    question:
      "Wie wählt man in CSS ein Element mit der ID 'header' korrekt aus?",
    answer_1: "#header",
    answer_2: ".header",
    answer_3: "header",
    answer_4: "id=header",
    correctAnswer: 1,
  },
];

let correctAnswers = 0;

let currentQuestion = 0;

function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  calculateProgress();
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display: none;";
    document.getElementById("questionsAmount").innerHTML = questions.length;
    document.getElementById("amountCorrectAnswers").innerHTML = correctAnswers;
    document.getElementById("cardImg").src = "img/question-mark.jpg";
  } else {
    let question = questions[currentQuestion];
    calculateProgress();
    document.getElementById("questionNumber").innerHTML = currentQuestion + 1;
    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];

  let selectedQuestionNumber = selection.slice(-1);

  let idCorrectAnswer = `answer_${question["correctAnswer"]}`;

  if (selectedQuestionNumber == question["correctAnswer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    correctAnswers++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idCorrectAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion(selection, idCorrectAnswer) {
  currentQuestion++;
  document.getElementById("nextBtn").disabled = true;
  resetAnswersColors();
  showQuestion();
}

function resetAnswersColors() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function calculateProgress() {
  let currentProgress =
    ((currentQuestion) / questions.length).toFixed(2) * 100;
  document.getElementById("progressBar").innerHTML = currentProgress + "%";
  document.getElementById("progressBar").style.width = currentProgress + "%";
  
}
