// Assignment code here
function generatePassword() {
  console.log("botton clicked");
  var passwordLenght = prompt("How many character would you like your password to contain")
  if (passwordLenght > 128) {passwordLenght = passwordLenght.substring(8, 128)}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



