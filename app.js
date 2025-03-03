// Reemplaza esto con tu clave de API de Spoonacular
const apiKey = '14a96f3eeb7242fdb189b3560d91cd49';

async function buscarRecetas() {
    const ingredientes = document.getElementById("ingredients").value;

    if (!ingredientes) {
        alert("Por favor, ingresa algunos ingredientes.");
        return;
    }

    // URL de la API para buscar recetas por ingredientes
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientes}&number=5&apiKey=${apiKey}`;

    try {
        // Hacer la solicitud a la API
        const response = await fetch(url);
        const recetas = await response.json();

        // Mostrar las recetas en la página
        mostrarRecetas(recetas);
    } catch (error) {
        console.error("Error al buscar recetas:", error);
        alert("Hubo un error al buscar las recetas.");
    }
}

function mostrarRecetas(recetas) {
    const recipesContainer = document.getElementById("recipes");

    // Limpiar resultados anteriores
    recipesContainer.innerHTML = "";

    // Si no hay recetas, mostrar mensaje
    if (recetas.length === 0) {
        recipesContainer.innerHTML = "<p>No se encontraron recetas con esos ingredientes.</p>";
        return;
    }

    // Mostrar cada receta
    recetas.forEach(receta => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");

        recipeElement.innerHTML = `
            <div class="recipe-details">
                <img src="${receta.image}" alt="${receta.title}" />
                <div>
                    <h3>${receta.title}</h3>
                     <a href="detalle.html?id=${receta.id}">Ver receta completa</a>
                </div>
            </div>
        `;

        recipesContainer.appendChild(recipeElement);
    });
}
