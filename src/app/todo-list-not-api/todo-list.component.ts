// src/app/todo-list/todo-list.component.ts
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoItem } from './store/todo.reducer';
import { Observable } from 'rxjs';
import { addTodo, deleteTodo, toggleTodo } from './store/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos?: TodoItem[];
  newTodoText: string = "";

  constructor(private store: Store<{ todos: TodoItem[] }>) {
    this.store.select('todos').subscribe(data => {
      this.todos = data
    })
  }

  toggleTodoItem(id: number) {
    this.store.dispatch(toggleTodo({id: id}));
  }

  deleteTodoItem(id: number) {
    this.store.dispatch(deleteTodo({id: id}));
  }

  addTodoItem(text: string) {
    this.store.dispatch(addTodo({text: text}))
  }
}
