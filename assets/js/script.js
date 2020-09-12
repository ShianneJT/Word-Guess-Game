let wins;
let losses;
let lives = 10;

// characters
const officeCharacters = ["michael scott", "pam beesly", "jim halpert", "dwight schrute",
  "stanley hudson", "kevin malone", "angela martin", "phylis vance",
  "meredith palmer", "creed bratton", "oscar martinez", "ryan howard", "kelly kapoor", "andy bernard",
  "toby flenderson", "darryl philbin", "moes", "jan levinson", "david wallace", "robert california",
  "holly flax", "todd packer", "bob vance of vance refrigeration"];
console.log(officeCharacters);

const CreateButtons = () => {
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(65 + i);

    let letterButton = $("<button onclick='this.disabled = true;'>");
    letterButton.text(char);
    letterButton.val(char);
    letterButton.addClass("btn btn-primary letterBtn");

    $("#alphabetContainer").append($(letterButton));
    console.log(letterButton.val())
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
const letterArray = letters.filter(letter => letter.trim().length > 0);
//console.log("letterArray: " + letterArray);

// handle button click
$(".letterBtn").click(function () {

  let guess = $(this).val();
  console.log("Guess: " + guess);

  if (letters.indexOf(guess) !== -1) {
    let pos = 0;
    let i = -1;
    while (pos !== -1) {
      pos = letters.indexOf(guess, i + 1);
      i = pos;

      let letter = $("#letter_" + i);

      if (letter !== " - "){
        $(letter).replaceWith(guess);

      };






    };
  }
});








