// Configuración de la clave de la API de Spoonacular
const apiKey = '14a96f3eeb7242fdb189b3560d91cd49'; // Reemplaza con tu clave de API de Spoonacular
const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`;

document.addEventListener('DOMContentLoaded', () => {
    obtenerRecetas();
});

async function obtenerRecetas() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        mostrarRecetas(data.recipes);
    } catch (error) {
        console.error('Error al obtener las recetas:', error);
    }
}

function mostrarRecetas(recetas) {
    const container = document.getElementById('recipe-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas recetas

    recetas.forEach(receta => {
        const recetaCard = document.createElement('div');
        recetaCard.classList.add('recipe-card');
        
        recetaCard.innerHTML = `
            <img src="https://spoonacular.com/recipeImages/${receta.id}-312x231.jpg" alt="${receta.title}">
            <h3>${receta.title}</h3>
            <p>${receta.instructions ? receta.instructions.substring(0, 100) + '...' : 'Instrucciones no disponibles'}</p>
            <a href="detalle.html?id=${receta.id}">Ver receta completa</a>
        `;
        
        container.appendChild(recetaCard);
    });
}
