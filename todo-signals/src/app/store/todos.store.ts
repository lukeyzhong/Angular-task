import { computed, inject } from '@angular/core';
import { firstValueFrom, take } from 'rxjs';
import { Todo } from '../todolist/todo.model';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { TodoService } from '../todolist/todo.service';

export type TodosFilter =
"all" | "pending" | "completed"

type TodosState = {
  todos: Todo[];
  filter: TodosFilter
};

const initialState: TodosState = {
  todos: [],
  filter: 'all',
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
      todoService
        .getTodos()
        .pipe(take(1))
        .subscribe((data) => {
          patchState(store, { todos: data });
          console.log('it is loaded');
        });
    },
    deleteTodo(id: any) {
      const todolist = store.todos()
        .filter((ele: any) => +ele.id !== +id);
      patchState(store, { todos: todolist });
      todoService.deleteTodo(id).subscribe();
    },
    addTodo(input: string) {
      const newtodo: any = {
        title: input,
        id: 201,
      };
      const todolist = [newtodo, ...store.todos()];
      patchState(store, { todos: todolist });
      todoService.addTodo(newtodo);
    },
    updateTodo(id: any, completed: boolean){
      todoService.updateTodo(id, completed);
      patchState(store, (state) => ({
        todos: state.todos.map(todo => 
          todo.id == id ? {...todo, completed} : todo
        )
      }))
    },
    udpateFilter(filter: TodosFilter) {
      patchState(store, {filter});
    }
  })),
  withComputed((state) => ({
    filteredTodos: computed(() => {
      const todos = state.todos();

      switch(state.filter()) {
        case "all":
          return todos
        case "pending":
          return todos.filter(todo => !todo.completed)
        case "completed":
          return todos.filter(todo => todo.completed)
      }
    })
  }))
);
