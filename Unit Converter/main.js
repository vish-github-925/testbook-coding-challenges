const feetInputTag = document.getElementById("feet_input");
const submitButton = document.querySelector(".submit");
const outputTag = document.querySelector(".output");
let feetInputValue;
let cmOutputValue;
const feetToCm = 30.48;
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  feetInputValue = feetInputTag.value;

  if (feetInputValue === "") {
    return (outputTag.textContent = `Please enter a feet value`);
  } else {
    feetInputValue = Number(feetInputTag.value);

    if (!feetInputValue) {
      return (outputTag.textContent = `Please enter a valid number`);
    } else if (feetInputValue <= 0) {
      return (outputTag.textContent = `Please enter a feet value > 0`);
    }
  }
  cmOutputValue = feetInputValue * feetToCm;
  outputTag.textContent = `${cmOutputValue} cm`;
});
