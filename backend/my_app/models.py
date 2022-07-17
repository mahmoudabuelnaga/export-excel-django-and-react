from django.db import models
import uuid


# Create your models here.
class Logbook(models.Model):
    transaction_status = (
        ('out', 'out'),
        ('in', 'in'),
    )
    _id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    index = models.PositiveIntegerField(unique=True)
    date = models.DateField()
    transaction_type = models.CharField(max_length=3, choices=transaction_status)
    part = models.CharField(max_length=20)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    transaction_amount = models.PositiveIntegerField()

    class Meta:
        ordering = ('index',)

    def __str__(self):
        return f"{self.index}"