console.log("Trivia Game");
let gameMessage = document.querySelector("#message-box");
let msgPrompt = document.querySelector("#instruction");
let rightAnswer = 0;
let correctCount = 0;
let questionCount = 0;

/*const triviaQuestions = [
  {
    questionId: 1,
    question: "What was Kramer's first name on the TV show Seinfeld?",
    answer1: "Newman",
    answer2: "Kevin",
    answer3: "Roswell",
    answer4: "Cosmo",
    correctAnswer: 4,
  },
  {
    questionId: 2,
    question:
      "On the TV show Friends, what is the name of the song that Phoebe often sang at the Coffee House?",
    answer1: "Alley Cat",
    answer2: "Silly Cat",
    answer3: "Smelly Cat",
    answer4: "Jelly Cat",
    correctAnswer: 3,
  },
];*/
function loadQuestion() {
  gameMessage.innerText = "(Click the correct answer)";
  let myQuestion = document.querySelector("#question-txt");
  console.log(myQuestion);
  myQuestion.innerText = triviaQuestions[questionCount].question;
  console.log(myQuestion);
  let answer_1 = document.querySelector("#answer1");
  answer_1.innerText = triviaQuestions[questionCount].answer1;
  let answer_2 = document.querySelector("#answer2");
  answer_2.innerText = triviaQuestions[questionCount].answer2;
  let answer_3 = document.querySelector("#answer3");
  answer_3.innerText = triviaQuestions[questionCount].answer3;
  let answer_4 = document.querySelector("#answer4");
  answer_4.innerText = triviaQuestions[questionCount].answer4;
  rightAnswer = triviaQuestions[questionCount].correctAnswer;
  console.log(rightAnswer);
}

const beginGame = (event) => {
  loadQuestion();
  // clear the message field
  // hide the Begin button
  // hide the game over message
  // set the question counter to 1
};

const event1 = (event) => {
  console.log(" rightAnswer" + rightAnswer);
  processAnswer(1);
};

const event2 = (event) => {
  console.log(" rightAnswer" + rightAnswer);
  processAnswer(2);
};

const event3 = (event) => {
  console.log(" rightAnswer" + rightAnswer);
  processAnswer(3);
};

const event4 = (event) => {
  console.log(" rightAnswer" + rightAnswer);
  processAnswer(4);
};

const nxtQuestion = (event) => {
  console.log(" Next Question");
  loadQuestion();
};

function processAnswer(aNum) {
  console.log("aNum: " + aNum);
  msgPrompt.innerText = "   ";
  if (aNum === rightAnswer) {
    gameMessage.innerText = "Very good. That is the correct Answer!";
    console.log(gameMessage);
    correctCount += 1;
    // update the count of correct answers
  } else {
    gameMessage.innerText = "Wrong Answer";
    // change background to yellow for the correct answer
  }
  questionCount += 1;
  let displayScore = document.querySelector("#score-txt");
  console.log(displayScore);
  displayScore.innerText = "Score: " + correctCount + "/" + questionCount;
  console.log(displayScore);
  // increment the question counter
}

let beginNow = document.querySelector("#begin");
beginNow.addEventListener("click", beginGame);

let button1 = document.querySelector("#answer1");
button1.addEventListener("click", event1);

let button2 = document.querySelector("#answer2");
button2.addEventListener("click", event2);

let button3 = document.querySelector("#answer3");
button3.addEventListener("click", event3);

let button4 = document.querySelector("#answer4");
button4.addEventListener("click", event4);

let nextQuestion = document.querySelector("#next-question");
nextQuestion.addEventListener("click", nxtQuestion);
// will need a for loop to process 10 questions
