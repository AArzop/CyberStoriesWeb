# Generated by Django 2.1.5 on 2019-05-15 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leaderboard', '0005_token_game_result'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gameresult',
            name='visible',
            field=models.BooleanField(default=True),
        ),
    ]