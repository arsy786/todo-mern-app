# Todo MERN App

This is a simple Todo MERN (MongoDB, Express, React, Node.js) app that follows the CRUD (Create, Read, Update, Delete) operations for the todos.
This project was built following the [MERN Stack Tutorial - Build Todo App With Node JS, Express, React & MongoDB (YouTube/CurlyBraces)](https://www.youtube.com/watch?v=U4syTDaAKWg) tutorial on YouTube.

## Features

The app provides the following features:

    - Users can create, read, update, and delete todos
    - Todos are stored in a MongoDB database

Note: The app requires a MongoDB database to be running in order to work properly.

## Installation

To install this application, you will need to have Node.js and MongoDB installed on your system.

Once you have these installed, follow these steps:

1. Clone the repository to your local machine:

```sh
git clone https://github.com/arsy786/todo-mern-app.git
```

2. Change directory to the project folders (Server and Client) and install the required packages:

```sh
cd todo-mern-app/server && npm install
```

```sh
cd todo-mern-app/client && npm install
```

3. Create a .env file in the Server folder and add the following:

```makefile
PORT=<Your Port number>
MONGODB_URI=<Your MongoDB connection string>
```

- For example:
```makefile
PORT=5500
MONGODB_URI=mongodb+srv://<username>:<password>@mern-apps.jpfvcfy.mongodb.net/<databaseName>?retryWrites=true&w=majority
```

Where you add your username, password and databaseName (optional) from your MongoDB connection.

5. While in the Server directory, start the Server using:

```sh
npm run start
```

6. Open another terminal window, change directory to the Client, and start the client using:

```sh
npm run start
```

## Usage

Once the server is running, you can access the application at http://localhost:3000.

### Server (Backend)

The backend provides a REST API for managing todos. Here are the available endpoints:

    GET /api/items - get all todos
    POST /api/item - create a new todo
    PUT /api/item/:id - update a todo by ID
    DELETE /api/item/:id - delete a todo by ID
    
### Client (Frontend)

The app provides the following features:

    - View a list of todos
    - Create a new todo
    - Update a todo
    - Delete a todo

Note: The app requires the backend server to be running in order to work properly.
