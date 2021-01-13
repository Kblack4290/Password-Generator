
// # 03 JavaScript: Password Generator

// ## Your Task

// This week’s homework requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

// The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

// ## User Story

// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password

// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt

// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered

// THEN a password is generated that matches the selected criteria

// WHEN the password is generated

// THEN the password is either displayed in an alert or written to the page
// ```




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // creat a prompt that  asks user to select between 8 and 128
var passwordLength = window.prompt(" Choose the length of your password between 8 and 128 chararcters")

if (!passwordLength) {
  return;
}

else if (null) {
  return;
}

else if (passwordLength <8 || passwordLength >128) {
  return;
}

  //prompt to choose lower case y/n
var lowerCase = window.confirm (" Do you want lower case letters?")
  //prompt to choose upper case y/n
  var upperCase = window.confirm (" Do you want upper case letters?")
  //numeric y/n
  var numeric = window.confirm (" Do you want numeric characters?")
  //special characters y/n
  var upperCase = window.confirm (" Do you want special characters letters?")
  // if no character types are selected end function 

  //pw generated after all selected 

  // password should be written on page or displayed as an alert when generated 
 var password = generatePassword(); //define
  var passwordText = document.querySelector("#password"); //define

  passwordText.value = password;


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);