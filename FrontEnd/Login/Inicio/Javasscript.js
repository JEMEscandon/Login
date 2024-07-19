document.getElementById('preferences-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    // Captura los géneros seleccionados
    const genres = [];
    document.querySelectorAll('input[name="genre"]:checked').forEach((checkbox) => {
      genres.push(checkbox.value);
    });
  
    // Captura el idioma preferido
    const language = document.getElementById('language').value;
    
    // Captura el grupo de edad
    const ageGroup = document.querySelector('input[name="age-group"]:checked').value;
    
    // Muestra los resultados en la consola (puedes enviarlos a tu servidor)
    console.log('Géneros seleccionados:', genres);
    console.log('Idioma seleccionado:', language);
    console.log('Grupo de edad seleccionado:', ageGroup);
    
    // Aquí podrías enviar los datos a tu servidor usando fetch() u otra técnica
  });
  