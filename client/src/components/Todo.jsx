import React, { useState } from "react";
import UpdateForm from "./UpdateForm";

const Todo = ({
	todo,
	deleteTodo,
	setIsUpdating,
	setUpdateTodoText,
	isUpdating,
	updateTodo,
	updateTodoText,
}) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isChecked, setIsChecked] = useState(todo.completed);

	const confirmDelete = () => {
		deleteTodo(todo._id);
		setIsDeleting(false);
	};

	const handleClick = () => {
		toggleChecked();
	};

	const toggleChecked = () => {
		const newCheckedStatus = !isChecked;
		setIsChecked(newCheckedStatus);
		updateTodo(todo._id, { completed: newCheckedStatus });
	};

	const renderDeleteConfirmation = () => (
		<>
			<button className="delete-todo" onClick={confirmDelete}>
				Delete
			</button>
			<button className="cancel-btn" onClick={() => setIsDeleting(false)}>
				Cancel
			</button>
		</>
	);

	const renderActionButtons = () => (
		<>
			<button
				className="update-todo"
				onClick={() => {
					setIsUpdating(todo._id);
					setUpdateTodoText(todo.todo);
				}}
			>
				Update
			</button>
			<button className="delete-todo" onClick={() => setIsDeleting(true)}>
				Delete
			</button>
		</>
	);

	return (
		<div className="todo" key={todo._id}>
			{isUpdating === todo._id ? (
				<UpdateForm
					updateTodo={updateTodo}
					setIsUpdating={setIsUpdating}
					setUpdateTodoText={setUpdateTodoText}
					updateTodoText={updateTodoText}
					todo={todo}
				/>
			) : (
				<>
					<div className="checkbox-text-group">
						<div className="todo-checkbox">
							<input
								type="checkbox"
								checked={isChecked}
								onChange={toggleChecked}
							/>
						</div>
						<p
							className="todo-content"
							style={{ textDecoration: isChecked ? "line-through" : "none" }}
							onClick={handleClick}
						>
							{todo.todo}
						</p>
					</div>
					<div className="button-group">
						{isDeleting ? renderDeleteConfirmation() : renderActionButtons()}
					</div>
				</>
			)}
		</div>
	);
};

export default Todo;
