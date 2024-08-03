document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-button');
    const closeButton = document.getElementById('close-button');
    const messageContainer = document.getElementById('message');

    function guardarInformacion() {
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validar campos
        if (!username || !email || !password) {
            showMessage('Todos los campos son obligatorios.', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showMessage('Correo electrónico no válido.', 'error');
            return;
        }


        // Aquí puedes hacer una llamada a tu backend para guardar la información
        // Es ejemplo, creo jaja ya no se que estoy asiendo :
        // fetch('/guardarPerfil', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username, email, password })
        // })
        // .then(response => response.json())
        // .then(data => showMessage('Información guardada exitosamente.', 'success'))
        // .catch(error => showMessage('Error al guardar la información.', 'error'));

        console.log('Información guardada:', { username, email, password });
        showMessage('Información guardada exitosamente.', 'success');
    }

    function showMessage(message, type) {
        messageContainer.textContent = message;
        messageContainer.className = `message ${type}`;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function cerrarSeccion() {
        window.location.href = '/Inicio/InicioPag'; // Redirige a la página principal o a donde desees
    }

    saveButton.addEventListener('click', guardarInformacion);
    closeButton.addEventListener('click', cerrarSeccion);

});