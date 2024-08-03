from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import login,logout,authenticate
from django.db import IntegrityError
from django.contrib.auth.hashers import make_password
from bookPlatform.models import UserGenre,Genre
import json
import traceback
# Create your views here.
@ensure_csrf_cookie
def get_csrf_token(request):
    csrf_token=get_token(request)
    print("csrf_token: ",csrf_token)
    return JsonResponse({'csrfToken': csrf_token})
#mTcoL7vlgiDZZ1jwZGOitSMFbhPahHOq
@csrf_exempt
def signup(request):
    if request.method == 'OPTIONS':
        response = HttpResponse()
        response['Access-Control-Allow-Origin'] = 'http://127.0.0.1:5500'
        response['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        response['Access-Control-Allow-Headers'] = 'Content-Type, X-CSRFToken'
        response['Access-Control-Allow-Credentials'] = 'true'
        return response
    print('data signing up', request.method)
    if request.method == 'POST':
        try:
            # Obtener datos del cuerpo de la solicitud JSON
            data = json.loads(request.body)
            # Aquí puedes procesar los datos recibidos
            print('Received data:', data)
            try:
                username = data.get('username')
                password = data.get('password')
                email = data.get('email')
                if username and password:
                    if User.objects.filter(username=username).exists():
                        return JsonResponse({'message': 'Usuario ya existe'})
                    user = User.objects.create_user(username=username, password=password,email=email)
                    user.save()
                    login(request,user)
                    user_data = {
                        'id': user.id,
                        'username': user.username,
                    }
                    return JsonResponse({'message': 'Usuario creado correctamente','user':user_data}, status=201)
                else:
                    return JsonResponse({'message': 'Complete todos los campos'}, status=400)
            except IntegrityError:
                return JsonResponse({'message': 'Error en el registro', 'data': data})
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format in request body'}, status=400)
    
    return HttpResponse(status=405)

def signout(request):
    logout(request)
    return JsonResponse({'message': 'Sesion finalidas correctamente'})

@csrf_exempt
def signin(request):
    if request.method == 'OPTIONS':
        response = HttpResponse()
        response['Access-Control-Allow-Origin'] = 'http://127.0.0.1:5500'
        response['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        response['Access-Control-Allow-Headers'] = 'Content-Type, X-CSRFToken'
        response['Access-Control-Allow-Credentials'] = 'true'
        return response
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')
            print('username: ',username)
            print('password: ',password)
            user = authenticate(request, username=username, password=password)
            if user is None:
                return JsonResponse({'message': 'El usuario o la contraseña son incorrectas','status':'error','user':user})
            else:
                login(request,user)
                return JsonResponse({'message': 'El usuario autenticado correctamente','status':'success'})
    
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format in request body','status':'error'}, status=400)

def favoriteGenre(request):

    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user = User.objects.get(id=int(data["id_user"]))
            #user = int(data["id_user"])
            genres = data["genres"] 
            if len(genres)>1:
                for res in genres:
                    print(res)
                    genre = Genre.objects.get(genre_name=res)
                    # Crear e insertar gusto del usuario
                    user_genre = UserGenre(user=user, genre=genre)
                    user_genre.save()
            return JsonResponse({'message': 'Se registro las preferencias corretamente'}, status=201)
        except:
            return JsonResponse({'status':'error'}, status=400)
def consultGenre(request):
    x=UserGenre.objects.filter(user=3)
    print(x)
    return HttpResponse(x[0])