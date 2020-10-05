// const inputEl = document.querySelector("#controls>input");
// const boxesContainerEl = document.querySelector("#boxes");
// const renderButtonEl = document.querySelector('[data-action="render"]');
// const destroyButtonEl = document.querySelector('[data-action="destroy"]');

// renderButtonEl.addEventListener("click", getAmount);
// destroyButtonEl.addEventListener("click", destroyBoxes);

// let amount = inputEl.value;

// function random() {
//   return Math.floor(Math.random() * 256);
// }

// function getAmount() {
//   let amount = inputEl.value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   let startSize = 30;

//   for (let i = 1; i < amount; i += 1) {
//     let size = startSize + i * 10;
//     const boxCreator = document.createElement("div");

//     boxCreator.style.width = size;
//     boxCreator.style.height = size;
//     // boxCreator.style.backgroundColor = blue;
//     //   boxCreator.style.backgroundColor = rgba(${random()},${random()},${random()});
//   }
//   boxesContainerEl.appendChild(boxCreator);
// }
// function destroyBoxes() {
//   boxesContainerEl.innerHTML = " ";
// }
