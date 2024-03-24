# Todo MERN App

This is a simple Todo MERN (MongoDB, Express, React, Node.js) app that allows users to create, read, update, and delete todos. The app is built using the MERN stack and follows the CRUD (Create, Read, Update, Delete) operations.

<!-- Tutorial Guide: [MERN Stack Tutorial - Build Todo App With Node JS, Express, React & MongoDB (YouTube/CurlyBraces)](https://www.youtube.com/watch?v=U4syTDaAKWg) -->

## Getting Started

This project is divided into two main parts: the server (API) and the client (UI). Follow these steps to set up and run both parts of the application.

### Prerequisites

- Node.js
- MongoDB

### Cloning the Repo

1. Open your terminal or command prompt.

2. Clone the repository using Git:

   ```bash
   git clone https://github.com/arsy786/todo-mern-app.git
   ```

3. Navigate to the cloned repository's root directory

   ```bash
   cd todo-mern-app
   ```

### Setting up the Server

1. From the root directory, navigate to the server directory:

   ```bash
   cd server
   ```

2. Install the required Node.js modules:

   ```bash
   npm install
   ```

3. Create a .env file in the server directory and add the following:

   ```env
   PORT=5500
   DB_CONNECT=<Your MongoDB connection string>
   ```

4. Start the server:

   ```bash
   npm run start
   ```

   The server should now be running on `http://localhost:5500`.

### Setting up the Client

1. Open a new terminal or command prompt window.

2. From the root directory, navigate to the client directory:

   ```bash
   cd client
   ```

3. Install the required Node.js modules:

   ```bash
   npm install
   ```

4. Start the client:

   ```bash
   npm run start
   ```

   The client should now be running on `http://localhost:3000`.

### Accessing the Application

After starting both the backend and frontend servers, you can access the web application by navigating to `http://localhost:3000` in your web browser. Ensure both servers are running concurrently to allow the frontend to communicate with the backend effectively.

## Server

The backend provides a REST API for managing todos. Here are the available endpoints:

    GET /api/items - get all todos
    POST /api/item - create a new todo
    PUT /api/item/:id - update a todo with the specified ID
    DELETE /api/item/:id - delete a todo with the specified ID

## Client

The client-side code is located in the /client folder. The App.js file is the entry point for the React app and has the following structure:

    App component - the top-level component that contains the entire app
        TodoForm component - renders the form for creating a new todo
        TodoList component - renders the list of todos and allows users to update and delete them
            TodoItem component - renders a single todo item
