// setup
let wins = 0;
let losses = 0;
let lives = 10;
let lettersArray = [];
let gameWon = false;

$("#newGameBtn").hide();
$("#gameContainer").hide();
$("#wins").html("<span>Wins: " + wins + "</span>");
$("#losses").html("<span>Losses: " + losses + "</span>");
$("#livesLeft").html("<span>Lives Remaining: " + lives + "</span>");


const startGame = () => {
  $("#startBtn").hide();
  $("#gameContainer div").empty();

  const officeCharacters = ["Michael Scott", "Pam Beesly", "Jim Halpert", "Dwight Schrute",
    "Stanley Hudson", "Kevin Malone", "Angela Martin", "Phyllis Vance",
    "Meredith Palmer", "Creed Bratton", "Oscar Martinez", "Ryan Howard", "Kelly Kapoor", "Andy Bernard",
    "Toby Flenderson", "Darryl Philbin", "Jan Levinson", "David Wallace", "Robert California",
    "Holly Flax", "Todd Packer"]; //"Bob Vance of Vance Refrigeration, Mose"

  // grab random character
  let randomCharacterName = officeCharacters[Math.floor(Math.random() * officeCharacters.length)];
  let randomCharacter = randomCharacterName.toUpperCase();

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
  };

  // create an array of letters from character
  const letters = randomCharacter.split("");
  const lettersFiltered = letters.filter(letter => letter.trim().length > 0);
  let lettersRemaining = lettersFiltered.length;


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
      $("#livesLeft").html("<span>Lives Remaining: " + lives + "</span>");
      if (lives === 0) {
      };
    };
    checkWin();
  });

  checkWin = () => {
    if (lives == 0) {
      losses++;
      gameWon = false;
      $("#losses").html("<span>Losses: " + losses + "</span>");
      launchModal();
    } else if (lives > 0 && lettersRemaining == 0) {
      wins++;
      gameWon = true;
      $("#wins").html("<span>Wins: " + wins + "</span>");
      launchModal();
    };
  };

  const launchModal = () => {
    displayGifs();

    if (gameWon) {
      $(".modal-title").text("You got it!");
      $(".newGame").text("Play Again?");
      $("#gameOverModal").modal("show");
    } else {
      $(".modal-title").text("Sorry! The character was " + randomCharacterName);
      $(".newGame").text("Try Again?");
      $("#gameOverModal").modal("show");
    };
  };

  const displayGifs = () => {
    $("#modalBody").empty();

    //
    //
    //

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + randomCharacterName + "&api_key=" + giphyKey;
    let gifNum = Math.floor(Math.random() * 6);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (res) {
      let results = res.data;

      let gifDiv = $("<div>");
      let charGif = $("<img>");
      charGif.attr("src", results[gifNum].images.original.url);

      gifDiv.append(charGif);
      $("#modalBody").append(gifDiv);
    });
  };
};

// handle button click
$(".startBtn, .playAgain").click(function () {
  lives = 10;
  $("#livesLeft").html("<span>Lives Remaining: " + lives + "</span>");
  startGame();
});

// characters
// const officeCharacters = ["michael scott", "pam beesly", "jim halpert", "dwight schrute",
//   "stanley hudson", "kevin malone", "angela martin", "phyllis vance",
//   "meredith palmer", "creed bratton", "oscar martinez", "ryan howard", "kelly kapoor", "andy bernard",
//   "toby flenderson", "darryl philbin", "moes", "jan levinson", "david wallace", "robert california",
//   "holly flax", "todd packer", "bob vance of vance refrigeration"];
