# Amogus Website

Welcome to the Amogus website project! This project is a web application that showcases the Amogus decentralized meme coin inspired by the game Among Us. The application is built using React for the frontend and Node.js for the backend.

## Project Structure

The project is organized into two main directories: `client` and `server`.

### Client

The `client` directory contains the frontend application built with React. Here are the key components:

- **public/**: Contains static files such as `index.html` and `favicon.ico`.
- **src/**: Contains the source code for the React application.
  - **animations/**: JavaScript code for handling animations.
  - **assets/**: Contains fonts and images used in the application.
  - **components/**: Reusable components such as Header, Footer, Airdrop, and About Us.
  - **pages/**: Contains page components like Home and NotFound.
  - **context/**: Sets up the React context for global state management.
  - **utils/**: Utility functions for animations.
  - **App.jsx**: The main App component that sets up routing and context.
  - **index.jsx**: The entry point for the React application.
  - **index.css**: Global styles for the application.

### Server

The `server` directory contains the backend application built with Node.js. Here are the key components:

- **controllers/**: Contains the API controller for handling requests and responses.
- **models/**: Defines the User model for the database.
- **routes/**: Defines the API routes for the backend.
- **config/**: Contains the database configuration.
- **middleware/**: Contains authentication middleware.
- **server.js**: The entry point for the backend application.

## Getting Started

To get started with the Amogus website, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd amogus-website
   ```

2. **Install dependencies**:
   - For the client:
     ```
     cd client
     npm install
     ```
   - For the server:
     ```
     cd server
     npm install
     ```

3. **Run the applications**:
   - Start the server:
     ```
     cd server
     node server.js
     ```
   - Start the client:
     ```
     cd client
     npm start
     ```

## Features

- Responsive design with animations.
- Airdrop feature to engage users.
- About Us section to provide information about the project.
- Error handling for non-existent routes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.