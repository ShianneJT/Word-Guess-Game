// Variables
// Character
// Character Letter Array
// Letters left

let wins;
let losses;
let lives = 10;
let lettersLeft;


const CreateButtons = () => {
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(65 + i);

    let letterButton = $("<button onclick='this.disabled = true;'>");
    letterButton.text(char);
    letterButton.val(char);
    letterButton.addClass("btn btn-primary letterBtn");

    $("#alphabetContainer").append($(letterButton));
    // console.log(letterButton.val())
  }
}

CreateButtons();

const officeCharacters = ["michael scott", "pam beesly", "jim halpert", "dwight schrute",
"stanley hudson", "kevin malone", "angela martin", "phylis vance",
"meredith palmer", "creed bratton", "oscar martinez", "ryan howard", "kelly kapoor", "andy bernard",
"toby flenderson", "darryl philbin", "moes", "jan levinson", "david wallace", "robert california",
"holly flax", "todd packer", "bob vance of vance refrigeration"];
console.log(officeCharacters);

// grab random character
const randomCharacter = officeCharacters[Math.floor(Math.random() * officeCharacters.length)];
console.log("Random character: " + randomCharacter);



