import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseurl = 'http://localhost:4200/api';
  todoPath = 'todo';
  resturl = 'http://localhost:4200/node';
  csrfUrl = 'http://localhost:4200/session/token';

  private todolist: Todo[] = [];
  private todosSubject$ = new BehaviorSubject(this.todolist);
  todos$ = this.todosSubject$.asObservable();


  constructor(private http: HttpClient) {}

  getCsrfToken() {
    return this.http.get(this.csrfUrl, { responseType: 'text' });
  }

  // getTodolist() {
  //   return this.todosSubject$.asObservable();
  // }

  getTodos(): Observable<any> {
    return this.http.get([this.baseurl, this.todoPath].join('/')).pipe(
      tap((data: any) => {
        this.todolist = [...data];
        console.log(this.todolist);
        this.todosSubject$.next(this.todolist);
      })
    );
  }

  getTodo(): Observable<any> {
    const url = [this.resturl, '1', '?_format=json'].join('/');
    
    const headers = new HttpHeaders({
      'Authorization': 'Basic YWRtaW46THVrZTEyMzQ1Njc4'
    });
  
    return this.http.get(url, { headers }).pipe(
      tap((data: any) => {
        console.log(data);
      })
    );
  }

  // deleteTodo(id: string): Observable<any> {
  //   this.todolist = this.todolist.filter((ele: any) => +ele.uuid !== +id);
  //   this.todosSubject$.next(this.todolist);
  //   return this.http.delete([this.resturl, id].join('/'));
  // }
  deleteTodo(id: string): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap((csrfToken: string) => {
        const headers = new HttpHeaders({
          'X-CSRF-Token': csrfToken,
           'Authorization': 'Basic YWRtaW46THVrZTEyMzQ1Njc4'
        });

        this.todolist = this.todolist.filter((ele: any) => +ele.nid !== +id);
        this.todosSubject$.next(this.todolist);

        return this.http.delete(`${this.resturl}/${id}`, { headers });
      })
    );
  }

  addTodo(todo: any): Observable<any> {
    const url = `${this.resturl}?_format=json`;
    return this.getCsrfToken().pipe(
      switchMap((csrfToken: string) => {
        const headers = new HttpHeaders({
          'X-CSRF-Token': csrfToken,
          'Authorization': 'Basic YWRtaW46THVrZTEyMzQ1Njc4'
        });
  
        return this.http.post(url, todo, { headers })
        .pipe(
          tap((data: any) => {
            console.log(data);
            this.todolist = [data.title, ...this.todolist];
            this.getTodos().subscribe(todos => {
              this.todolist = todos;
              this.todosSubject$.next(this.todolist);
            })
          
          })
        );;
      })
    );
  }
}
