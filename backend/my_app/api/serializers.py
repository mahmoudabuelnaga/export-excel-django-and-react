from distutils.log import Log
from rest_framework import serializers
from my_app.models import Logbook

class LogbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logbook
        fields = ['_id', 'index', 'date', 'transaction_type', 'part', 'cost', 'stock', 'transaction_amount']