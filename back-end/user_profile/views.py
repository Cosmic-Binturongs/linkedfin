from django.shortcuts import render
from .serializers import ProfileSerializer, UserSerializer
from django.contrib.auth.models import User
from .models import User_profile
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = User_profile.objects.all()
    seerializer_class = ProfileSerializer

class GetUserProfileView(APIView):
  def get(self, request, format=None):
    try:
      user = self.request.user
      username = user.username

      user = User.objects.get(id=user.id)

      user_profile = User_profile.objects.get(user=user)
      user_profile = ProfileSerializer(user_profile)

      return Response({'profile': user_profile.data, 'username': str(username)})
    except:
      return Response({'error': "Something went wrong when retrieving profile"})

class UpdateUserProfileView(APIView):
  def put(self, request, format=None):
    try:
      user = self.request.user
      username = user.username

      data = self.request.data
      first_name = data['first_name']
      last_name = data['last_name']
      phone = data['phone']
      city = data['city']

      user = User.objects.get(id=user.id)

      User_profile.objects.filter(user=user).update(first_name=first_name, last_name=last_name, phone=phone, city=city)

      user_profile = User_profile.objects.get(user=user)
      user_profile = ProfileSerializer(user_profile)

      return Response({'profile': user_profile.data, 'username': str(username)})
    except:
      return Response({'error': "Something went wrong when updating profile"})
