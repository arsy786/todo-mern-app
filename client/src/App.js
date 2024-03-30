import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos } from "./reducers/todoSlice";

function App() {
	const dispatch = useDispatch();
	const { todos } = useSelector((state) => state.todo);

	useEffect(() => {
		dispatch(getTodos());
	}, [dispatch]);

	return (
		<div className="App">
			<h1>Todo List</h1>
			<TodoForm />
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
