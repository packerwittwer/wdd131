import recipes from './recipes.mjs'

function getRecipe(array) {
    const arrayLength = array.length
    const randomNum = Math.floor(Math.random()*arrayLength)
    return array[randomNum]
}

function tagsTemplate(tags) {
    let tagElement = '';
    tags.forEach(tag => {
        tagElement += `<p class='category'>${tag}</p>`
    });

    return tagElement;
}

function ratingTemplate(rating) {
    let ratingList = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"`

    for (let i = 1; i < 5; i++) {
        if (i < rating) {
             ratingList += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            ratingList += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }

    return ratingList;
}

function recipeTemplate(recipe) {
    return `<section class="recipes">
            <img src="${recipe.image}" alt="entree">
            <div class="recipe-info">
                ${tagsTemplate(recipe.tags)}
                <h2>${recipe.name}</h2>
                <p class="recipe__ratings">
                    <span
                        ${ratingTemplate(recipe.rating)}
                    </span>
                </p>
                <p class="description">${recipe.description}</p>
            </div>
        </section>`
}

let randomRecipe = getRecipe(recipes);
let recipeBox = document.getElementById('recipes');
recipeBox.innerHTML = recipeTemplate(randomRecipe);

let searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function(event) {
    let searchText = document.getElementById('search-bar').value.toLowerCase();
    filterRecipes(searchText);
})

function filterRecipes(query) {
    let filteredRecipes = recipes.filter(recipe => recipe.description.toLowerCase().includes(query) ||
    recipe.name.toLowerCase().includes(query) ||
    recipe.tagElement.toLowerCase().includes(query) ||
    recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query)));

    filteredRecipes.sort();
    
    return filteredRecipes;
}