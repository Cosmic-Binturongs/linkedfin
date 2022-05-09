from . import views
from rest_framework import routers
from django.urls import path, include
from .views import ProfileViewSet, GetUserProfileView, UpdateUserProfileView

urlpatterns = [
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view())
]
