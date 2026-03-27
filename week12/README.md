# Week 12 - Django + Django REST Framework

## Tech Stack
- Python
- Django
- Django REST Framework (DRF)
- SQLite
- HTML templates + Bootstrap + jQuery

## How This Project Was Created
This week is a Django API + template project.

Creation style (project pattern):
- Django project: restapi
- Django apps: api, base
- DRF used for API endpoints

The app provides pages and API routes for user data operations.

## Project Structure
- manage.py: Django entry point
- restapi/: project settings and root URLs
- api/: page views + API endpoints
- base/: data model
- templates/: HTML templates
- db.sqlite3: database

## Install
1. Open terminal in this folder
2. Install required packages:

```bash
pip install django djangorestframework
```

## Run
1. Make sure DB schema is applied:

```bash
python manage.py makemigrations
python manage.py migrate
```

2. Start server:

```bash
python manage.py runserver
```

3. Open:
- http://127.0.0.1:8000/

## Notes
- DRF is required because rest_framework is in INSTALLED_APPS.
- If Python command differs, use py manage.py ...
