document.addEventListener('DOMContentLoaded', () => {
    const categoriasContainer = document.getElementById('categorias-container');

    // Lista de categorías (puedes modificar esto según tus necesidades)
    const categorias = [
        'Ficción',
        'No Ficción',
        'Ciencia',
        'Historia',
        'Biografías',
        'Misterio',
        'Romántica',
        'Ciencia Ficción',
        'Fantasía'
    ];

    // Función para crear botones de categoría
    function crearBotonCategoria(categoria) {
        const boton = document.createElement('button');
        boton.textContent = categoria;
        boton.className = 'categoria-button';
        boton.addEventListener('click', () => {
            // Llamada a la API de Google para libros basada en la categoría seleccionada
            buscarLibros(categoria);
        });
        return boton;
    }

    // Añadir los botones de categoría al contenedor
    categorias.forEach(categoria => {
        const boton = crearBotonCategoria(categoria);
        categoriasContainer.appendChild(boton);
    });

    // Función para buscar libros en la API de Google
    function buscarLibros(categoria) {
        const apiKey = 'TU_API_KEY'; // Reemplaza con tu clave de API de Google
        const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${categoria}&key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Muestra los resultados en la consola (puedes mostrarlo en la interfaz según sea necesario)
            })
            .catch(error => console.error('Error:', error));
    }
});
