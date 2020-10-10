const inputEl = document.querySelector("#controls input");
const boxesContainerEl = document.querySelector("#boxes");
const renderButtonEl = document.querySelector('[data-action="render"]');
const destroyButtonEl = document.querySelector('[data-action="destroy"]');

renderButtonEl.addEventListener("click", getAmount);

let amount = inputEl.value;

function getAmount() {
    let amount = inputEl.value;
    createBoxes(amount);
}

function createBoxes(amount) { 
    let firstSize = 30;
    
    for (let i = 0; i < amount; i += 1) {
        let size = firstSize + i * 10;
        let div = document.createElement("div");
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)}`;

        boxesContainerEl.appendChild(div);
    }  
}

destroyButtonEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
    boxesContainerEl.innerHTML = ' ';
}