from django.shortcuts import render
from .serializers import ProfileSerializer, UserSerializer
from django.contrib.auth.models import User
from .models import User_profile


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = User_profile.objects.all()
    seerializer_class = ProfileSerializer
