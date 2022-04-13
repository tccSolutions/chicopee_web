from django.urls import path
from .views import get_events

urlpatterns = [
    path('all_events', get_events, name='all_events')
]