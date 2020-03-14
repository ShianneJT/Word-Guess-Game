// Create a list of words
// User presses a letter
// It checks to see if that is correct
// If correct it returns the word with the correct letters and underscores
// ... and minuses from the letters remaining
// If incorrect it minuses one from their guesses remaining and adds the letter to a letters guessed div
// When no letters remain add one to the wins and start the game over

// Word list
    var officeCharacters = ["michael", "pam", "jim", "dwight", "stanley", "kevin", "angela",
        "phylis", "meredith", "creed", "oscar", "ryan", "kelly", "andy", "toby", "darryl",
        "moes", "jan", "david", "robert", "holly"];

// Selects a random character
    
   // console.log(`Random Character:  ${randomCharacter}`)

// Game Stats
    var lives = 10;
    var losses = 0;
    var wins = 0;
    var lettersGuessed = "";
    

    var livesLeft = document.getElementById("livesLeft");

    function makeNewGame() {
        lives = 10;
        lettersGuessed = "";
        var randomCharacter = officeCharacters[Math.floor(Math.random() * officeCharacters.length)];
        var randomWordDiv = document.getElementById("randomWord");
        var lettersGuessedDiv = document.getElementById("lettersGuessed");
        lettersGuessedDiv.textContent = "";
        randomWordDiv.innerHTML = "";

        livesLeft.textContent = lives;

        var randomCharacterArray = randomCharacter.split("");
        for (var x = 0; x < randomCharacterArray.length; x++) {
            console.log(randomCharacterArray[x]);
           randomWordDiv.innerHTML += "<span id='letter_" + x +"'> _ </span>";
        }
        return randomCharacterArray;
    }

    var randomCharacterArr = makeNewGame();
    var lettersLeft = randomCharacterArr.length;


    document.onkeyup = function(event) {
        userChoice = event.key;
        console.log(lettersLeft);
        if(lettersGuessed.indexOf(userChoice) < 0){

            if (event.keyCode >= 65 && event.keyCode <= 90) {

                 lettersGuessed += userChoice;
                var lettersGuessedDiv = document.getElementById("lettersGuessed");
                lettersGuessedDiv.textContent = lettersGuessed;

                if(randomCharacterArr.indexOf(userChoice) > -1 ){
                    var pos = 0;
                    var i = -1;
                    while (pos != -1) {
                        pos = randomCharacterArr.indexOf(userChoice, i + 1);
                        i = pos;
                        var letterDiv = document.getElementById("letter_" + i);
                        if(letterDiv){
                            letterDiv.textContent = userChoice;
                            lettersLeft--;
                        }
                    }
                   
                    // handle win

                    if(lettersLeft === 0){
                        randomCharacterArr = makeNewGame();
                        lettersLeft = randomCharacterArr.length;
                        wins++;
                        var winsCount = document.getElementById("wins");
                        winsCount.textContent = wins;
                        alert("you win");
                    }


                } else {
                    if(lives === 0){                    
                        randomCharacterArr = makeNewGame();
                        lettersLeft = randomCharacterArr.length;
                        losses++;
                        var lossesCount = document.getElementById("losses");
                        lossesCount.textContent = losses;
                    }
                    lives--;
                    livesLeft.textContent = lives;
                }


               
                


                console.log("This is a letter");
            } else {
                console.log("This is NOT a letter");
            }
        }

}








// var officeCharacters = ["michael scott", "pam beesly", "jim halpert", "dwight schrute",
// "stanley hudson", "kevin malone", "angela martin", "phylis vance", "bob vance of vance refrigeration",
// "meredith palmer", "creed bratton", "oscar martinez", "ryan howard", "kelly kapoor", "andy bernard",
// "toby flenderson", "darryl philbin", "moes", "jan levinson", "david wallace", "robert california",
// "holly flax", "todd packer"];