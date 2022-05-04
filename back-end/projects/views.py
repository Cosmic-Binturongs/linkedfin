from rest_framework import viewsets, permissions

from .serializers import ProjectSerializer
from .models import Projects


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
