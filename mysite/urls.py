from allauth.account.views import ConfirmEmailView
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic.base import RedirectView, TemplateView
from mysite.views import FacebookLogin, TwitterLogin

urlpatterns = [
    path('leaderboard/', include('leaderboard.urls')),
    path('gamemaster/', include('gamemaster.urls')),
    path('services/', include('services.urls')),
    path('admin/', admin.site.urls),
    re_path('account-confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(),  # noqa: W605
            name='account_confirm_email'),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/twitter/', TwitterLogin.as_view(), name='twitter_login'),
    path('accounts/', include('allauth.urls')),
    # this url is used to generate email content
    re_path('password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        RedirectView.as_view(url='/', permanent=True),
        name='password_reset_confirm'),
    re_path('Build/Builds.json', RedirectView.as_view(url='/static/webgl/Build/Builds.json')),
    path('Build/Builds.wasm.code.unityweb', RedirectView.as_view(url='/static/webgl/Build/Builds.wasm.code.unityweb')),
    path('Build/Builds.wasm.framework.unityweb', RedirectView.as_view(url='/static/webgl/Build/Builds.wasm.framework.unityweb')),
    path('Build/Builds.data.unityweb', RedirectView.as_view(url='/static/webgl/Build/Builds.data.unityweb')),
    re_path('.*', TemplateView.as_view(template_name='index.html'))
]
