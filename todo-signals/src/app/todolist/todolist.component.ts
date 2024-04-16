import { Component, Signal, inject, signal } from '@angular/core';
import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms'
import { AsyncPipe, NgFor } from '@angular/common';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';
import { TodoStore } from '../store/todos.store';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, NgFor, AsyncPipe],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todoService = inject(TodoService);
  todoStore = inject(TodoStore);

  inputTodo: string = '';
  // todos$!: Observable<any>;
 
  todos = this.todoService.todolistS;


  ngOnInit(): void {
    // this.todoService.getTodos().subscribe();
    // this.todos = this.todoService.todolistS
    this.todoStore.loadAll();
  }

  // deletetodo(id: any) {
  //   this.todoService.deleteTodo(id).subscribe();
  // }

  // addtodo(input: string) {
  //   const newtodo: any = {
  //     userId: 101,
  //     title: input,
  //   };
  //   this.todoService.addTodo(newtodo).subscribe();
  //   this.inputTodo = '';
  // }

}
