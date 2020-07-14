## Jeff's Trivia Game

####Trivia Game Description
This project is a multiple choice trivia game.

####Features

- Once the user clicks the "_Begin_" button the program displays a trivia question and four answers.
- The user simply clicks on the correct answer and the game will indicate if they are correct.
- The game displays a running score of how many questions were answered correctly.
- After each question, the user clicks the "_Next Question_" button to continue.
- After completing a round of ten questions, the program displays the score and the user has the option to play another round of ten questions or begin the game all over again.
- The game keeps track of the high score. If "_Begin_" is clicked again, the score of the new game is compared to the high score to see if a new high score has been set.
- The game displays special messages for a perfect score or a new high score.
- The game is stored here: [Trivia Game](https://github.com/jeff61b/Project-1)

**Functions**
The functionality of the game was broken down into these individual JavaScript functions.

- shuffle – shuffles the order of the trivia questions before each game.
- loadQuestion – loads the question and answers onto the screen
- beginGame – starts a new game after user clicks the “Begin” button
- anotherRnd – starts another round of 10 questions after user clicks the “Play another round” button.
- nxtQuestion – prepares for the next question when user hits the “Next Question” button.
- gameOver – displays messages and options for when the user has completed a round of ten questions.
- processAnswer – responds when user clicks any of the four “Answer” buttons.
