from . import views
from rest_framework import routers
from django.urls import path, include

Router = routers.DefaultRouter()
Router.register('project', views.ProjectView)

urlpatterns = [
    path('', include(Router.urls))
]
