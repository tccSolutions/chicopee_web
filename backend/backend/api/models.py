from django.db import models

class Event(models.Model):    
    title = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()
    image_url = models.CharField(max_length=200)
    url = models.CharField(max_length=200)

    
