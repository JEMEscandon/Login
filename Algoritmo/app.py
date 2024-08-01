# Importando FastAPI
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Text, Optional
from datetime import datetime


# Agregando un modelo de un post
class Post(BaseModel):
    id: Optional[str]
    title: str
    author: str
    content: Text
    created_at: datetime = datetime.now()
    published_at: Optional[datetime] 
    published: bool = False

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

@app.post('/posts')
def save_post(post: Post):
    print(post.dict())
    return "Received"

# --------------------------------------------------------------
# Para Ejecutar la aplicación, ejecutar el siguiente comando:
# uvicorn app:app
# app -> Referencia al archivo y app -> Referencia a la variable del servidor

# Para ejecutarlo de forma automatico
# uvicorn app:app --reload