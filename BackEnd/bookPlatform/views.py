from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie
# Create your views here.
@ensure_csrf_cookie
def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})

def signup(request):
    print('data signing up', request.method)
    if request.method == 'POST':
        print('data signing up')
    return HttpResponse("data signing up")