import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../reducers/todoSlice";

const UpdateForm = ({ todo, setUpdatingTodoId }) => {
	const [updateText, setUpdateText] = useState(todo.todo);
	const dispatch = useDispatch();

	const handleKeyDown = (e) => {
		if (e.key === "Escape") {
			setUpdatingTodoId("");
			setUpdateText("");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			updateTodo({
				id: todo._id,
				changes: {
					todo: updateText,
				},
			})
		).then(() => {
			setUpdateText("");
			setUpdatingTodoId("");
		});
	};

	return (
		<form
			className="update-form"
			onSubmit={handleSubmit}
			onKeyDown={handleKeyDown}
		>
			<input
				className="update-new-input"
				type="text"
				placeholder="New Todo"
				onChange={(e) => setUpdateText(e.target.value)}
				value={updateText}
			/>
			<div className="button-group">
				<button className="update-new-btn" type="submit">
					Update
				</button>
				<button
					className="cancel-btn"
					type="button"
					onClick={() => {
						setUpdatingTodoId("");
						setUpdateText("");
					}}
				>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default UpdateForm;
