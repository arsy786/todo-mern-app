import TodoItem from "./TodoItem";

const TodoList = ({
	listItems,
	deleteItem,
	isUpdating,
	setIsUpdating,
	setUpdateItemText,
	updateItem,
	updateItemText,
}) => {
	return (
		<div className="todo-listItems">
			{listItems.map((item) => (
				<TodoItem
					key={item._id}
					item={item}
					deleteItem={deleteItem}
					setIsUpdating={setIsUpdating}
					setUpdateItemText={setUpdateItemText}
					isUpdating={isUpdating}
					updateItem={updateItem}
					updateItemText={updateItemText}
				/>
			))}
		</div>
	);
};

export default TodoList;
