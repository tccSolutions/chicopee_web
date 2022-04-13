from unittest.util import _MAX_LENGTH
from .models import Event
from rest_framework import serializers


class EventSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    start_date = serializers.DateTimeField(format='%B %d')
    end_date = serializers.DateTimeField(format='%B %d')
    url = serializers.CharField()
    image_url = serializers.CharField()

    class Meta:
        model=Event
        fields=['id', 'title', 'start_date', 'end_date', 'url', 'image_url']
    


