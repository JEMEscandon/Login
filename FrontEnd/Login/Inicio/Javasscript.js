function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Comprueba si esta cookie comienza con el nombre buscado
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

document.getElementById('preferences-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  // Captura los géneros seleccionados
  const csrftoken = getCookie('csrftoken');
  const id_user = getCookie('id_user');
  const genres = [];
  document.querySelectorAll('input[name="genre"]:checked').forEach((checkbox) => {
    genres.push(checkbox.value);
  });
  
  // Captura el idioma preferido
  /*PREGUNTAR*/
  //const language = document.getElementById('language').value;
  // Captura el grupo de edad
  //const ageGroup = document.querySelector('input[name="age-group"]:checked').value;
  // Muestra los resultados en la consola (puedes enviarlos a tu servidor)
  const response = await fetch('http://127.0.0.1:8000/api/favoriteGenre/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
      //'credentials': 'include'
    },
    credentials: 'include',
    body: JSON.stringify({ id_user, genres}),
    //credentials: 'include'
  });

  console.log('Géneros seleccionados:', genres);
  if (response.ok) {
    const data = await response.json();
    alert(data.message);
  }
  //PREGUNTAR
  /*
  console.log('Idioma seleccionado:', language);
  console.log('Grupo de edad seleccionado:', ageGroup);
  */
  // Aquí podrías enviar los datos a tu servidor usando fetch() u otra técnica
  });
  