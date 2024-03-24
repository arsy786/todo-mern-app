const TodoForm = ({ itemText, setItemText, addItem, error }) => {
	return (
		<form className="form" onSubmit={(e) => addItem(e)}>
			<input
				type="text"
				className={error ? "input-error" : ""}
				placeholder="Add Todo Item"
				onChange={(e) => {
					setItemText(e.target.value);
				}}
				value={itemText}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default TodoForm;
