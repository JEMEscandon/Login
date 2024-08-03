from django.contrib import admin
from bookPlatform.models import Genre,UserGenre
# Register your models here.
admin.site.register(UserGenre)
admin.site.register(Genre)
