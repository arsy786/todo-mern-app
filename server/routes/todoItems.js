const router = require("express").Router();
const todoItemsModel = require("../models/todoItems");

//Create item
router.post("/api/item", async (req, res) => {
	try {
		const newItem = new todoItemsModel({
			item: req.body.item,
		});
		const saveItem = await newItem.save();
		res.status(200).json(saveItem);
	} catch (err) {
		res.status(400).json(err);
	}
});

//Get items
router.get("/api/items", async (req, res) => {
	try {
		const allTodoItems = await todoItemsModel.find({});
		res.status(200).json(allTodoItems);
	} catch (err) {
		res.status(400).json(err);
	}
});

//Update item
router.put("/api/item/:id", async (req, res) => {
	try {
		const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
			$set: req.body,
		});
		res.status(200).json(updateItem);
	} catch (err) {
		res.status(400).json(err);
	}
});

//Delete item
router.delete("/api/item/:id", async (req, res) => {
	try {
		const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
		res.status(200).json("Item Deleted");
	} catch (err) {
		res.status(400).json(err);
	}
});

//export router
module.exports = router;
