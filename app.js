const apiKey = '14a96f3eeb7242fdb189b3560d91cd49'; // Reemplaza con tu clave de API de Spoonacular

// Función para cargar recetas populares
function cargarRecetas() {
  fetch(`https://api.spoonacular.com/recipes/random?number=6&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => mostrarRecetas(data.recipes))
    .catch(error => console.error('Error al cargar recetas:', error));
}

// Función para mostrar las recetas
function mostrarRecetas(recetas) {
  const recetasLista = document.getElementById('recetas-lista');
  recetasLista.innerHTML = ''; // Limpiar la lista antes de agregar nuevas recetas

  recetas.forEach(receta => {
    const recetaElemento = document.createElement('div');
    recetaElemento.classList.add('receta');
    recetaElemento.innerHTML = `
      <img src="${receta.image}" alt="${receta.title}">
      <h3>${receta.title}</h3>
      <a href="detalle.html?id=${receta.id}">Ver receta</a>
    `;
    recetasLista.appendChild(recetaElemento);
  });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarRecetas);