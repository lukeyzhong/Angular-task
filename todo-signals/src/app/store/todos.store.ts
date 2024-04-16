import { inject } from '@angular/core';
import { firstValueFrom, take } from 'rxjs';
import { Todo } from '../todolist/todo.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { TodoService } from '../todolist/todo.service';

type TodosState = {
  todos: Todo[];
};

const initialState: TodosState = {
  todos: [],
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, todoService = inject(TodoService)) => ({
    // async loadAll() {
    //   const todolist = await firstValueFrom(todoService.getTodos());
    //   patchState(store, { todos: todolist });
    //   console.log('it is loaded');
    // },
    loadAll() {
      const todolist = todoService
        .getTodos()
        .pipe(take(1))
        .subscribe((data) => {
          patchState(store, { todos: data });
          console.log('it is loaded');
        });
    },
    deleteTodo(id: any) {
      const todolist = todoService
        .todolistS()
        .filter((ele: any) => +ele.id !== +id);
      patchState(store, { todos: todolist });
    },
    addTodo(input: string) {
      const newtodo: any = {
        userId: 101,
        title: input,
      };
      todoService.addTodo(newtodo);
      const todolist = [newtodo, ...todoService.todolistS()];
      patchState(store, { todos: todolist });
    },
  }))
);
