// src/app/todo-list/store/todo.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo, toggleTodo } from './todo.actions';

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export const initialState: TodoItem[] = [
  {
    id: 1,
    text: "ninh",
    completed: true
  }
];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => [...state, { id: state.length + 1, text, completed: false }]),
  on(deleteTodo, (state, { id }) => state.filter(item => item.id !== id)),
  on(toggleTodo, (state, { id }) =>
    state.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
  )
);
