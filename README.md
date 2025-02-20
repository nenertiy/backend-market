# Backend Market

Backend Market is the server-side application for an online marketplace, developed using [NestJS](https://nestjs.com/). It provides a RESTful API to interact with the frontend application, [frontend-market](https://github.com/nenertiy/frontend-market), built with [Next.js](https://nextjs.org/).

## Features

- User authentication and authorization
- Product and order management
- Review and rating system for products
- Seller registration for product creation
- API documentation using Swagger

## Technologies

- **NestJS** – A progressive Node.js framework for building scalable applications.
- **TypeScript** – Ensures static typing and code reliability.
- **Prisma** – A modern ORM for database interactions.
- **Docker** – Simplifies deployment with containerization.
- **Swagger** – Provides API documentation.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nenertiy/backend-market.git
   cd backend-market
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file based on `.env.example` and configure the necessary environment variables such as database connection settings.

4. **Start the application:**

   - **Development mode:**
     ```bash
     npm run start:dev
     ```

## API Documentation

Once the application is running, the API documentation can be accessed at `http://localhost:3000/api`.

## Frontend Integration

To fully utilize this backend, deploy the corresponding frontend application available at [frontend-market](https://github.com/nenertiy/frontend-market). Ensure the frontend is correctly configured to interact with the API.

