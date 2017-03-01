import requests
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User

def login_redirect(request):
    return render(request, 'login-redirect.html', 
        {'doc_username':request.user.username})