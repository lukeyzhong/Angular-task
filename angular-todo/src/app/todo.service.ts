import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url: string = "https://jsonplaceholder.typicode.com/";
  path: string = "todos";

  constructor() { }

  gettodo = () => {

  }
}
