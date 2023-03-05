# Generated by Django 4.1.7 on 2023-03-05 03:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Workouts',
            fields=[
                ('title', models.TextField(blank=True, db_column='Title', null=True)),
                ('desc', models.TextField(blank=True, db_column='Desc', null=True)),
                ('type', models.TextField(blank=True, db_column='Type', null=True)),
                ('bodypart', models.TextField(blank=True, db_column='BodyPart', null=True)),
                ('equipment', models.TextField(blank=True, db_column='Equipment', null=True)),
                ('level', models.TextField(blank=True, db_column='Level', null=True)),
                ('rating', models.TextField(blank=True, db_column='Rating', null=True)),
                ('ratingdesc', models.TextField(blank=True, db_column='RatingDesc', null=True)),
                ('id', models.IntegerField(blank=True, db_column='Id', primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'workouts',
                'managed': False,
            },
        ),
    ]
