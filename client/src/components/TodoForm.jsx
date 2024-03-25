const TodoForm = ({ todoText, setTodoText, addTodo, error }) => {
	return (
		<form className="form" onSubmit={(e) => addTodo(e)}>
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
