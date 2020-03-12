// Word Guess Game

// Create list of words
// User makes a guess
// code checks if they entered an alpha character
// then checks it against the chosen word
// while keeping track of remaining letters, lives, and wins


// Word list
    var officeCharacters = ["Michael Scott", "Pam Beesly", "Jim Halpert", "Dwight Schrute", 
        "Stanley Hudson", "Kevin Malone", "Angela Martin", "Phylis Vance", "Bob Vance of Vance Refrigeration", 
        "Meredith Palmer", "Creed Bratton", "Oscar Martinez", "Ryan Howard", "Kelly Kapoor", "Andy Bernard",
        "Toby Flenderson", "Darryl Philbin", "Moes", "Jan Levinson", "David Wallace", "Robert California",
        "Holly Flax", "Todd Packer"];
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Selects a random character 
    var randomCharacter = officeCharacters[Math.floor(Math.random() * officeCharacters.length)];
    var lettersRemaining = randomCharacter.length; // I don't know where I want this yet =P but here is probably an okay place
    // Need to add wins, lives,

// Blank answer
    var answer = [];
    for (i = 0; i < randomCharacter.length; i++) {
        answer[i] = "_";
    }

// Waiting on user input to start the game
    document.onkeyup = function(event) {
        letterChoice = event.key;
            console.log(letterChoice); //remove

// This checks to make sure the user entered a letter then proceeds with the game 
// or displays a message on the screen alerting the user to select an alpha character only 
    var letterCheck = alphabet.includes(letterChoice);

    while (lettersRemaining > 0) {
        if (letterCheck) {
            break;
        } else {
            alert("Choose a letter from the alphabet.")
           // console.log("Choose a letter from the alphabet.");  //display this somewhere on the page
            break;
        }
    }    
    }