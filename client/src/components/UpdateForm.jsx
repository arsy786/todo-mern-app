import React from "react";

const UpdateForm = ({
	updateTodo,
	setIsUpdating,
	setUpdateTodoText,
	updateTodoText,
	todo,
}) => {
	const handleKeyDown = (e) => {
		if (e.key === "Escape") {
			setIsUpdating("");
			setUpdateTodoText("");
		}
	};

	const handleUpdateSubmit = (e) => {
		e.preventDefault();
		updateTodo(todo._id, { todo: updateTodoText });
	};

	return (
		<form
			className="update-form"
			onSubmit={handleUpdateSubmit}
			onKeyDown={handleKeyDown}
		>
			<input
				className="update-new-input"
				type="text"
				placeholder="New Todo"
				onChange={(e) => setUpdateTodoText(e.target.value)}
				value={updateTodoText}
			/>
			<div className="button-group">
				<button className="update-new-btn" type="submit">
					Update
				</button>
				<button
					className="cancel-btn"
					type="button"
					onClick={() => {
						setIsUpdating("");
						setUpdateTodoText("");
					}}
				>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default UpdateForm;
