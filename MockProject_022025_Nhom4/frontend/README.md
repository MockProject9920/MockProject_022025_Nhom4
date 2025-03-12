# MockProject_022025_Nhom4/frontend/README.md

# Frontend Documentation

## Overview

This project is a React-based Single Page Application (SPA) designed to work in conjunction with a Node.js backend. It provides a user-friendly interface for managing insurance policies and claims.

## Project Structure

```
frontend
├── public                # Static files (favicon, manifest.json)
├── src                   # Source code for the frontend
│   ├── assets            # Images, fonts, icons, and common styles
│   ├── components        # Reusable UI components
│   ├── layouts           # Layout components for different user views
│   ├── pages             # Main application pages
│   ├── redux             # State management with Redux
│   ├── services          # API service calls
│   ├── hooks             # Custom hooks
│   ├── utils             # Utility functions
│   ├── styles            # CSS or Tailwind configuration
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point for rendering the application
├── .env                  # Environment variables
├── vite.config.js        # Vite configuration
├── package.json          # Project dependencies
└── README.md             # This documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd MockProject_022025_Nhom4/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root of the `frontend` directory and add the following environment variables:
   ```
   API_URL=<your_api_url>
   ```

## Running the Application

To start the development server, run:
```
npm run dev
```

The application will be available at `http://localhost:3000` (or the port specified in your Vite configuration).

## Recommended Libraries

- **React**: For building user interfaces.
- **React Router**: For routing within the application.
- **Redux Toolkit or Zustand**: For state management.
- **Axios**: For making HTTP requests.
- **Vite**: For fast development and build tooling.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.