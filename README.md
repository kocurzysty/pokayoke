
# Pokayoke Project Management Application

## Overview

Pokayoke is a project management application that allows users to manage tasks within projects. The application supports user authentication, project visibility (private and public), and task management. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and includes user registration with email verification, login functionality, and a user profile page.

## Features

- User registration with email verification
- User login and authentication
- User profile management (including account deletion)
- Project and task management
- Internationalization support (English, Polish, Dutch)
- Private and public projects with email invite for private projects

## Technologies

- Frontend: React, Axios, react-router-dom
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt, Nodemailer
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Email Service: Nodemailer

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
MONGO_URI=mongodb://yourUsername:yourPassword@localhost:27017/pokayoke
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:3000
