console.log("Trivia Game");
let gameMessage = document.querySelector("#message-box");
let gameOverMsg = document.querySelector("#game-over-msg");
let thatsAll = document.querySelector("#thats-all-msg");
let msgPrompt = document.querySelector("#instruction");
let rightAnswer = 0; // number of the correct answer ( 1 - 4) for this question
let correctCount = 0; // total number of correct answers
let questionCount = 0; // total number of questions answered
let triviaIndex = 0; // used to read the triviaArray
let questionIndex = 0; // used to select trivia Questions
let myQuestion = document.querySelector("#question-txt");
myQuestion.innerText = "Click the 'Begin' button to start a new game.";
let roundLimit = 10; // number of the question to end this round
const questionLimit = 20; // Total count of all questions.
let answer_1 = document.querySelector("#answer1");
let answer_2 = document.querySelector("#answer2");
let answer_3 = document.querySelector("#answer3");
let answer_4 = document.querySelector("#answer4");
answer_1.disabled = true;
answer_2.disabled = true;
answer_3.disabled = true;
answer_4.disabled = true;
let nextQuestion = document.querySelector("#next-question");
let categoryMsg = document.querySelector("#category");
let anotherRound = document.querySelector("#another-round");
let displayScore = document.querySelector("#score-txt");
gameMessage.innerText = " ";
let highScore = 0;
let topScore = document.querySelector("#top-score");
let topScoreMsg = "Top Score: ";

// Randomize the order of Trivia questions.
// I got this logic to randomize the elements in an array from stackoverflow.com
// stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Load the next question into the screen
function loadQuestion() {
  gameMessage.innerText = "(Click the correct answer)";
  questionIndex = triviaArray[triviaIndex];

  myQuestion.innerText = triviaQuestions[questionIndex].question;
  answer_1.innerText = triviaQuestions[questionIndex].answer1;
  answer_2.innerText = triviaQuestions[questionIndex].answer2;
  answer_3.innerText = triviaQuestions[questionIndex].answer3;
  answer_4.innerText = triviaQuestions[questionIndex].answer4;
  rightAnswer = triviaQuestions[questionIndex].correctAnswer;
  categoryMsg.innerText =
    "Question: " +
    (questionCount + 1) +
    "  -  " +
    triviaQuestions[questionIndex].category;
  answer_1.disabled = false;
  answer_2.disabled = false;
  answer_3.disabled = false;
  answer_4.disabled = false;
}

// Begin a new Game
const beginGame = (event) => {
  console.log("Begin Button clicked");
  if (highScore > 0) {
    topScore.innerText = "Top Score: " + highScore + "/" + roundLimit;
  }
  roundLimit = 10;
  questionCount = 0;
  correctCount = 0;
  shuffle(triviaArray); // shuffle the order of the questions
  triviaIndex = 0;
  loadQuestion();
  gameOverMsg.style.visibility = "visible";
  beginNow.style.visibility = "hidden";
  nextQuestion.style.visibility = "hidden";
  anotherRound.style.visibility = "hidden";
  gameOverMsg.style.visibility = "hidden";
  thatsAll.style.visibility = "hidden";
  answer_1.style.background = "lightcyan";
  answer_2.style.background = "lightcyan";
  answer_3.style.background = "lightcyan";
  answer_4.style.background = "lightcyan";
  displayScore.innerText = "Score: " + correctCount + "/" + questionCount;
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

// User wants to play another round of 10 questions
const anotherRnd = (event) => {
  topScore.innerText = "Top Score: " + highScore + "/" + roundLimit;
  roundLimit += 10;
  beginNow.style.visibility = "hidden";
  nextQuestion.style.visibility = "hidden";
  anotherRound.style.visibility = "hidden";
  gameOverMsg.style.visibility = "hidden";
  thatsAll.style.visibility = "hidden";
  triviaIndex += 1;
  loadQuestion();
  answer_1.disabled = false;
  answer_2.disabled = false;
  answer_3.disabled = false;
  answer_4.disabled = false;
  answer_1.style.background = "lightcyan";
  answer_2.style.background = "lightcyan";
  answer_3.style.background = "lightcyan";
  answer_4.style.background = "lightcyan";
  gameMessage.style.color = "black";
};

// Hit the Next Question button
const nxtQuestion = (event) => {
  triviaIndex += 1;
  loadQuestion();
  nextQuestion.style.visibility = "hidden";
  answer_1.style.background = "lightcyan";
  answer_2.style.background = "lightcyan";
  answer_3.style.background = "lightcyan";
  answer_4.style.background = "lightcyan";
  gameMessage.style.color = "black";
  beginNow.style.visibility = "hidden";
  answer_1.disabled = false;
  answer_2.disabled = false;
  answer_3.disabled = false;
  answer_4.disabled = false;
};

// User completed a round of 10 questions.
function gameOver() {
  if (correctCount >= highScore) {
    if (correctCount === roundLimit) {
      topScoreMsg = "Awesome! Perfect score: ";
      //      topScore.innerText =
      //        "Awesome! Perfect score: " + correctCount + "/" + roundLimit;
    } else if (correctCount === highScore) {
      topScoreMsg = "Good job! You tied the Top Score: ";
      //      topScore.innerText = "Good job! You tied the Top Score: " + correctCount + "/" + roundLimit;
    } else {
      topScoreMsg = "Good job! You set a new Top Score: ";
      //      topScore.innerText =
      //        "Good job! You set a new Top Score: " + correctCount + "/" + roundLimit;
    }
    topScore.innerText = topScoreMsg + correctCount + "/" + roundLimit;
    topScore.style.visibility = "visible";
    highScore = correctCount;
  }
  if (roundLimit === questionLimit) {
    anotherRound.style.visibility = "hidden";
    thatsAll.style.visibility = "visible";
    thatsAll.innerText = "Game Over - Click 'Begin' to start over";
    gameOverMsg.style.visibility = "hidden";
  } else {
    anotherRound.style.visibility = "visible";
  }
  gameOverMsg.innerText = "End of Round " + roundLimit / 10;
  beginNow.style.visibility = "visible";
  nextQuestion.style.visibility = "hidden";
  gameOverMsg.style.visibility = "hidden";
}

const rightAnswerMsg = [
  "Very good. That's the correct answer",
  "Awesome! You got that right",
  "Good job. That's the right answer",
  "Correct answer. Way to go!",
];

const wrongAnswerMsg = [
  "Sorry. That's the wrong answer",
  "Oops! Wrong answer",
  "Not quite. That's the wrong answer",
  "Nice try, but that's the wrong answer",
];

// Process the button when the user clicks an answer
function processAnswer(aNum) {
  console.log("aNum: " + aNum);
  msgPrompt.innerText = "   ";
  if (aNum === rightAnswer) {
    let rightAnswerIndex = Math.floor(Math.random() * 4);
    console.log("right answer Index " + rightAnswerIndex);

    gameMessage.innerText = rightAnswerMsg[rightAnswerIndex];

    console.log(gameMessage);
    gameMessage.style.color = "black";
    correctCount += 1;
  } else {
    let wrongAnswerIndex = Math.floor(Math.random() * 4);
    gameMessage.innerText = wrongAnswerMsg[wrongAnswerIndex];

    gameMessage.style.color = "red";
  }
  questionCount += 1;
  //console.log(displayScore);
  displayScore.innerText = "Score: " + correctCount + "/" + questionCount;
  console.log(displayScore);
  nextQuestion.style.visibility = "visible";
  console.log("answer num " + aNum);
  // answer[rightAnswer].background = "lemonchiffon";
  if (rightAnswer === 1) {
    answer_1.style.background = "lemonchiffon";
  }
  if (rightAnswer === 2) {
    answer_2.style.background = "lemonchiffon";
  }
  if (rightAnswer === 3) {
    answer_3.style.background = "lemonchiffon";
  }
  if (rightAnswer === 4) {
    answer_4.style.background = "lemonchiffon";
  }
  if (questionCount === roundLimit) {
    console.log("game over " + questionCount);
    gameOver();
  }
  answer_1.disabled = true;
  answer_2.disabled = true;
  answer_3.disabled = true;
  answer_4.disabled = true;

  // increment the question counter
  // if questionCount >= roundLimit (10, 20, 30, 40)
  //  call the gameOver function
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

anotherRound.addEventListener("click", anotherRnd);
nextQuestion.addEventListener("click", nxtQuestion);
