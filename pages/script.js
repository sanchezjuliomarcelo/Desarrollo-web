// script.js
document.addEventListener('DOMContentLoaded', () => {
    let recetas = {};

    // Carga el archivo JSON con recetas
    fetch('data/recetas.json')
        .then(response => response.json())
        .then(data => recetas = data)
        .catch(error => console.error('Error cargando recetas:', error));

    // Detecta click en cada tarjeta de receta
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const tituloReceta = card.querySelector('.recipe-title').textContent.trim();

            if (recetas[tituloReceta]) {
                mostrarRecetaModal(tituloReceta, recetas[tituloReceta]);
            } else {
                alert('Receta no encontrada.');
            }
        });
    });

    // Función que llena y muestra el modal
    function mostrarRecetaModal(titulo, receta) {
        document.getElementById('modalRecetaTitulo').textContent = titulo;

        const listaIngredientes = document.getElementById('modalIngredientes');
        listaIngredientes.innerHTML = '';
        receta.ingredientes.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaIngredientes.appendChild(li);
        });

        const listaPreparacion = document.getElementById('modalPreparacion');
        listaPreparacion.innerHTML = '';
        receta.preparacion.forEach(paso => {
            const li = document.createElement('li');
            li.textContent = paso;
            listaPreparacion.appendChild(li);
        });

        const modal = new bootstrap.Modal(document.getElementById('recetaModal'));
        modal.show();
    }
});
