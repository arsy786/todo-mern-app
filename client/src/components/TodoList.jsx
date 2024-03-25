import Todo from "./Todo";

const TodoList = ({
	todoList,
	deleteTodo,
	isUpdating,
	setIsUpdating,
	setUpdateTodoText,
	updateTodo,
	updateTodoText,
}) => {
	return (
		<div className="todo-list">
			{todoList.map((todo) => (
				<Todo
					key={todo._id}
					todo={todo}
					deleteTodo={deleteTodo}
					setIsUpdating={setIsUpdating}
					setUpdateTodoText={setUpdateTodoText}
					isUpdating={isUpdating}
					updateTodo={updateTodo}
					updateTodoText={updateTodoText}
				/>
			))}
		</div>
	);
};

export default TodoList;
