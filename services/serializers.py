from rest_framework.serializers import ModelSerializer
from services.models import VRHeadsetRent, Game, Visitor


class VRHeadsetRentSerializer(ModelSerializer):
    class Meta:
        model = VRHeadsetRent
        fields = '__all__'


class GameSerializer(ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'


class VisitorSerializer(ModelSerializer):
    class Meta:
        model = Visitor
        fields = '__all__'


