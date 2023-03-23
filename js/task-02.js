const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredientsItem => {
  const ingredient = document.createElement('li')
  ingredient.textContent = ingredientsItem
  ingredient.classList.add('item')
  ingredientsList.append(ingredient)
})
