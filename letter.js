function Letters (char) {
  this.visible = !/[a-z1-9]/i.test(char);
  this.char = char;
}

// function Letters.string {
Letters.toString = function () {
if (this.visible === true) {
  return this.char;
}
  return "_";
}

Letters.prototype.Solution = function () {
  return this.char;
}

Letters.prototype.Guess = function (charGuess) {
  if (this.char.toUpperCase() === charGuess.toUpperCase()) {
    this.visible = true;
    return true;
  }
  return false;
}

module.exports = Letters;
