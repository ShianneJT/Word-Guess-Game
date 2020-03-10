// Word Guess Game

// Create list of words 
// User makes a guess
// code checks if they entered an alpha character
// then checks it against the chosen word
//

// Variables
    var officeChars = ["Michael Scott", "Pam Beesly", "Jim Halpert", "Dwight Schrute", 
        "Stanley Hudson", "Kevin Malone", "Angela Martin", "Phylis Vance", "Bob Vance of Vance Refrigeration", 
        "Meredith Palmer", "Creed Bratton", "Oscar Martinez", "Ryan Howard", "Kelly Kapoor", "Andy Bernard",
        "Toby Flenderson", "Darryl Philbin", "Moes", "Jan Levinson", "David Wallace", "Robert California",
        "Holly Flax", "Todd Packer"];

    var alphabet = "abcdefghijklmnopqrstuvwxyz";


// Game begins when the user presses a key

    document.onkeyup = function(event) {
        var userChoice = event.key;
        console.log(userChoice); //remove    

// This checks to make sure the user entered a letter then proceeds with the game 
// or displays a message on the screen alerting the user to select an alpha character only 
    var charCheck = alphabet.includes(userChoice);
        console.log(charCheck); //remove      

    if (charCheck) {  //probably make this a for loop?
        console.log("Moves on with the game");
    } else {
        console.log("Choose a letter from the alphabet.");  //display this somewhere on the page
    }






    }
