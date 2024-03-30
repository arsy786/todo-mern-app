import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setError } from "../reducers/todoSlice";

const TodoForm = () => {
	const [todoText, setTodoText] = useState("");
	const dispatch = useDispatch();
	const error = useSelector((state) => state.todo.error);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(todoText));
		setTodoText("");
	};

	if (error) {
		setTimeout(() => dispatch(setError(null)), 400);
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				type="text"
				className={error ? "input-error" : ""}
				placeholder="Add Todo"
				onChange={(e) => setTodoText(e.target.value)}
				value={todoText}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default TodoForm;
