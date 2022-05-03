from rest_framework import serializers
from django.contrib.auth.models import User
from .models import User_profile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_profile
        fields = "__all__"
