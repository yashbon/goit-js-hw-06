const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const markup = ingredients.map(ingredientsItem => {
  const ingredient = document.createElement('li');
  ingredient.textContent = ingredientsItem;
  ingredient.classList.add('item');
  return ingredient
})

ingredientsList.append(...markup)
