"""
URL configuration for project111 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.static import serve

from core import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
]

if settings.DEBUG:
    # 单端口开发模式：由 Django 直接托管已构建的 Vue 前台（SPA 路由兜底）
    urlpatterns += [
        re_path(r'^assets/(?P<path>.*)$', serve, {
            'document_root': settings.FRONTEND_DIST_DIR / 'assets',
        }),
        re_path(r'^favicon\.ico$', serve, {
            'document_root': settings.FRONTEND_DIST_DIR,
        }),
        re_path(r'^(?P<path>logo\.jpg)$', serve, {
            'document_root': settings.FRONTEND_DIST_DIR,
        }),
        re_path(r'^(?!admin|api|assets|favicon|logo|static).*$', views.frontend_index),
    ]
