from django.contrib import admin
from .models import Workouts

class WorkoutBuddyAdmin(admin.ModelAdmin):
    list_display = ('id','title','desc', 'equipment','bodypart','level')

# Register your models here.

admin.site.register(Workouts, WorkoutBuddyAdmin)
