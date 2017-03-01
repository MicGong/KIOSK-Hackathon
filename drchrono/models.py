from django.db import models
from patient.models import Patient

# Create your models here.
class Appointment(models.Model):
    patient = models.ForeignKey('patient.Patient', related_name='apptpatients')

class Walkin(models.Model):
    pat_firstname = models.CharField(max_length=255)
    pat_lastname = models.CharField(max_length=255)
    pat_dbirth = models.DateField()
    reason = models.TextField()
    waittime = models.TimeField() # Not sure whether should implemented patient check