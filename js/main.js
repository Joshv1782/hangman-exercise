
/**
 * Websites used to work on this exercise below:
 * 
 * https://www.techonthenet.com/js/math_floor.php
 * https://gist.github.com/Dashon-Hawkins/27edf2a7a919d612380a3fc2320eeb53
 * https://www.w3schools.com/js/js_break.asp
 * https://www.w3schools.com/js/js_random.asp
 * https://www.w3schools.com/jsref/jsref_join.asp
 * https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_join
 * https://www.w3schools.com/js/js_if_else.asp
 * https://www.w3schools.com/jsref/jsref_while.asp
 */

// Aray of words
var words = [
    "Fig",
    "pear",
    "apple",
    "orange",
    "bananas",
    "watermelon",
    ];
// random word 
// math.floor rounds 
// math.random will make selection random 
var word = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  
  var remainingLetters = word.length;
  
  while (remainingLetters > 0) {
    // Show the player their progress alert(answerArray.join(" "));
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null)  {
    break; // Exit the loop
  }
    else if (guess.length !== 1) {
    alert("Please enter letter.");
    } 
    // Update the game state with the guess
    else {for (var j = 0; j < word.length; j++) {
          if (word[j] === guess) {
            answerArray[j] = guess; remainingLetters--;
          }
        }
    }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);

// Functions below
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var pickWord = function () {
// Return a random word
};

var setupAnswerArray = function (word) {
};
var showPlayerProgress = functin (answerArray)
{
// Alert to show player progress
};

var getGuess = function () {
// Use prompt to get a guess
};

var updateGameState = function (guess, word, answerArray) {
// Update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
// Use alert to show the answer and congratulate the player
};
while (remainingLetters > 0) {
showPlayerProgress(answerArray);
var guess = getGuess();
if (guess === null) {
break;
} else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {
var correctGuesses = updateGameState(guess, word, answerArray);
remainingLetters -= correctGuesses;
}
}

showAnswerAndCongratulatePlayer(answerArray);