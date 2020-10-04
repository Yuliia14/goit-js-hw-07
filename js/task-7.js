const fontSizeEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

const fontSizeChange = function () {
  spanText.style.fontSize = `${fontSize.value}px`;
};

fontSizeRange.addEventListener("input", fontSizeChange);
