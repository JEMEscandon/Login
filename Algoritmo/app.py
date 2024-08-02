# Importando FastAPI
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Text, Optional
from datetime import datetime
from uuid import uuid4


# Agregando un modelo de un post
class Post(BaseModel):
    id: Optional[str] = None
    title: str
    author: str
    content: Text
    created_at: datetime = datetime.now()
    published_at: Optional[datetime] = None
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
    post.id = str(uuid4())
    posts.append(post.dict())
    return posts[-1]

@app.get('/posts/{id_post}')
def get_post(id_post: str):
    #print(id_post)
    for post in posts:
        if post["id"] == id_post:
            return post  
    return HTTPException(status_code = 404, detail = "Item not found")

@app.delete('/posts/{id_post}')
def delete_post(id_post: str):
    for post in posts:
        if post["id"] == id_post:
            index = posts.index(post)
            posts.pop(index)
            return "Post elimited"
    return HTTPException(status_code = 404, detail = "Item not elimited")

# --------------------------------------------------------------
# Para Ejecutar la aplicación, ejecutar el siguiente comando:
# uvicorn app:app
# app -> Referencia al archivo y app -> Referencia a la variable del servidor

# Para ejecutarlo de forma automatico
# uvicorn app:app --reload