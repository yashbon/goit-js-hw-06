const numberOfCategories = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${numberOfCategories}\n `);

const categoriesList = [...document.querySelector('#categories').children];
categoriesList.forEach(liItem => console.log(`Category: ${liItem.firstElementChild.textContent}\nCategory: ${liItem.lastElementChild.querySelectorAll('li').length}\n `))
