const guessInputTag = document.querySelector(".guess_input");
const submitButtonTag = document.querySelector(".submit_button");
const previousGuessesTag = document.querySelector(".previous_guesses");
const remainingGuessesTag = document.querySelector(".remaining_guesses");
const gameRestart = document.querySelector(".game_restart");
const gameOutput = document.querySelector(".game_output");
let guessInputValue;
let remainingGuesses = 10;
let previousGuesses = "";

const guessAnswer = Math.floor(Math.random() * 101);
// console.log("Answer", guessAnswer);

remainingGuessesTag.textContent = remainingGuesses;

const inputChange = (message) => {
  gameOutput.textContent = message;
  remainingGuesses--;
  remainingGuessesTag.textContent = remainingGuesses;
  guessInputTag.value = "";
  previousGuesses = `${previousGuesses} ${guessInputValue}`;
  previousGuessesTag.textContent = previousGuesses;
};
submitButtonTag.addEventListener("click", (e) => {
  e.preventDefault();
  guessInputValue = guessInputTag.value;
  if (Number(guessInputValue) < 1 || Number(guessInputValue) > 100) {
    return alert("Please enter guess value between 1 and 100");
  } else if (!Number(guessInputValue)) {
    return alert("Please enter a valid guess number");
  }
  if (remainingGuesses > 1) {
    guessInputValue = Number(guessInputValue);
    if (guessInputValue < guessAnswer) {
      inputChange("Too Low! Try Again!");
    } else if (guessInputValue > guessAnswer) {
      inputChange("Too High! Try Again!");
    } else {
      gameRestart.style.opacity = "1";
      guessInputTag.disabled = true;
      inputChange("You guessed correctly");
    }
  } else {
    gameRestart.style.opacity = "1";
    guessInputTag.disabled = true;
    inputChange(`Game over! Number was ${guessAnswer}`);

    //   gamerestart.classList.remove("hidden");
  }
  guessInputTag.focus();
});
