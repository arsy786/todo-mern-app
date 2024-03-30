import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	todos: [],
	status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
};

export const getTodos = createAsyncThunk("todo/getTodos", async () => {
	const response = await axios.get("http://localhost:5500/api/todos");
	return response.data;
});

export const addTodo = createAsyncThunk("todo/addTodo", async (todoText) => {
	const response = await axios.post("http://localhost:5500/api/todo", {
		todo: todoText,
	});
	return response.data;
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
	await axios.delete(`http://localhost:5500/api/todo/${id}`);
	return id;
});

export const updateTodo = createAsyncThunk(
	"todo/updateTodo",
	async ({ id, todoText }) => {
		const response = await axios.put(`http://localhost:5500/api/todo/${id}`, {
			todo: todoText,
		});
		return response.data;
	}
);

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		setError: (state, action) => {
			state.error = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTodos.fulfilled, (state, action) => {
				state.todos = action.payload;
			})
			.addCase(addTodo.fulfilled, (state, action) => {
				state.todos.push(action.payload);
				state.error = false;
			})
			.addCase(addTodo.rejected, (state) => {
				state.error = true;
			})
			.addCase(deleteTodo.fulfilled, (state, action) => {
				const index = state.todos.findIndex(
					(item) => item._id === action.payload
				);
				if (index !== -1) {
					state.todos.splice(index, 1);
				}
			})
			.addCase(updateTodo.fulfilled, (state, action) => {
				const index = state.todos.findIndex(
					(item) => item._id === action.payload._id
				);
				if (index !== -1) {
					state.todos[index] = action.payload;
				}
			});
	},
});

export const { setError } = todoSlice.actions;

export default todoSlice.reducer;
