from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('pages/<str:page>/', views.pages, name='pages'),
    path('admin/login/', views.admin_login, name='admin_login'),
    path('admin/logout/', views.admin_logout, name='admin_logout'),
    path('admin/dashboard/', views.admin_dashboard, name='admin_dashboard'),
]