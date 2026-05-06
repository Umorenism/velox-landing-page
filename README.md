# Velox Landing Page

A modern, responsive landing page built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Fast development with Vite
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- React Router for navigation
- React Icons for beautiful icons

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
src/
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles with Tailwind
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons

## Troubleshooting

- If you encounter issues with dependencies, try deleting `node_modules` and `package-lock.json`, then run `npm install` again.
- Ensure Node.js version is 18 or higher.
- For Tailwind issues, check that `tailwind.config.js` and `postcss.config.js` are properly configured.