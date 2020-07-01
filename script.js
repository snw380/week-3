// Assignment Code
var confirmUpLetter;
var confirmDownLetter;
var confirmNumbers;
var confirmSpecials;
var choices = [];
var result = ("");
// Start Password variable values:
var generateBtn = document.querySelector("#generate");
var letterLower = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterUpper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"];
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
//lines 16-35 review
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
  if (confirmUpLetter === true && confirmDownLetter === true && confirmSpecials === true && confirmNumbers === true) {
    choices = choices.concat(specialCharacters);
    choices = choices.concat(letterLower);
    choices = choices.concat(letterUpper);
    choices = choices.concat(numbers);
    console.log(choices);
  }

  for (i = 0; i < enter; i++) {
    result += choices[Math.floor(Math.random() * (choices.length - 1))];

  }

  console.log(result);
  return result;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
