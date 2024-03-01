let myArr = [];
let isGameFinished = false;
const submitButton = document.querySelector('#subt');
const form = document.querySelector('.form');
const resultSection = document.querySelector('.resultParas');
const guess = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

function playAgain() {
    if (resultSection.querySelector('button') === null) {
        form.removeChild(submitButton);
        let playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "PLAY AGAIN";
        form.appendChild(playAgainBtn);
    }
}

compareGuess = (userNumber) => {
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    if (randomNumber === userNumber) {
        lowOrHi.innerHTML = "<h2>🎉Perfect! You won the game🎉.</h2>";
        isGameFinished = true
        remaining.innerHTML = 0;
        playAgain();
    } else {
        if (remaining.innerHTML === '1') {
            lowOrHi.innerHTML = "You lost ❤️❤️ play again.";
            playAgain();
            remaining.innerHTML = 0;
            return;
        }
        myArr.push(userNumber);
        guess.innerHTML = myArr;
        lowOrHi.textContent = userNumber < randomNumber ? "Too low!" : "Too high!";
        remaining.innerHTML = 10 - myArr.length;
    }
}

function validateUserInput(userInput) {
    switch (true) {
        case isNaN(userInput):
            alert("Enter a valid number");
            break;
        case (userInput < 1 || userInput > 10):
            alert("Enter a number from range 1 (inclusive) to 10 (inclusive)");
            break;
        default:
            compareGuess(userInput);
            break;
    }
}

submitButton.addEventListener('click', function(e){
    e.preventDefault();
    const userGuess = parseInt(document.querySelector('#guessField').value);
    validateUserInput(userGuess);
});
