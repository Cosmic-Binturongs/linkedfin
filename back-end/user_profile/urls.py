from . import views
from rest_framework import routers
from django.urls import path, include

Router = routers.DefaultRouter()
Router.register('user_profile', views.UserView)

urlpatterns = [
    path('', include(Router.urls))
]
