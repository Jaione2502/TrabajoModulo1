const API_KEY = '14a96f3eeb7242fdb189b3560d91cd49'; // Sustituye con tu clave de API de Spoonacular
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

async function searchRecipes() {
  const searchQuery = document.getElementById('searchInput').value;
  const url = `${BASE_URL}?query=${searchQuery}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const recipesContainer = document.getElementById('recipesContainer');
    recipesContainer.innerHTML = ''; // Limpiar resultados anteriores

    if (data.results && data.results.length > 0) {
      data.results.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
          <img src="https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg" alt="${recipe.title}">
          <h3>${recipe.title}</h3>
          <p>${recipe.summary ? recipe.summary : 'No hay descripción disponible.'}</p>
          <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">Ver receta</a>
        `;

        recipesContainer.appendChild(recipeCard);
      });
    } else {
      recipesContainer.innerHTML = '<p>No se encontraron recetas.</p>';
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}