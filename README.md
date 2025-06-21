# Restaurant Billing System

A comprehensive restaurant management system built with React and Vite.

## Features

- Dashboard with analytics
- Menu management
- Inventory tracking
- Order management
- Table reservations
- Employee management
- Hotel gallery
- Reports and analytics
- Kitchen display system

## Tech Stack

- **Frontend**: React 18, Vite
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

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

The application will be available at `http://localhost:3000`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── services/           # API services and utilities
├── hooks/              # Custom React hooks
├── config/             # Configuration files
├── styles/             # Global styles
├── assets/             # Static assets
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## Migration from Create React App

This project has been migrated from Create React App to Vite for improved performance and faster development experience.

### Key Changes

- Replaced `react-scripts` with `vite`
- Updated build configuration
- Moved `index.html` to root directory
- Renamed entry point to `main.jsx`
- Updated import paths and file extensions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start backend server (if available)

## Backend Integration

The frontend is configured to proxy API requests to `http://localhost:5000`. Make sure your backend server is running on this port for full functionality. 