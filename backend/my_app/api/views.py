from rest_framework import generics
from rest_framework.viewsets import ReadOnlyModelViewSet
from drf_excel.mixins import XLSXFileMixin
from drf_excel.renderers import XLSXRenderer
from .serializers import LogbookSerializer
from my_app.models import Logbook

class LogbookList(generics.ListAPIView):
    queryset = Logbook.objects.all()
    serializer_class = LogbookSerializer


class ExportExcelViewSet(XLSXFileMixin, ReadOnlyModelViewSet):
    queryset = Logbook.objects.all()
    serializer_class = LogbookSerializer
    renderer_classes = (XLSXRenderer,)


    column_header = {
        'column_width': [30, 30, 30, 30, 30, 30, 30, 30],
        'height': 25,
        'style': {
            'fill': {
                'fill_type': 'solid',
                'start_color': 'ffffff',
            },
            'alignment': {
                'horizontal': 'center',
                'vertical': 'center',
                'wrapText': True,
                'shrink_to_fit': True,
            },
            'border_side': {
                'border_style': 'thin',
                'color': 'FF000000',
            },
            'font': {
                'name': 'Arial',
                'size': 14,
                'bold': True,
                'color': 'FF000000',
            },
        },
    }
    body = {
        'style': {
            'fill': {
                'fill_type': 'solid',
                'start_color': 'ffffff',
            },
            'alignment': {
                'horizontal': 'center',
                'vertical': 'center',
                'wrapText': True,
                'shrink_to_fit': True,
            },
            'border_side': {
                'border_style': 'thin',
                'color': 'FF000000',
            },
            'font': {
                'name': 'Arial',
                'size': 14,
                'bold': False,
                'color': 'FF000000',
            }
        },
        'height': 40,
    }
    column_data_styles = {
        'distance': {
            'alignment': {
                'horizontal': 'right',
                'vertical': 'top',
            },
            'format': '0.00E+00'
        },
        'created_at': {
            'format': 'd.m.y h:mm',
        }
    }