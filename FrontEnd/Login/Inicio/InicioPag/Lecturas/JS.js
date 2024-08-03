document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'TU_CLAVE_API'; // Reemplaza con tu clave de API
    const volumeId = 'ID_DEL_LIBRO'; // Reemplaza con el ID del libro seleccionado
    const url = `https://www.googleapis.com/books/v1/volumes/${volumeId}?key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const libro = data.volumeInfo;
            document.getElementById('imagen-libro').src = libro.imageLinks.thumbnail;
            document.getElementById('titulo-libro').textContent = libro.title;
            document.getElementById('autor-libro').textContent = libro.authors.join(', ');
            document.getElementById('descripcion-libro').textContent = libro.description;
            
            // Asumiendo que hay una URL para leer el libro
            document.getElementById('lectura-libro').src = libro.previewLink;
        })
        .catch(error => console.error('Error al obtener los datos del libro:', error));
});
