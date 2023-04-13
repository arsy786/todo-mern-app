Tutorial Guide: [MERN Stack Tutorial - Build Todo App With Node JS, Express, React & MongoDB (YouTube/CurlyBraces)](https://www.youtube.com/watch?v=U4syTDaAKWg)

# Todo MERN App

## Overview

This is a simple Todo MERN (MongoDB, Express, React, Node.js) app that allows users to create, read, update, and delete todos. The app is built using the MERN stack and follows the CRUD (Create, Read, Update, Delete) operations.

## Getting Started

To run this app locally, you need to have the following installed on your machine:

- Node.js
- MongoDB

Once you have these installed, follow these steps:

1. Clone the repository to your local machine:

```sh
git clone https://github.com/arsy786/todo-mern-app.git
```

2. Change directory to the project folder:

```sh
cd todo-mern-app
```

3. Install the required packages:

```sh
npm install
```

4. Create a .env file in the root folder and add the following:

```makefile
PORT=5000
MONGODB_URI=<Your MongoDB connection string>
```

5. Start the server:

```sh
npm run server
```

6. Open another terminal window and start the client:

```sh
npm run client
```

7. Open your browser and navigate to http://localhost:3000

## Server

The server-side code is located in the /server folder. The server has the following API endpoints:

    GET /api/todos - get all todos
    POST /api/todos - create a new todo
    PUT /api/todos/:id - update a todo with the specified ID
    DELETE /api/todos/:id - delete a todo with the specified ID
    PUT /api/todos/:id/complete - mark a todo as complete

## Client

The client-side code is located in the /client folder. The App.js file is the entry point for the React app and has the following structure:

    App component - the top-level component that contains the entire app
        TodoForm component - renders the form for creating a new todo
        TodoList component - renders the list of todos and allows users to update and delete them
            TodoItem component - renders a single todo item
