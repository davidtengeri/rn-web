import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    filter: 'All items',
  },
  reducers: {
    addItem(state, { payload }) {
      state.todos.push(payload);
    },
    saveItem(state, { payload }) {
      state.todos = [
        ...state.todos.filter((item) => item.id !== payload.id),
        payload
      ];
    },
    filterChanged(state, { payload }) {
      state.filter = payload;
    }
  },
});

export const {
  addItem, saveItem, filterChanged,
} = todoSlice.actions;

export default todoSlice.reducer;