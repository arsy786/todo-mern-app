import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../reducers/todoSlice";
import UpdateForm from "./UpdateForm";

const Todo = ({ todo }) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [updatingTodoId, setUpdatingTodoId] = useState("");
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTodo(todo._id));
		setIsDeleting(false);
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
					<p className="todo-content">{todo.todo}</p>
					<div className="button-group">
						{isDeleting ? renderDeleteConfirmation() : renderActionButtons()}
					</div>
				</>
			)}
		</div>
	);
};

export default Todo;
