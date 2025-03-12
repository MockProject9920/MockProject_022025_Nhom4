# MockProject_022025_Nhom4/backend/README.md

# Backend Documentation

## Overview
This project is a Node.js and React application designed for managing insurance policies and claims. The backend is built using Node.js with Express and interacts with a database through an ORM (Sequelize for SQL databases or Mongoose for MongoDB).

## Directory Structure
```
backend
├── src
│   ├── config          # Configuration files for the application
│   ├── models          # Database models
│   ├── controllers     # Request handling logic
│   ├── services        # Business logic
│   ├── middlewares     # Middleware functions
│   ├── routes          # API route definitions
│   ├── utils           # Utility functions
│   ├── app.js          # Application setup
│   └── index.js        # Entry point for the application
├── tests               # Test cases for the API
├── docs                # API documentation
├── .env                # Environment variables
├── .gitignore          # Files to ignore in git
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Environment Variables
Create a `.env` file in the backend directory with the following variables:
```
DB_URI=<your-database-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=3000
```

## Running the Application
To start the server, run:
```
npm start
```

## Testing
To run the tests, use:
```
npm test
```

## Recommended Libraries
- **Express**: Web framework for Node.js.
- **Sequelize** or **Mongoose**: ORM for database interaction.
- **JWT**: For authentication.
- **Bcrypt**: For password hashing.
- **Winston** or **Pino**: For logging.
- **dotenv**: For loading environment variables.

## API Endpoints
Refer to the documentation in the `docs` directory for detailed API endpoint information.

## License
This project is licensed under the MIT License.