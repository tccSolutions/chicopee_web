from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import EventSerializer
from .models import Event

@api_view(['GET'])
def get_events(request):
    events = Event.objects.all().order_by('start_date')
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

