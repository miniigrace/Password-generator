// Assignment Code
var generateBtn = document.querySelector("#generate");

//possible variables and values
var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericSet = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = "!@#$%-+=/^&";



function generatePassword () {

//Prompts user about the criteria in generating password
var passwordLength = prompt("You are about to generate a password.\nChoose the number of your password length.\nMust be 8 - 128 long");

//if user cancels
if (!passwordLength) {
    return;
}
// if user entered letters which is invalid then prompts to enter number
if (!passwordLength.charSet) {
    prompt("Invalid number! Enter number between 8 -128");
    return;

} 

if (passwordLength < 8 || passwordLength > 128) {
  alert("Too short");
  return generatePassword(); 
}

}



/*
function generatePassword() {
    alert("You are about to generate password.\nPress 'Ok' to continue");

var passwordLength = prompt("Choose the length of you password.\nEnter number from 8 - 128 long");
var passwordLengthResult = {
  charSet : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numericList : "0123456789",
  symbols : "!@#$%-+=/^&"

  }
};*/



  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
