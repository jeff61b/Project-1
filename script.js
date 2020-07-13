console.log("Trivia Game");
let gameMessage = document.querySelector("#message-box");
let gameOverMsg = document.querySelector("#game-over-msg");
let msgPrompt = document.querySelector("#instruction");
let rightAnswer = 0; // number of the correct answer ( 1 - 4) for this question
let correctCount = 0; // total number of correct answers
let questionCount = 0; // total number of questions answered
let triviaIndex = 0; // used to read the triviaArray
let questionIndex = 0; // used to select trivia Questions
let roundLimit = 10; // number of the question to end this round
let answer_1 = document.querySelector("#answer1");
let answer_2 = document.querySelector("#answer2");
let answer_3 = document.querySelector("#answer3");
let answer_4 = document.querySelector("#answer4");
let nextQuestion = document.querySelector("#next-question");
let categoryMsg = document.querySelector("#category");
gameMessage.innerText = " ";

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
  let myQuestion = document.querySelector("#question-txt");
  questionIndex = triviaArray[triviaIndex];
  console.log("question index" + questionIndex + "trivia index " + triviaIndex);

  console.log(myQuestion);
  myQuestion.innerText = triviaQuestions[questionIndex].question;
  console.log(myQuestion);
  answer_1.innerText = triviaQuestions[questionIndex].answer1;
  answer_2.innerText = triviaQuestions[questionIndex].answer2;
  answer_3.innerText = triviaQuestions[questionIndex].answer3;
  answer_4.innerText = triviaQuestions[questionIndex].answer4;
  rightAnswer = triviaQuestions[questionIndex].correctAnswer;
  categoryMsg.innerText =
    "Category: " + triviaQuestions[questionIndex].category;

  console.log(rightAnswer);
}

// Begin a new Game
const beginGame = (event) => {
  shuffle(triviaArray);
  console.log("Trivia array " + triviaArray);
  triviaIndex = 0;
  loadQuestion();
  console.log(beginNow);
  beginNow.style.visibility = "hidden";
  nextQuestion.style.visibility = "hidden";
  // clear the message field
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

// Hit the Next Question button
const nxtQuestion = (event) => {
  console.log(" Next Question");
  triviaIndex += 1;
  loadQuestion();
  nextQuestion.style.visibility = "hidden";
  answer_1.style.background = "lightcyan";
  answer_2.style.background = "lightcyan";
  answer_3.style.background = "lightcyan";
  answer_4.style.background = "lightcyan";
  gameMessage.style.color = "black";
  beginNow.style.visibility = "hidden";
};

function gameOver() {
  beginNow.style.visibility = "visible";
  nextQuestion.style.visibility = "hidden";
  gameOverMsg.style.visibility = "visible";
  // Display Game over message
  // Display the user's score
  // Display the "Play another round" button
  // Display the "New Game - Start Over" button
  //  - could be the same as the "Click here to begin"  button
  // Hide the Next Question button.
}

// Process the button when the user clicks an answer
function processAnswer(aNum) {
  console.log("aNum: " + aNum);
  msgPrompt.innerText = "   ";
  if (aNum === rightAnswer) {
    let rightAnswerIndex = Math.floor(Math.random() * 4) + 1;
    console.log("right answer Index " + rightAnswerIndex);
    if (rightAnswerIndex === 1) {
      gameMessage.innerText = "Very good. Thats the correct Answer.";
    } else if (rightAnswerIndex === 2) {
      gameMessage.innerText = "Awesome! You got that right.";
    } else if (rightAnswerIndex === 3) {
      gameMessage.innerText = "Good job. That's the right Answer";
    } else {
      gameMessage.innerText = "Correct Answer";
    }
    console.log(gameMessage);
    gameMessage.style.color = "black";
    correctCount += 1;
    // update the count of correct answers
  } else {
    // Generate a wrong answer message
    let wrongAnswerIndex = Math.floor(Math.random() * 4) + 1;
    if (wrongAnswerIndex === 1) {
      gameMessage.innerText = "Oh, sorry. Thats the wrong Answer";
    } else if (wrongAnswerIndex === 2) {
      gameMessage.innerText = " Nope. Wrong Answer";
    } else if (wrongAnswerIndex === 3) {
      gameMessage.innerText = " Oops. Wrong Answer";
    } else {
      gameMessage.innerText = "Wrong Answer!";
    }
    gameMessage.style.color = "red";
    // change background to yellow for the correct answer
  }
  questionCount += 1;
  let displayScore = document.querySelector("#score-txt");
  //console.log(displayScore);
  displayScore.innerText = "Score: " + correctCount + "/" + questionCount;
  console.log(displayScore);
  nextQuestion.style.visibility = "visible";
  console.log("answer num " + aNum);
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

nextQuestion.addEventListener("click", nxtQuestion);
// will need a for loop to process 10 questions
