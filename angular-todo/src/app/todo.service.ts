import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseurl = 'https://jsonplaceholder.typicode.com';
  todoPath = 'todos';

  private todolist: Todo[] = [];
  private todosSubject$ = new BehaviorSubject(this.todolist);
  todos$ = this.todosSubject$.asObservable();

  constructor(private http: HttpClient) {}

  // getTodolist() {
  //   return this.todosSubject$.asObservable();
  // }
  
  getTodos(): Observable<any> {
    return this.http.get([this.baseurl, this.todoPath].join('/')).pipe(
      tap((data: any) => {
        this.todolist = [...data];
        this.todosSubject$.next(this.todolist);
      })
    );
  }

  deleteTodo(id: string): Observable<any> {
    this.todolist = this.todolist.filter((ele: any) => +ele.id !== +id);
    this.todosSubject$.next(this.todolist);
    return this.http.delete([this.baseurl, this.todoPath, id].join('/'));
  }

  addTodo(newtodo: Todo): Observable<Todo> {
    // post<Todo>???
    return this.http
      .post<Todo>([this.baseurl, this.todoPath].join('/'), newtodo)
      .pipe(
        tap((data: any) => {
          console.log(data);
          this.todolist = [data, ...this.todolist];
          this.todosSubject$.next(this.todolist);
        })
      );
  }
}
