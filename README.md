# Emploi Apple Store

This project contains a simple Express backend and React frontend for managing Apple products (iPhones, watches, etc.).

## Setup

1. Install Node.js >= 14.
2. Install dependencies in `server` directory:
   ```bash
   cd server
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The server serves the React app from `client` and provides API endpoints under `/api`.

## Features

- **Backend (Express)**: Stores product data in `server/data/products.json`.
  - `GET /api/products` returns the list of products.
  - `POST /api/products` adds a new product.
- **Frontend (React)**: Simple form and table to add and display products.

This is a minimal starting point—feel free to enhance the styling and functionality.
