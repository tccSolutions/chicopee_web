from django.db import models

class Event(models.Model):    
    title = models.CharField(max_length=200)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    image_url = models.CharField(max_length=200)
    url = models.CharField(max_length=200)

    def __str__(self):
        return self.title

    
