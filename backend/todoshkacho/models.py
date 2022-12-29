from django.db import models
from .querysets import TodoQuerySet


class Todo(models.Model):
    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    status = models.BooleanField(default=False)
    date = models.DateField(null=True, blank=True)
    time = models.TimeField(null=True, blank=True)

    objects = TodoQuerySet.as_manager()

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'todo_todos'
