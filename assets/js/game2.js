// Create a list of words
// User presses a letter
// It checks to see if that is correct
// If correct it returns the word with the correct letters and underscores
// ... and minuses from the letters remaining
// If incorrect it minuses one from their guesses remaining and adds the letter to a letters guessed div
// When no letters remain add one to the wins and start the game over

// Start game
// Handle button click
// compare click to character
// deduct from lives
// check for win

  // const officeCharacters = ["michael", "pam", "jim", "dwight", "stanley", "kevin", "angela",
  // "phylis", "meredith", "creed", "oscar", "ryan", "kelly", "andy", "toby", "darryl",
  // "moes", "jan", "david", "robert", "holly"];
  var officeCharacters = ["michael scott", "pam beesly", "jim halpert", "dwight schrute",
    "stanley hudson", "kevin malone", "angela martin", "phylis vance",
    "meredith palmer", "creed bratton", "oscar martinez", "ryan howard", "kelly kapoor", "andy bernard",
    "toby flenderson", "darryl philbin", "moes", "jan levinson", "david wallace", "robert california",
    "holly flax", "todd packer", "bob vance of vance refrigeration"];
  console.log(officeCharacters);

  const randomCharacter = officeCharacters[Math.floor(Math.random() * officeCharacters.length)];
  console.log(randomCharacter);

// Game Stats
  let lives = 10;
  let losses;
  let wins;
  letterArray = randomCharacter.split(' ').join('');
  lettersLeft = letterArray.length;

// Creates alphabet buttons
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(97 + i);
    char = char.toUpperCase();

    let letterButton = $("<button onclick='this.disabled = true;'>");
    letterButton.text(char);
    letterButton.addClass("btn btn-primary letterBtn");
    letterButton.val(char);

    $("#alphabetContainer").append($(letterButton));
  }

// Displays random character to DOM

  let letterDisplay = randomCharacter.split("");

  for (let i = 0; i < letterDisplay.length; i++) {
    if (letterDisplay[i] === " ") {
      wordContainer.innerHTML += "<span id='letter_" + i +"'>***</span>";
    } else {
      wordContainer.innerHTML += "<span id='letter_" + i + "'> _ </span>";
    }
  }

  $(".letterBtn").click(function () {
    // console.log("Click!!!! " + $(this).val());
    $(this).addClass('clicked');
    // letterArray = randomCharacter.split(' ').join('');
    // console.log("letter array no spaces: " + letterArray);

    let guess = $(this).val();
    guess = guess.toLowerCase();
    console.log('Guess: ' + guess);
    console.log("Index of guess: " + letterArray.indexOf(guess));
    console.log("Letter array: " + letterArray);
    console.log("lives: " + lives);
    console.log("letters left: " + lettersLeft);

    // if (letterArray.indexOf(guess) > -1) {
    //   console.log("Yep!")
    // } else {
    //   console.log("nawp");
    // }

    for (let i = 0; i < lettersLeft.length; i++) {
      if (letterArray.indexOf(guess) > -1) {
        letterArray.splice(guess);
        console.log('fart' + letterArray)
      }

    }


  })




    // if (letterArray.indexOf(guess) > -1) {
    //   var pos = 0;
    //   var i = -1;
    //   while (pos != -1) {
    //     pos = letterArray.indexOf(guess, i + 1)
    //     i = pos;

    //     var guessBlah = document.getElementById("letter_" + i);

    //     if (guessBlah) {
    //       lettersLeft--;
    //       console.log("letters left " + lettersLeft)
    //     }
    //     else {
    //       lives--;
    //       console.log("lives: " + lives);
    //     }

    //   }
  //}

    //   if (lettersLeft === 0 ) {
    //     //reset game
    //     wins++;
    //     console.log('Winner winner chicken dinner');
    //   }

    // } else {
    //   if (lives === 0) {
    //     console.log('You lose :(');
    //     losses++;
    //   }
    // }


// decrement lives
// check lives

    // });






// // Start new game - Resets lives
//     function makeNewGame() {
//         lives = 10;
//         lettersGuessed = "";
//         var randomCharacter = officeCharacters[Math.floor(Math.random() * officeCharacters.length)];
//         var randomWordDiv = document.getElementById("randomWord");
//         var lettersGuessedDiv = document.getElementById("lettersGuessed");
//         lettersGuessedDiv.textContent = "";
//         randomWordDiv.innerHTML = "";

//         livesLeft.textContent = lives;

//         var randomCharacterArray = randomCharacter.split("");       // .split creates an array of the individual characters of the randomCharacter var
//         for (var x = 0; x < randomCharacterArray.length; x++) {
//            // console.log(randomCharacterArray[x]);
//            randomWordDiv.innerHTML += "<span id='letter_" + x +"'> _ </span>";
//         }
//         return randomCharacterArray;
//     }

//     var randomCharacterArr = makeNewGame();
//     var lettersLeft = randomCharacterArr.length;

// //  This executes when the user presses a key and assigns it to userChoice
//     document.onkeyup = function(event) {
//         userChoice = event.key;

// //  This checks to see if the userChoice/letter was already used and if not it continues with the next if statement
//         if(lettersGuessed.indexOf(userChoice) < 0){
// //  This checks to make sure the user entered a lowercase letter then adds the userChoice to the lettersGuessed string and HTML
//             if (event.keyCode >= 65 && event.keyCode <= 90) {
//                 lettersGuessed += userChoice;
//                 var lettersGuessedDiv = document.getElementById("lettersGuessed");
//                 lettersGuessedDiv.textContent = lettersGuessed;lettersGuessed

// //  If userChoice exists in randomCharacter
//                 if(randomCharacterArr.indexOf(userChoice) > -1 ){
//                     var pos = 0;
//                     var i = -1;
//                     while (pos != -1) {
//                         pos = randomCharacterArr.indexOf(userChoice, i + 1);
//                         i = pos;
//                         var letterDiv = document.getElementById("letter_" + i);
//                         if(letterDiv){
//                             letterDiv.textContent = userChoice;
//                             lettersLeft--;
//                         }
//                     }
// //  If there are no more letters left, the user has won the game and the game starts over
//                     if(lettersLeft === 0){
//                         randomCharacterArr = makeNewGame();
//                         lettersLeft = randomCharacterArr.length;
//                         wins++;
//                         var winsCount = document.getElementById("wins");
//                         winsCount.textContent = wins;
//                         alert('You win!')
//                     }

// //  If there are no more lives left, the user has lost the game and the game starts over
//                 } else {
//                     if(lives === 0){
//                         randomCharacterArr = makeNewGame();
//                         lettersLeft = randomCharacterArr.length;
//                         losses++;
//                         var lossesCount = document.getElementById("losses");
//                         lossesCount.textContent = losses;
//                         alert('You lost :( Type a letter to play again.')
//                         // The lives drops to 9 after a loss and this is my workaround for now
//                         lives++
//                     }
//                     lives--;
//                     livesLeft.textContent = lives;
//                 }
//             } else {
//                 alert("Enter a letter");
//             }
//         }
// }

// var officeCharacters = ["michael scott", "pam beesly", "jim halpert", "dwight schrute",
// "stanley hudson", "kevin malone", "angela martin", "phylis vance",
// "meredith palmer", "creed bratton", "oscar martinez", "ryan howard", "kelly kapoor", "andy bernard",
// "toby flenderson", "darryl philbin", "moes", "jan levinson", "david wallace", "robert california",
// "holly flax", "todd packer", "bob vance of vance refrigeration"];
