from django.db import models
from django.contrib.auth.models import User


class User_profile(models.Model):

    bio = models.TextField(max_length=500)
    github = models.CharField(max_length=128)
    image = models.ImageField(blank=True, upload_to='blog_images')
    user_id = models.OneToOneField(User, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.user.name