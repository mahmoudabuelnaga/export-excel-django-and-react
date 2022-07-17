from rest_framework import generics
from .serializers import LogbookSerializer
from my_app.models import Logbook

class LogbookList(generics.ListAPIView):
    queryset = Logbook.objects.all()
    serializer_class = LogbookSerializer
