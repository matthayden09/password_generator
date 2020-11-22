
// GIVEN I need a new, secure password
function generatePassword() {

  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  alert("Select OK for YES or Cancel for NO")
  var userChoice = [];
  var upperChoice = confirm("Include uppercase letter?");
  var lowerChoice = confirm("Include lowercase letters?");
  var specialChoice = confirm("Include special characters?");
  var numberChoice = confirm("Include numbers?");

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // password criteria
  var upperCase = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  var lowerCase = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  var specialChar = [
    "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "`", "~", "{", "}", "[", "]", "|"
  ];
  var numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ];

  // if loop when cancel is selected
  if ((upperChoice === false) && (lowerChoice === false) && (specialChoice === false) && (numberChoice === false)) {
    alert('Need to Confirm Condition');
    var upperChoice = confirm("Include uppercase letter?");
    var lowerChoice = confirm("Include lowercase letters?");
    var specialChoice = confirm("Include special characters?");
    var numberChoice = confirm("Include numbers?");
  }

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt("Please choose between 8-128 for your password length.");
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Password must be a minimum of 8 characters and a maximum of 128");
    passwordLength = prompt("Choose Length");
  }

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  // upperCase if loop
  if (upperChoice) {
    for (var i = 0; i < upperCase.length; i++) {
      userChoice.push(upperCase[i]);
    }
  }
  // lowerCase if loop
  if (lowerChoice) {
    for (var i = 0; i < lowerCase.length; i++) {
      userChoice.push(lowerCase[i]);
    }
  }
  // specialChar if loop
  if (specialChoice) {
    for (var i = 0; i < specialChar.length; i++) {
      userChoice.push(specialChar[i]);
    }
  }
  // numbers if loop
  if (numberChoice) {
    for (var i = 0; i < numbers.length; i++) {
      userChoice.push(numbers[i]);
    }

    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    var newPassword = [];
    for (i = 0; i < passwordLength; i++) {
      newPassword.push(userChoice[Math.floor(Math.random() * userChoice.length)]);
    }

    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page
    return (newPassword.join(""));
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


