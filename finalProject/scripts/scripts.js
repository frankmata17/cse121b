document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', searchRecipes);
});

async function searchRecipes() {
    const ingredientInput = document.getElementById('ingredientInput');
    const searchTerm = ingredientInput.value;

    if (!searchTerm) {
        alert('Please enter an ingredient to search for recipes.');
        return;
    }

    const apiKey = '36e589f358004810bbd2a8a3eb3c32fe';
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const recipes = await response.json();
        displayRecipes(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    const recipeListContainer = document.getElementById('recipeList');
    recipeListContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const title = document.createElement('h3');
        title.textContent = recipe.title;

        const image = document.createElement('img');
        image.src = recipe.image;
        image.alt = recipe.title;

        const ingredientsList = document.createElement('ul');
        recipe.missedIngredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient.original;
            ingredientsList.appendChild(listItem);
        });

        recipeCard.appendChild(title);
        recipeCard.appendChild(image);
        recipeCard.appendChild(ingredientsList);

        recipeListContainer.appendChild(recipeCard);
    });
}
