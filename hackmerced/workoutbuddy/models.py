from django.db import models

class Workouts(models.Model):
    title = models.TextField(db_column='Title', blank=True, null=True)  # Field name made lowercase.
    desc = models.TextField(db_column='Desc', blank=True, null=True)  # Field name made lowercase.
    type = models.TextField(db_column='Type', blank=True, null=True)  # Field name made lowercase.
    bodypart = models.TextField(db_column='BodyPart', blank=True, null=True)  # Field name made lowercase.
    equipment = models.TextField(db_column='Equipment', blank=True, null=True)  # Field name made lowercase.
    level = models.TextField(db_column='Level', blank=True, null=True)  # Field name made lowercase.
    rating = models.TextField(db_column='Rating', blank=True, null=True)  # Field name made lowercase.
    ratingdesc = models.TextField(db_column='RatingDesc', blank=True, null=True)  # Field name made lowercase.
    id = models.IntegerField(db_column='Id', blank=True, primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'workouts'