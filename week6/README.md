# Week 6 - Node.js + Express + JWT + JSON File DB

## Tech Stack
- Node.js
- Express
- JSON Web Token (jsonwebtoken)
- Local JSON file as database (database.json)
- HTML pages

## How This Project Was Created
This project was created manually using Express (no frontend framework).
The authentication flow was built with:
- Signup
- Login
- Token generation and verification
- Data persistence in database.json

## Project Structure
- server.js: Express API and auth logic
- database.json: local user data
- index.html, login.html, signup.html, welcome.html: pages

## Install
1. Open terminal in this folder
2. Install required packages:

```bash
npm install node express path fs jsonwebtoken
```

## Run
1. Start the server:

```bash
node server.js
```

2. Open:
- http://localhost:8000/
