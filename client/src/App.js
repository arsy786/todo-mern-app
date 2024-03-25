import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
	const [itemText, setItemText] = useState("");
	const [listItems, setListItems] = useState([]);
	const [isUpdating, setIsUpdating] = useState("");
	const [updateItemText, setUpdateItemText] = useState("");
	const [error, setError] = useState(false);

	const addItem = async (e) => {
		e.preventDefault();
		if (!itemText.trim()) {
			setError(true);
			setTimeout(() => setError(false), 400);
			return;
		}
		try {
			const res = await axios.post("http://localhost:5500/api/item", {
				item: itemText,
			});
			setListItems((prev) => [...prev, res.data]);
			setItemText("");
		} catch (err) {
			setError(true);
			setTimeout(() => setError(false), 400);
			console.log(err);
		}
	};

	useEffect(() => {
		const getItemsList = async () => {
			try {
				const res = await axios.get("http://localhost:5500/api/items");
				setListItems(res.data);
				console.log("render");
			} catch (err) {
				console.log(err);
			}
		};
		getItemsList();
	}, []);

	const deleteItem = async (id) => {
		try {
			const res = await axios.delete(`http://localhost:5500/api/item/${id}`);
			const newListItems = listItems.filter((item) => item._id !== id);
			setListItems(newListItems);
			console.log(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const updateItem = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.put(
				`http://localhost:5500/api/item/${isUpdating}`,
				{ item: updateItemText }
			);
			console.log(res.data);
			const updatedItemIndex = listItems.findIndex(
				(item) => item._id === isUpdating
			);
			const updatedItem = (listItems[updatedItemIndex].item = updateItemText);
			console.log(updatedItem);
			setUpdateItemText("");
			setIsUpdating("");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="App">
			<h1>Todo List</h1>
			<TodoForm
				itemText={itemText}
				setItemText={setItemText}
				addItem={addItem}
				error={error}
			/>
			<TodoList
				listItems={listItems}
				deleteItem={deleteItem}
				setIsUpdating={setIsUpdating}
				setUpdateItemText={setUpdateItemText}
				isUpdating={isUpdating}
				updateItem={updateItem}
				updateItemText={updateItemText}
			/>
		</div>
	);
}

export default App;
