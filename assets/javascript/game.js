// Word Guess Game

// Create list of words 
// User makes a guess
// code checks if they entered an alpha character
// then checks it against the chosen word
//

// Word List AKA Characters from The Office
    var officeChars = ["Michael Scott", "Pam Beesly", "Jim Halpert", "Dwight Schrute", 
        "Stanley Hudson", "Kevin Malone", "Angela Martin", "Phylis Vance", "Bob Vance of Vance Refrigeration", 
        "Meredith Palmer", "Creed Bratton", "Oscar Martinez", "Ryan Howard", "Kelly Kapoor", "Andy Bernard",
        "Toby Flenderson", "Darryl Philbin", "Moes", "Jan Levinson", "David Wallace", "Robert California",
        "Holly Flax", "Todd Packer"];

    var charChoice = officeChars[Math.floor(Math.random()*officeChars.length)];











// This checks to make sure the user put in a letter and not a silly character

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var userInput = "{";
    var checkChar = alphabet.includes(userInput);

    if (checkChar) {
        console.log("Yep that's a letter alright")
    } else {
        console.log("Choose a letter!");
    }