import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
	const [todoText, setTodoText] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [isUpdating, setIsUpdating] = useState("");
	const [updateTodoText, setUpdateTodoText] = useState("");
	const [error, setError] = useState(false);

	const addTodo = async (e) => {
		e.preventDefault();
		if (!todoText.trim()) {
			setError(true);
			setTimeout(() => setError(false), 400);
			return;
		}
		try {
			const res = await axios.post("http://localhost:5500/api/todo", {
				todo: todoText,
			});
			setTodoList((prev) => [...prev, res.data]);
			setTodoText("");
		} catch (err) {
			setError(true);
			setTimeout(() => setError(false), 400);
			console.log(err);
		}
	};

	useEffect(() => {
		const getTodosList = async () => {
			try {
				const res = await axios.get("http://localhost:5500/api/todos");
				setTodoList(res.data);
				console.log("render");
			} catch (err) {
				console.log(err);
			}
		};
		getTodosList();
	}, []);

	const deleteTodo = async (id) => {
		try {
			const res = await axios.delete(`http://localhost:5500/api/todo/${id}`);
			const newTodoList = todoList.filter((todo) => todo._id !== id);
			setTodoList(newTodoList);
			console.log(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const updateTodo = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.put(
				`http://localhost:5500/api/todo/${isUpdating}`,
				{ todo: updateTodoText }
			);
			console.log(res.data);
			const updatedTodoIndex = todoList.findIndex(
				(todo) => todo._id === isUpdating
			);
			const updatedTodo = (todoList[updatedTodoIndex].todo = updateTodoText);
			console.log(updatedTodo);
			setUpdateTodoText("");
			setIsUpdating("");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="App">
			<h1>Todo List</h1>
			<TodoForm
				todoText={todoText}
				setTodoText={setTodoText}
				addTodo={addTodo}
				error={error}
			/>
			<TodoList
				todoList={todoList}
				deleteTodo={deleteTodo}
				setIsUpdating={setIsUpdating}
				setUpdateTodoText={setUpdateTodoText}
				isUpdating={isUpdating}
				updateTodo={updateTodo}
				updateTodoText={updateTodoText}
			/>
		</div>
	);
}

export default App;
