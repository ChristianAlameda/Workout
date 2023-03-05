from rest_framework import serializers
from .models import Workouts

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workouts
        fields = ('id','title','desc','type', 'equipment','bodypart','level')