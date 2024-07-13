const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode").agregar("Modo de registro");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode").eliminar("Modo de registro");
});

// Función para obtener el token CSRF de las cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // ¿La cookie comienza con el nombre que buscamos?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
  }
  
document.getElementById('register-form').addEventListener('submit', async (e) => {
  //alert(csrftoken)
  e.preventDefault();
  const csrftoken = getCookie('csrftoken');
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  //alert(csrftoken)
  const response = await fetch('http://127.0.0.1:8000/api/signup/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
      //'credentials': 'include'
    },
    credentials: 'include',
    body: JSON.stringify({ username, password ,email }),
    //credentials: 'include'
  });

  if (response.ok) {
    const data = await response.json();
    alert(data.message);
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);
    // Redirigir o actualizar la UI
  } else {
      alert('Login failed');
  }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
  //alert(csrftoken)
  e.preventDefault();
  const csrftoken = getCookie('csrftoken');
  const username = document.getElementById('username_login').value;
  
  const password = document.getElementById('password_login').value;
  //alert(csrftoken)
  const response = await fetch('http://127.0.0.1:8000/api/signin/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
      //'credentials': 'include'
    },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
    //credentials: 'include'
  });

  if (response.ok) {
    const data = await response.json();
    alert(data.message);
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);
    // Redirigir o actualizar la UI
  } else {
      alert('Login failed');
  }
});