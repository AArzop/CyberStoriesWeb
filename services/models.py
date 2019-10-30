from django.db import models


class VRHeadsetRent(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    status = models.CharField(
        choices=[('REGISTERED', 'registered'), ('SHIPPED', 'shipped'), ('RECEIVED', 'received'),
                 ('RETURNED', 'returned')],
        max_length=100
    )


class Game(models.Model):
    pass


class Visitor(models.Model):
    pass
