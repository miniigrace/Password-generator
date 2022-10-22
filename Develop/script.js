var generateBtn = document.querySelector("#generate");

// Possible variables and values
var charSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","YZ"];
var numericSet = ["0","1","2","3","4","5","6","7","8","9"];
var symbolsSet = "!@#$%-+=/^&".split('');
var length; 

function generatePassword () {
// User 
   alert("You are about to generate a password with 8 - 128 characters long");
    
   
//Prompts user about the criteria in generating password
    var passwordLength = (prompt("How long would you like your password be?\nEnter number between 8 - 100"));


    if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 100 ) {
        alert("Too short! Password must be 8 - 100 characters");
        return generatePassword();
    
} 

    else if (isNaN(passwordLength)) {
        alert("Invalid number! Try again");
        return generatePassword();

} 
    else {
        alert("Your password will have " + passwordLength + " characters long");
        length = parseInt(passwordLength)
     
    }

var passwordHasCharSet = confirm("Password will both have lowercase and uppercase characters.\nPress\n'OK = Yes\n'Cancel'= No");
var passwordHasNumericSet = confirm("Password will have numeric characters.\nPress\n'OK = Yes\n'Cancel'= No");
var passwordHasSymbolsSet = confirm("Password will have special characters.\nPress\n'OK = Yes\n'Cancel'= No");

var passLengthResult = [];

    if (passwordHasCharSet === true) {
    passLengthResult = [ ...passLengthResult, ...charSet]
}

    if (passwordHasNumericSet === true) {
    passLengthResult = [ ...passLengthResult, ...numericSet]
}

    if (passwordHasSymbolsSet === true) {
    passLengthResult = [ ...passLengthResult, ...symbolsSet]
}
  if (passLengthResult.length < 1 ) {
      alert("Must choose at least one criteria" );
      return generatePassword()
      } 

console.log(passLengthResult)

var generatedPassword = [];

    for (var i = 0; i < length; i++) {
        generatedPassword.push(passLengthResult[Math.floor(Math.random() * passLengthResult.length)]);
        console.log(generatedPassword)
    }
     

    return generatedPassword.join('');

    

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);