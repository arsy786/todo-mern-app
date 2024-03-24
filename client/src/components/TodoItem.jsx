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
						{isDeleting ? (
							<>
								<button className="delete-item" onClick={confirmDelete}>
									Delete
								</button>
								<button
									className="cancel-btn"
									onClick={() => setIsDeleting(false)}
								>
									Cancel
								</button>
							</>
						) : (
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
								<button
									className="delete-item"
									onClick={() => setIsDeleting(true)}
								>
									Delete
								</button>
							</>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default TodoItem;
