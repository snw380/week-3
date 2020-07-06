// Variable list
var confirmUpLetter;
var confirmDownLetter;
var confirmNumbers;
var confirmSpecials;
var choices = [];
var result = ("");
// Password variable values
var generateBtn = document.querySelector("#generate");
var letterLower = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterUpper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"];
// this is the main function for writing the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// The website prompts the user
function generatePassword() {
  enter = prompt("Please verify password length starting at 8 to 128.");

  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    enter = prompt("Please verify password length starting at 8 to 128.");
  } else {
    confirmUpLetter = confirm("Please verify for an uppercase letter.");
    confirmDownLetter = confirm("Please verify for a lowercase letter.");
    confirmNumbers = confirm("Please verify for numbers.");
    confirmSpecials = confirm("Please verify speical characters.");
  }
  // If the user picks no on all confirms then this gets ran
  if (confirmUpLetter === false && confirmDownLetter === false && confirmNumbers === false && confirmSpecials === false) {
    alert("Please pick at least one character");
    return "Please pick at least one character."
  }

  // If true, it will pull the the choice
  if (confirmUpLetter === true) {
    choices = choices.concat(letterUpper);
  }
  if (confirmDownLetter === true) {
    choices = choices.concat(letterLower);
  }
  if (confirmSpecials === true) {
    choices = choices.concat(specialCharacters);
  }
  if (confirmNumbers === true) {
    choices = choices.concat(numbers);
  }

  // This will randomize the array from the users choices
  for (i = 0; i < enter; i++) {
    result += choices[Math.floor(Math.random() * (choices.length - 1))];
  }
  return result;
}

// This will reset after clicking generate button
function reset() {
  result = ("");
  choices = [];
}

// Event listener to generate button
generateBtn.addEventListener("click", function () {
  reset();
  writePassword();
});

