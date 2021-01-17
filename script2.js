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


// what do I want to do?

//I want to generate a password that meets the selected criteria

// What is the criteria?

//between 8 and 128 characters long.
//If the correct length characters is not selected then the user is alerted
//If the correct length is selected then the continue to the character options

//What are the character options?
// lower case letters, UPPER CASE LETTERS, Numbers 123, Special Character .,>!

//What happens when the user selects character options
// If the user chooses to not use specific characters then it will create a password choosing random characters with the characters the user chooses
//If the user chooses all of the character options then it will create a password choosing random characters from all of the character options 
//if the user does not choose any of the character options then the user will be alerted to choose at least 1 character option and will brought back to the first option

//Once the character options are confirmed then the random password will be generated and presented in the textarea






// Assignment Code - establish your variables 
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]
var allCharacters = [];
var passwordLength;
var password = [];
var passwordText = document.querySelector("#password");





function writePassword() {


    password.splice(0, password.length);

    //Password Length
    passwordLength = prompt("Choose a character length between 8 and 29")

    if (!passwordLength) {
        return;
    }

    else if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose a character length between 8 and 128")
        return;
    }
    console.log(passwordLength);

    // Selecting lower case option
    var lowerCase = confirm("Would you like lowercase letters?")

    // lower case letters will be added to all characters selected
    if (lowerCase) {
        allCharacters = allCharacters.concat(lowerCaseLetters)

    }

    //if only lower case letters are selected then all characters will be lower case
    else if (lowerCase) {

        allCharacters = lowerCaseLetters
    };


    //selecting upper case option 
    var upperCase = confirm("Would you like uppercase letters?")

    // if upper case letters are selected then they will be combined with the rest of the characters selected 
    if (upperCase) {
        allCharacters = allCharacters.concat(upperCaseLetters)

    }

    // if only upper case letters are selected then all characters will be upper case
    else if (upperCase) {

        allCharacters = upperCaseLetters
    };


    //selecting special characters 
    var special = confirm("Would you like special characters?")

    // if special characters are selected then they will be combined with the other characters selected 
    if (special) {
        allCharacters = allCharacters.concat(specialCharacters)

    }
    // if only special characters are selected
    else if (special) {
        allCharacters = specialCharacters
    };

    //selecting numbers option
    var numeric = confirm("Would you like numbers?")

    if (numeric) {
        allCharacters = allCharacters.concat(numbers)

    }

    else if (numeric) {

        allCharacters = numbers
    };

    console.log(allCharacters);

    if (lowerCase === false && upperCase === false && numeric === false && special === false) {
        alert("Please choose at least 1 criteria")
        return;
    }



    // var password = generatePassword();


    // passwordText.value = password;

    

    getRandom();
}

//function to get random character


function getRandom() {
    for (var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * allCharacters.length);
        password.push(allCharacters[random]);
        
    }

    passwordText.textContent = password.join("");
    return password.join("")


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
