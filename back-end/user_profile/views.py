from django.shortcuts import render
from .serializers import ProfileSerializer, UserSerializer
from django.contrib.auth.models import User
from .models import User_profile
from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User_profile

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = User_profile.objects.all()
    serializer_class = ProfileSerializer

class GetUserProfileView(APIView):
  def get(self, request, format=None):
    try:
      user = self.request.user
      ##return the user eg:eric
      username = user.username
      #admin name
      current_user = User.objects.get(id= user.id)
      user_profileval = User_profile.objects.get(user_id = user)

      user_profile = ProfileSerializer(user_profileval)

      return Response({'profile': user_profile.data, 'username': str(username)})
    except:
      return Response({'error': "Something went wrong when retrieving profile"})

class UpdateUserProfileView(APIView):
  def put(self, request, format=None):
    try:
      user = self.request.user
      username = user.username
      
      data = self.request.data
      # bio = data['bio']
      # github = data['github']
      # image = data['image']
      # username = data['user']

      current_user = User.objects.get( id = user.id)
      
      updatedProfile = User_profile.objects.filter(user_id = current_user).update(bio=data['bio'], github=data['github'], image=data['image'])
      user_profileval = User_profile.objects.get(user_id = user)
      user_profile = ProfileSerializer(user_profileval)
      return Response({'profile': user_profile.data, 'username': str(username)})
    except:
      return Response({'error': "Something went wrong when updating profile"})

class GetUserProfilesView(APIView):
  permission_classes = (permissions.AllowAny,)

  def get(self, request, format=None):
      profiles = User_profile.objects.all()

      profiles = ProfileSerializer(profiles, many=True)
      return Response(profiles.data)