# Create your views here.
from django.shortcuts import render, redirect
from .models import Student, Course
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Home page
def home(request):
    courses = Course.objects.all()
    return render(request, 'pages/index.html', {'courses': courses})

# Pages
def pages(request, page):
    # Remove ".html" if someone added it in the URL
    if page.endswith('.html'):
        page = page[:-5]  # strip last 5 chars
    return render(request, f'pages/{page}.html')

# Admin login
def admin_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('admin_dashboard')
        else:
            return render(request, 'admin/login.html', {'error': 'Invalid credentials'})
    return render(request, 'admin/login.html')

# Admin logout
def admin_logout(request):
    logout(request)
    return redirect('admin_login')

# Dashboard
@login_required
def admin_dashboard(request):
    students = Student.objects.all()
    courses = Course.objects.all()
    return render(request, 'admin/dashboard.html', {'students': students, 'courses': courses})