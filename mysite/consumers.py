import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from channels.layers import get_channel_layer
from django.http import HttpRequest


class APIConsumer(WebsocketConsumer):
    def connect(self):
        async_to_sync(self.channel_layer.group_add)('all', self.channel_name)
        self.accept()

    def disconnect(self, code):
        async_to_sync(self.channel_layer.group_discard)('all', self.channel_name)

    def receive(self, text_data=None, bytes_data=None, **kwargs):
        text_data_json = json.loads(text_data)
        type_ = text_data_json['type']
        payload = text_data_json['payload']
        async_to_sync(get_channel_layer().group_send)(
            'all',
            {
                'type': type_,
                'payload': json.dumps(payload)
            }
        )

    def message(self, event):
        self.send(text_data=event['payload'])


def inner_http_get(view):
    get_request = HttpRequest()
    get_request.method = 'GET'
    response = view(get_request)
    response.render()
    return response.content.decode('utf-8')


def push_all(namespace, data):
    async_to_sync(get_channel_layer().group_send)(
        'all',
        {
            'type': 'message',
            'payload': json.dumps({
                'namespace': namespace,
                'data': data
            })
        }
    )
