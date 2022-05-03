from django.shortcuts import render
from .serializers import UserSerializer
from django.contrib.auth.models import User

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
