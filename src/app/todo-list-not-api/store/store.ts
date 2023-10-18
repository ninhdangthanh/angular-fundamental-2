import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo.reducer';

export const appReducer: ActionReducerMap<any> = {
  todos: todoReducer
};

