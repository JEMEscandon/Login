from django.db import models
from django.conf import settings
# Create your models here.
class Genre(models.Model):
    genre_name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.genre_name

class UserGenre(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'genre')

    def __str__(self):
        return f"{self.user.username} - {self.genre.genre_name}"