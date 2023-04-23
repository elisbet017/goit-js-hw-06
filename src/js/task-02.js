const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredientsArr = [];

const listIngredientsRef = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const ingredientRef = document.createElement("li");
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add("item");
  listIngredientsArr.push(ingredientRef);
});

listIngredientsRef.append(...listIngredientsArr);
