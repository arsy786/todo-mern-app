import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../reducers/todoSlice";
import UpdateForm from "./UpdateForm";

const Todo = ({ todo }) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [updatingTodoId, setUpdatingTodoId] = useState("");
	const [isChecked, setIsChecked] = useState(todo.completed);

	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTodo(todo._id));
		setIsDeleting(false);
	};

	const handleCheckboxChange = () => {
		const newCheckedStatus = !isChecked;
		setIsChecked(newCheckedStatus);
		dispatch(
			updateTodo({
				id: todo._id,
				changes: {
					completed: newCheckedStatus,
				},
			})
		);
	};

	const handleClick = () => {
		handleCheckboxChange();
	};

	const renderDeleteConfirmation = () => (
		<>
			<button className="delete-todo" onClick={handleDelete}>
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
				onClick={() => setUpdatingTodoId(todo._id)}
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
			{updatingTodoId === todo._id ? (
				<UpdateForm todo={todo} setUpdatingTodoId={setUpdatingTodoId} />
			) : (
				<>
					<div className="checkbox-text-group">
						<div className="todo-checkbox">
							<input
								type="checkbox"
								checked={todo.completed}
								onChange={handleCheckboxChange}
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
