from .models import Todo
from .pagination import pagination
from .serializers import TodoSerializer, TodoFilterSerializer
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView


class TodoListView(APIView):
    def get(self, request):
        params = TodoFilterSerializer.check(request.GET)
        queryset = Todo.objects.list(type=params.get('type'))
        serializer = TodoSerializer(queryset, many=True)
        data = pagination(queryset, serializer, params.get('page'), params.get('size'))
        return Response(data)

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, 201)


class TodoDetailView(APIView):
    def get(self, request, pk):
        instance = get_object_or_404(Todo, id=pk)
        data = TodoSerializer(instance).data
        return Response(data)

    def delete(self, request, pk):
        instance = get_object_or_404(Todo, id=pk)
        instance.delete()
        return Response({}, 204)

    def put(self, request, pk):
        instance = get_object_or_404(Todo, id=pk)
        serializer = TodoSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
