let counterValue = document.querySelector("#value");

const valueButtonDecrement = document.querySelector(
  '[data-action="decrement"]'
);
const valueButtonIncrement = document.querySelector(
  '[data-action="increment"]'
);
console.log(valueButtonDecrement);
console.log(valueButtonIncrement);

const valueDecrease = () => {
  counterValue.textContent -= 1;
};
const valueIncrease = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

valueButtonDecrement.addEventListener("click", valueDecrease);

valueButtonIncrement.addEventListener("click", valueIncrease);
