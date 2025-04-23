# Amogus Website Client

This is the client-side application for the Amogus project, built using React. The application features a modern design inspired by the game Among Us and includes various components, animations, and routing.

## Project Structure

The project is organized as follows:

```
amogus-website
├── client
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src
│   │   ├── animations
│   │   │   └── index.js
│   │   ├── assets
│   │   │   ├── fonts
│   │   │   └── images
│   │   ├── components
│   │   │   ├── Footer
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.css
│   │   │   ├── Header
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.css
│   │   │   ├── Airdrop
│   │   │   │   ├── Airdrop.jsx
│   │   │   │   └── Airdrop.css
│   │   │   └── AboutUs
│   │   │       ├── AboutUs.jsx
│   │   │       └── AboutUs.css
│   │   ├── pages
│   │   │   ├── Home
│   │   │   │   ├── Home.jsx
│   │   │   │   └── Home.css
│   │   │   └── NotFound
│   │   │       ├── NotFound.jsx
│   │   │       └── NotFound.css
│   │   ├── context
│   │   │   └── AppContext.js
│   │   ├── utils
│   │   │   └── animations.js
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── index.css
│   ├── package.json
│   └── README.md
```

## Getting Started

To get started with the client application, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd amogus-website/client
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- **Responsive Design:** The application is designed to be responsive and works well on various screen sizes.
- **Animations:** Smooth animations are implemented throughout the application for a better user experience.
- **Routing:** The application uses React Router for navigation between different pages.
- **Context API:** Global state management is handled using React's Context API.

## Components

- **Header:** Displays the navigation links and branding.
- **Footer:** Contains copyright information and additional links.
- **Airdrop:** Provides information about the airdrop feature.
- **About Us:** Gives details about the project and its purpose.
- **Home:** The landing page of the application.
- **Not Found:** Displays a message when a route is not found.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.