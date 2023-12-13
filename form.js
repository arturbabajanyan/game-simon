const formEl = document.getElementById("connect-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const nickname = document.getElementById("nickname");
const playersList = [];

class Player {
    constructor(firstName, lastName, nickname) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.nickname = nickname;
      this.score = 0;
    }
  }

const minLength = 3;
 
const textAreaValidation = function(input, minLength) {
    if (input.value.length < minLength) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
 
    if (input.classList.contains('valid')) {
        return true;
    } else {
        return false;
    }
};

firstName.addEventListener("change", () => textAreaValidation(firstName, minLength));
lastName.addEventListener("change", () => textAreaValidation(lastName, minLength));
nickname.addEventListener("change", () => textAreaValidation(nickname, minLength));
 
formEl.addEventListener('submit', (e) => {
    if (textAreaValidation(firstName, minLength) && textAreaValidation(lastName, minLength) && textAreaValidation(nickname, minLength)) {
        playersList[playersList.length] = new Player(firstName.value, lastName.value, nickname.value);
        localStorage.setItem(`player${playersList.length}`, JSON.stringify(playersList[playersList.length - 1]));
        // e.preventDefault();
    } else {
        textAreaValidation(firstName, minLength);
        textAreaValidation(lastName, minLength);
        textAreaValidation(nickname, minLength);
        e.preventDefault();
    }
})