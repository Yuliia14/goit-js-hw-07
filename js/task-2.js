const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

console.log(ingredientsList);

const ingredientsListCreator = ingredients.map((item) => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.textContent = item;

  return ingredientsListItem;
});
ingredientsList.append(...ingredientsListCreator);
