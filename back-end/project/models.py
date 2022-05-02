from django.db import models
from django.forms import DateTimeField
from pytz import timezone
from django.contrib.auth.models import User


class Profile(models.Model):

    bio = models.TextField(max_length=500)
    github = models.CharField(max_length=128)
    image = models.ImageField(blank=True, upload_to='blog_images')
    user = models.OneToOneField(User)

    def __str__(self):
        return self.bio


class Projects(models.Model):
    user = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='user')
    title = models.CharField(max_length=128)
    github_link = models.CharField(max_length=128)
    publish_date = DateTimeField(default=timezone.now)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title
