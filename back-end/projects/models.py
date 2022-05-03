from django.db import models
from django.forms import DateTimeField
from pytz import timezone
from user_profile.models import Profile


class Project(models.Model):
    user = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='user')
    title = models.CharField(max_length=128)
    github_link = models.CharField(max_length=128)
    publish_date = DateTimeField(default=timezone.now)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title
