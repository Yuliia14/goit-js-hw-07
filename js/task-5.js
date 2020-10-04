const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputTextSender = () => {
  output.textContent = input.value.length > 0 ? input.value : "незнакомец";
};

input.addEventListener("input", inputTextSender);
