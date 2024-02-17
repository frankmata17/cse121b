document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const ingredientInput = document.getElementById('ingredientInput');

    searchButton.addEventListener('click', searchRecipes);
    ingredientInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchRecipes();
        }
    });
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
        const instructions = document.createElement('p');
        instructions.textContent = recipe.instructions;

        const additionalInfo = document.createElement('div');
        // Check if preparationMinutes and cookingMinutes exist before displaying them
        if (recipe.preparationMinutes !== undefined) {
            additionalInfo.innerHTML += `<p>Preparation Time: ${recipe.preparationMinutes} minutes</p>`;
        }

        if (recipe.cookingMinutes !== undefined) {
            additionalInfo.innerHTML += `<p>Cooking Time: ${recipe.cookingMinutes} minutes</p>`;
        }

        recipeCard.appendChild(title);
        recipeCard.appendChild(image);
        recipeCard.appendChild(ingredientsList);
        recipeCard.appendChild(instructions);
        recipeCard.appendChild(additionalInfo);

        recipeListContainer.appendChild(recipeCard);
    });
}
