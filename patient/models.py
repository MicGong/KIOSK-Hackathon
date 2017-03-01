from django.db import models

# Create your models here.
class Patient(models.Model):
    pat_id = models.IntegerField(primary_key=True)
    waittime = models.TimeField()
