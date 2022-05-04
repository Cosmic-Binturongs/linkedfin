from . import views
from rest_framework import routers
from django.urls import path, include
from .views import ProfileViewSet, GetUserProfileView, UpdateUserProfileView

Router = routers.DefaultRouter()
Router.register('user_profile', views.UserViewSet)
urlpatterns = [
    path('', include(Router.urls)),
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view())
]
