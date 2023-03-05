from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('workoutbuddy/', include('workoutbuddy.urls')),
    path('admin/', admin.site.urls),
]
