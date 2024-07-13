async function getCsrfToken() {
    const response = await fetch('http://127.0.0.1:8000/api/csrf_token/', {
        method: 'GET',
        credentials: 'include'
    });
    //console.log("lol")
    console.log(response.ok)
    if (response.ok) {
        const data = await response.json();
        return data.csrfToken;
    }
    else {
        alert('Invalid');
        return null;
    }

}

// Guardar el token CSRF en las cookies del navegador
function setCsrfCookie(token) {
//alert(token)
document.cookie = `csrftoken=${token}; path=/`;
}
// Obtener y configurar el token CSRF
getCsrfToken().then(token => {
setCsrfCookie(token);
});