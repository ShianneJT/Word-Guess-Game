// setup
let wins = 0;
let losses = 0;
let lives = 5;
let lettersArray = [];

$("#newGameBtn").hide();
$("#gameContainer").hide();
$("#wins").html("<span>Wins: " + wins + "</span>");
$("#losses").html("<span>Losses: " + losses + "</span>");
$("#livesLeft").html("<span>Lives: " + lives + "</span>");

// characters
const officeCharacters = ["michael scott", "pam beesly", "jim halpert", "dwight schrute",
  "stanley hudson", "kevin malone", "angela martin", "phylis vance",
  "meredith palmer", "creed bratton", "oscar martinez", "ryan howard", "kelly kapoor", "andy bernard",
  "toby flenderson", "darryl philbin", "moes", "jan levinson", "david wallace", "robert california",
  "holly flax", "todd packer", "bob vance of vance refrigeration"];

// grab random character
let randomCharacter = officeCharacters[Math.floor(Math.random() * officeCharacters.length)];
randomCharacter = randomCharacter.toUpperCase();
console.log("Random character: " + randomCharacter);

// create alphabet buttons
const createButtons = () => {
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(65 + i);

    let letterButton = $("<button onclick='this.disabled = true;'>");
    letterButton.text(char);
    letterButton.val(char);
    letterButton.addClass("btn btn-primary letterBtn");

    $("#alphabetContainer").append($(letterButton));
  };
};

const displayCharacter = () => {
  // display the random character to the dom with letters hidden
  const hiddenWordDisplay = randomCharacter.split("");

  for (let i = 0; i < hiddenWordDisplay.length; i++) {
    if (hiddenWordDisplay[i] === " ") {
      $("#wordContainer").append("<span id='space'> - </span>");
    } else {
      $("#wordContainer").append("<span id='letter_" + i + "'> _ </span>");
    };
  };
  console.log('hidden word display: ' + hiddenWordDisplay);
};

// create an array of letters from character
const letters = randomCharacter.split("");
const lettersFiltered = letters.filter(letter => letter.trim().length > 0);
let lettersRemaining = lettersFiltered.length;

// handle button click
$("#startBtn").click(function () {
  $("#startBtn").hide();
  $("#gameContainer").show();
  createButtons();
  displayCharacter();

  $(".letterBtn").click(function () {

    let guess = $(this).val();

    if (letters.indexOf(guess) !== -1) {
      let pos = 0;
      let i = -1;
      while (pos !== -1) {
        pos = letters.indexOf(guess, i + 1);
        i = pos;

        let letter = $("#letter_" + i);

        if (letter !== " - " && pos !== -1) {
          $(letter).replaceWith(guess);
          lettersRemaining--;
          if (lettersRemaining == 0) {
          };
        };
      };
    } else {
      lives--;
      $("#livesLeft").html("<span>Lives: " + lives + "</span>");
      if (lives === 0) {
      };
    };
    checkWin();
  });
});

checkWin = () => {
  if (lives == 0) {
    $("#winnerModal").modal("show");
    $("#won").hide();
    console.log("you lost...")
    losses++;
    $("#losses").html("<span>Losses: " + losses + "</span>");
    $("#startBtn").show();
    //$("#alphabetContainer").hide();
  } else if (lives > 0 && lettersRemaining == 0) {
    $("#winnerModal").modal("show");
    $("#lost").hide();

    console.log("you won...")
    // alert("you won...")
    wins++;
    $("#wins").html("<span>Wins: " + wins + "</span>");
    $("#alphabetContainer").hide();
  }
  // new game
  // reset stats
}
