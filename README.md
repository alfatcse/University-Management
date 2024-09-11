# University Management System - Microservices Architecture

This project is a **University Management System** developed using a microservices architecture, allowing for modularity, scalability, and maintainability. The project consists of multiple services responsible for managing different university operations such as student creation, semester registration, result creation, payment handling, and more.

## Table of Contents
- [Architecture Overview](#architecture-overview)
- [Microservices](#microservices)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Running the Services](#running-the-services)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Architecture Overview

The project is developed using a **microservices architecture**, where each service is responsible for a specific function. The services communicate with each other through **REST APIs** and use **Redis** for caching. For data persistence, we use **MongoDB** and **PostgreSQL** with **Prisma** and **Mongoose** as the Object Relational Mapper (ORM). 

The API Gateway serves as the entry point for the system, routing requests to the appropriate services.

## Microservices

### 1. **University-Management-API-Gateway**
   - Responsible for routing requests to the correct microservice.
   - Handles API versioning, rate limiting, and logging.
   - Serves as the central hub for all incoming requests from the frontend.

### 2. **University-Management-Auth-Service**
   - Handles authentication and authorization.
   - Implements JWT (JSON Web Token) based authentication.
   - Manages user roles such as students, teachers, administrators.

### 3. **University-Management-Core-Service**
   - Manages core university functionalities:
     - Student creation
     - Semester registration
     - Result creation
     - Assigning teachers to courses
     - Classroom assignments
     - Administration member assignments

### 4. **University-Management-Payment-Service**
   - Manages semester payments and other university-related financial transactions.
   - Integrates with payment gateways.

## Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: Node.js, Express.js
- **Microservices**: Developed in a modular and decoupled manner using Express.js
- **Databases**:
  - **MongoDB**: Used with the **Mongoose** ORM for NoSQL database interactions.
  - **PostgreSQL**: Used with **Prisma** ORM for relational database interactions.
- **Cache**: Redis
- **Authentication**: JWT (JSON Web Tokens)
- **Code Quality & Pre-commit Hooks**: Husky
- **Containerization**: Docker (for deploying microservices)

## Features

### University Management System provides a variety of features, including:

1. **Student Creation**: Create and manage student profiles and enrollment.
2. **Semester Registration**: Register students for semesters and courses.
3. **Result Creation**: Manage and publish student results for each semester.
4. **Teacher Assignment**: Assign teachers to specific courses based on their expertise.
5. **Classroom Assignment**: Assign classrooms to courses and scheduling.
6. **Administration Member Assignment**: Add and assign administration members to different roles.
7. **Semester Payment**: Manage student payments for course registration, semester fees, and other related transactions.
8. **Other Features**: Various other functionalities that are typically required in a university management system, such as timetable scheduling, notifications, and more.

## Installation

To set up this project locally, follow the steps below:

### Prerequisites

Before you begin, ensure that you have the following software installed:

- **Node.js** (v16 or later)
- **Docker** (optional but recommended for running services in containers)
- **Redis**
- **MongoDB**
- **PostgreSQL**

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/your-repo/university-management-system.git
cd university-management-system
```

### Step 2: Install Dependencies

Each microservice has its own dependencies, which need to be installed separately:

#### 1.API Gateway
```bash
cd university-management-API-Gateway
npm install
```
#### 2.Auth Service
```bash
cd university-management-auth-service
npm install
```
