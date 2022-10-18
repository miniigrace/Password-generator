// Assignment Code
var generateBtn = document.querySelector("#generate");

//possible password variables and values

function generatePassword () {
  alert("You are about to generate a password.\nPress ok to continue ");

var passwordLength = prompt("Choose the length of you password.\nEnter number from 8 - 128 long");
var passwordLengthResult = {
  charSet : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numericList : "0123456789",
  symbols : "!@#$%-+=/^&"

};

if

  

}
  
  




  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

