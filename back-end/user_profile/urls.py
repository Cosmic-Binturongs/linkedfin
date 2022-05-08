from django.urls import path
from .views import GetUserProfileView, UpdateUserProfileView, GetUserProfilesView

urlpatterns = [
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view()),
    path('all', GetUserProfilesView.as_view())
]