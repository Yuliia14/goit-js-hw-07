const fontSizeEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

fontSizeEl.addEventListener("input", fontSizeChange);

console.dir(fontSizeEl);

function fontSizeChange(event) {
  spanTextEl.style.fontSize = `${fontSizeEl.value}px`;
}
