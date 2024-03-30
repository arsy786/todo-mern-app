const router = require("express").Router();
const Todo = require("../models/todo.model");

// Create todo
router.post("/api/todo", async (req, res) => {
	try {
		const newTodo = new Todo({
			todo: req.body.todo,
		});
		const saveTodo = await newTodo.save();
		res.status(200).json(saveTodo);
	} catch (err) {
		res.status(400).json(err);
	}
});

// Get todos
router.get("/api/todos", async (req, res) => {
	try {
		const allTodoTodos = await Todo.find({});
		res.status(200).json(allTodoTodos);
	} catch (err) {
		res.status(400).json(err);
	}
});

// Update todo
router.put("/api/todo/:id", async (req, res) => {
	try {
		const updateTodo = await Todo.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updateTodo);
	} catch (err) {
		res.status(400).json(err);
	}
});

// Delete todo
router.delete("/api/todo/:id", async (req, res) => {
	try {
		const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
		res.status(200).json("Todo Deleted");
	} catch (err) {
		res.status(400).json(err);
	}
});

//export router
module.exports = router;
