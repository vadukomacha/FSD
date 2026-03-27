<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7cca9f83-20e7-4063-84dc-6874123e66f9" />
## Install
1. Open terminal in this folder
```bash
python -m venv venv
```
2.
```bash
.\venv\scripts\activate
```
3.
```bash
pip install django djangorestframework
```
4.
```bash
django-admin startproject restapi
```
5.
```bash
cd restapi
```
6.
```bash
django-admin startapp api
```
7.
```bash
django-admin startapp base
```
8.
```bash
code .
```
9.Run:
```bash
python manage.py makemigrations
```
10.
```bash
python manage.py migrate
```
11.
```bash
python manage.py runserver
```
