from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WorkoutSerializer
from .models import Workouts
# Create your views here.

class WorkoutView(viewsets.ModelViewSet):
    serializer_class = WorkoutSerializer
    queryset = Workouts.objects.all()
