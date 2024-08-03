"""
URL configuration for app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app.views import login
from bookPlatform.views import signup,get_csrf_token,signout,signin,consultGenre,favoriteGenre

urlpatterns = [
    path('api/csrf_token/', get_csrf_token, name='get_csrf_token'),
    #path('csrf_token/', get_csrf_token, name='get_csrf_token'),
    path('admin/', admin.site.urls),
    path('login/', login),
    path('api/signup/', signup, name='signup'),
    path('api/logout/', signout, name='logout'),
    path('api/signin/', signin, name='signin'),
    path('api/favoriteGenre/', favoriteGenre, name='favoriteGenre'),
    path('api/consultGenre/', consultGenre, name='consultGenre'),
]
