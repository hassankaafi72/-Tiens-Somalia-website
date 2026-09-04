# TIENS Somalia Website

A single page product catalogue for TIENS health and wellness products in Somalia.

## Features

1. Responsive navigation and landing page sections for company information, business opportunity content, and contact details.
2. A catalogue of six products with categories, descriptions, and image links.
3. Full screen product detail views rendered from Markdown held in the application source.
4. Motion based interface transitions and responsive layouts.

## Technology

The frontend uses React 19, TypeScript, Vite, Tailwind CSS, Motion, React Markdown, and Lucide React.

## Project Structure

`src/App.tsx` contains the application interface, product catalogue, and product detail content. `src/index.css` contains global styles, and `src/main.tsx` starts the React application.

## Run Locally

Node.js and npm are required.

```bash
npm install
npm run dev
```

The development server is configured for port 3000. Create a production build with `npm run build`, preview it with `npm run preview`, and run TypeScript checks with `npm run lint`.

## Current Limitations

This is a static frontend. Product information, contact details, and external image URLs are defined in `src/App.tsx`. It has no backend, product ordering flow, content management system, or verified product data source.
