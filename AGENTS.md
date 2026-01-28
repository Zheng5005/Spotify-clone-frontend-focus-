# Project Overview

This project is a frontend clone of Spotify, built with React, TypeScript, and Vite. It uses Redux for state management, React Router for navigation, and Tailwind CSS for styling. The application allows users to browse and play songs, albums, and artists.

## Building and Running

### Prerequisites

*   Node.js and npm (or yarn)

### Installation

1.  Clone the repository.
2.  Install the dependencies:

    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:5173`.

### Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

This will create a `dist` directory with the production-ready files.

### Linting

To lint the code, run the following command:

```bash
npm run lint
```

## Development Conventions

### State Management

The application uses Redux Toolkit for state management. The player's state is managed in the `playerSlice.ts` file.

### Routing

The application uses React Router for navigation. The routes are defined in the `App.tsx` file.

### Styling

The application uses Tailwind CSS for styling.

### Code Structure

The project follows a standard React project structure:

*   `src/components`: Contains reusable UI components.
*   `src/pages`: Contains the main pages of the application.
*   `src/layouts`: Contains the layout components.
*   `src/store`: Contains the Redux store and slices.
*   `src/data`: Contains mock data for the application.
*   `src/helpers`: Contains helper functions.

## TODOS
- Fix the player progress bar, right now it makes the song sound laggy, maybe it has something to do with global state.
- Make playlist feature
