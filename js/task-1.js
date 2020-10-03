const categoriesList = document.querySelectorAll("li.item");

console.log(`В списке ${categoriesList.length} категории.`);

categoriesList.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${item.lastElementChild.childElementCount}`
  );
});
