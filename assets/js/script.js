let wins = 0;
let losses = 0;
let lives = 5;
let lettersArray = [];

// setup
$("#wins").html("<span>Wins: " + wins + "</span>");
$("#losses").html("<span>Losses: " + losses + "</span>");
$("#livesLeft").html("<span>Lives: " + lives + "</span>");
//$("#livesLeft").html("<span>Letters Remaining: " + lives + "</span>");


// characters
const officeCharacters = ["michael scott", "pam beesly", "jim halpert", "dwight schrute",
  "stanley hudson", "kevin malone", "angela martin", "phylis vance",
  "meredith palmer", "creed bratton", "oscar martinez", "ryan howard", "kelly kapoor", "andy bernard",
  "toby flenderson", "darryl philbin", "moes", "jan levinson", "david wallace", "robert california",
  "holly flax", "todd packer", "bob vance of vance refrigeration"];
//console.log(officeCharacters);

const CreateButtons = () => {
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(65 + i);

    let letterButton = $("<button onclick='this.disabled = true;'>");
    letterButton.text(char);
    letterButton.val(char);
    letterButton.addClass("btn btn-primary letterBtn");

    $("#alphabetContainer").append($(letterButton));
    //console.log(letterButton.val())
  }
}

CreateButtons();

// grab random character
let randomCharacter = officeCharacters[Math.floor(Math.random() * officeCharacters.length)];
randomCharacter = randomCharacter.toUpperCase();
console.log("Random character: " + randomCharacter);

// display the random character to the dom with letters hidden
const hiddenWordDisplay = randomCharacter.split("");

for (let i = 0; i < hiddenWordDisplay.length; i++) {
  if (hiddenWordDisplay[i] === " ") {
    $("#wordContainer").append("<span id='space'> - </span>");

  } else {
    $("#wordContainer").append("<span id='letter_" + i + "'> _ </span>");
  }
}

console.log('hidden word display: ' + hiddenWordDisplay);

// create an array of letters from character
const letters = randomCharacter.split("");
//const letterArray = letters.filter(letter => letter.trim().length > 0);
const lettersFiltered = letters.filter(letter => letter.trim().length > 0);
console.log(lettersFiltered.length);
let lettersRemaining = lettersFiltered.length;
//$("#lettersLeft").append(lettersRemaining);


//console.log("letterArray: " + letterArray);

// handle button click
$(".letterBtn").click(function () {

  let guess = $(this).val();
  console.log("Guess: " + guess);
  console.log("wtf is this: " + letters.indexOf(guess));

  if (letters.indexOf(guess) !== -1) {
    let pos = 0;
    let i = -1;
    while (pos !== -1) {
      pos = letters.indexOf(guess, i + 1);
      console.log("first pos: " + pos)
      i = pos;
      console.log("pos: " + pos)
      console.log("i: " + i);

      let letter = $("#letter_" + i);

      if (letter !== " - " && pos !== -1){
        $(letter).replaceWith(guess);
        lettersRemaining--;
        if (lettersRemaining == 0) {
          // checkWin();
        }
        //$("#lettersLeft").html("<span>Letters Left: " + lettersRemaining + "</span>");

        console.log(lettersRemaining)
      }
      // else {
      //   lives--;
      //   $("#livesLeft").html("<span>Lives: " + lives + "</span>");
      // }
    };
  } else {
      lives--;
      $("#livesLeft").html("<span>Lives: " + lives + "</span>");
      if (lives === 0) {
        // checkWin();
      }
      // checkWin();
  }
  checkWin();
});

checkWin = () => {
  if (lives == 0) {
    alert("you lost...")
    console.log("you lost...")
    losses++;
    $("#losses").html("<span>Losses: " + losses + "</span>");
    $("#alphabetContainer").hide();
  } else if  (lives > 0 && lettersRemaining == 0) {
    console.log("you won...")
    alert("you won...")
    wins++;
    $("#wins").html("<span>Wins: " + wins + "</span>");
    $("#alphabetContainer").hide();
  }
}








