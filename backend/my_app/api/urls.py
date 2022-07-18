from xml.etree.ElementInclude import include
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LogbookList, ExportExcelViewSet


router = DefaultRouter()
router.register(r'export', ExportExcelViewSet, basename='export')

urlpatterns = [
    path('', LogbookList.as_view()),
    path('', include(router.urls)),
]