# Assignment 2: Full-Stack Development with NodeJS, Express, MongoDB, and ReactJS

---

## Daniel Konjarski - 101436648

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Docker Setup](#docker-setup)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [How to Run](#how-to-run)
- [Submission Guidelines](#submission-guidelines)

---

## Overview

This project combines a full-stack development application using Node.js, Express, MongoDB, and React.js. It covers backend API development, frontend user interfaces, and Docker-based deployment for orchestration. The primary focus is to build a responsive and professional web application with seamless integration between backend and frontend services.

---

## Features

### Backend Features
- **User Management**: 
  - Signup (`POST /signup`)
  - Login (`POST /login`)
- **Employee Management**:
  - Add Employee (`POST /employees`)
  - View All Employees (`GET /employees`)
  - View Employee by ID (`GET /employees/:id`)
  - Update Employee (`PUT /employees/:id`)
  - Delete Employee (`DELETE /employees/:id`)
  - Search Employees (`GET /employees/search`)

### Frontend Features
- **User Authentication**:
  - Login and Signup with form validations.
  - Session management using `localStorage`.
- **Employee Management**:
  - List all employees in a table.
  - Add, update, view details, and delete employees.
  - Search employees by department or position.
- **User Interface**:
  - Styled using Material-UI or Bootstrap.
  - Responsive and professional design.
- **Routing**:
  - Navigate seamlessly using `react-router-dom`.
- **Logout**:
  - Clear user sessions and redirect to login.

### Docker Deployment
- Separate services for backend, frontend, and MongoDB.
- `docker-compose.yml` to orchestrate the application.

---

## Backend Setup

1. **API Development**:
   - Built with Node.js, Express, and MongoDB.
   - Includes RESTful APIs for user and employee data management.
   - Validates inputs and handles error scenarios.

2. **Database**:
   - MongoDB for data storage.
   - Connection handled exclusively on the backend.

---

## Frontend Setup

1. **React Application**:
   - Built using `create-react-app`.
   - Organized with routing and state management.

2. **Components**:
   - Login and Signup screens with controlled components.
   - Employee list, add, update, view details, and delete screens.
   - Search functionality for employees by department/position.

3. **Session Management**:
   - Authentication token stored in `localStorage`.