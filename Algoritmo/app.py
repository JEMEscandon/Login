# Importando FastAPI
from fastapi import FastAPI

# Creando una BD de forma temporal
posts = []

# Creando la aplicacion
app = FastAPI()

# EndPoint para la ruta raiz
@app.get('/')
def read_root():
    return {"Bienvenido": "Bienvenido a mi API REST con FastAPI"}

@app.get('/posts')
def get_post():
    return posts

# --------------------------------------------------------------
# Para Ejecutar la aplicación, ejecutar el siguiente comando:
# uvicorn app:app
# app -> Referencia al archivo y app -> Referencia a la variable del servidor

# Para ejecutarlo de forma automatico
# uvicorn app:app --reload