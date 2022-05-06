from .views import SignupView, GetCSRFToken, LoginView, LogoutView, CheckAuthenticatedView, DeleteProjectView, GetUsersView, ProjectViewSet
from rest_framework import routers
from django.urls import path, include

router= routers.DefaultRouter()
router.register(r'project', ProjectViewSet)

urlpatterns = [
    path('accounts/authenticated', CheckAuthenticatedView.as_view()),
    path('accounts/register', SignupView.as_view()),
    path('accounts/login', LoginView.as_view()),
    path('accounts/logout', LogoutView.as_view()),
    path('accounts/delete', DeleteProjectView.as_view()),
    path('accounts/csrf_cookie', GetCSRFToken.as_view()),
    path('accounts/get_users', GetUsersView.as_view()),
    
    # path('projects', ProjectViewSet.as)

]
urlpatterns += router.urls