from rest_framework import serializers

from .models import Todo
from .utils.serializers import ValidatorSerializer


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'completed', 'status', 'date', 'time')


class TodoFilterSerializer(ValidatorSerializer):
    page = serializers.IntegerField(default=1)
    size = serializers.IntegerField(default=15)
    type = serializers.CharField(required=False)

