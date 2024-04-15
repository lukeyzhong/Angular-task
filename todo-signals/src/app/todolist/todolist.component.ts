import { Component, inject } from '@angular/core';
import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms'
import { AsyncPipe, NgFor } from '@angular/common';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, NgFor, AsyncPipe],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  // todos: Todo[] = []
  inputTodo: string = '';
  todos$!: Observable<any>;
  todoService = inject(TodoService);

  ngOnInit(): void {
    this.todoService.getTodos().subscribe();
    this.todos$ = this.todoService.todos$;
  }

  deletetodo(id: any) {
    // this.todos = this.todos.filter((ele: any) => +ele.id !== +id);
    this.todoService.deleteTodo(id).subscribe();
  }

  addtodo(input: string) {
    const newtodo: any = {
      userId: 101,
      title: input,
    };
    this.todoService.addTodo(newtodo).subscribe();
    this.inputTodo = '';
  }

}
