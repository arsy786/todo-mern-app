import React, { useState } from "react";
import UpdateForm from "./UpdateForm";

const TodoItem = ({
	item,
	deleteItem,
	setIsUpdating,
	setUpdateItemText,
	isUpdating,
	updateItem,
	updateItemText,
}) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const confirmDelete = () => {
		deleteItem(item._id);
		setIsDeleting(false);
	};

	// Function to render delete confirmation buttons (Delete and Cancel)
	const renderDeleteConfirmation = () => (
		<>
			<button className="delete-item" onClick={confirmDelete}>
				Delete
			</button>
			<button className="cancel-btn" onClick={() => setIsDeleting(false)}>
				Cancel
			</button>
		</>
	);

	// Function to render the normal buttons (Update and Delete)
	const renderActionButtons = () => (
		<>
			<button
				className="update-item"
				onClick={() => {
					setIsUpdating(item._id);
					setUpdateItemText(item.item);
				}}
			>
				Update
			</button>
			<button className="delete-item" onClick={() => setIsDeleting(true)}>
				Delete
			</button>
		</>
	);

	return (
		<div className="todo-item" key={item._id}>
			{isUpdating === item._id ? (
				<UpdateForm
					updateItem={updateItem}
					setIsUpdating={setIsUpdating}
					setUpdateItemText={setUpdateItemText}
					updateItemText={updateItemText}
				/>
			) : (
				<>
					<p className="item-content">{item.item}</p>
					<div className="button-group">
						{isDeleting ? renderDeleteConfirmation() : renderActionButtons()}
					</div>
				</>
			)}
		</div>
	);
};

export default TodoItem;
