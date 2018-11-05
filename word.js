var Letters = require("./letter.js");

function Words(word) {

  this.Letter = word.split("").map(function(char) {
    return new Letters(char);
  })
}

Words.toString = function () {
  return this.letter.join(" ");
}

Words.Solution = function () {
  return this.letter.map(function(letters) {
    return letters.Solution();
  }).join("")
}

Words.Guess = function(char) {
  var guessCorrect = null;

  this.letters.forEach(function(letters) {
    if (letters.Guess(char)) {
      guessCorrect = true;
    }
  })
console.log(this)
  return guessCorrect;
}

Words.guessCorrect = function() {

  return this.letter.every(function(letters) {
    return letters.visible;
  })
}

module.exports = Words;
