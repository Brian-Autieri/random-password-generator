// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  // Enter four arrays of all characters users are able to choose.

  var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialArray = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

  var selectedCharacters = [];

// User is promted to enter a password length. If their input is invalid, the prompt window will continue to pop up.

  var lengthOfPassword = prompt(
    'Enter a password length between 8 and 128 characters.'
  );

  while (lengthOfPassword < 8 || lengthOfPassword > 128 || isNaN(lengthOfPassword)) {
    lengthOfPassword = parseInt(prompt('Enter a password length between 8 and 128 characters.'));
  }

  // Lines 35-68 asks users what characters they want their password to contain.

  var containLowercase = confirm(
    'Would you like your password to contain lowercase letters?'
  );

  if (containLowercase) {
    selectedCharacters = selectedCharacters.concat(
      lowerArray
    );
  }

  var containUppercase = confirm(
    'Would you like your password to contain uppercase letters?'
  );

  if (containUppercase) {
    selectedCharacters = selectedCharacters.concat(
      upperArray
    );
  }

  var containNumber = confirm('Would you like your password to contain numbers?');

  if (containNumber) {
    selectedCharacters = selectedCharacters.concat(
      numArray
    );
  }

  var containSpecial = confirm('Would you like your password to contain special characters?');
  if (containSpecial) {
    selectedCharacters = selectedCharacters.concat(
      specialArray
    );
  }

  // If user doesn't choose any characters, the prompt window will tell them to try again.

  var tryAgain = ('');

  if (!containLowercase && !containUppercase && !containNumber && !containSpecial) {
    tryAgain = parseInt(alert('Please try again and select at least one type of character.'));
  }

  var result = [];

  for (var i = 0; i < lengthOfPassword; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    var randomNum = selectedCharacters[randomIndex];
    result.push(randomNum);
  }

  return result.join('');
}

generateBtn.addEventListener("click", writePassword);
