from rest_framework.routers import DefaultRouter
from services.endpoints import VRHeadsetRentViewSet, GameViewSet, VisitorViewSet

router = DefaultRouter()

router.register('vr-headset-rents', VRHeadsetRentViewSet, base_name='vr-headset-rent')
router.register('games', GameViewSet, base_name='game')
router.register('visitors', VisitorViewSet, base_name='visitor')

urlpatterns = router.urls
