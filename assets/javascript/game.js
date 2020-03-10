// Word Guess Game

// Create list of words 
// User makes a guess
// code checks if they entered an alpha character
// then checks it against the chosen word
//


// This checks to make sure the user put in a letter and not a silly character

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var userInput = "{";
    var checkChar = alphabet.includes(userInput);

    if (checkChar) {
        console.log("Yep that's a letter alright")
    } else {
        console.log("Choose a letter!");
    }



