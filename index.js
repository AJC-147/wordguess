var inquirer = require("inquirer");

var Words = require("./word");
var wordList = ["Alphabet", "Apple", "Amazon", "Aligator"]


function Game() {

  var self = this;

// var self = this.Game;

play();

  function play() {
    this.guessesLeft = 10;
    nextWord();
  };

  function nextWord() {
    var randWord = wordList[Math.floor(Math.random() * wordList.length)];
    this.currentWord = new Words(randWord);

    console.log("\n" + this.currentWord);
    makeGuess();
  };

  function makeGuess() {
    askForLetter().then(function() {


      if (self.guessesLeft = 0) {
        console.log("No guesses left"");
        self.askToPlayAgain();

      }
      else if (self.currentWord.guessedCorrectly()) {
        console.log("You're right! Next word...");
        self.guessesLeft = 10;
        self.nextWord();


      }
      else {
        self.makeGuess();
      }



    });
  };

  function askToPlayAgain() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Play again?"
        }
      ])
      .then(function(val) {

        if (val.choice) {
          self.play();
        }
      });
  };

  function askForLetter() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "Enter a letter",
          validate: function(val) {
            return /[a-z1-9]/gi.test(val);

          }
        }
      ])
      .then(function(val) {

        var didGuessCorrectly = self.currentWord.guessLetter(val.choice);

        if (didGuessCorrectly) {
          console.log("Guesses: " + guessesLeft)
          console.log("\nYou're right...");


        }
        else {
          self.guessesLeft--;
          console.log("\nYou're wrong...");
          console.log("Guesses:" + self.guessesLeft);
        }
      });
  };

}

var game = new Game();
game();
