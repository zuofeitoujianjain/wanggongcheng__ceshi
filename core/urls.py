from django.urls import path

from . import views

app_name = 'core'

urlpatterns = [
    path('hello/', views.hello, name='hello'),
    path('contact/', views.contact_submit, name='contact_submit'),
]
