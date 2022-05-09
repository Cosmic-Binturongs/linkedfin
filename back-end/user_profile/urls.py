from . import views
from rest_framework import routers
from django.urls import path
from .views import GetUserProfilesView, GetUserProfileView, UpdateUserProfileView

urlpatterns = [
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view()),
    path('all', GetUserProfilesView.as_view())
]
