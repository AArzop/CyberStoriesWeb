# Generated by Django 2.1.5 on 2019-03-13 13:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GameResults',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stage1Score', models.FloatField()),
                ('stage2Score', models.FloatField()),
                ('stage3Score', models.FloatField()),
                ('stage4Score', models.FloatField()),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pseudo', models.CharField(blank=True, default='', max_length=20, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='gameresults',
            name='player',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gameResults', to='leaderboard.Player'),
        ),
    ]