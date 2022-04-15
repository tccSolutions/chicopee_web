from django.urls import path
from .views import get_events, get_monthly_events

urlpatterns = [
    path('all_events', get_events, name='all_events'),
    path('monthly_events', get_monthly_events, name='monthly_events')
]