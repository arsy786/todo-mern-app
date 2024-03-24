import React from "react";

const UpdateForm = ({
	updateItem,
	setIsUpdating,
	setUpdateItemText,
	updateItemText,
}) => {
	const handleKeyDown = (e) => {
		if (e.key === "Escape") {
			setIsUpdating("");
			setUpdateItemText("");
		}
	};

	return (
		<form
			className="update-form"
			onSubmit={(e) => {
				updateItem(e);
			}}
			onKeyDown={handleKeyDown}
		>
			<input
				className="update-new-input"
				type="text"
				placeholder="New Item"
				onChange={(e) => {
					setUpdateItemText(e.target.value);
				}}
				value={updateItemText}
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
						setUpdateItemText("");
					}}
				>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default UpdateForm;
