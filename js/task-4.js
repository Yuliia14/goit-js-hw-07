const currentValue = document.querySelector("#value");

const valueButtonDecrement = document.querySelector(
  '[data-action="decrement"]'
);
const valueButtonIncrement = document.querySelector(
  '[data-action="increment"]'
);

let counterValue = 0;

console.log(valueButtonDecrement);
console.log(valueButtonIncrement);

const valueDecrease = () => {
  counterValue -= 1;
  currentValue.textContent = counterValue;

};
const valueIncrease = () => {
  counterValue += 1;
  currentValue.textContent = counterValue;
};

valueButtonDecrement.addEventListener("click", valueDecrease);

valueButtonIncrement.addEventListener("click", valueIncrease);



// const valueDecrease = () => {
//   counterValue += Number(valueButtonDecrement.textContent);
//   currentValue.textContent = counterValue;

// };
// const valueIncrease = () => {
//   counterValue += Number(valueButtonIncrement.textContent);
//   currentValue.textContent = counterValue;
// };

// valueButtonDecrement.addEventListener("click", valueDecrease);

// valueButtonIncrement.addEventListener("click", valueIncrease);


