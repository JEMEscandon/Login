# Aquí va todo el proyecto del Backend

## Guía de inicio rápido

Esta guía asume que ya tienes instalado Python y pip en tu sistema.

### Paso 1: Clonar el repositorio

Primero, clona el repositorio a tu máquina local usando git:

```sh
git clone <URL-del-repositorio>
cd BackEnd
```

### Paso 2: Configurar el entorno virtual
Es recomendable utilizar un entorno virtual para las dependencias del proyecto. Puedes crear uno usando:

```sh
python -m venv venv
```

Luego, activa el entorno virtual:

* En Windows:
```sh
venv\Scripts\activate
```

### Paso 3: Instalar dependencias
Con el entorno virtual activado, instala las dependencias del proyecto:

```sh
pip install -r requirements.txt
```

Nota: Asegúrate de tener un archivo requirements.txt en la raíz de BackEnd con todas las dependencias necesarias.

### Paso 4: Configurar la base de datos
Asegúrate de tener la base de datos configurada según el esquema proporcionado en BD/BookDB - Scheme.sql. Si estás usando SQLite (como sugiere la presencia de db.sqlite3), este paso puede ser tan simple como asegurarse de que el archivo db.sqlite3 esté presente y actualizado.

### Paso 5: Realizar migraciones
Ejecuta las migraciones para crear o actualizar las tablas en la base de datos:

```sh 
python manage.py migrate
```

### Paso 6: Ejecutar el servidor de desarrollo
Finalmente, inicia el servidor de desarrollo:

```sh
python manage.py runserver
```

### Paso 7: Si se presenta algun error en el EndPoint
Instala la siguiente dependencias faltante.
```sh
pip install argon2-cffi
```

Ahora deberías poder acceder a la aplicación en http://127.0.0.1:8000/.

### Paso 8: Desactivar el entorno virtual
Cuando hayas terminado, puedes desactivar el entorno virtual con:

```sh
deactivate
```

