from django.urls import path
from .views import LogbookList

urlpatterns = [
    path('', LogbookList.as_view())
]