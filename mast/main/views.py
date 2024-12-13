from django.shortcuts import render

# Create your views here.
def show(request):
    return render(request, "index.html")
def login(request):
    return render(request, "authorizationAccount.html")
def reg(request):
    return render(request, "registrationAccount.html")
def prof(request):
    return render(request, "profile.html")
def cur(request):
    return render(request, "cours.html")