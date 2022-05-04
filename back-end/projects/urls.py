from .views import SignupView, GetCSRFToken, LoginView, LogoutView, CheckAuthenticatedView, DeleteAccountView, GetUsersView
from rest_framework import routers
from django.urls import path, include


# Router = routers.DefaultRouter()
# Router.register('project', ProjectView)

urlpatterns = [
    # path('', include(Router.urls)),
    path('authenticated', CheckAuthenticatedView.as_view()),
    path('register', SignupView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('delete', DeleteAccountView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('get_users', GetUsersView.as_view())

]
