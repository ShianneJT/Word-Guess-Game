let wins;
let losses;
let lives = 10;

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
