const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const TodoItemRoute = require("./routes/todoItems");

const app = express();
const PORT = process.env.PORT || 5500;
const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

//Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use("/", TodoItemRoute);

//Connect to Mongo
mongoose
	.connect(process.env.DB_CONNECT)
	.then(() => console.log("Database connected"))
	.catch((err) => console.log(err));

//Add Port and connect to server
app.listen(PORT, () => console.log("Server connected"));
