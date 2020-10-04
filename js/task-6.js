const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList = "valid";
  } else if (inputEl.value.length === 0) {
    inputEl.classList = " ";
  } else {
    inputEl.classList = "invalid";
  }
});
