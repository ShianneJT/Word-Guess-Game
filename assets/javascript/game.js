// Create a list of words
// User presses a letter
// It checks to see if that is correct
// If correct it returns the word with the correct letters and underscores
// ... and minuses from the letters remaining
// If incorrect it minuses one from their guesses remaining and adds the letter to a letters guessed div
// When no letters remain add one to the wins and start the game over

// Word list
    var officeCharacters = ["michael scott", "pam beesly", "jim halpert", "dwight schrute",
        "stanley hudson", "kevin malone", "angela martin", "phylis vance", "bob vance of vance refrigeration",
        "meredith palmer", "creed bratton", "oscar martinez", "ryan howard", "kelly kapoor", "andy bernard",
        "toby flenderson", "darryl philbin", "moes", "jan levinson", "david wallace", "robert california",
        "holly flax", "todd packer"];

// Selects a random character 
    var randomCharacter = officeCharacters[Math.floor(Math.random() * officeCharacters.length)];

    

// Game Stats
    var lives = 15;
    var wins = 0;
    var wrongGuesses = [];
    var letters = [];

    document.onkeyup = function(event) {
        userChoice = event.key;
        userChoice = userChoice.toLowerCase();


    while (letters > 0) {
        if (userChoice = randomCharacter) {

        }

    }    
}