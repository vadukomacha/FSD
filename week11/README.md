# Week 11 - Django (Template Rendering + Routing)

## Tech Stack
- Python
- Django
- HTML templates
- Bootstrap (CDN)

## How This Project Was Created
This week was structured as a Django project and app.

Creation style:
- django-admin startproject week11config .
- python manage.py startapp home

Then app URLs, views, and templates were wired for:
- Home
- Dashboard
- Contact

## Project Structure
- manage.py: Django entry point
- week11config/: project settings and root URLs
- home/: app logic
- home/templates/: app templates

## Install
1. Open terminal in this folder
2. Install Django:

```bash
pip install django
```

## Run
1. Apply migrations:

```bash
python manage.py migrate
```

2. Start server:

```bash
python manage.py runserver
```

3. Open:
- http://127.0.0.1:8000/

## Notes
- If Python command is different on your machine, use py instead of python.
