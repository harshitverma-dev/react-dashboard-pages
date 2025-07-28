# React Dashboard

## Project Overview
This is a React-based dashboard application built with Vite as the build tool. It uses modern React (v19) along with Redux Toolkit for state management, React Router for routing, TailwindCSS for styling, and various charting libraries like Recharts and PrimeReact for UI components.
Tech stack - HTML5, CSS3, JavaScript(ES6+), React, Redux, React Router, TailwindCSS, Recharts, PrimeReact.

---

## Folder Structure

```
react-dashboard/
├── public/                     # Static assets served directly
├── src/                        # Source files
│   ├── assets/                 # Images, SVGs, and other static assets
│   ├── components/             # Reusable React components
│   ├── data/                   # Static data files
│   ├── features/               # Redux slices and feature-specific logic
│   ├── layouts/                # Layout components (Sidebar, Header, etc.)
│   ├── pages/                  # Page components for routing
│   ├── routers/                # React Router setup
│   ├── theme/                  # Theme provider and styling context
│   ├── app/                    # Redux store setup
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point for React app
│   └── index.css               # Global CSS styles
├── .gitignore                  # Git ignore rules
├── package.json                # Project metadata and dependencies
├── tailwind.config.js          # TailwindCSS configuration
├── vite.config.js              # Vite build configuration
└── README.md                   # Project documentation
```

---

## Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js) or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/harshitverma-dev/react-dashboard-pages.git
   cd react-dashboard-pages
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the Vite development server and you can view the app at `http://localhost:5173` (or the port shown in your terminal).

4. To build the project for production:
   ```bash
   npm run build
   ```

5. To preview the production build locally:
   ```bash
   npm run preview
   ```

---

## Available Scripts

- `npm run dev` - Starts the development server with hot module replacement.
- `npm run build` - Builds the app for production to the `dist` folder.
- `npm run preview` - Serves the production build locally for preview.
- `npm run lint` - Runs ESLint to check for code quality and style issues.

---

## Additional Notes

- Styling is done using TailwindCSS. Configuration can be found in `tailwind.config.js`.
- State management uses Redux Toolkit, with slices located in `src/features/`.
- Routing is handled by React Router, configured in `src/routers/`.
- Charts and UI components use libraries like Recharts and PrimeReact.
- Static assets like images and SVGs are stored in `src/assets/`.

---

This documentation provides a clear overview of the project structure and how to get started with development and production builds.


Deployed link : -
https://react-dashboard-pages-by-harshit.netlify.app/