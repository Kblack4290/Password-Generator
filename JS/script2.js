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
    allCharacters.splice(0, allCharacters.length);

    //Password Length
    passwordLength = prompt("Choose a password length between 8 and 128 characters")

    if (!passwordLength) {
        return;
    }

    else if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose a password length between 8 and 128 characters")
        return;
    }

    else if (passwordLength = lowerCaseLetters.concat(upperCaseLetters)) {
        alert("Please choose a password length between 8 and 128 characters")
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

    // if numbers are selected then they will be added to characters that are selected
    if (numeric) {
        allCharacters = allCharacters.concat(numbers)

    }
    //  only numbers are selected
    else if (numeric) {

        allCharacters = numbers
    };

    console.log(allCharacters);

    // If no characters are selected then the user will be alerted and sent back to generate a pw
    if (lowerCase === false && upperCase === false && numeric === false && special === false) {
        alert("Please choose at least 1 criteria")
        return;
    }

    // calling for the the getRandom function to obtain radom array from the characters selected
    getRandom();
}

//function to get random character/ for loop
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
