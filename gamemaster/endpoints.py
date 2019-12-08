from gamemaster.models import Email
from gamemaster.helpers import generateToken
from gamemaster.models import Email, Token
from rest_framework.serializers import ModelSerializer
from mysite.consumers import push_all, inner_http_get
from rest_framework.generics import ListCreateAPIView, CreateAPIView


class ListCreateEmails(ListCreateAPIView):
    # serializer is set below
    queryset = Email.objects.all()


class CreateTokens(CreateAPIView):
    # serializer is set below
    pass


class EmailSerializer(ModelSerializer):
    def create(self, validated_data):
        ret = super(EmailSerializer, self).create(validated_data)
        push_all('emails', inner_http_get(ListCreateEmails.as_view()))
        return ret

    class Meta:
        model = Email
        fields = '__all__'

ListCreateEmails.serializer_class = EmailSerializer


class TokenSerializer(ModelSerializer):
    def create(self, validated_data):
        validated_data['value'] = generateToken()
        return super(TokenSerializer, self).create(validated_data)

    class Meta:
        model = Token
        fields = '__all__'

TokenSerializer.serializer_class = TokenSerializer


