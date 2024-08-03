document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'TU_CLAVE_API'; // Reemplaza con tu clave API de Google Books
    const buscarBtn = document.getElementById('buscar-btn');
    const buscarInput = document.getElementById('buscar-autor');
    const listaAutores = document.getElementById('lista-autores');

    buscarBtn.addEventListener('click', () => {
        const query = buscarInput.value;
        buscarAutores(query);
    });

    function buscarAutores(query) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&key=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                mostrarAutores(data.items);
            })
            .catch(error => console.error('Error al obtener los autores:', error));
    }

    function mostrarAutores(items) {
        listaAutores.innerHTML = '';
        if (items && items.length > 0) {
            items.forEach(item => {
                const autor = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Autor desconocido';
                const titulo = item.volumeInfo.title || 'Título desconocido';
                const listItem = document.createElement('li');
                listItem.textContent = `${autor} - ${titulo}`;
                listaAutores.appendChild(listItem);
            });
        } else {
            listaAutores.innerHTML = '<li>No se encontraron autores.</li>';
        }
    }
});
