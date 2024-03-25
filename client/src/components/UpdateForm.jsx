import React from "react";

const UpdateForm = ({
	updateTodo,
	setIsUpdating,
	setUpdateTodoText,
	updateTodoText,
}) => {
	const handleKeyDown = (e) => {
		if (e.key === "Escape") {
			setIsUpdating("");
			setUpdateTodoText("");
		}
	};
	return (
		<form
			className="update-form"
			onSubmit={(e) => updateTodo(e)}
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
