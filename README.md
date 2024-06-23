# Job Sheeking

## Author
Bikash Malu

## Description
Job Sheeking is a web application built to help users find and apply for jobs. The project is developed using Node.js, Express.js, and MongoDB.

## Features
- User authentication and authorization
- Job listings management
- Job application process
- User profiles and resume upload

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB (v4.x or higher)

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/Bikash-Malu/job-sheeking-backend-code
    ```

2. Navigate to the project directory
    ```bash
    cd job-sheeking
    ```

3. Install dependencies
    ```bash
    npm install
    ```

## Configuration
1. Create a `.env` file in the root directory and add your environment variables:
    ```
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/job-sheeking
    JWT_SECRET=your_jwt_secret
    ```

## Running the Project
To start the project in development mode, use the following command:
```bash
npm run dev
