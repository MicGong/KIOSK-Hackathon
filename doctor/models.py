from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Doctor(models.Model):
    user = models.OneToOneField(User, related_name='doctor')
    doc_id = models.IntegerField(unique=True)
    patient_waittime = models.TimeField()