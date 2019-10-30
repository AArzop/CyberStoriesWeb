from rest_framework.viewsets import ModelViewSet
from services.models import VRHeadsetRent, Game, Visitor
from services.serializers import VRHeadsetRentSerializer, GameSerializer, VisitorSerializer


class VRHeadsetRentViewSet(ModelViewSet):
    serializer_class = VRHeadsetRentSerializer
    queryset = VRHeadsetRent.objects.all()


class GameViewSet(ModelViewSet):
    serializer_class = GameSerializer
    queryset = Game.objects.all()


class VisitorViewSet(ModelViewSet):
    serializer_class = VisitorSerializer
    queryset = Visitor.objects.all()
