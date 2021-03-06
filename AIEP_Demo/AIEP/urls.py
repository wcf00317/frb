"""AIEP URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
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
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import staticfiles
from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from algorithm import views as algo_view
from management import views as manage_view
from privileges import views as priv_view
from django.conf.urls.static import static
from django.conf import settings
import notifications.urls

urlpatterns = [
    url(r'^$', manage_view.welcome),
    url(r'^3dModel/',manage_view.threeDModel),
    url(r'^admin/', admin.site.urls),
    url(r'^management/', include('management.urls')),
    url(r'captcha', include('captcha.urls')),
    path('inbox/notifications/', include(notifications.urls, namespace='notifications')),
    path('privileges/', include('privileges.urls', namespace='privileges')),
]
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
handler404 = 'management.views.page_not_found'
