import { Injectable, effect, inject, signal } from '@angular/core';
import { Todo } from './todo.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);

  baseurl = 'https://jsonplaceholder.typicode.com';
  todoPath = 'todos';

  // private todosSubject$ = new BehaviorSubject(this.todolist);
  // todos$ = this.todosSubject$.asObservable();

  private todolist: Todo[] = [];
  // todolistS = signal(this.todolist);

  // takeEffect = effect(() =>
  //   this.http
  //     .get<any[]>([this.baseurl, this.todoPath].join('/'))
  //     .pipe(tap((data: any[]) => {
  //       this.todolist = [...data];
  //     }))
  //     .subscribe(data => console.log('servicetodo'+ JSON.stringify(this.todolist)))
  // );

  getTodos(): Observable<any> {
    return this.http.get([this.baseurl, this.todoPath].join('/'))
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete([this.baseurl, this.todoPath, id].join('/'));
  }

  addTodo(newtodo: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      [this.baseurl, this.todoPath].join('/'),
      newtodo
    );
  }

  updateTodo(id: any, completed: boolean) {
    
  }
}
